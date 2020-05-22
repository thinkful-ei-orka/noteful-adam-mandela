import React from 'react';

export default React.createContext({
  notes:[],
  folders:[],
  addFolder:()=> {},
  addFolderSubmit:()=>{},
  addNote:()=>{},
  addNoteSubmit:()=>{},
  deleteNote:()=>{}
})