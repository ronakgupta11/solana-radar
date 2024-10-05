'use client';
import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <div className="bg-black text-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" className="max-w-3xl mx-auto" collapsible>
        <FAQItem
          question="What is this platform about?"
          answer="This platform connects users for data labeling tasks in a decentralized marketplace."
        />
        <FAQItem
          question="How do I become a worker?"
          answer="To become a worker, you can register on our platform using your Solana wallet, and select the worker role."
        />
        <FAQItem
          question="How can I create tasks as a requester?"
          answer="Requesters can create tasks by connecting their wallet and selecting the create task option on their dashboard."
        />
        <FAQItem
          question="What payment methods are supported?"
          answer="Currently, we support payments in SOL and other Solana-based tokens."
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
