//form to add folder
//submit name of the folder to post
/*onClick={this.props.history.goBack}*/
import React from 'react';
//import {Link} from 'react-router-dom';
import ApiContext from './ApiContext';
import PropTypes from 'prop-types';
import './AddFolder.css'


export default class AddFolder extends React.Component {
  validateForm = () =>
    this.props.folder.value===''?
      this.props.folder.touched?
        'Folder name cannot be blank'
      :undefined
    :undefined

  render(){
    return (
      <ApiContext.Consumer>
        {({addFolder=[],addFolderSubmit=[]})=>(
          <div className='viewcontainer'>
            <nav className='navbar'>
              <button type='button' className='goback' onClick={this.props.history.goBack}>Go Back</button>
            </nav>
            <main className='viewport'>
              <form className='folderform' onSubmit={((e)=>{e.preventDefault();addFolderSubmit(this.props.folder.value)})}>
                {this.validateForm()!==undefined?<p className='formerror'>{this.validateForm()}</p>:null}
                <section className='fields start'>
                  <label htmlFor='newfolder'>Enter New Folder Name: </ label>
                  <input type='text' id='newfolder' value={this.props.folder.value} onChange={((e)=>addFolder(e.target.value))}></input>
                  <button disabled={this.validateForm()||!this.props.folder.touched} type='submit' onClick={this.props.history.goBack}>Submit</button>
                </section>
              </form>
            </main>
          </div>
        )}
      </ApiContext.Consumer>
    )
  }
}

AddFolder.propTypes={
  history:PropTypes.object.isRequired,
  folder:PropTypes.object.isRequired
}