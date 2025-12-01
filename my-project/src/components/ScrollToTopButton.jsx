// src/components/ScrollToTopButton.jsx
import { IconButton } from '@chakra-ui/react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion'; //
import { useEffect, useState } from 'react';

const MotionDiv = motion.create("div");

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
       <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1, rotate: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999,
      }}
    >
  <IconButton
        icon={<ArrowUp size={20} />} // ✅ Lucide icon here
        aria-label="Scroll to top"
        onClick={scrollToTop}
        colorScheme="teal"
        borderRadius="full"
        shadow="xl"
        bg="teal.400"
        _hover={{ bg: 'teal.500' }}
      />
      </MotionDiv>
  );
};

export default ScrollToTopButton;
