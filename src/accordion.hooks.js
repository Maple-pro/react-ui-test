import React from 'react'
import AccordionContents from './accordion-contents'

function Accordion({items}) {
  const [openIndex, setOpenIndex] = React.useState(0)

  return (
    <div>
      {items.map((item, index) => (
        <>
          <button onClick={() => setOpenIndex(index)}>{item.title}</button>
          {index === openIndex ? (
            <AccordionContents>{item.contents}</AccordionContents>
          ) : null}
        </>
      ))}
    </div>
  )
}

export default Accordion
