import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default (props) => {
    return props.events.map(event => {
        return (
            <Card key={event.id}><h1>Mathew</h1>
                <Link to={`/events/${event.id}`}>
                    {event.event}
                </Link>
                <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>{date}</span>
                    </Card.Meta>
                    <Card.Description>
                    {
                    
                    }
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        
                    </a>
                </Card.Content>

            </Card>
        )
    })
};

