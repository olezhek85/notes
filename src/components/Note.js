import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Note.css";

export default class Note extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    color: PropTypes.string,
    children: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  static defaultProps = {
    color: "lightgreen"
  };

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const { color, children } = this.props;
    return (
      <div className="note" style={{ backgroundColor: color }}>
        <span className="note__delete-icon" onClick={this.handleDelete}>
          {" "}
          x{" "}
        </span>
        {children}
      </div>
    );
  }
}
