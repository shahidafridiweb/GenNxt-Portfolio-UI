// components/Layout.tsx
import { FC } from 'react';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* <header className="fixed top-0 left-0 w-full p-4 bg-opacity-50 backdrop-blur-sm z-10">
                <nav className="container mx-auto flex justify-between items-center">
                    <a href="#hero" className="text-2xl font-semibold">Brittany Chiang</a>
                    <ul className="flex space-x-8">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header> */}
            <main className="">{children}</main>
            <footer className="bg-gray-800 text-center py-6">
                <p>&copy; 2024 Shahid Afridi</p>
            </footer>
        </div>
    );
};

export default Layout;
