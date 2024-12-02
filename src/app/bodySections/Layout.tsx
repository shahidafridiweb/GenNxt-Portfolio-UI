// components/Layout.tsx
import { FC } from 'react';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../utils/footerIcons';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <main className="">{children}</main>
            <footer className="flex bg-gray-800 text-center py-6 justify-between px-9">
                <div className='flex'>
                    <p className='px-2'>
                        <a href="https://github.com/shahidafridiweb" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon />
                        </a>
                    </p>
                    <p className='px-2'>
                        <a href="https://www.linkedin.com/in/shahid-afridi-127162186/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                        </a>
                    </p>
                    <p className='px-2'>
                        <a href="https://www.instagram.com/_shahid._.afridi_/profilecard/?igsh=MXczNXQ0MWxlc3JzZA==" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </a>
                    </p>
                </div>
                <div>
                    <p>&copy; 2024 Shahid Afridi</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
