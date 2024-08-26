
import {
  Accordion as UIAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

function AccordionComponent({
  content,
}: {
  content: {
    question: string;
    answer: string;
  }[];
}) {
  return (
    <UIAccordion type="single" collapsible>
      {content.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-[#FDFDFD]  dark:bg-[#0E1321] border-none outline-none rounded-xl py-2 px-4 my-2 shadow-xl "
        >
          <AccordionTrigger className="text-[16px] ">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </UIAccordion>
  );
}

export default React.memo(AccordionComponent);
