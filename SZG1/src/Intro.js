import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './App.css';

function Intro() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.4 }
    })
  };

  return (
    <div ref={ref} className="IntroMain">
      <div className="middle-text">
        <motion.h3
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          custom={0}
        >
          Why Choose us?
        </motion.h3>
      </div>
      <div className='circles-container'>
        {["2 year dubai multi entry visit", "No Local UAE Sponsor Fees", "No Paid-up Shared Capital", "Company Stamp & Shared P. O. Box number"].map((text, index) => (
          <motion.div
            key={index}
            className='circle'
            custom={index + 1}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
          >
            <h2>{text}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Intro;
