import React, { Component } from 'react';
const divStyle = {
  color: '#7f0000',
  fontWeight: 'bold',
  backgroundColor: 'lightyellow',
};

class Gardendisplayitem extends Component {
  state = {}
  render() { 
    return ( 
      <div className="quadrant-item" id={this.props.q1}>
      <form className="quadrantForm">
        <button
          className="quadrantSelectButton"
          type="button"
          value={this.props.quadrants}
          onClick={this.props.updateIdQuadrant}
        >SELECT AREA # {(this.props.q1) + 1}</button><br></br><br></br>
        <div className="productUserPopup">
            <input
              type="hidden"
              value={this.props.quadrants}
            />
            <h4 className="dataFromDB">Produce planted: </h4>
            <h2 className="dbNumber" style={divStyle}> {this.props.produce} </h2><br></br>
            <input
              className="userProdInput"
              type="text"
              placeholder="Prod. ID"
              onChange={this.props.updateProduceQuadrant}
            /><br></br>
            <h4 className="dataFromDB">Current User: </h4>
            <h2 className="dbNumber" style={divStyle}> {this.props.user} </h2><br></br>
            <input
              className="userProdInput"
              type="text"
              placeholder="User ID"
              onChange={this.props.updateUserQuadrant}
            /><br></br><br></br>
          <input
            className="reserveButton"
            type="button"
            name="submit"
            value="RESERVE"
            onClick={() => this.props.handleQuadrantForm(this.props.quadrants)}
            />
          </div>
      </form>
    </div>
    )
  }
}
 
export default Gardendisplayitem;