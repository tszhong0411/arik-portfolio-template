import SlideAnimation from "@/components/slide-animation";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col gap-16 px-6 py-16 md:px-10 md:py-24 xl:px-12 xl:pt-32 xl:pb-40">
      <div className="max-w-350 mx-auto flex flex-col gap-8 w-full md:gap-12 md:flex-row">
        <div className="flex flex-col items-center gap-2 flex-1 md:items-start">
          <SlideAnimation direction="down" asChild>
            <p className="text-sm text-muted">FAQ</p>
          </SlideAnimation>
          <SlideAnimation asChild>
            <h2 className="text-4xl font-gambetta font-light italic md:text-5xl xl:text-6xl">
              Common Questions
            </h2>
          </SlideAnimation>
        </div>
        <SlideAnimation className="flex flex-col gap-4 flex-1">
          <Accordion>
            <AccordionTrigger>
              What is the typical turnaround time for a website project?
            </AccordionTrigger>
            <AccordionContent>
              The timeline for a website project can vary depending on the
              complexity of the project and the specific requirements of the
              client. However, we work closely with our clients to establish a
              timeline that works for everyone and strive to deliver projects in
              a timely and efficient manner.
            </AccordionContent>
          </Accordion>
          <Accordion>
            <AccordionTrigger>
              Can you help with website maintenance and updates after the
              project is completed?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer ongoing website maintenance and support services for
              our clients. Whether you need to update content, fix issues, or
              add new features, we&apos;re here to help.
            </AccordionContent>
          </Accordion>
          <Accordion>
            <AccordionTrigger>
              How do you ensure that my website will be optimized for search
              engines?
            </AccordionTrigger>
            <AccordionContent>
              We conduct extensive research to identify the best keywords and
              strategies for improving search engine rankings. We also utilize
              best practices for on-page optimization, including title tags,
              meta descriptions, and content optimization.
            </AccordionContent>
          </Accordion>
          <Accordion>
            <AccordionTrigger>
              What is your process for website design and development?
            </AccordionTrigger>
            <AccordionContent>
              Our process typically involves a discovery call to discuss the
              client&apos;s needs and goals, followed by research and strategy
              development. From there, we move into the design and development
              phase, where we create wireframes, prototypes, and design concepts
              before finalizing the website. We then perform quality assurance
              and testing before launching the website.
            </AccordionContent>
          </Accordion>
        </SlideAnimation>
      </div>
    </div>
  );
}
