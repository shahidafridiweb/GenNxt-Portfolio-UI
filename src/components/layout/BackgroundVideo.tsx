export default function BackgroundVideo() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src='video/background_video_2.mp4' type="video/mp4" />
            </video>
            <div className="absolute inset-0 video-fade-css pointer-events-none"></div>
        </div>
    );
}
