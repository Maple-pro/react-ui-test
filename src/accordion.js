import React from 'react'
import AccordionContents from './accordion-contents'

class Accordion extends React.Component {
  state = {openIndex: 0}
  setOpenIndex = (openIndex) => this.setState({openIndex})
  render() {
    const {openIndex} = this.state
    return (
      <div>
        {this.props.items.map((item, index) => (
          <>
            <button onClick={() => this.setOpenIndex(index)}>
              {item.title}
            </button>
            {index === openIndex ? (
              <AccordionContents>{item.contents}</AccordionContents>
            ) : null}
          </>
        ))}
      </div>
    )
  }
}

export default Accordion
