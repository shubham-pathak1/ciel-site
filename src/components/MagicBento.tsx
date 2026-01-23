"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

export interface BentoCardProps {
    color?: string;
    title?: string;
    description?: string;
    label?: string;
    textAutoHide?: boolean;
    disableAnimations?: boolean;
    className?: string; // Allow custom layout
    icon?: any; // Lucide icon component
}

export interface BentoProps {
    cards: BentoCardProps[];
    textAutoHide?: boolean;
    enableSpotlight?: boolean;
    enableBorderGlow?: boolean;
    disableAnimations?: boolean;
    spotlightRadius?: number;
    enableTilt?: boolean;
    glowColor?: string;
    clickEffect?: boolean;
    enableMagnetism?: boolean;
    className?: string;
}

const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '255, 255, 255'; // White Glow
const MOBILE_BREAKPOINT = 768;

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
    const rect = card.getBoundingClientRect();
    const relativeX = ((mouseX - rect.left) / rect.width) * 100;
    const relativeY = ((mouseY - rect.top) / rect.height) * 100;

    card.style.setProperty('--glow-x', `${relativeX}%`);
    card.style.setProperty('--glow-y', `${relativeY}%`);
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', `${radius}px`);
};

const calculateSpotlightValues = (radius: number) => ({
    proximity: radius * 0.5,
    fadeDistance: radius * 0.75
});

/**
 * Custom Card Component (Cleaned of Particles)
 */
