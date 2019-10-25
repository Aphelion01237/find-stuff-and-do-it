import React, { Component } from 'react'
import {
  Card,
  Icon,
} from 'semantic-ui-react'
import axios from 'axios'

const CardExampleCard = () => (
  <Card>
    <Card.Content>
      <Card.Header>House Party</Card.Header>
      <Card.Meta>
        <span className='date'>Mathew Smith</span>
      </Card.Meta>
      <Card.Meta>
        <span className='date'>11.20.19</span>
      </Card.Meta>
      <Card.Meta>
        <span className='date'>1234 sesame street</span>
      </Card.Meta>
      <Card.Description>
        we bouta turn up
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 comments
      </a>
    </Card.Content>
  </Card>
)


class EventCards extends Component {
  state = {
    events: ''
  }

  async componentDidMount() {
    this.getEvents();
  }

  getEvents = async () => {
    console.log("we made it to get events fam");
    try {
      let response = await axios.get('/api/events/');
      const events = response.data;
      console.log('I am events', events);
      this.setState({ events });
    } catch (e) {
      console.log(e);
    }
  }

  // renderEvents = () => {
  //   return this.state.events.map(event => {
  //     return <Card key={event.id}>
  //     <Card.Content>
  //       <Card.Header>{event.event_name}</Card.Header>
  //       <Card.Meta>
  //         <span className='username'>Mathew Smith</span>
  //       </Card.Meta>
  //       <Card.Meta>
  //         <span className='game'>{event.event_game}</span>
  //       </Card.Meta>
  //       <Card.Meta>
  //         <span className='timezone'>{event.event_timezone}</span>
  //       </Card.Meta>
  //       <Card.Description>
  //         {event.event_description}
  //       </Card.Description>
  //     </Card.Content>
  //     <Card.Content extra>
  //         <Icon name='user'/>
  //         {event.event_creator_IGN}
  //     </Card.Content>
  //   </Card>
  //   });
  // }


  render() {
    console.log('we made it to render cards fam');

    return(
      <Card.Group>
        {/* {this.renderEvents()} */}
      </Card.Group>
    )
  }
}











// export default CardExampleCard; 
export default EventCards;