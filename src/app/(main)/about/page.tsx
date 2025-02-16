import ButtonScroll from "@/components/ui/button-scroll";
import Card from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import heroImage from "~/images/arik.png";
import arikFull from "~/images/arik-full.png";
import Noise from "@/components/noise";
import SocialCards from "@/components/social-cards";
import { AWARDS } from "@/config";
import { Fragment } from "react";
import SlideAnimation from "@/components/slide-animation";

export default function AboutPage() {
  return (
    <div className="px-6 pt-24 pb-16 md:px-10 md:py-24 xl:px-12 xl:pt-32 xl:pb-40">
      <div className="mx-auto flex max-w-350 flex-col items-center xl:flex-row xl:items-start xl:gap-12">
        <Image
          className="w-60 md:w-100 xl:sticky xl:top-12 xl:w-125"
          src={heroImage}
          alt="Hero image"
        />
        <div className="flex flex-col gap-12 md:gap-16 xl:gap-32 xl:pt-16">
          <SlideAnimation className="flex flex-col items-center gap-8 xl:items-start xl:gap-16">
            <div className="flex flex-col items-center gap-2 text-center font-light md:gap-0 xl:items-start xl:gap-4 xl:text-left">
              <div className="text-6xl md:text-7xl xl:text-9xl">
                <p>Arik</p>
                <p className="font-gambetta italic">Andersson</p>
              </div>
              <p className="max-w-150 font-chillax text-lg text-muted md:text-xl">
                Delivering Premium Web Design and Development Services to Boost
                Your Online Presence.
              </p>
            </div>
            <Link href="#arik">
              <ButtonScroll>About Me</ButtonScroll>
            </Link>
          </SlideAnimation>
          <div className="flex flex-col gap-4">
            <SlideAnimation asChild>
              <Card className="flex flex-col gap-4 p-8 md:p-10 xl:p-12">
                <p className="text-sm tracking-wider text-muted uppercase">
                  Arik Andersson
                </p>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-light md:text-4xl">
                    Your Partner in Bringing Your Web Design Vision to Life
                  </h2>
                  <p className="font-chillax text-sm font-light md:text-base">
                    As a freelance web designer and developer, I bring a unique
                    combination of creativity and technical expertise to every
                    project. With a keen eye for design and a passion for
                    delivering user-friendly web experiences, I work closely
                    with clients to understand their needs and bring their
                    vision to life.
                  </p>
                  <p className="font-chillax text-sm font-light md:text-base">
                    My approach is rooted in collaboration and communication,
                    and I take pride in my ability to explain technical concepts
                    in simple terms. Whether I&apos;m developing a new website
                    from scratch or optimizing an existing site for search
                    engines, I always strive for excellence in both form and
                    function. With a dedication to quality and a commitment to
                    staying on top of the latest trends and technologies, I am
                    confident in my ability to deliver exceptional results that
                    exceed my clients&apos; expectations.
                  </p>
                  <div className="relative overflow-hidden rounded-xs border">
                    <Image src={arikFull} alt="Arik Andersson" />
                    <Noise />
                  </div>
                </div>
              </Card>
            </SlideAnimation>
            <SocialCards all />
            <SlideAnimation asChild>
              <Card className="flex flex-col gap-8 p-8 md:p-10 xl:p-12">
                <p className="text-sm tracking-wider text-muted uppercase">
                  Awards
                </p>
                <div className="flex flex-col gap-6">
                  {AWARDS.map((award, i) => (
                    <Fragment key={`${award.year}-${award.title}`}>
                      <div className="flex flex-col gap-2 md:flex-row xl:flex-row-reverse xl:items-center xl:justify-between">
                        <p className="text-sm tracking-wider text-muted uppercase">
                          {award.year}
                        </p>
                        <p className="text-xl font-light">{award.title}</p>
                      </div>
                      {i !== AWARDS.length - 1 && (
                        <div className="h-px w-full bg-border" />
                      )}
                    </Fragment>
                  ))}
                </div>
              </Card>
            </SlideAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
