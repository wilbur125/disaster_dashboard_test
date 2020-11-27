import API from "../../utils/API";
import React from 'react';

class ReadyKit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      water: false,
      non_perishable_food: false,
      radio: false,
      batteries: false,
      flashlight: false,
      first_aid_kit: false,
      whistle: false,
      dust_mask: false,
      moist_towlettes: false,
      garbage_bags: false,
      wrench: false,
      can_opener: false,
      local_map: false,
      cash: false,
      medications: false
    }

    API.getReadyKitByUser(this.props.username)
      .then(res => this.setState(res.data))
      .catch(console.err);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  sendStateChangeToBackend() {
    API.updateReadyKitByUser(this.props.username, this.state)
      .then(console.log)
      .catch(console.err);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.checked }, this.sendStateChangeToBackend);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <input type="checkbox" name="water" onChange={this.handleInputChange} checked={this.state.water} /> Water
        <br></br>
        <input type="checkbox" name="non_perishable_food" onChange={this.handleInputChange} checked={this.state.non_perishable_food} /> Non-perishable food
        <br></br>
        <input type="checkbox" name="radio" onChange={this.handleInputChange} checked={this.state.radio} /> Radio
        <br></br>
        <input type="checkbox" name="batteries" onChange={this.handleInputChange} checked={this.state.batteries} /> Batteries
        <br></br>
        <input type="checkbox" name="flashlight" onChange={this.handleInputChange} checked={this.state.flashlight} /> Flashlight
        <br></br>
        <input type="checkbox" name="first_aid_kit" onChange={this.handleInputChange} checked={this.state.first_aid_kit} /> First Aid Kit
        <br></br>
        <input type="checkbox" name="whistle" onChange={this.handleInputChange} checked={this.state.whistle} /> Whistle
        <br></br>
        <input type="checkbox" name="dust_mask" onChange={this.handleInputChange} checked={this.state.dust_mask} /> Dust Mask
        <br></br>
        <input type="checkbox" name="moist_towlettes" onChange={this.handleInputChange} checked={this.state.moist_towlettes} /> Moist Towlettes
        <br></br>
        <input type="checkbox" name="garbage_bags" onChange={this.handleInputChange} checked={this.state.garbage_bags} /> Garbage Bag
        <br></br>
        <input type="checkbox" name="wrench" onChange={this.handleInputChange} checked={this.state.wrench} /> Wrench
        <br></br>
        <input type="checkbox" name="can_opener" onChange={this.handleInputChange} checked={this.state.can_opener} /> Can Opener
        <br></br>
        <input type="checkbox" name="local_map" onChange={this.handleInputChange} checked={this.state.local_map} /> Local Map
        <br></br>
        <input type="checkbox" name="cash" onChange={this.handleInputChange} checked={this.state.cash} /> Cash
        <br></br>
        <input type="checkbox" name="medications" onChange={this.handleInputChange} checked={this.state.medications} /> Medications
      </div>
    );
  }
}

export default ReadyKit;
