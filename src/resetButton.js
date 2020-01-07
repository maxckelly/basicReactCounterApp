import React from "react";
import { connect } from 'react-redux';

function mapStateToProps(store) {
  return { count: store.count };
};

class ResetButton extends React.Component {

  sendToStore(count) {
    this.props.dispatch({ type: "UPDATE_COUNT", newCount: count })
  };

  reset = (count) => {
    this.sendToStore(0);
  };

  render () {
    return (
      <div>
        <button className="reset-button" onClick={this.reset}> Reset </button>
      </div>
    )
  }
};

export default connect(mapStateToProps)(ResetButton);