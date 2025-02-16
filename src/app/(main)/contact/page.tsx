import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import { CONTACT_CARDS } from "@/config";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import heroImage from "~/images/arik.png";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:pt-32 md:pb-24 md:px-10 xl:pt-48 xl:pb-40 xl:px-12">
      <div className="max-w-300 mx-auto xl:flex xl:gap-12">
        <Image
          className="hidden xl:block"
          src={heroImage}
          style={{
            width: 400,
            height: 497.5,
          }}
          alt="Hero image"
        />
        <div className="flex flex-col gap-4 flex-1">
          <Card className="flex flex-col gap-8 p-8 md:p-10 xl:p-12">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted uppercase tracking-wider">
                Contact
              </p>
              <h2 className="text-3xl font-light tracking-wider md:text-4xl">
                Let&apos;s get in touch
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" />
              <Button
                variant="primary"
                className="normal-case text-base font-semibold p-3.75"
              >
                Send Message
              </Button>
            </div>
          </Card>
          <div className="grid md:grid-cols-3 gap-4">
            {CONTACT_CARDS.map((card) => (
              <Card
                key={card.title}
                className="p-4 flex justify-between items-center group hover:bg-muted-hover hover:border-border-hover transition-colors duration-300"
              >
                <div className="flex gap-2 items-center uppercase tracking-wider text-sm">
                  <card.icon className="size-5" />
                  {card.title}
                </div>
                <ArrowRightIcon className="size-4.5 group-hover:-rotate-45 transition-transform duration-300" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
