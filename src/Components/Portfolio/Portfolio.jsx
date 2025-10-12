import { useEffect, useRef, useState } from "react";
import "./Portfolio.css"
import { motion, useInView, useScroll, useTransform } from "motion/react";

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
        img: "/shoeconnection.png",
        title: "Shoe Connection [Built on Magento 2.x]",
        desc: "Magento 2.x eCommerce website for an Australian footwear brand.",
        link: "https://www.shoeconnection.com.au/",
    },
];

const imgVariants = {
    initial: {
        x: -500,
        y: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const textVariants = {
    initial: {
        x: 500,
        y: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.05,
        },
    },
};

const ListItem = ({ item }) => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <div className="pItem" ref={ref}>
            <motion.div
                variants={imgVariants}
                animate={isInView ? "animate" : "initial"}
                className="pImg"
            >
                <img src={item.img} alt="" />
            </motion.div>
            <motion.div
                variants={textVariants}
                animate={isInView ? "animate" : "initial"}
                className="pText"
            >
                <motion.h1 variants={textVariants}>{item.title}</motion.h1>
                <motion.p variants={textVariants}>{item.desc}</motion.p>
                <motion.a variants={textVariants} href={item.link}>
                    <button>View Project</button>
                </motion.a>
            </motion.div>
        </div>
    );
};

const Portfolio = () => {
    const [containerDistance, setContainerDistance] = useState(0);
    const ref = useRef(null);

    // useEffect(() => {
    //   if (ref.current) {
    //     const rect = ref.current.getBoundingClientRect();
    //     setContainerDistance(rect.left);
    //   }
    // }, []);

    // FIX: Re-calculate when screen size changes
    useEffect(() => {
        const calculateDistance = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setContainerDistance(rect.left);
            }
        };

        calculateDistance();

        window.addEventListener("resize", calculateDistance);

        return () => {
            window.removeEventListener("resize", calculateDistance);
        };
    }, []);

    const { scrollYProgress } = useScroll({ target: ref });

    const xTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -window.innerWidth * items.length]
    );

    return (
        <div className="portfolio" ref={ref}>
            <motion.div className="pList" style={{ x: xTranslate }}>
                <div
                    className="empty"
                    style={{
                        width: window.innerWidth - containerDistance,
                        // backgroundColor: "pink",
                    }}
                />
                {items.map((item) => (
                    <ListItem item={item} key={item.id} />
                ))}
            </motion.div>
            <section />
            <section />
            <section />
            <section />
            <section />
            <div className="pProgress">
                <svg width="100%" height="100%" viewBox="0 0 160 160">
                    <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#ddd"
                        strokeWidth={20}
                    />
                    <motion.circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#dd4c62"
                        strokeWidth={20}
                        style={{ pathLength: scrollYProgress }}
                        transform="rotate(-90 80 80)"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Portfolio;