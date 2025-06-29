import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "100%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/30">
      <div className="relative h-full overflow-y-hidden">
        {/* Background Sky */}
        {/* <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        /> */}
        {/* Mountain Layer 3 */}
        {/* Planets */}
        {/* <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        /> */}
        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(assets/test4.JPG)",
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
