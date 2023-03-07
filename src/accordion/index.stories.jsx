import { Accordion, AccordionSection } from '.';

export default {
  title: 'Core/Accordion',
  component: Accordion,
};

export const Example = {
  render: () => (
    <Accordion>
      <AccordionSection>
        <h3>First section</h3>
        <p>some text for the first section</p>
      </AccordionSection>
      <AccordionSection isExpanded>
        <h3>Second section</h3>
        <p>some text for the second section</p>
      </AccordionSection>
      <AccordionSection id="section-3">
        <h3>Third section</h3>
        <p>some text for the third section</p>
        <p>even more text!</p>
      </AccordionSection>
    </Accordion>
  ),

  name: 'Example',
};
