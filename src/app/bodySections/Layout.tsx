// components/Layout.tsx
import { FC } from 'react';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../utils/footerIcons';
import portfolioData from '@/data/portfolio.json';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    const { socialLinks } = portfolioData;
    
    const iconMap: Record<string, React.ReactNode> = {
        'GitHubIcon': <GitHubIcon />,
        'LinkedInIcon': <LinkedInIcon />,
        'InstagramIcon': <InstagramIcon />,
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="container mx-auto px-4 py-8">{children}</main>
            <footer className="glass mt-auto border-t border-white/10">
                <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className='flex gap-6'>
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                {iconMap[link.icon]}
                            </a>
                        ))}
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Shahid Afridi. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
