import { FC } from 'react';

const Contact: FC = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900 text-white text-center">
            <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
            <p className="max-w-xl mx-auto mb-6">
                Feel free to reach out if you'd like to collaborate or just say hi!
            </p>
            <a href="mailto:work.shahid.afridi@gmail.com" className="text-blue-400 text-lg">work.shahid.afridi@gmail.com</a>
        </section>
    );
};

export default Contact;
