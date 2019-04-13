import React from 'react';
import ReactDOM from 'react-dom';

class Details extends React.Component {
  render() {
    return (
      <h1>{this.props.details}</h1>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button style={{color: this.props.active ? 'red' : 'blue'}} onClick={() => {this.props.clickHandler(this.props.id, this.props.name)}}>{this.props.name}</button>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {activeArray:[0,0,0,0],details: ""}
    this.clickHandler = this.clickHandler.bind(this)
  }
  
  clickHandler(id, name) {
    var arr = [0,0,0,0]
    arr[id] = 1
    this.setState({activeArray: arr, details: name})
  }
  render() {
    return (
      <div>
        <Button id={0} clickHandler={this.clickHandler} active={this.state.activeArray[0]} name="One"/>
        <Button id={1} clickHandler={this.clickHandler} active={this.state.activeArray[1]} name="Two"/>
        <Button id={2} clickHandler={this.clickHandler} active={this.state.activeArray[2]} name="Three"/>
        <Button id={3} clickHandler={this.clickHandler} active={this.state.activeArray[3]} name="Four"/>
        <Details details={this.state.details}/>
      </div>
    )
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById("root")
)
