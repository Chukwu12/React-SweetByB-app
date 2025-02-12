import { transition } from '@chakra-ui/react';
import {motion} from 'framer-motion';

export const FadeUp = (delay) => {
    return {
        hidden: {
           opacity: 0,
           y: 100, 
        },
        visible: {
            opacity: 1,
            y:0,
            transition: {
                duration: 1,
                delay: delay,
            },
        },
    };
};

export const FadeLeft = (delay) => {
    return {
        hidden: {
           opacity: 0,
           x: 100, 
        },
        visible: {
            opacity: 1,
            x:0,
            transition: {
                duration: 1,
                delay: delay,
            },
        },
    };
};

export const FadeRight = (delay) => {
    return {
        hidden: {
           opacity: 0,
           x: -100, 
        },
        visible: {
            opacity: 1,
            x:0,
            transition: {
                duration: 1,
                delay: delay,
            },
        },
    };
};

export const FadeIn = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 50,  // Start from a bit lower (you can adjust the `y` value)
        },
        visible: {
            opacity: 1,
            y: 0, // Move to the normal position
            transition: {
                duration: 1.2,
                delay: delay,
            },
        },
    };
};
