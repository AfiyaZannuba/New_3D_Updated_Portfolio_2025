import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./Project.css";

const items = [
    {
        id: 1,
        img: "/azha.png",
        title: "Azha Perfumes UAE",
        desc: "Shopify E-commerce website for a UAE-based perfume brand.",
        link: "https://uae.azhaperfumes.com/",
    },
    {
        id: 2,
        img: "/noya.png",
        title: "House of Noya [Built on Shopify]",
        desc: "A perfume eCommerce website for a UAE-based luxury fragrance brand.",
        link: "https://www.houseofnoya.com/",
    },
    {
        id: 3,
        img: "/mern_notes.png",
        title: "Notes App [Built using MERN Stack]",
        desc: "A full-featured note-taking application built with the MERN stack.",
        link: "https://frontendd-notes.onrender.com/",
    },
    {
        id: 4,
        img: "/commerce.png",
        title: "DCKAP Commerce [Built using MERN Stack on BigCommerce]",
        desc: "B2B eCommerce platform built on Magento for a US-based client.",
        link: "https://www.dckap.com/commerce/",
    },
    {
        id: 5,
        img: "/nova.png",
        title: "Novo Shoes [Built on Magento 2.x]",
        desc: "Magento 2.x eCommerce website for an Australian footwear brand.",
        link: "https://www.novoshoes.com.au/",
    },
    {
        id: 6,
        img: "/shoeconnection.png",
        title: "Shoe Connection [Built on Magento 2.x]",
        desc: "Magento 2.x eCommerce website for an Australian footwear brand.",
        link: "https://www.shoeconnection.com.au/",
    },
    {
        id: 7,
        img: "/ipanema.png",
        title: "Shoe Connection [Built on Magento 2.x]",
        desc: "Magento 2.x eCommerce website for an Australian footwear brand.",
        link: "https://www.ipanemaaustralia.com.au/",
    },
    {
        id: 8,
        img: "/realestate.png",
        title: "Real Estate Website",
        desc: "A ReactJS real estate listing platform with advanced search and filtering features.",
        link: "https://real-estate-website-xi-one.vercel.app/",
    },
    {
        id: 9,
        img: "/gsap_personal.png",
        title: "Personal Portfolio on GSAP",
        desc: "A visually engaging portfolio website built with React and GSAP animations.",
        link: "https://afiya-zannuba-jaleel.vercel.app/",
    },
    {
        id: 10,
        img: "/tailwind_no_react.png",
        title: "Tailwind CSS without React [Learning Side Project]",
        desc: "A project showcasing Tailwind CSS styling without the use of React.",
        link: "https://tailwind-css-without-react.vercel.app/",
    },
    {
        id: 11,
        img: "/vibecoding-mern.png",
        title: "Job Tracker App [Built using MERN Stack]",
        desc: "A mern stack job tracking application vibecoded in less than 30 minutes.",
        link: "https://jobtracker-mern-app.onrender.com/",
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