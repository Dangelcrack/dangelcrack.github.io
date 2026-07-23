import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, upper_title, date, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                {" "}
                <a href={source_code_link} target="_blank" rel="noopener noreferrer">
                    <div className="relative w-full h-[230px] cursor-pointer">
                        <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </a>

                <div className="mt-5">
                    {date && <p className="text-gray-300 text-[16px] font-semibold mb-1">{date}</p>}
                    <a
                        href={source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-bold text-[28px] transition-colors duration-300 hover:text-secondary"
                    >
                        {name}
                    </a>
                    <div>
                        <a className="text-white text-[13px] italic transition-colors duration-300 hover:text-gray-400">
                            {upper_title}
                        </a>
                    </div>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Proyectos con código real, en producción</p>
                <h2 className={`${styles.sectionHeadText}`}>Proyectos.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Estos son proyectos personales que he construido y desplegado por mi cuenta, con backend
                    en Python/Django. Cada uno resuelve un problema real —monitorización de precios y
                    análisis de datos agrícolas— y está corriendo en producción, no solo en local.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");