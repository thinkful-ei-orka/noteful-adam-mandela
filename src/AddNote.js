import React from 'react';
//import {Link} from 'react-router-dom';
import ApiContext from './ApiContext';
import PropTypes from 'prop-types';
import './AddNote.css'

export default class AddNote extends React.Component {
  validateForm =()=>
    this.props.note.name===''?
      this.props.note.touched?
        'Note name cannot be blank'
      :undefined
    :undefined

  render(){
    return (
      <ApiContext.Consumer>
        {({addNote=[],addNoteSubmit=[],folders=[]})=>(
          <div className='viewcontainer'>
            <nav className='navbar'>
              <button type='button' className='goback' onClick={this.props.history.goBack}>Go Back</button>
            </nav>
            <main className='viewport'>
              <form className='noteform' onSubmit={((e)=>{e.preventDefault();addNoteSubmit(this.props.note.content,this.props.note.folderId,this.props.note.name)})}>
                {this.validateForm()!==undefined?<p className='formerror'>{this.validateForm()}</p>:null}
                <section className='fields start'>
                  <label htmlFor='newnote'>
                  Enter New Note Name:
                  </label>
                  <input type='text' id='newnote' value={this.props.note.name} onChange={((e)=>addNote(e.target.value,this.props.note.folderId,this.props.note.content))} required/>
                </section>
                <section className='fields sourcefolder'>
                  <label htmlFor='folders'>
                    Select a source folder:
                  </label>
                  <select className='folderoptions' onChange={((e)=>addNote(this.props.note.name,e.target.value,this.props.note.content))}>
                    {folders.map(folder=>{
                      return(
                        <option key={folder.id} value={folder.id}>{folder.name}</option>
                      )  
                    })}
                  </select>
                </section>
                <section className='fields content'>  
                  <label htmlFor='content'>
                    Content
                  </label>
                  <textarea id='content' className='content' placeholder='Enter note contents here' onChange={((e)=>addNote(this.props.note.name,this.props.note.folderId,e.target.value))} value={this.props.note.content} />
                </section>
                <section className='fields'>
                  <button className='newnotebutton' disabled={this.validateForm()||!this.props.note.touched} type='submit' onClick={this.props.history.goBack}>Submit</button>
                </section>
              </form>
            </main>
          </div>
        )}
      </ApiContext.Consumer>
    )
  }
}

AddNote.propTypes={
  history:PropTypes.object.isRequired,
  note:PropTypes.object.isRequired
}