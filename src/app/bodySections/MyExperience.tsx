// components/Projects.tsx
import { FC } from 'react';

const MyExperience: FC = () => {
    const projectData =
        [
            {
                title: "Senior Software Engineer",
                company: "Deloitte",
                duration: "April 2024 - Present",
                location: "Bengaluru, India",
                description: [
                    "Building cutting-edge web applications for one of the world's leading automobile brands. ",
                    "Creating seamless and interactive user interfaces using React.js and TypeScript. ",
                    "Optimizing development workflows with Vite and ensuring code quality with Jest and SonarQube. ",
                    "Implementing serverless solutions using AWS Lambda and CloudFront to enhance performance  "
                ]
            },
            {
                title: "Associate Developer",
                company: "Cognizant Technology Solutions",
                duration: "December 2020 - March 2024",
                location: "Bengaluru, India",
                description: [
                    "Developed scalable web applications using React, Redux, and modern web technologies. ",
                    "Collaborated with global teams to deliver banking and financial sector projects. ",
                    "Enhanced user experiences with responsive designs and cross-browser compatibility. ",
                    "Led quality assurance initiatives using tools like SonarQube and Elastic Kibana."
                ]
            }
        ];

    return (
        <section id="projects" className="py-32">
            <h2 className="text-3xl font-semibold text-center mb-12">My Experience</h2>
            <div className="flex justify-center gap-8 flex-wrap flex-col content-center">
                {projectData.map((project, key) => {
                    return (
                        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-2/3" key={key}>
                            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                            <h3 className="text-xl font-semibold mb-4">{project.company}</h3>
                            <h3 className="text-xl font-semibold mb-4">{project.duration}</h3>
                            <h3 className="text-xl font-semibold mb-4">{project.location}</h3>
                            <p className="text-lg mb-4">{project.description}</p>
                            {/* <a href="#" className="text-blue-400">View Project</a> */}
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default MyExperience;
