import React, { useState, useRef, useEffect } from "react";
import {
  Bell,
  Home,
  Settings,
  MessageCircle,
  Users,
  BarChart3,
} from "lucide-react";
import { ExpandableTabs } from "./ui/expandable-tabs";
import { motion, useAnimation } from "framer-motion";
import { useMouseContext } from "../context/MouseContext";

const BottomNav: React.FC = () => {
  const { mousePosition } = useMouseContext();
  const navRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const controls = useAnimation();

  const tabs = [
    { title: "Home", icon: Home, href: "#home" },
    { title: "services", icon: MessageCircle, href: "#services" },
    { type: "separator" },
    { title: "Clients", icon: Users, href: "#clients" },
    { title: "Pricing", icon: BarChart3, href: "#pricing" },
  ];

  useEffect(() => {
    if (!navRef.current) return;

    const rect = navRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from mouse to nav center
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - centerX, 2) +
      Math.pow(mousePosition.y - centerY, 2)
    );

    // Proximity threshold (adjust as needed)
    const proximityThreshold = 200;

    if (distance < proximityThreshold) {
      setIsHovering(true);

      // Calculate which tab is closest to mouse
      const tabElements = navRef.current.querySelectorAll("button");
      let closestIndex = null;
      let closestDistance = Infinity;

      tabElements.forEach((tab, index) => {
        if (!tab.classList.contains("separator")) {
          const tabRect = tab.getBoundingClientRect();
          const tabCenterX = tabRect.left + tabRect.width / 2;
          const tabDistance = Math.abs(mousePosition.x - tabCenterX);

          if (tabDistance < closestDistance) {
            closestDistance = tabDistance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);

      // Animate the nav
      controls.start({
        scale: 1.05,
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      });
    } else {
      setIsHovering(false);
      setActiveIndex(null);

      // Reset animation
      controls.start({
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      });
    }
  }, [mousePosition, controls]);

  const handleTabClick = (index: number) => {
    const tab = tabs[index];
    if (tab && "href" in tab) {
      window.location.href = tab.href || '';
    }
  };

  return (
    <motion.div
      ref={navRef}
      className="fixed bottom-6 sm:left-[45%] left-0 transform sm:-translate-x-1/2 z-50 w-auto max-w-full px-4 mx-auto"

      animate={controls}
      initial={{ scale: 1, y: 0 }}
    >
      <ExpandableTabs
        tabs={tabs.map((tab, index) => ({
          ...tab,
          icon: (props) => {
            const Icon = "icon" in tab ? tab.icon : Bell;
            return (
              <motion.div
                animate={{
                  scale: activeIndex === index ? 1.2 : 1,
                  rotate: activeIndex === index
                    ? [0, -10, 10, -5, 5, 0]
                    : 0,
                }}
                transition={{
                  scale: { duration: 0.2 },
                  rotate: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <Icon {...props} />
              </motion.div>
            );
          },
        }))}
        activeColor="text-green-500"
        className="border-gray-200 shadow-lg bg-white/90 backdrop-blur-sm max-w-full overflow-x-auto"
        onChange={handleTabClick}
      />

      {/* Glow effect when hovering */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-green-400 -z-10"
        animate={{
          opacity: isHovering ? 0.15 : 0,
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default BottomNav;