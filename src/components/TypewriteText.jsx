// src/components/TypewriterText.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const texts = [
  "Otimize seu tempo.",
  "Otimize sua produção."
];

export function TypewriterText() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const currentText = texts[textIndex];
    
    const timer = setInterval(() => {
      if (index <= currentText.length) {
        setDisplayText(currentText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [textIndex]);

  return (
    <motion.div
      key={textIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center"
    >
      <motion.p className="text-xl font-bold text-gray-800 dark:text-white">
        {displayText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          |
        </motion.span>
      </motion.p>
    </motion.div>
  );
}