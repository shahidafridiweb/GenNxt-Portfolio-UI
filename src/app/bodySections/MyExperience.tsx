// components/Projects.tsx
import { FC } from 'react';
import portfolioData from '@/data/portfolio.json';

const MyExperience: FC = () => {
    const { experience } = portfolioData;

    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-cinzel text-primary">My Experience</h2>
            <div className="flex flex-col items-center gap-8">
                {experience.map((project, key) => {
                    return (
                        <div className="glass p-8 rounded-xl shadow-lg w-full max-w-4xl hover:border-primary/50 transition-colors duration-300" key={key}>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                    <h4 className="text-xl text-primary mt-1">{project.company}</h4>
                                </div>
                                <div className="text-right mt-2 md:mt-0">
                                    <p className="text-sm text-gray-400">{project.duration}</p>
                                    <p className="text-sm text-gray-400">{project.location}</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                {project.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default MyExperience;
