import React, { useState } from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftarrow from '../../assets/leftarrow.png';
import rarrow from '../../assets/rarrow.png';
import { motion } from 'framer-motion';

const Testimonials = () => {

    const transition = { type: "spring", duration: 3 };
    const [selected, setSelected] = useState(0);
    const tLenth = testimonialsData.length;
    return (
        <div className='Testimonials' id='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>Say about us</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                >{testimonialsData[selected].review}</motion.span>
                <span>
                    <span style={{ color: 'var(--cherryred' }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}

                    src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLenth - 1)
                                : setSelected((prev) => prev - 1);
                        }}

                        src={leftarrow} alt="" />
                    <img
                        onClick={() => {
                            selected === tLenth - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                        }}

                        src={rarrow} alt="" />
                </div>

            </div>

        </div>
    );
}

export default Testimonials;
