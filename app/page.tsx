import Client from "@/components/Client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Recentprojects from "@/components/Recentprojects";
import { navItems } from "@/components/data";
import { FloatingNav } from "@/components/ui/Floatingnavbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5" >
      <div className="max-w-7xl w-full" >
        <FloatingNav
          navItems={navItems}
        /> 
        <Hero/>
        <Grid/>
        <Recentprojects/>
        <Client/>
      </div>
    </main>
  );
}
