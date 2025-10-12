import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./Project.css";

const items = [
    {
        id: 1,
        img: "/p1.jpg",
        title: "Novo Shoes",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
    },
    {
        id: 2,
        img: "/p2.jpg",
        title: "Azha Perfumes UAE",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "https://uae.azhaperfumes.com/",
    },
    {
        id: 3,
        img: "/p3.jpg",
        title: "DCKAP Commerce",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
    },
    {
        id: 4,
        img: "/p4.jpg",
        title: "Real Estate Website",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
    },
    {
        id: 5,
        img: "/p5.jpg",
        title: "Personal Portfolio on GSAP",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
    },
    {
        id: 6,
        img: "/p6.jpg",
        title: "Sixth site",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
    },
    {
        id: 7,
        img: "/p1.jpg",
        title: "E-commerce Platform",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
    },
    {
        id: 8,
        img: "/p2.jpg",
        title: "Social Media Dashboard",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
    },
    {
        id: 9,
        img: "/p3.jpg",
        title: "Restaurant Website",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
    },
    {
        id: 10,
        img: "/p4.jpg",
        title: "Fitness App",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
    },
    {
        id: 11,
        img: "/p5.jpg",
        title: "Travel Booking Site",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
    },
    {
        id: 12,
        img: "/p6.jpg",
        title: "Education Platform",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/",
    },
];

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

const ProjectCard = ({ item, index }) => {
    return (
        <motion.div
            className="project-card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
            <div className="project-image">
                <img src={item.img} alt={item.title} />
                <div className="project-overlay">
                    <a href={item.link} className="view-project-btn">
                        View Project
                    </a>
                </div>
            </div>
            <div className="project-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
        </motion.div>
    );
};

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <div className="back-home-btn">
                <Link to="/">← Back to Home</Link>
            </div>

            <div className="projects-header">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My Projects
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Explore my collection of web development projects
                </motion.p>
            </div>

            <div className="projects-grid">
                {items.map((item, index) => (
                    <ProjectCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;