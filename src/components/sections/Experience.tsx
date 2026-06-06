import { FC } from 'react';

const Experience: FC = () => {
    const experienceData = [
        {
            title: "Senior Software Engineer",
            company: "Deloitte",
            duration: "April 2024 - Present",
            location: "Bengaluru, India",
            description: [
                "Building cutting-edge web applications for one of the world's leading automobile brands.",
                "Creating seamless and interactive user interfaces using React.js and TypeScript.",
                "Optimizing development workflows with Vite and ensuring code quality with Jest and SonarQube.",
                "Implementing serverless solutions using AWS Lambda and CloudFront to enhance performance."
            ]
        },
        {
            title: "Associate Developer",
            company: "Cognizant Technology Solutions",
            duration: "December 2020 - March 2024",
            location: "Bengaluru, India",
            description: [
                "Developed scalable web applications using React, Redux, and modern web technologies.",
                "Collaborated with global teams to deliver banking and financial sector projects.",
                "Enhanced user experiences with responsive designs and cross-browser compatibility.",
                "Led quality assurance initiatives using tools like SonarQube and Elastic Kibana."
            ]
        }
    ];

    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-cinzel text-primary">My Experience</h2>
            <div className="flex flex-col items-center gap-8">
                {experienceData.map((project, key) => {
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

export default Experience;
