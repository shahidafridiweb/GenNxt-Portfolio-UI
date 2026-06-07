'use client'
import { FC } from 'react';
import portfolioData from '@/data/portfolio.json';

const About: FC = () => {
    const { about } = portfolioData;

    return (
        <section id="about" className="py-20 md:py-32">
            <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold font-cinzel text-primary">About Me</h2>
                <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed">
                    <p className="font-semibold text-2xl text-white">
                        {about.title}
                    </p>
                    <p>
                        {about.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
