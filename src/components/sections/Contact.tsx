import { FC } from 'react';
import { Button } from "@/components/ui/button"

const Contact: FC = () => {
    return (
        <section id="contact" className="py-20 text-center">
            <div className="glass max-w-2xl mx-auto p-10 rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-cinzel text-primary">Contact Me</h2>
                <p className="text-lg text-gray-300 mb-8">
                    Feel free to reach out if you&apos;d like to collaborate or just say hi!
                </p>
                <a href="mailto:work.shahid.afridi@gmail.com">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        work.shahid.afridi@gmail.com
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default Contact;
