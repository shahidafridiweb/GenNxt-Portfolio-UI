'use client';
import React, { useState, useEffect } from 'react';

interface Droplet {
    id: number;
    x: number;
    y: number;
    scale: number;
    opacity: number;
}

const WaterFlowEffect = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [droplets, setDroplets] = useState<Droplet[]>([]);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });

            // Create a new droplet at the mouse position with randomized properties
            setDroplets((prevDroplets) => [
                ...prevDroplets,
                {
                    id: Date.now(), // Unique ID for the droplet
                    x: event.clientX,
                    y: event.clientY,
                    scale: Math.random() * 0.5 + 0.5, // Random scale for each droplet
                    opacity: 1,
                },
            ]);
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Clean up droplets after some time to avoid memory leaks
        const interval = setInterval(() => {
            setDroplets((prevDroplets) =>
                prevDroplets.filter((droplet) => droplet.opacity > 0.05)
            );
        }, 100);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, []);

    // Update droplet state to simulate "flowing" and fading
    useEffect(() => {
        if (droplets.length > 0) {
            setDroplets((prevDroplets) =>
                prevDroplets.map((droplet) => ({
                    ...droplet,
                    opacity: droplet.opacity - 0.02, // Gradually fade out droplets
                    scale: droplet.scale * 0.98, // Gradually shrink droplets
                }))
            );
        }
    }, [droplets]);

    return (
        <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        >
            {droplets.map((droplet) => (
                <div
                    key={droplet.id}
                    className="absolute rounded-full bg-cyan-300 animate-waterflow"
                    style={{
                        top: `${droplet.y - 25}px`,
                        left: `${droplet.x - 25}px`,
                        width: `${droplet.scale * 50}px`, // Dynamic size based on scale
                        height: `${droplet.scale * 50}px`,
                        opacity: droplet.opacity,
                        boxShadow: `0px 0px 30px rgba(0, 255, 255, 0.5)`,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}
        </div>
    );
};

export default WaterFlowEffect;
