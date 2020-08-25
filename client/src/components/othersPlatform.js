import React, { Component } from "react";
import classnames from "classnames";
import axios from 'axios';
import "./materialize.min.css";

export default class OthersPlatform extends Component {
  constructor() {
    super();
    this.state = {          
      facebook: "",
      youtube: "",
      errors: {}
    };
  }


  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const urls = {
      facebook: this.state.facebook,
      youtube: this.state.youtube
    };

    axios.post('http://localhost:5000/api/users', urls)
    .then(res => console.log(res.data));

    this.setState({
      facebook: "",
      youtube: "",
      errors: {}
  })
    
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>YouTube </b> URL
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              {/* <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="facebook"
                  type="text"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="facebook">Facebook</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div> */}
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="youtube"
                  type="text"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="youtube">YouTube</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Include
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}