import react from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { useState, useEffect } from 'react';


const GlossaryListEntry = ({ word }) => {
  const [updatedWord, setUpdate] = useState('')
  // const [deleteWord, setDeleted] = useState('')

  console.log('wordhere', word)
  const edit = (updatedWord) => {
    console.log(`${updatedWord} was searched`)
    $.ajax({
      url: "http://localhost:3000/glossary",
      method: "PUT",
      data: {
        word: updatedWord,
        definition: word.definition
      },

      success: () => {
        console.log('successfully updated')
      },
      error: () => {
        console.log('error updating')
      }
    })
  }
  var deleteWord = '';

  const find = () => {
    var deleted = document.getElementsByClassName("word")[0].textContent.slice(5)
    console.log('deleted', deleted)
    deleteWord = deleted
  }

  const deleted = (deleteWord) => {
    console.log(`${deleteWord} was deleted`)
    $.ajax({
      url: "http://localhost:3000/glossary",
      method: "DELETE",
      data: {
        deleteWord: deleteWord
      },
      success: () => {
        console.log('successfully deleted')
      },
      error: () => {
        console.log('error deleting')
      }
    })
  }

  // const toggle = () => {
  //   console.log('toggled')
  // }

  return (
    <div className="word-list">
      <div className="word">Word: {word.word}</div>
      <div className="definition">Definition: {word.definition}</div>
      <button className="edit" onClick={(event) => { event.preventDefault(); edit(updatedWord) }}> Edit</button>
      <div id="hidden"> <input className="edit-box" type="text" onChange={(event) => { event.preventDefault(); setUpdate(event.target.value) }}></input></div>
      <button className="delete" onClick={(event) => { event.preventDefault(); find(); deleted(deleteWord) }}> Delete</button>
    </div>
  )
}
export default GlossaryListEntry;