"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  hoverImage: string;
  desc: string;
}

export default function BenefitCard({
  icon,
  title,
  hoverImage,
  desc
}: BenefitCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-64 rounded-2xl overflow-hidden cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={hoverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full w-full p-6 flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center text-white"
        >
          {icon}
        </motion.div>

        <motion.h3
          className="text-xl font-semibold text-white mb-2"
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.div
          className="h-0 overflow-hidden"
          animate={{ height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white/90 text-sm">
            {desc}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
