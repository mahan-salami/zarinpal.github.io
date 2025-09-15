import React from 'react';
import anar from '../assets/logo/anardooni.png';
import seminar from '../assets/logo/eseminar.svg';
import sib from '../assets/logo/sibapp.svg';
import karamad from '../assets/logo/logo05@2x.png';
import pooni from '../assets/logo/poonisha.svg';
import hosti from '../assets/logo/hostiran.png';
import { motion } from 'framer-motion';

const Companylogo = () => {
    const logos = [anar, seminar, sib, pooni, karamad, hosti];



    return (
        <div className="w-full overflow-hidden mt-10">
            {/* تیتر */}

            {/* ردیف لوگوها */}
            <div className="relative mr-40 ml-40 overflow-hidden px-20"> {/* فاصله زیاد از چپ و راست */}
                <motion.div
                    className="flex"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 25,
                            ease: 'linear'
                        }
                    }}
                >
                    {logos.map((logo, index) => (
                        <motion.img
                            key={index}
                            src={logo}
                            alt="partner logo"
                            className="mx-20 h-20 w-36 object-contain grayscale opacity-40 transition-all duration-300"
                           
                        />
                    ))}

                    {/* تکرار برای حرکت روان */}
                    {logos.map((logo, index) => (
                        <motion.img
                            key={`duplicate-${index}`}
                            src={logo}
                            alt="partner logo"
                            className="mx-20 h-20 w-36 object-contain grayscale opacity-40 transition-all duration-300 pr-10 pl-10"
                          
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Companylogo;
