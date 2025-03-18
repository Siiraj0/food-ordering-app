import { count } from "console";

const React = require("react");

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      
      price : 500,
    };
  }
  render() {

    const {namae , location} = this.props;
    const {count , price} = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => { 
            this.setState({ count: this.state.count + 1 });
            this.setState({ price: this.state.price + 500
            });
 
          }}
        > 
          count increase
        </button>
        <h1>total price : {price}</h1>
        <h2>price of product : 500 </h2>
        
      </div>
    );
  }
}

export default UserClass;
