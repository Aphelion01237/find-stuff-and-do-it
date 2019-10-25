import React, { Component } from 'react'
import {
  Card,
  Icon,
} from 'semantic-ui-react'
import axios from 'axios'

const CardExampleCard = () => (

  <Card.Group>
    <Card>
    <Card.Content>
      <Card.Header>WoW LF2M</Card.Header>
      <Card.Meta>
        <span className='username'>Bob Saget</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>World of Warcraft</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>PST</span>
      </Card.Meta>
      <Card.Description>
        Need 2 people for mythics, any class.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        Bob_Saget's_Blizzard_ID
    </Card.Content>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>APEX LFS</Card.Header>
      <Card.Meta>
        <span className='username'>Hellmo</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>Apex Legends</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>PST</span>
      </Card.Meta>
      <Card.Description>
        Hi my name is Hellmo and I play Octane.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        Hellmo's_Origin_ID
    </Card.Content>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>Losers</Card.Header>
      <Card.Meta>
        <span className='username'>Jean Claude Van Damme</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>Real Life</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>ZULU</span>
      </Card.Meta>
      <Card.Description>
        Hahahaha your videogames are me in real life.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        getRekt@me.com
    </Card.Content>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>Fortnite needs 2</Card.Header>
      <Card.Meta>
        <span className='username'>A 9 year old</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>Fortnite</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>EST</span>
      </Card.Meta>
      <Card.Description>
        I'm really good I will pwn you.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        my mom said i can't give contact info
    </Card.Content>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>WoW Raids</Card.Header>
      <Card.Meta>
        <span className='username'>Tom Cruise</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>World of Warcraft</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>PST</span>
      </Card.Meta>
      <Card.Description>
        Need one more group to RP as couch for me to jump over.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        Tom Cruise's_Blizzard_ID
    </Card.Content>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>CoD Squad!</Card.Header>
      <Card.Meta>
        <span className='username'>Tyler the Creator</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>Call of Duty: Black Ops III</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>CST</span>
      </Card.Meta>
      <Card.Description>
        Looking to build a Goblin squad.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        Tyler's_Blizzard_ID
    </Card.Content>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>APEX LFS</Card.Header>
      <Card.Meta>
        <span className='username'>Hellmo</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>Apex Legends</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>PST</span>
      </Card.Meta>
      <Card.Description>
        Hi my name is Hellmo and I play Octane.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        Hellmo's_Origin_ID
    </Card.Content>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>WoW LF2M</Card.Header>
      <Card.Meta>
        <span className='username'>Bob Saget</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>World of Warcraft</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>PST</span>
      </Card.Meta>
      <Card.Description>
        Need 2 people for mythics, any class.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        Bob_Saget's_Blizzard_ID
    </Card.Content>
    </Card>
    
    <Card>
    <Card.Content>
      <Card.Header>Losers</Card.Header>
      <Card.Meta>
        <span className='username'>Jean Claude Van Damme</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>Real Life</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>ZULU</span>
      </Card.Meta>
      <Card.Description>
        Hahahaha your videogames are me in real life.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        getRekt@me.com
    </Card.Content>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>Fortnite needs 2</Card.Header>
      <Card.Meta>
        <span className='username'>A 9 year old</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>Fortnite</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>EST</span>
      </Card.Meta>
      <Card.Description>
        I'm really good I will pwn you.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        my mom said i can't give contact info
    </Card.Content>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>WoW Raids</Card.Header>
      <Card.Meta>
        <span className='username'>Tom Cruise</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>World of Warcraft</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>PST</span>
      </Card.Meta>
      <Card.Description>
        Need one more group to RP as couch for me to jump over.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        Tom Cruise's_Blizzard_ID
    </Card.Content>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>CoD Squad!</Card.Header>
      <Card.Meta>
        <span className='username'>Tyler the Creator</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>Call of Duty: Black Ops III</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>CST</span>
      </Card.Meta>
      <Card.Description>
        Looking to build a Goblin squad.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        Tyler's_Blizzard_ID
    </Card.Content>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>APEX LFS</Card.Header>
      <Card.Meta>
        <span className='username'>Hellmo</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>Apex Legends</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>PST</span>
      </Card.Meta>
      <Card.Description>
        Hi my name is Hellmo and I play Octane.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        Hellmo's_Origin_ID
    </Card.Content>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>Losers</Card.Header>
      <Card.Meta>
        <span className='username'>Jean Claude Van Damme</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>Real Life</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>ZULU</span>
      </Card.Meta>
      <Card.Description>
        Hahahaha your videogames are me in real life.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        getRekt@me.com
    </Card.Content>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>Fortnite needs 2</Card.Header>
      <Card.Meta>
        <span className='username'>A 9 year old</span>
      </Card.Meta>
      <Card.Meta>
        <span className='game'>Fortnite</span>
      </Card.Meta>
      <Card.Meta>
        <span className='timezone'>EST</span>
      </Card.Meta>
      <Card.Description>
        I'm really good I will pwn you.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user'/>
        my mom said i can't give contact info
    </Card.Content>
    </Card>

  </Card.Group>
)


// class EventCards extends Component {
//   state = {
//     events: ''
//   }

//   async componentDidMount() {
//     this.getEvents();
//   }

//   getEvents = async () => {
//     console.log("we made it to get events fam");
//     try {
//       let response = await axios.get('/api/events/');
//       const events = response.data;
//       console.log('I am events', events);
//       this.setState({ events });
//     } catch (e) {
//       console.log(e);
//     }
//   }

// renderEvents = () => {
//   return this.state.events.map(event => {
//     return <Card key={event.id}>
    // <Card.Content>
    //   <Card.Header>{event.event_name}</Card.Header>
    //   <Card.Meta>
    //     <span className='username'>Mathew Smith</span>
    //   </Card.Meta>
    //   <Card.Meta>
    //     <span className='game'>{event.event_game}</span>
    //   </Card.Meta>
    //   <Card.Meta>
    //     <span className='timezone'>{event.event_timezone}</span>
    //   </Card.Meta>
    //   <Card.Description>
    //     {event.event_description}
    //   </Card.Description>
    // </Card.Content>
    // <Card.Content extra>
    //     <Icon name='user'/>
    //     {event.event_creator_IGN}
    // </Card.Content>
//   </Card>
//   });
// }


//   render() {
//     console.log('we made it to render cards fam');

//     return(
//       <Card.Group>
//         {/* {this.renderEvents()} */}
//       </Card.Group>
//     )
//   }
// }











export default CardExampleCard;
// export default EventCards;