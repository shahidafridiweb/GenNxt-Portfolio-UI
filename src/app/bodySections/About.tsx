'use client'
// components/About.tsx
import { FC } from 'react';

const About: FC = () => {
    const aboutData = {
        title: "Hi, I'm Shahid Afridi 👋",
        description: "I’m a passionate Web Developer based in Bengaluru, India. I specialize in crafting dynamic, user-friendly web applications with clean and responsive designs. My expertise lies in modern web technologies like React.js, TypeScript, and AWS services, ensuring robust and scalable solutions. I thrive in collaborative environments, consistently delivering user-focused and high-performance applications. Outside of work, I enjoy exploring new tech trends and optimizing workflows to bring innovative ideas to life."
    }

    return (
        <section id="about" className="py-32 text-white text-center">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <p className="max-w-xl mx-auto text-lg">
                {aboutData.title}
            </p>
            <p className="w-xl mx-auto text-lg px-16">
                {aboutData.description}
            </p>
        </section>
    );
};

export default About;
