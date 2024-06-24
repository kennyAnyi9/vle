import { Card, cardProps } from "@/components/card";
import { BorderBeam } from "@/components/ui/beam";
import GridPattern from "@/components/ui/grid";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-10 lg:p-24">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />

      <h1 className="text-wrap text-center bg-gradient-to-b text-4xl font-semibold dark:from-black dark:text-white sm:mt-6 sm:from-white/5 sm:via-black sm:to-black sm:bg-clip-text sm:text-transparent sm:dark:via-white md:text-5xl xl:text-6xl xl:[line-height:1.125]">
        All Your vle links are here
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {card.map((props, index) => (
          <Card key={index} text={props.text} href={props.href} />
        ))}
      </div>
      <BorderBeam size={250} duration={12} delay={9} />
    </main>
  );
}

const card: cardProps[] = [
  {
    text: "Research Methods and Ethics",
    href: "https://wacren.zoom.us/j/65171060368?pwd=5SLXrXjDoTSorH4MIOU3UKOe2EMZSk.1",
  },
  {
    text: "Information and Cyber Security",
    href: "https://wacren.zoom.us/j/69696387523?pwd=xbUMT4GDaLRiN4oTElHHr6ktGaWgBM.1",
  },
  {
    text: "Programming with C#",
    href: "https://wacren.zoom.us/j/62133469616?pwd=sW4XpdqpOpbIvpfalLEtWVnO5TMOOb.1",
  },
];
