import API from "../../utils/API";
import { Card, ListGroup } from 'react-bootstrap';
import { BiGlobe, BiCalendarExclamation } from "react-icons/bi";
import { FaHouseDamage } from "react-icons/fa";
import React from 'react';


class Disasters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disasters: []
    };
  }

  componentDidMount() {
    API.getDisasters()
      .then(res => this.setState({ disasters: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row mx-auto">
        {this.state.disasters.map((disaster, index) => (
          <Card key={index} className="col-xs-12 col-md-6 float-sm-left">
            <Card.Body>
              <Card.Title>{disaster.title}</Card.Title>
              <ListGroup key={index}>
                <ListGroup.Item>
                  <BiCalendarExclamation></BiCalendarExclamation> {disaster.date}</ListGroup.Item>
                <ListGroup.Item>
                  <BiGlobe></BiGlobe> {disaster.geometry[0].toFixed(2)}°N, {disaster.geometry[1].toFixed(2)}°E</ListGroup.Item>
                <ListGroup.Item>
                  <FaHouseDamage></FaHouseDamage> {disaster.category}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default Disasters;
