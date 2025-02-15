import Section1 from './HeroSection';
import Section2 from './Section2';
import Section3 from './Section3';
import { cn } from "@lib/utils";

export default function Home() {
    return (
        <section className={cn(`bg-softRed`)}>
            <Section1/>
            <Section2/>
            <Section3/>
        </section>
    )
}
