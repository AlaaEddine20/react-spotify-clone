import React from "react";

class Gallery extends React.Component {
  render() {
    const { title, songs } = this.props;
    return (
      <div className="Gallery">
        <h4>{title}</h4>
      </div>
    );
  }
}
