'use client'
import { FC } from 'react';

const About: FC = () => {
    const aboutData = {
        title: "Hi, I'm Shahid Afridi 👋",
        description: "I'm a passionate Web Developer based in Bengaluru, India. I specialize in crafting dynamic, user-friendly web applications with clean and responsive designs. My expertise lies in modern web technologies like React.js, TypeScript, and AWS services, ensuring robust and scalable solutions. I thrive in collaborative environments, consistently delivering user-focused and high-performance applications. Outside of work, I enjoy exploring new tech trends and optimizing workflows to bring innovative ideas to life."
    }

    return (
        <section id="about" className="py-20 md:py-32">
            <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold font-cinzel text-primary">About Me</h2>
                <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed">
                    <p className="font-semibold text-2xl text-white">
                        {aboutData.title}
                    </p>
                    <p>
                        {aboutData.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
