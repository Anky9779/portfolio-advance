"use client";

import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After earning my degree from{" "}
                <span className="font-medium">
                    Syracuse University
                </span>
                , my journey in product management and cloud computing deepened.
                I've earned{" "}
                <span className="font-medium">Azure AZ-900</span> and{" "}
                <span className="font-medium">AWS Solutions Architect</span>{" "}
                certifications, and I'm on my path to the Excel Advance Certification. What drives me
                is the{" "}
                <span className="italic">joy of solving complex problems</span>
                —there's nothing like the thrill of a breakthrough. Currently, I
                am seeking{" "}
                <span className="font-medium">internship opportunities</span> in
                the product management or cloud engineering space, I'm eager to
                bring my passion and expertise to your team.
            </p>

            <p>
                <span className="italic">Beyond coding</span>, my leisure
                activities include watching documentaries,
                and experimenting with new technologies. I'm
                always on the lookout for{" "}
                <span className="font-medium">new skills to master</span>.
                Lately, I've been diving into{" "}
                <span className="font-medium">React, Node.js</span> and{" "}
                <span className="font-medium">TypeScript</span>, expanding
                my understanding and capabilities in    .
            </p>
        </motion.section>
    );
}
