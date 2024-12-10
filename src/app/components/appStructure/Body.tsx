import React from 'react'
import Carousel from '../Carousel'
import WaterFlowEffect from '@/app/utils/WaterFlowEffect'
import Layout from '@/app/bodySections/Layout'
import Hero from '@/app/bodySections/Hero'
import Details from '@/app/bodySections/About'
import Projects from '@/app/bodySections/MyExperience'
import Contact from '@/app/bodySections/Contact'

const Body = () => {
    return (
        <div className='flex-row direction-normal absolute h-full w-full'>
            <div className='text-white min-h-fit flex flex-col justify-center items-center' style={{
                padding: "0px 140px 0px 140px",
                height: "100vh",
            }}>
                <div style={{
                    fontSize: '5rem',
                    outline: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                }}>
                    <p style={{
                        color: "rgb(107, 188, 255)",
                    }}>

                        <span style={{
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
            <div>
                <div>
                    <Layout>
                        <Details />
                        <Projects />
                        <Contact />
                    </Layout>
                </div>
            </div>
        </div >
    )
}

export default Body