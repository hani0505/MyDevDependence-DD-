import { motion } from 'framer-motion';
import { TypewriterText } from './TypewriteText';

export function DivAnimated(){
  return(
    <motion.div
  className="bg-pink-300 dark:bg-purple-400 p-6 rounded-lg shadow-lg"

  
>
 

      <TypewriterText />

  

  
  {/* Elementos animados extras */}
  <motion.div 
    className="flex justify-center mt-4 space-x-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    {[1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="w-3 h-3 bg-pink-600 dark:bg-purple-600 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: i * 0.2
        }}
      />
    ))}
  </motion.div>
</motion.div>
  )
}
