import { animate } from "motion"
import "./Hero.css"
import Speech from "./Speech"
import { motion } from "motion/react"
import { Canvas } from "@react-three/fiber"
import Shape from "./Shape"
import { Suspense } from "react"

const awardVariants = {
    initial: {
        x: -100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        }
    }
}

const followVariants = {
    initial: {
        y: -100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="hSection left">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hTitle">
                    Hey There, <br /> <span>I'm Afiya!</span>
                </motion.h1>
                <motion.div
                    variants={awardVariants}
                    initial="initial"
                    animate="animate"
                    className="awards">
                    <motion.h2
                        variants={awardVariants}
                    >Full Stack Developer</motion.h2>
                    <motion.p
                        variants={awardVariants}
                    >
                        HTML, CSS, Javascript, ReactJS, TailwindCSS, NodeJS, ExpressJS, MongoDB,
                        Shopify, Magento 2, Git, Jira, Zoho, Wordpress and can integrate third-party packages.
                    </motion.p>
                    <motion.div
                        variants={awardVariants}
                        className="awardList">
                        <div className="awardList">
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/afiya-zannuba-jaleel/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.img
                                    variants={awardVariants}
                                    src="/linkedin.png"
                                    alt="LinkedIn"
                                />
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/afiyazannuba"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.img
                                    variants={awardVariants}
                                    src="/github.png"
                                    alt="GitHub"
                                />
                            </a>

                            {/* Download Resume */}
                            <a
                                href="/resume.pdf"
                                download
                            >
                                <motion.img
                                    style={{ borderRadius: 0 }}
                                    variants={awardVariants}
                                    src="/download.png"
                                    alt="Download Resume"
                                />
                            </a>
                        </div>

                    </motion.div>
                </motion.div>

                {/* Scroll Down Arrow */}
                <motion.a
                    animate={{ y: [0, 5], opacity: [0, 1, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                    }}
                    href="#services" className="scroll">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                            stroke="white"
                            strokeWidth="1"
                        />
                        <motion.path
                            animate={{ y: [0, 5] }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                ease: "easeInOut",
                            }}
                            className="arrowLine"
                            d="M12 5V8"
                            stroke="white"
                            strokeWidth="1"
                            strokeLinecap="round"
                        />
                    </svg>
                </motion.a>
            </div>

            <div className="hSection right">
                <motion.div
                    variants={followVariants}
                    initial="initial"
                    animate="animate"
                    className="follow">
                    <motion.a
                        variants={followVariants}
                        href="/"><img src="/download.png" alt="Resume" /></motion.a>
                    <motion.div
                        variants={followVariants}
                        className="followTextContainer">
                        <div className="followText">Download Resume</div>
                    </motion.div>
                </motion.div>

                {/* Bubble */}
                <Speech />

                {/* Certificate */}
                <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className="certificate">
                    <img src="/web_developer.png" alt="Work Experience Certificate" />
                    <span>
                        3 Years of <br /> Work <br /> Experience
                    </span>
                </motion.div>

                {/* Contact Button */}
                <motion.a href="#contact" className="contactLink"
                    animate={{
                        x: [200, 0],
                        opacity: [0, 1],
                    }}
                    transition={{
                        duration: 2,
                    }}
                >
                    <motion.div className="contactButton"
                        animate={{ rotate: [0, 360] }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <svg viewBox="0 0 200 200" width="150" height="150">
                            <circle cx="100" cy="100" r="90" fill="pink" />
                            <path
                                id="innerCirclePath"
                                fill="none"
                                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                            />
                            <text className="circleText">
                                <textPath href="#innerCirclePath">Hire Me</textPath>
                            </text>
                            <text className="circleText">
                                <textPath href="#innerCirclePath" startOffset="40%">Contact Me</textPath>
                            </text>
                        </svg>
                        <div className="arrow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="50"
                                height="50"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                            >
                                <line x1="6" y1="18" x2="18" y2="6" />
                                <polyline points="9 6 18 6 18 15" />
                            </svg>
                        </div>
                    </motion.div>
                </motion.a>
            </div>
            <div className="bg">
                <Canvas>
                    <Suspense fallback="loading..." >
                        <Shape />
                    </Suspense>
                </Canvas>
                <div className="hImg">
                    <img src="./my_photo_full_ai.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
