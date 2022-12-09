import React from 'react'
import AccordionContents from './accordion-contents'

class Accordion extends React.Component {
  state = {openIndexes: [0]}
  setOpenIndex = openIndex => this.setState({openIndexes: [openIndex]})
  render() {
    const {openIndexes} = this.state
    return (
      <div>
        {this.props.items.map((item, index) => (
          <>
            <button onClick={() => this.setOpenIndex(index)}>
              {item.title}
            </button>
            {openIndexes.includes(index) ? (
              <AccordionContents>{item.contents}</AccordionContents>
            ) : null}
          </>
        ))}
      </div>
    )
  }
}

export default Accordion
