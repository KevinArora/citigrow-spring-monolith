import React, { Component } from 'react';
import Gardendisplayitem from './Gardendisplayitem';
class Gardendisplay extends Component {
 
  render() { 
    return (this.props.quadrants.map((quadrants, i) =>
      <Gardendisplayitem
        key={i}
        name={quadrants.name}
        user={quadrants.user}
        produce={quadrants.produce}
        quadrants={quadrants.quadrant}
        q1={i}

        updateIdQuadrant={this.props.updateIdQuadrant}
        updateProduceQuadrant={this.props.updateProduceQuadrant}
        updateUserQuadrant={this.props.updateUserQuadrant}
        handleQuadrantForm={this.props.handleQuadrantForm}
        quad_id={this.props.quad_id}
        prod_quad={this.props.prod_quad}
        user_quad={this.props.user_quad}
      />
  ));
  }
}
 
export default Gardendisplay;