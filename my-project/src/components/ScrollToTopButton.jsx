// src/components/ScrollToTopButton.jsx
import { IconButton } from '@chakra-ui/react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MotionDiv = motion.create("div");

const ScrollToTopButton = ({
  showAfter = 600,
  desktopBottom = '30px',
  mobileBottom = '96px',
}) => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let rafId;

    const toggleVisibility = () => {
      setVisible(window.scrollY > showAfter);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        toggleVisibility();
        rafId = null;
      });
    };

    toggleVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [showAfter]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    const applyMatch = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', applyMatch);
      return () => mediaQuery.removeEventListener('change', applyMatch);
    }

    mediaQuery.addListener(applyMatch);
    return () => mediaQuery.removeListener(applyMatch);
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
        bottom: isMobile ? mobileBottom : desktopBottom,
        right: isMobile ? '20px' : '30px',
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
