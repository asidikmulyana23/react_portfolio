import {RiReactjsLine} from "react-icons/ri";
import {SiFlutter} from "react-icons/si";
import {FaHtml5} from "react-icons/fa";
import {FaPhp} from "react-icons/fa";
import {GrMysql} from "react-icons/gr";
import { motion, transform } from "framer-motion";

const iconVariants = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10, -10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse"
        }
    },
});



export const Technolologies = () => {
  return (
    <div className="border-b border-cyan-400 pb-24">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants (2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-cyan-400 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-cyan-400 p-4">
                <SiFlutter className="text-7xl text-blue-900"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-cyan-400 p-4">
                <FaHtml5 className="text-7xl text-orange-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-cyan-400 p-4">
                <FaPhp className="text-7xl text-blue-800"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-cyan-400 p-4">
                <GrMysql className="text-7xl text-white"/>
            </motion.div>
        </motion.div>
    </div>
  )
}
// Technologies 29:14

