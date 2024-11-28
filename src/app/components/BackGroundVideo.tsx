import Body from "./appStructure/Body";
import Header from "./appStructure/Header";

// components/BackgroundVideo.js
export default function BackgroundVideo() {
    return (
        <div className="top-0 left-0 w-full h-full">
            <div>
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src='video/backGroundVideo.mp4' type="video/mp4" />
                </video>
            </div>
            <div className="relative z-10 items-center justify-center h-full bg-black bg-opacity-50">
                <Header />
                <Body />
            </div>
        </div>
    );
}
