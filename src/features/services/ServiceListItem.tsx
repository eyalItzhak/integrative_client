
import React from "react"
import { Link } from "react-router-dom"
import { Item } from "semantic-ui-react"


interface Props {
    service: string
    description : string
    image? : string
}

export default function ServiceListItem({ service,description,image}: Props) {

    return (     
    <Item as={Link} to={`/Services/${service}`}>
        {image? <Item.Image size='small' src={image} /> :<Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />}
        <Item.Content>

        <Item.Header/>
          <Item.Description>
            <p>{service}</p>
            <p>
              {description}
            </p>
          </Item.Description>
        </Item.Content>
      </Item>
      
      )
}