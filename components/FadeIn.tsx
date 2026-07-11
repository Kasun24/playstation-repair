'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  onScroll?: boolean;
};

export default function FadeIn({
  children,
  delay = 0,
  className,
  onScroll = false,
}: Props) {
  const props: HTMLMotionProps<'div'> = {
    initial: { opacity: 0, y: 16 },
    transition: { duration: 0.5, delay, ease: 'easeOut' },
    className,
  };

  if (onScroll) {
    props.whileInView = { opacity: 1, y: 0 };
    props.viewport = { once: true, margin: '-80px' };
  } else {
    props.animate = { opacity: 1, y: 0 };
  }

  return <motion.div {...props}>{children}</motion.div>;
}
