import React, { Component } from 'react';
const Gardenform = (props) => {
  return (<div className="header-search-bar">
  <div id='drop-down'>
    <h3>Create A Garden</h3>
  </div>

  <div id="form">
  <form>
     <input type="text" name="name" placeholder="enter garden name" onChange={props.updateFormName} />
      <input type="text" name="zipcode" placeholder="enter zip" onChange={props.updateFormZip} />
      <input type="text" name="user_id" placeholder="enter ID" onChange={props.updateFormId} />
      <button onClick={props.handleFormSubmit} >Start!</button>
    </form>
  </div>
</div>
);
}
 
export default Gardenform;