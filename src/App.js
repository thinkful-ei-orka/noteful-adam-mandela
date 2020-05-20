import React from 'react';
import {Route} from 'react-router-dom';
import MainPath from './MainPath';
import Header from './Header';
//import NavBar from './NavBar';
import FolderPath from './FolderPath'
import NotePath from './NotePath';
import './App.css';
import ApiContext from './ApiContext';

class App extends React.Component {
  state = {
    notes:[],
    folders:[]
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

 
  render(){
    const statevalues ={
      notes:this.state.notes,
      folders:this.state.folders
    }

    return (
      <ApiContext.Provider value={statevalues}>
        <main className='App'>
          <Route path='/' component={Header} />
          <Route 
            exact path='/' 
            render={({history})=>
              <MainPath
                history={history} 
              />
            } 
          />
          <Route
            path='/note/'
            render={({history})=>
              <NotePath
                history={history}
                folders={this.state.folders}
                //note={this.state.notes.find(note=>note.id===history.location.pathname.split('/').reverse()[0])}
              />
            }
          />
          <Route
            path='/folder/'
            render={(history)=>
              <FolderPath
                history={history}
              />
            }
          />
        </main>
      </ApiContext.Provider>
    );
  }
}

export default App;