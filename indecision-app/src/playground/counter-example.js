// count - setup default prop value to 0

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const count = Number.parseInt(localStorage.getItem('count'));
    if (!isNaN(count)) {
      this.setState(() => ({
        count: count
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) localStorage.setItem('count', this.state.count);
  }

  handleAddOne(e) {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne(e) {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset(e) {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

 
ReactDOM.render(<Counter />, document.querySelector('#app'));

