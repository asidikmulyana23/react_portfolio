import {RiReactjsLine} from "react-icons/ri";
import {SiFlutter} from "react-icons/si";
import {FaHtml5} from "react-icons/fa";
import {FaPhp} from "react-icons/fa";
import {GrMysql} from "react-icons/gr";


export const Technolologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFlutter className="text-7xl text-blue-900"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPhp className="text-7xl text-blue-800"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-7xl text-white"/>
            </div>
        </div>
    </div>
  )
}
// Technologies 29:14

