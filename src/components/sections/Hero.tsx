export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-10">
            <div className="space-y-6 animate-fade-in-up">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight font-cinzel drop-shadow-lg">
                    Shahid Afridi
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-primary font-light tracking-wide">
                    Delve into tomorrow&apos;s Web Development
                </p>
                <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                    Driving positive change by creating impactful design solutions.
                </p>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
