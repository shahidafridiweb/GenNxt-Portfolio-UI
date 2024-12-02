// components/Projects.tsx
import { FC } from 'react';

const Projects: FC = () => {
    return (
        <section id="projects" className="py-32">
            <h2 className="text-3xl font-semibold text-center mb-12">My Experience</h2>
            <div className="flex justify-center gap-8 flex-wrap">
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-72">
                    <h3 className="text-xl font-semibold mb-4">Project One</h3>
                    <p className="text-sm mb-4">Description of the project. It’s a web app for solving problem X.</p>
                    <a href="#" className="text-blue-400">View Project</a>
                </div>
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-72">
                    <h3 className="text-xl font-semibold mb-4">Project Two</h3>
                    <p className="text-sm mb-4">Description of the project. A mobile app for solving problem Y.</p>
                    <a href="#" className="text-blue-400">View Project</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
