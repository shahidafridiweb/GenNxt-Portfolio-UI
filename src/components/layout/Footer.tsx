import { GitHubIcon, InstagramIcon, LinkedInIcon } from './icons';

export default function Footer() {
    return (
        <footer className="glass mt-auto border-t border-white/10">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className='flex gap-6'>
                    <a href="https://github.com/shahidafridiweb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/shahid-afridi-127162186/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <LinkedInIcon />
                    </a>
                    <a href="https://www.instagram.com/_shahid._.afridi_/profilecard/?igsh=MXczNXQ0MWxlc3JzZA==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <InstagramIcon />
                    </a>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Shahid Afridi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
