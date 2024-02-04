import "./Skills.scss";
import { motion } from "framer-motion";

let skills = {
  hide: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", staggerChildren: 0.2 },
  },
};
const Skills = () => {
  return (
    <>
      <motion.div className="skill_container" id="skills">
        <motion.div
          className="title"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { type: "spring", duration: 1 },
          }}
        >
          <h2>Skills</h2>
          <small>My technical level</small>
        </motion.div>

        <motion.div className="skills_container">
          <motion.div className="frontEnd">
            <h4>FrontEnd Developer</h4>
            <motion.div
              className="skills"
              variants={skills}
              initial="hide"
              whileInView="show"
            >
              <motion.div className="one" variants={skills}>
                <div className="batch">
                  <i className="uil uil-html5"></i>
                </div>
                <div className="lang">
                  <p>HTML</p>
                  <small>Advance</small>
                </div>
              </motion.div>
              <motion.div className="one" variants={skills}>
                <div className="batch">
                  <i className="uil uil-css3-simple"></i>
                </div>
                <div className="lang">
                  <p>CSS</p>
                  <small>Advance</small>
                </div>
              </motion.div>
              <motion.div className="one" variants={skills}>
                <div className="batch">
                  <i className="uil uil-fire"></i>
                </div>
                <div className="lang">
                  <p>Bootstrap- 5</p>
                  <small>Intermediate</small>
                </div>
              </motion.div>
              <motion.div className="one" variants={skills}>
                <div className="batch">
                  <i className="uil uil-react"></i>
                </div>
                <div className="lang">
                  <p>React JS</p>
                  <small>Intermediate</small>
                </div>
              </motion.div>
              <motion.div className="one" variants={skills}>
                <div className="batch">
                  <i className="uil uil-react"></i>
                </div>
                <div className="lang">
                  <p>React Hooks</p>
                  <small>Intermediate</small>
                </div>
              </motion.div>
              <motion.div className="one" variants={skills}>
                <div className="batch">
                  <i className="uil uil-github-alt"></i>
                </div>
                <div className="lang">
                  <p>Git & Github</p>
                  <small>Intermediate</small>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="backend">
            <h4>Additional Skills</h4>
            <motion.div
              className="skills"
              variants={skills}
              initial="hide"
              whileInView="show"
            >
              <motion.div className="one" variants={skills}>
                <div className="batch">
                  <i className="uil uil-server-network-alt"></i>
                </div>
                <div className="lang">
                  <p>Ui/ux</p>
                  <small>Basics</small>
                </div>
              </motion.div>
              <motion.div className="one" variants={skills}>
                <div className="batch">
                  <i className="uil uil-server-connection"></i>
                </div>
                <div className="lang">
                  <p>React-Bootstrap</p>
                  <small>Medium</small>
                </div>
              </motion.div>
              <motion.div className="one" variants={skills}>
                <div className="batch">
                  <i className="uil uil-database"></i>
                </div>
                <div className="lang">
                  <p>Chakra-ui</p>
                  <small>Intermediate</small>
                </div>
              </motion.div>
              <motion.div className="one" variants={skills}>
                <div className="batch">
                  <i className="uil uil-database-alt"></i>
                </div>
                <div className="lang">
                  <p>React-bootstrap</p>
                  <small>Basics</small>
                </div>
              </motion.div>
              <motion.div className="one" variants={skills}>
                <div className="batch">
                  <i className="uil uil-cloud-database-tree"></i>
                </div>
                <div className="lang">
                  <p>API connection</p>
                  <small>Basics</small>
                </div>
              </motion.div>
              <motion.div className="one" variants={skills}>
                <div className="batch">
                  <i className="uil uil-package"></i>
                </div>
                <div className="lang">
                  <p>NPM</p>
                  <small>Intermediate</small>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Skills;
