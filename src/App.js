import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      names: [],
      ages: []
    };
  }

  componentDidMount() {
    const { data } = this.state;
    const uniqueNames = [...new Set(data.map(item => item.name))];
    const uniqueAges = [...new Set(data.map(item => item.age))];

    this.setState({ names: uniqueNames, ages: uniqueAges });
  }

  handleDeleteClick = () => {
    const { names, ages } = this.state;

    this.setState({
      names: names.slice(0, -1),
      ages: ages.slice(0, -1)
    });
  }

  render() {
    const { names, ages } = this.state;

    return (
      <div className="App">
        {names.length === 0 && <p>Array is empty now</p>}
        {names.length > 0 && (
          <>
            <div className="list-container">
              <h2>Names</h2>
              <ul>
                {names.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
            <div className="list-container">
              <h2>Ages</h2>
              <ul>
                {ages.map((age, index) => (
                  <li key={index}>{age}</li>
                ))}
              </ul>
            </div>
            <button onClick={this.handleDeleteClick}>Delete</button>
          </>
        )}
      </div>
    );
  }
}

export default App;
