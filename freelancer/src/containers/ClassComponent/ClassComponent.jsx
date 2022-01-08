import React from "react";
import { Header, Footer } from "../../components";
import { basicData } from "../../assets/data/data";
import { Link } from "react-router-dom";

class TestClass extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      newCounter: 0
    }

    // console.log(this.props);

    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
  }
  
  componentDidMount(){
    console.log('component did mount')
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('component Did Update', snapshot)
  }

  testFunction() {
    this.setState('adfa')
    // this.props.children;
  }

  incrementHandler() {
    console.log('increment handler');
    this.setState({
      counter: this.state.counter + 1
    });
  }
  

  decrementHandler() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  shouldComponentUpdate() {
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log({prevProps, prevState});
    // this.props
    return {middleware: 'data', 'test': 'test'};
  }

  componentWillUnmount(){
    console.log('component unmount');
  }

  render() {
    // console.log(this.state);
    console.log('render function');
    return (
      <div className="App">
        <Header title={basicData.title} />
        <p className="pt-5 mt-5"></p>
        <h1>Class Component Examples ---- ---- --</h1>
        <Link to="/">Test</Link>
        <br />
        <h3>Counter - {this.state.counter}</h3>
        <br /> <br />
        <button onClick={this.incrementHandler} className='btn btn-primary'>Increment</button>
        <br/>
        <br/>

        <button onClick={this.decrementHandler} className='btn btn-warning'>Decrement</button>
        <br/>
        <br/>
        <br />
        <Footer />
      </div>
    );
  }

}


export default TestClass;
