import { useScroll, useTransform } from "framer-motion";

export function useScrollScale({
  scaleRange,
  scrollRange,
}: {
  scaleRange?: number[];
  scrollRange?: number[];
}) {
  const { scrollYProgress } = useScroll();
  return useTransform(
    scrollYProgress,
    scrollRange || [0, 1],
    scaleRange || [1, 1.5],
  );
}
