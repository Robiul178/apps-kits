"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Mail, MapPin, Phone, TimerIcon } from "lucide-react";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const ContactPage = () => {
  return (
    <main>
      <section className="max-w-6xl mx-auto p-4 py-24">
        <div className="md:py-11">
          <div className="text-center mt-5">
            <h2 className="text-4xl font-bold">
              {" "}
              <span className="border-b-2">Connect</span> with our team
            </h2>
            <p className="max-w-md mx-auto py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              atque praesentium ad laboriosam minima facere saepe natus.
            </p>
          </div>

          <div className="md:flex gap-10 mt-10">
            <div className="md:w-[800px] bg-zinc-200 p-6 rounded-md">
              <h1 className="text-4xl font-bold">Get in touch with us</h1>
              <div className="mt-5">
                <form action="#">
                  <div className="flex gap-5">
                    <Input type="text" placeholder="Enter your name..." />
                    <Input type="email" placeholder="Enter your email...." />
                  </div>
                  <Input type="text" placeholder="Subject" className="mt-3" />
                  <Textarea
                    placeholder="Submit your message request..."
                    className="mt-3"
                  />
                  <Button
                    variant="outline"
                    className="mt-3 bg-black text-white py-1 px-5"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            {/* details */}
            <div>
              <h1 className="text-4xl font-bold py-8">Contact Details</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis quia autem repellendus quibusdam optio corporis facilis
                ea, sapiente nisi perferendis asperiores quam soluta.
              </p>
              <div className="md:grid md:grid-cols-2 gap-5 mt-5">
                <div className=" flex gap-5 border p-4 items-center rounded-lg max-sm:mb-3">
                  <span className="bg-black text-white w-12 h-12 flex justify-center items-center rounded-md">
                    <MapPin />
                  </span>
                  <span>
                    <h2 className="text-md font-semibold">Address</h2>
                    <p>JI Raya Kuta No. 121</p>
                  </span>
                </div>
                <div className=" flex gap-5 border p-4 items-center rounded-lg max-sm:mb-3">
                  <span className="bg-black text-white w-12 h-12 flex justify-center items-center rounded-md">
                    <Phone />
                  </span>
                  <span>
                    <h2 className="text-md font-semibold">Mobile</h2>
                    <p>(+021) 789 345</p>
                  </span>
                </div>
                <div className=" flex gap-5 border p-4 items-center rounded-lg max-sm:mb-3 ">
                  <span className="bg-black text-white w-12 h-12 flex justify-center items-center rounded-md">
                    <TimerIcon />
                  </span>
                  <span>
                    <h2 className="text-md font-semibold">Availability</h2>
                    <p>Daly 09 am - 05 pm</p>
                  </span>
                </div>
                <div className=" flex gap-5 border p-4 items-center rounded-lg max-sm:mb-3">
                  <span className="bg-black text-white w-12 h-12 flex justify-center items-center rounded-md">
                    <Mail />
                  </span>
                  <span>
                    <h2 className="text-md font-semibold">Email</h2>
                    <p>admin@support.com</p>
                  </span>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Social Media :</h2>
                </div>
                <div className="flex gap-2">
                  <span className="border w-10 h-10 flex justify-center items-center rounded-md">
                    <Facebook size={20} />
                  </span>
                  <span className="border w-10 h-10 flex justify-center items-center rounded-md">
                    <TwitterLogoIcon size={20} />
                  </span>
                  <span className="border w-10 h-10 flex justify-center items-center rounded-md">
                    <InstagramLogoIcon size={20} />
                  </span>
                  <span className="border w-10 h-10 flex justify-center items-center rounded-md">
                    <LinkedInLogoIcon size={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-200">
        <div className="max-w-6xl mx-auto p-4 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Your Common Queries Answered <br /> with Additional FAQs
            </h1>
            <p className="max-w-lg mt-5 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est aut
              assumenda accusantium obcaecati quia sequi sint corrupti impedit.
            </p>
          </div>
          {/* accordion with plus icon*/}
          <div className="md:flex justify-between mt-10">
            <div className="max-w-[600px]">
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="border px-10 rounded-lg mb-3 bg-white"
                >
                  <AccordionTrigger>
                    How can I benefit from your startup?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="border px-10 rounded-lg mb-3 bg-white"
                >
                  <AccordionTrigger>
                    How can I get in touch with customer support ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="border px-10 rounded-lg mb-3 bg-white"
                >
                  <AccordionTrigger>
                    How do you ensure data security and privacy?
                  </AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt asperiores eaque perspiciatis laudantium similique
                    reprehenderit debitis dolorum officia quasi! Magni mollitia
                    et sunt molestiae qui veniam! Nesciunt laborum voluptas
                    corporis!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="border px-10 rounded-lg bg-white"
                >
                  <AccordionTrigger>
                    How do I get start with your offer ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="">
              <Image
                src="/call.jpg"
                alt="girl"
                width={600}
                height={700}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
