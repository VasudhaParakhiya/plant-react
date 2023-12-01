import React, { Component } from "react";

export default class AboutInfo extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="grid1-info">
          <div>
            <h3 className="text-capitalize about-title-info fw-light fw-500">
              {/*  */}
              {this.props.title}
            </h3>
            <p className="about-disc-info">{this.props.name}</p>
            <p className="about-content-info mt-lg-5">
              {this.props.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

//
// export default  AboutBox;
