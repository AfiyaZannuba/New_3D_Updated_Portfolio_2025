import { useState } from "react";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import Counter from "./counter/Counter";
import MugModelContainer from "./mug/MugModelContainer";
import "./Services.css";

const services = [
    {
        id: 1,
        img: "/service1.png",
        title: "Full Stack Development",
        subTitle: "MERN | PHP | Digital Marketing",
    },
    {
        id: 2,
        img: "/service2.png",
        title: "UI/UX Implementation",
        subTitle: "Responsive, mobile-first designs",
    },
    {
        id: 3,
        img: "/service3.png",
        title: "Client Collaboration",
        subTitle: "Global brands (AU, NZ, UAE, UK)",
    },
];

const Services = () => {
    const [currentServiceId, setCurrentServiceId] = useState(1);

    return (
        <div className="services">
            <div className="sSection left">
                <h1 className="sTitle">How do I help?</h1>

                <div className="serviceList">
                    {services.map((service) => (
                        <div
                            className={`service ${currentServiceId === service.id ? "active" : ""
                                }`}
                            key={service.id}
                            onClick={() => setCurrentServiceId(service.id)}
                        >
                            <div className="serviceIcon">
                                <img src={service.img} alt={service.title} />
                            </div>
                            <div className="serviceInfo">
                                <h2>{service.title}</h2>
                                <h3>{service.subTitle}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="counterList">
                    <Counter from={0} to={5} text="Enterprise Clients" />
                    <Counter from={0} to={3} text="Years of Work Experience" />
                </div>
            </div>

            <div className="sSection right">
                {currentServiceId === 1 ? (
                    <ComputerModelContainer />
                ) : currentServiceId === 2 ? (
                    <MugModelContainer />
                ) : (
                    <ConsoleModelContainer />
                )}
            </div>
        </div>
    );
};

export default Services;
