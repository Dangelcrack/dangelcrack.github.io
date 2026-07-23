import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const EMAILJS_SERVICE_ID = "service_fkp080e";
const EMAILJS_TEMPLATE_ID = "template_xit7t88"; // notificación para ti
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_qht1w99"; // confirmación para el visitante
const EMAILJS_PUBLIC_KEY = "ylhxX3UDfSeP-_Xsa";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
    });

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            name: form.name === "",
            email: form.email === "",
            message: form.message === "",
        };

        setErrors(newErrors);

        if (newErrors.name || newErrors.email || newErrors.message) {
            return;
        }

        setLoading(true);

        // 1) Notificación para ti (Ángel)
        const notifyMe = emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Ángel Guerrero",
                from_email: form.email,
                to_email: "angelguerrero540@gmail.com",
                message: form.message,
            },
            EMAILJS_PUBLIC_KEY
        );

        // 2) Auto-respuesta de confirmación para quien ha escrito
        const autoReply = emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_AUTOREPLY_TEMPLATE_ID,
            {
                name: form.name,
                email: form.email,
                message: form.message,
            },
            EMAILJS_PUBLIC_KEY
        );

        Promise.all([notifyMe, autoReply]).then(
            () => {
                setLoading(false);
                setEmailSent(true);

                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            },
            (error) => {
                setLoading(false);
                console.error(error);

                alert(
                    "Vaya, algo ha fallado al enviar el mensaje. Escríbeme directamente a angelguerrero540@gmail.com mientras lo reviso."
                );
            }
        );
    };

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Ponte en contacto</p>
                <h3 className={styles.sectionHeadText}>Contáctame.</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Tu nombre</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="¡Encantado de conocerte! 🤝"
                            className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                                errors.name ? "border-red-500" : ""
                            }`}
                        />
                        {errors.name && <span className="text-red-500">Escribe tu nombre aquí.</span>}
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Tu email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="No hay spam, tranquilo 🙌"
                            className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                                errors.email ? "border-red-500" : ""
                            }`}
                        />
                        {errors.email && <span className="text-red-500">No olvides escribir tu email.</span>}
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Tu mensaje</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="¿Qué quieres contarme?"
                            className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                                errors.message ? "border-red-500" : ""
                            }`}
                        />
                        {errors.message && (
                            <span className="text-red-500">El mensaje no puede estar vacío.</span>
                        )}
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                        disabled={emailSent}
                    >
                        {loading ? "Enviando..." : emailSent ? "Mensaje enviado ✅" : "Enviar"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");