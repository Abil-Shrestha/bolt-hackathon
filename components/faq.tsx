"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  id: string
  question: string
  answer: string
}

const FAQ = () => {
  // Sample FAQ data - replace with actual FAQs
  const faqItems: FAQItem[] = [
    {
      id: "1",
      question: "What is a hackathon?",
      answer: "A hackathon is a collaborative event where programmers, designers, and other tech enthusiasts come together to build innovative projects within a limited timeframe. Our hackathon brings together the brightest minds to solve challenging problems and create groundbreaking solutions."
    },
    {
      id: "2",
      question: "Who can participate?",
      answer: "Anyone with a passion for technology can participate! Whether you're a seasoned developer, a UX/UI designer, a product manager, or even a student just starting your tech journey, there's a place for you at our hackathon. We welcome participants of all skill levels and backgrounds."
    },
    {
      id: "3",
      question: "Do I need a team to participate?",
      answer: "You can register either as an individual or as part of a team. If you register individually, we'll provide team-matching opportunities before the event so you can find collaborators with complementary skills. Teams typically consist of 3-5 members."
    },
    {
      id: "4",
      question: "Is there a participation fee?",
      answer: "No, participation in our hackathon is completely free! We believe in making innovation accessible to everyone, so there are no registration fees or hidden costs to join the event."
    },
    {
      id: "5",
      question: "What are the prizes?",
      answer: "We have a prize pool of over $1 million distributed across various categories including Grand Prize, Best Technical Implementation, Most Innovative Solution, Best UI/UX, and several sponsor-specific challenges with their own rewards."
    },
    {
      id: "6",
      question: "What resources will be provided?",
      answer: "Participants will have access to mentorship from industry experts, technical workshops, API credits from our sponsors, cloud computing resources, and networking opportunities with leading tech companies and investors."
    },
    {
      id: "7",
      question: "How are projects judged?",
      answer: "Projects will be evaluated by a panel of industry experts and tech leaders based on innovation, technical complexity, practicality, presentation quality, and potential impact. Each category will have specific judging criteria provided before the event."
    },
    {
      id: "8",
      question: "Can I work on a pre-existing project?",
      answer: "All code must be written during the hackathon. While you can come with ideas and plans, the actual implementation should happen during the event. You may use open-source libraries and APIs, but the core project should be developed within the hackathon timeframe."
    }
  ]

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-stk-serif mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about the world's largest hackathon
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqItems.map((item) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className="bg-black has-focus-visible:border-white/30 has-focus-visible:ring-white/20 rounded-md border border-white/10 px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
              >
                <AccordionTrigger className="py-3 text-xl font-semibold leading-6 hover:no-underline focus-visible:ring-0">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-6">
            Still have questions? We're here to help!
          </p>
          <a 
            href="mailto:info@hackathon.com" 
            className="inline-block px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
