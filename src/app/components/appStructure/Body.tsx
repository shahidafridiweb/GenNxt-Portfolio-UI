import React from 'react'

const Body = () => {
    return (
        <div className='text-white border-2 min-h-fit flex flex-col justify-center items-center'>
            <div style={{
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                opacity: 1,
                flexShrink: 0,
                transform: "perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)",
            }}>
                <p style={{
                    color: "rgb(107, 188, 255)"
                }}>

                    <span style={{
                        // padding: "250px 700px"
                        // height: "100%"
                        backgroundImage: "linear-gradient(0deg, rgb(177, 223, 250) 0%, rgb(186, 224, 255) 100%)"
                    }}>{"Shahid Afridi"}
                    </span>
                </p>
            </div>
            <div>
                <p>

                    <span>
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
    )
}

export default Body