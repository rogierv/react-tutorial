// https://www.taniarascia.com/getting-started-with-react/

import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const characters = this.state.characters;

    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index;
      })
    })
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    return (
      <div className="container">
        <Table 
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
         />
         <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App;