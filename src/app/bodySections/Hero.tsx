import { FC } from 'react';
import { Button } from './Button';

const Hero: FC = () => {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-800 text-white text-center p-8">
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Shahid Afridi</h1>
            <p className="text-xl mb-8">I'm a software engineer, and I create beautiful, functional web applications.</p>
            <Button label="See My Work" />
        </section>
    );
};

export default Hero;
