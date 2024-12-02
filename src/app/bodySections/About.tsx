'use client'
// components/About.tsx
import { FC } from 'react';

const About: FC = () => {
    return (
        <section id="about" className="py-32 bg-gray-800 text-white text-center">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <p className="max-w-xl mx-auto text-lg">
                I’m a software engineer passionate about building meaningful, user-centric digital experiences.
            </p>
        </section>
    );
};

export default About;
