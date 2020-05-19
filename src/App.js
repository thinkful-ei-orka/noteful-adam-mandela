import React from 'react';
import {Route} from 'react-router-dom';
import MainPath from './MainPath';
import Header from './Header';
//import NavBar from './NavBar';
import FolderPath from './FolderPath'
import NotePath from './NotePath';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state=props.state
    this.state.note=this.state.notes[0]
  }

  render(){
    return (
      <main className='App'>
        <Route path='/' component={Header} />
        <Route 
          exact path='/' 
          render={({history})=>
            <MainPath
              history={history} 
              folders={this.state.folders}
              notes={this.state.notes}
            />
          } 
        />
        <Route
          path='/note/'
          render={({history})=>
            <NotePath
              history={history}
              folders={this.state.folders}
              note={this.state.notes.find(note=>note.id===history.location.pathname.split('/').reverse()[0])}
            />
          }
        />
        <Route
          path='/folder/'
          render={(history)=>
            <FolderPath
              history={history}
              folders={this.state.folders}
              notes={this.state.notes.filter(note=>note.folderId===history.location.pathname.split('/').reverse()[0])}
            />
          }
        />
      </main>
    );
  }
}

export default App;