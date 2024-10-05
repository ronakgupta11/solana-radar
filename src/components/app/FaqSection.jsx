'use client';
import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <div className="bg-black text-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" className="max-w-3xl mx-auto" collapsible>
        <FAQItem
          question="⁠ ⁠What is a decentralized data labeling marketplace?"
          answer="A decentralized data labeling marketplace connects users with a global pool of skilled labelers without relying on a central authority. This structure fosters diversity, enhances accessibility, and allows for efficient collaboration, ensuring high-quality annotated datasets."
        />
        <FAQItem
          question="⁠How do you ensure the quality of labeled data?"
          answer="We implement a community-driven review system where multiple labelers validate each annotation. This collaborative approach increases accuracy to over 95%, minimizing variability and ensuring reliable data for your AI models."
        />
        <FAQItem
          question="What incentives do labelers receive?"
          answer="Labelers are rewarded with tokens and bonuses based on their performance. Our incentive structure can increase earnings by up to 30%, motivating labelers to deliver high-quality work quickly, benefiting both parties."
        />
        <FAQItem
          question="How fast are payments processed?"
          answer="CPayments on our platform are processed using blockchain technology, allowing for transactions to be completed in under 10 seconds. This rapid processing ensures timely compensation for labelers and reduces administrative burdens for users."
        />
        <FAQItem
          question="How does your platform improve the labeling process?"
          answer="Our platform streamlines the labeling process, cutting typical turnaround times by up to 50%. With easy onboarding for labelers and organizations, we make it quick and efficient to get high-quality annotated data ready for AI training."
        />
      </Accordion>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  return (
    <AccordionItem value={question} className="border-b border-gray-700">
      <AccordionTrigger className="py-4 text-xl font-semibold" >
        {question}
      </AccordionTrigger>
      <AccordionContent className="py-2 text-gray-400">{answer}</AccordionContent>
    </AccordionItem>
  );
};

export default FAQSection;
