import react from 'react';
import ReactDOM from 'react-dom';
import GlossaryListEntry from './GlossaryListEntry';

const GlossaryList = ({ words }) => {
  // console.log('w', words)

  return (
    <div className="glossary-list">
      {words.map((word) => {

        return < GlossaryListEntry word={word} key={word.name} />
      })}

    </div>
  )
}

export default GlossaryList;