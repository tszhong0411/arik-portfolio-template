import SlideAnimation from "@/components/slide-animation";
import SocialCards from "@/components/social-cards";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Image from "next/image";
import heroImage from "~/images/arik.png";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 px-6 md:pt-32 md:pb-24 md:px-10 xl:pt-48 xl:pb-40 xl:px-12">
      <div className="max-w-300 mx-auto xl:flex xl:items-start xl:gap-12">
        <Image
          className="hidden w-100 xl:block"
          src={heroImage}
          alt="Hero image"
        />
        <div className="flex flex-col gap-4 flex-1">
          <SlideAnimation asChild>
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
          </SlideAnimation>
          <SocialCards />
        </div>
      </div>
    </div>
  );
}
