import React from 'react';
import { motion } from 'framer-motion';
import splash1 from '/splash_layer1.png';
import splash2 from '/splash_layer2.png';
import splash3 from '/splash_layer3.png';

const images = [splash1, splash2, splash3];

const Splash: React.FC = () => {
  return (
    <section id="home">
      <div
        style={{
          position: 'relative',
          width: '100%',       // ← use 100% instead of 100vw
          height: '100vh',
          overflow: 'hidden',  // ← prevent x-scroll
        }}
      >
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Splash ${i + 1}`}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.5,
              duration: 0.8,
              ease: 'easeOut',
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              zIndex: i + 1,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Splash;
