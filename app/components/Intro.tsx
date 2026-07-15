"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import MagentsLogo from "./MagentsLogo";
import MagentsSimbol from "./MagentsSimbol";

// Segura 2.2s e faz fade/zoom-out de 0.8s — o Hero começa a entrar em 2.2s,
// revelado exatamente durante a saída da intro.
export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg, #0a0f1c 0%, #0d1529 50%, #0b1024 100%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{
              position: "absolute",
              top: "25%",
              left: "25%",
              width: 300,
              height: 300,
              background:
                "radial-gradient(circle, rgba(27,101,99,0.25) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{
              position: "absolute",
              bottom: "25%",
              right: "25%",
              width: 300,
              height: 300,
              background:
                "radial-gradient(circle, rgba(70,162,198,0.15) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <MagentsSimbol style={{ width: 260, height: 260 }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ marginTop: 40 }}
          >
            <MagentsLogo height={44} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
