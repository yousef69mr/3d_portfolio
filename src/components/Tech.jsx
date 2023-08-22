import { Fragment } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { styles } from "../styles";

const Tech = () => {
  return (
    <Fragment>
      
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionSubText}>Technologies & Tools</h3>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center mt-20 gap-10">
        {technologies?.map((technology) => (
          <div
            className="w-32 h-32  justify-center items-center flex flex-col"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <h3>{technology.name}</h3>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SectionWrapper(Tech, "skills");
