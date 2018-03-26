import React, { Component } from 'react';
import Gardenform from './Gardenform';
import Gardendisplay from './Gardendisplay';
import axios from 'axios';
class Dashboard extends Component {
  constructor(props) {
    super();
    // console.log(this);
    this.state = {
      gardens: [],
      selected: '',
      garden_id: '',
      name: '',
      zipcode: '',

      quadrants: [],
      q1: 0,
      quad_id: 0,
      prod_quad: 0,
      user_quad: 0,
    };
  }
  // ====== GET ALL GARDENS AND GET GARDEN BY ID ======== //
  // displays the info for the garden clicked on from the garden list, it sets that garden's info to the "selected" state
  // with the id of the garden, it does a fetch call and gets from the quadrants table all quadrants with that garden id
  changeSelection(num) {
    // getOneGarden()
    this.setState({
      selected: this.state.gardens[num],
      garden_id: this.state.gardens[num].id
    });
    // console.log('garden id in app.js', this.state.gardens[num].id);
    fetch(`http://localhost:8080/gardens/${this.state.gardens[num].id}`) 
    .then(r => r.json())
    .then((data) => {
      this.setState({
        quadrants: data
      });
      // console.log('************App.jsxs data: ', data[0].quadrant);
    })
    .catch(err => console.log(err));
    // console.log("this is the state of selected ", this.state.garden_id);
  }

  // gets all gardens from the gardens db, saves in array in "gardens" state
  getAllGardens() {
    
    // try {
    //   const response =  axios.get('/gardens')
    //   this.setState({gardens:response.data})
    // }catch (error){
    //   console.log('could not get gardens')
    //   console.log(error)

    // }
    
    fetch(`http://localhost:8080/gardens`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        gardens: data
      });
      // console.log("this is gardens all: ", data);
    })
    .catch(err => console.log(err));
  }

  // ====== GARDEN CREATION FORM ======== //
  // form elements to update info about new gardens
  updateFormName(e) {
    this.setState({
      name: e.target.value,
    });
    // console.log(this.state.name);
  }

  updateFormZip(e) {
    this.setState({
      zipcode: e.target.value,
    });
    // console.log(this.state.zipcode);
  }

  updateFormId(e) {
    this.setState({
      user_id: e.target.value,
    });
    // console.log(this.state.user_id);
  }

  // with a post method, handleFormSubmit() adds a new garden to the db
  async addNewGarden(garden){
    await axios.post("/gardens", garden)

    let gardens = [...this.state.gardens]
    gardens.push(garden)
    this.setState(gardens)
  }
  
  handleFormSubmit() {
    fetch('http://localhost:8080/gardens', {
      
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        zipcode: this.state.zipcode,
        user_id: this.state.user_id
      })
    })
    .then(this.setState({
      name: '',
      zipcode: '',
      user_id: ''
    }))
    .then(this.getAllGardens())
    .catch(err => console.log(err));
  }
   // ====== QUADRANTS FORM ======== //
   updateIdQuadrant(e) {
    let quadrant_id = Number.parseInt(e.target.value);
    this.setState({
      quad_id: quadrant_id,
    });
    // console.log('updating state for quad_id ', this.state.quad_id);
  }

  updateProduceQuadrant(e) {
    let prod_quadrant = Number.parseInt(e.target.value);
    this.setState({
      prod_quad: prod_quadrant,
    });
    // console.log('updating state for prod_quad ', this.state.prod_quad);
  }

  updateUserQuadrant(e) {
    let user_quadrant = Number.parseInt(e.target.value);
    this.setState({
      user_quad: user_quadrant,
    });
    // console.log('updating state for user_quad ', this.state.user_quad);
  }

  // with a post method, handleFormSubmit() adds a new garden to the db
  handleQuadrantForm() {
    // console.log('in app quad form quad Id', this.state.quad_id)
    fetch(`http://localhost:8080/quadrants/${this.state.quad_id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        quad_id: this.state.quad_id,
        prod_quad: this.state.prod_quad,
        user_quad: this.state.user_quad
      })
    })
    .then(this.setState({
        quad_id: 0,
        prod_quad: 0,
        user_quad: 0
    }))
    .then(this.getAllGardens())
    .catch(err => console.log(err));
  }

  render() { 
    return (  
      <div>
       
       <Gardenform
          name={this.state.name}
          zipcode={this.state.zipcode}
          user_id={this.state.user_id}
          updateFormName={event => this.updateFormName(event)}
          updateFormZip={event => this.updateFormZip(event)}
          updateFormId={event => this.updateFormId(event)}
          handleFormSubmit={event => this.handleFormSubmit()}
          getLastGardenId={event => this.getLastGardenId(event)}
          updateFormGardenId={event => this.updateFormGardenId(event)}
          garden_id={this.state.garden_id}
          addNewGarden={this.addNewGarden.bind(this)}

        />

         <div className="gardenDisplay">
          <Gardendisplay
            garden={this.state.selected}
            garden_id={this.state.garden_id}
            collection={this.state.quadrants}
            quadrants={this.state.quadrants}
            quad_id={this.state.quad_id}
            prod_quad={this.state.prod_quad}
            user_quad={this.state.user_quad}
            updateIdQuadrant={event => this.updateIdQuadrant(event)}
            updateProduceQuadrant={event => this.updateProduceQuadrant(event)}
            updateUserQuadrant={event => this.updateUserQuadrant(event)}
            handleQuadrantForm={event => this.handleQuadrantForm()}

          />
        </div>
        </div>
    )
  }
}
 
export default Dashboard;