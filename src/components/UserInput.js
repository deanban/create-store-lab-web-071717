import React, { Component } from "react";

class UserInput extends Component {
  state = {
    username: "",
    hometown: ""
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: " ADD_USER",
      user: this.state
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
            placeholder="User Name"
          />
          <input
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={e => this.handleChange(e)}
            placeholder="Home Town"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default UserInput;
