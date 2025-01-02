"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ 
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1
          }
        }}
        exit={{ 
          y: "-100%",
          opacity: 0,
          transition: {
            duration: 1,
            ease: [0.87, 0, 0.13, 1]
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}