import React from 'react'
import Carousel from '../Carousel'

const Body = () => {
    return (
        <div>
            <div className='text-white min-h-fit flex flex-col justify-center items-center' style={{
                padding: "150px 140px 150px 140px",
                height: "500px",
                margin: "50px"
            }}>
                <div style={{
                    fontSize: '5rem',
                    outline: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    opacity: 1,
                    flexShrink: 0,
                    transform: "perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)",
                }}>
                    <p style={{
                        color: "rgb(107, 188, 255)",
                    }}>

                        <span style={{
                            // padding: "250px 700px"
                            // height: "100%"
                            // backgroundImage: "linear-gradient(0deg, rgb(177, 223, 250) 0%, rgb(186, 224, 255) 100%)"
                        }}>{"Shahid Afridi"}
                        </span>
                    </p>
                </div>
                <div>
                    <p>
                        <span style={{
                            fontSize: '3rem',
                        }}>
                            {"Delve into tomorrow's Web Development"}
                        </span>
                    </p>
                </div>
                <div>
                    <p>
                        <span>
                            {"Driving positive change by creating impactful design solutions."}
                        </span>
                    </p>
                </div>
            </div >
            <div className='flex flex-row justify-center' style={{
            }}>
                <video
                    style={{
                        width: "1200px",
                        height: "900px",
                    }}
                    // className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="https://framerusercontent.com/assets/frnywyFHcy3y0vcaGD0nDPHMKcI.mp4" type="video/mp4" />
                </video>
            </div>
            <div>
                <Carousel />
            </div>
        </div >
    )
}

export default Body