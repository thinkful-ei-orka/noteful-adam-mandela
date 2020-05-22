import React from 'react';
import {Route} from 'react-router-dom';
import MainPath from './MainPath';
import Header from './Header';
import FolderPath from './FolderPath'
import NotePath from './NotePath';
import './App.css';
import ApiContext from './ApiContext';
import {withRouter} from 'react-router';
import AddFolder from './AddFolder';
import AddNote from './AddNote';
import cuid from 'cuid';
import ErrorPage from './ErrorPage';

class App extends React.Component {
  state = {
    notes:[],
    folders:[],
    noteid:'',
    error:null,
    newfolder:{value:'',touched:false},
    newnote:{name:'',content:'',folderId:'',touched:false}
  }

  componentDidMount(){
    Promise.all([
      fetch('http://localhost:9090/folders'),
      fetch('http://localhost:9090/notes')
    ])
    .then(([res1,res2])=>Promise.all([res1.json(),res2.json()]))
    .then(([folders,notes])=>{this.setState({folders,notes})})
    .catch(error=>console.log({error}))
  }

  deleteNoteHandle = (noteid,path,customHistory)=>{
    fetch(`http://localhost:9090/notes/${noteid}`,{method:'DELETE', headers: {'Content-Type':'application/json'}})
    .then(()=>{this.setState({notes:this.state.notes.filter(note=>note.id!==noteid)})})
    .catch(error=>console.log(error))
  }

  addFolderHandle = (foldername=null)=>{
    this.setState({newfolder:{value:foldername,touched:true}})
  }

  addFolderSubmitHandle = (foldername)=>{
    const newid=cuid();
    this.setState({newfolder:{value:'',touched:false}});
    fetch(`http://localhost:9090/folders`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({'id':newid,'name':foldername})})
    .then(this.setState({folders:[...this.state.folders,{id:newid,name:foldername}]}))
    .then(this.setState({newfolder:{value:'',touched:false}}))
    .catch(error=>console.log(error))
  }

  addNoteHandle = (notename,id,content)=>{
    this.setState({newnote:{name:notename,folderId:id,content:content,touched:true}})
  }

  addNoteSubmitHandle = (content,folderId,notename)=>{
    console.log(content,folderId,notename)
    const newid=cuid();
    const newNoteObject = {content:content,folderId:folderId,id:newid,modified:new Date(Date.now()).toISOString(),name:notename};
    this.setState({newfolder:{value:'',touched:false}});
    fetch(`http://localhost:9090/notes`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(newNoteObject)})
    .then(this.setState({notes:[...this.state.notes,newNoteObject]}))
    .then(this.setState({newnote:{name:'',content:'',folderId:'',touched:false}}))
    .catch(error=>console.log(error))
  }

  render(){
    const statevalues ={
      notes:this.state.notes,
      folders:this.state.folders,
      deleteNote:this.deleteNoteHandle,
      addFolder:this.addFolderHandle,
      addFolderSubmit:this.addFolderSubmitHandle,
      addNote:this.addNoteHandle,
      addNoteSubmit:this.addNoteSubmitHandle
    }

    return (
      <ApiContext.Provider value={statevalues}>
        <main className='App'>
          <Route path='/' component={Header} />
          <ErrorPage>
            <Route 
              exact path='/' 
              render={({history})=>
                <MainPath
                  history={history} 
                />
              } 
            />
          </ErrorPage>
          <ErrorPage>
            <Route
              path='/folder/'
              render={({history})=>
                <FolderPath
                  history={history}
                />
              }
            />
          </ErrorPage>
          <ErrorPage>
            <Route 
              path='/newfolder/'
              render={({history})=>
                <AddFolder 
                  history={history}
                  folder={this.state.newfolder}
                />
              }
            />
          </ErrorPage>
          <ErrorPage>
            <Route
              path='/note/'
              render={({history})=>
                <NotePath
                  history={history}
                  noteid={this.state.noteid}
                />
              }
            />
          </ErrorPage>
          <ErrorPage>  
            <Route 
              path='/newnote/'
              render={({history})=>
                <AddNote 
                  history={history}
                  note={this.state.newnote}
                />
              }
            />
          </ErrorPage>
        </main>
      </ApiContext.Provider>
    );
  }
}

export default withRouter(App);