const InteractiveCard: React.FC<{
    children: React.ReactNode;
    className?: string;
    disableAnimations?: boolean;
    style?: React.CSSProperties;
    enableTilt?: boolean;
    clickEffect?: boolean;
    enableMagnetism?: boolean;
    glowColor?: string;
}> = ({
    children,
    className = '',
    disableAnimations = false,
    style,
    enableTilt = true,
    clickEffect = false,
    enableMagnetism = false,
    glowColor = DEFAULT_GLOW_COLOR,
}) => {
        const cardRef = useRef<HTMLDivElement>(null);
        const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

        useEffect(() => {
            if (disableAnimations || !cardRef.current) return;

            const element = cardRef.current;

            const handleMouseEnter = () => {
                if (enableTilt) {
                    gsap.to(element, {
                        rotateX: 5,
                        rotateY: 5,
                        duration: 0.3,
                        ease: 'power2.out',
                        transformPerspective: 1000
                    });
                }
            };

            const handleMouseLeave = () => {
                if (enableTilt) {
                    gsap.to(element, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }

                if (enableMagnetism) {
                    gsap.to(element, {
                        x: 0,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            const handleMouseMove = (e: MouseEvent) => {
                if (!enableTilt && !enableMagnetism) return;

                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                if (enableTilt) {
                    const rotateX = ((y - centerY) / centerY) * -10;
                    const rotateY = ((x - centerX) / centerX) * 10;

                    gsap.to(element, {
                        rotateX,
                        rotateY,
                        duration: 0.1,
                        ease: 'power2.out',
                        transformPerspective: 1000
                    });
                }

                if (enableMagnetism) {
                    const magnetX = (x - centerX) * 0.05;
                    const magnetY = (y - centerY) * 0.05;

                    magnetismAnimationRef.current = gsap.to(element, {
                        x: magnetX,
                        y: magnetY,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            const handleClick = (e: MouseEvent) => {
                if (!clickEffect) return;

                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const maxDistance = Math.max(
                    Math.hypot(x, y),
                    Math.hypot(x - rect.width, y),
                    Math.hypot(x, y - rect.height),
                    Math.hypot(x - rect.width, y - rect.height)
                );

                const ripple = document.createElement('div');
                ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

                element.appendChild(ripple);

                gsap.fromTo(
                    ripple,
                    {
                        scale: 0,
                        opacity: 1
                    },
                    {
                        scale: 1,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        onComplete: () => ripple.remove()
                    }
                );
            };

            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
            element.addEventListener('mousemove', handleMouseMove);
            element.addEventListener('click', handleClick);

            return () => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
                element.removeEventListener('mousemove', handleMouseMove);
                element.removeEventListener('click', handleClick);
            };
        }, [disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

        return (
            <div
                ref={cardRef}
                className={`${className} relative overflow-hidden`}
                style={{ ...style, position: 'relative', overflow: 'hidden' }}
            >
                {children}
            </div>
        );
    };

const GlobalSpotlight: React.FC<{
    gridRef: React.RefObject<HTMLDivElement | null>;
    disableAnimations?: boolean;
    enabled?: boolean;
    spotlightRadius?: number;
    glowColor?: string;
}> = ({
    gridRef,
    disableAnimations = false,
    enabled = true,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    glowColor = DEFAULT_GLOW_COLOR
}) => {
        const spotlightRef = useRef<HTMLDivElement | null>(null);

        useEffect(() => {
            if (disableAnimations || !gridRef?.current || !enabled) return;

            const spotlight = document.createElement('div');
            spotlight.className = 'global-spotlight';
            spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
            document.body.appendChild(spotlight);
            spotlightRef.current = spotlight;

            const handleMouseMove = (e: MouseEvent) => {
                if (!spotlightRef.current || !gridRef.current) return;

                const rect = gridRef.current.getBoundingClientRect();
                const mouseInside =
                    e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

                const cards = gridRef.current.querySelectorAll('.bento-card-inner');

                if (!mouseInside) {
                    gsap.to(spotlightRef.current, {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                    cards.forEach(card => {
                        (card as HTMLElement).style.setProperty('--glow-intensity', '0');
                    });
                    return;
                }

                const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
                let minDistance = Infinity;

                cards.forEach(card => {
                    const cardElement = card as HTMLElement;
                    const cardRect = cardElement.getBoundingClientRect();
                    const centerX = cardRect.left + cardRect.width / 2;
                    const centerY = cardRect.top + cardRect.height / 2;
                    const distance =
                        Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                    const effectiveDistance = Math.max(0, distance);

                    minDistance = Math.min(minDistance, effectiveDistance);

                    let glowIntensity = 0;
                    if (effectiveDistance <= proximity) {
                        glowIntensity = 1;
                    } else if (effectiveDistance <= fadeDistance) {
                        glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                    }

                    updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
                });

                gsap.to(spotlightRef.current, {
                    left: e.clientX,
                    top: e.clientY,
                    duration: 0.1,
                    ease: 'power2.out'
                });

                const targetOpacity =
                    minDistance <= proximity
                        ? 0.8
                        : minDistance <= fadeDistance
                            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
                            : 0;

                gsap.to(spotlightRef.current, {
                    opacity: targetOpacity,
                    duration: targetOpacity > 0 ? 0.2 : 0.5,
                    ease: 'power2.out'
                });
            };

            const handleMouseLeave = () => {
                gridRef.current?.querySelectorAll('.bento-card-inner').forEach(card => {
                    (card as HTMLElement).style.setProperty('--glow-intensity', '0');
                });
                if (spotlightRef.current) {
                    gsap.to(spotlightRef.current, {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseleave', handleMouseLeave);
                spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
            };
        }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

        return null;
    };

const MagicBento: React.FC<BentoProps> = ({
    cards,
    textAutoHide = true,
    enableSpotlight = true,
    enableBorderGlow = true,
    disableAnimations = false,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    enableTilt = false,
    glowColor = DEFAULT_GLOW_COLOR,
    clickEffect = true,
    enableMagnetism = true,
    className = ""
}) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const shouldDisableAnimations = disableAnimations || isMobile;

    return (
        <>
            <style>
                {`
          .bento-grid-container {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: rgba(255, 255, 255, 0.1);
            --background-dark: rgba(255, 255, 255, 0.03);
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 1px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            opacity: 1;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}
            </style>

            {enableSpotlight && (
                <GlobalSpotlight
                    gridRef={gridRef}
                    disableAnimations={shouldDisableAnimations}
                    enabled={enableSpotlight}
                    spotlightRadius={spotlightRadius}
                    glowColor={glowColor}
                />
            )}

            <div
                ref={gridRef}
                className={`bento-grid-container grid gap-4 ${className}`}
            >
                {cards.map((card, index) => {
                    const baseClassName = `group bento-card-inner flex flex-col justify-between relative min-h-[160px] p-8 rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:bg-white/[0.05] ${enableBorderGlow ? 'card--border-glow' : ''
                        } ${card.className || ""}`;

                    const cardStyle = {
                        '--glow-x': '50%',
                        '--glow-y': '50%',
                        '--glow-intensity': '0',
                        '--glow-radius': '200px'
                    } as React.CSSProperties;

                    const Icon = card.icon;
                    const isLongCard = card.className?.includes('row-span-2');

                    return (
                        <InteractiveCard
                            key={index}
                            className={baseClassName}
                            style={cardStyle}
                            disableAnimations={shouldDisableAnimations}
                            glowColor={glowColor}
                            enableTilt={enableTilt}
                            clickEffect={clickEffect}
                            enableMagnetism={enableMagnetism}
                        >
                            <div className="relative z-10 flex flex-col h-full pointer-events-none">
                                <div className={`${isLongCard ? 'mb-12' : 'mb-6'}`}>
                                    {card.label && (
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-4 block">
                                            {card.label}
                                        </span>
                                    )}
                                    <div className="flex items-center gap-4">
                                        {Icon && (
                                            <div className="text-[var(--text-secondary)] opacity-80 group-hover:opacity-100 transition-all duration-300">
                                                <Icon className={`${isLongCard ? 'w-8 h-8' : 'w-5 h-5'}`} />
                                            </div>
                                        )}
                                        <h3 className={`${isLongCard ? 'text-2xl' : 'text-lg'} font-bold text-white`}>
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className={isLongCard ? 'flex-1 flex flex-col justify-center' : 'mt-auto'}>
                                    <p className={`${isLongCard ? 'text-base font-medium opacity-80' : 'text-sm opacity-70'} text-[var(--text-secondary)] leading-relaxed`}>
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </InteractiveCard>
                    );
                })}
            </div>
        </>
    );
};

export default MagicBento;
