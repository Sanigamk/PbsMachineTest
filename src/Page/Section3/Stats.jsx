import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="stats"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="stats-img-container">
        <div className="play-button">
          <div className="play-icon"></div>
        </div>
      </div>
      <div className="stats-content">
        <div className="stats-content-header">
          <h4 className="small-title" style={{ marginBottom: "0.5rem" }}>
            <span>AT A GLANCE</span>
            <div></div>
          </h4>
          <h2 className="prime-title">Building with excellence</h2>
        </div>
        <div className="stats-content-body">
          {[
            { value: 28, label: "Completed Projects" },
            { value: 15, label: "Years of Experience" },
            { value: 5, label: "Regional Offices" },
            { value: 200, label: "Team Members" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="stats-content-body-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h4>
                {isInView ? (
                  <CountUp start={0} end={item.value} duration={2} />
                ) : (
                  item.value
                )}
                +
              </h4>
              <div className="line"></div>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
