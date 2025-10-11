import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactSvg from "./ContactSvg";

const Contact = () => {
    const form = useRef();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setSuccess(true);
                    setError(false);
                    form.current.reset();
                },
                (error) => {
                    console.log(error);
                    setError(true);
                    setSuccess(false);
                }
            );
    };

    return (
        <div className="contact">
            <div className="cSection">
                <form ref={form} onSubmit={sendEmail} style={{ zIndex: 1000 }}>
                    <h1 className="cTitle">Let's Keep in Touch</h1>

                    <div className="formItem">
                        <label htmlFor="user_username">Name</label>
                        <input
                            id="user_username"
                            type="text"
                            name="user_username"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className="formItem">
                        <label htmlFor="user_email">Email</label>
                        <input
                            id="user_email"
                            type="email"
                            name="user_email"
                            placeholder="john@gmail.com"
                            required
                        />
                    </div>

                    <div className="formItem">
                        <label htmlFor="user_message">Message</label>
                        <textarea
                            id="user_message"
                            name="user_message"
                            rows={10}
                            placeholder="Write your message..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="formButton">
                        Send
                    </button>

                    {success && <span>Your Message Has Been Sent!</span>}
                    {error && <span>Something went wrong!</span>}
                </form>
            </div>

            <div className="cSection"><ContactSvg /></div>
        </div>
    );
};

export default Contact;