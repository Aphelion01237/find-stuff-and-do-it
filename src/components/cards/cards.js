import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

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

export default CardExampleCard