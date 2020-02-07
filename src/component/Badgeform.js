import React from "react";

class Badgeform extends React.Component {
  handleChage = e => {
    //   console.log({name:e.target.name,
    //                value:e.target.value});
    /*this.setState(
     {
       [e.target.name]:e.target.value,
     }
   )*/
  };
  handleClick = e => {
    console.log("Algo sucedio");
  };
  handleOnsubmit = e => {
    e.preventDefault();
    console.log("evento onSubmit");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleOnsubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstname"
              value={this.props.formValues.firstname}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastname"
              value={this.props.formValues.lastname}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobtitle"
              value={this.props.formValues.jobtitle}
            />
          </div>
          <div className="form-group">
            <label>twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default Badgeform;
