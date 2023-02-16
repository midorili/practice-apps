import react from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import { createRoot } from 'react-dom/client';
import GlossaryList from './GlossaryList'
import GlossaryListEntry from './GlossaryListEntry'

const App = () => {
  const [words, setWords] = useState([])
  const [word, setWord] = useState('')
  const [definition, setDefinition] = useState('')



  // const onChange = (e) => {
  //   setWord(e.target.value)
  //   setDefinition(e.target.value)
  // }

  const search = (word, definition) => {
    //ajax calls here

    console.log(`${word} and ${definition} were submitted`)
    $.ajax({
      url: "http://localhost:3000/glossary",
      method: "POST",
      data: {
        word: word,
        definition: definition
      },
      success: () => {
        console.log('successFromSearch')
      },
      error: () => {
        console.log('errorPost')
      }
    })
  }

  const load = () => {
    //ajax calls here
    $.ajax({
      url: "http://localhost:3000/glossary",
      method: "GET",
      success: (data) => {
        console.log('successFromLoad')
        setWords(data)
      },
      error: () => {
        console.log('errorGet')
      }
    })
  }

  useEffect(() => {
    load()
    console.log('isitworking?')
  }, words)

  return (

    <div className="search">
      <h1>Glossary App</h1>
      <form>
        <label>Word</label>
        <input id="word" type="text" value={word} onChange={(event) => { event.preventDefault(); setWord(event.target.value) }}></input>
        {/* <input id="word" type="text" value={word} onChange={event => setWord(event.target.value)}></input> */}

        <label>Definition</label>
        <input id="description" type="text" value={definition} onChange={(event) => { event.preventDefault(); setDefinition(event.target.value) }}></input>
        {/* <input id="description" type="text" value={definition} onChange={event => setDefinition(event.target.value)}></input> */}

        <button className="submit" onClick={(event) => { event.preventDefault(); search(word, definition) }}> Submit</button>
      </form>
      <div className="words-list">
        <GlossaryList words={words} />
      </div>
    </div>


  )
}


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);