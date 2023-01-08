import React from 'react';
import ServicesList from './ServicesList';
import { Item } from 'semantic-ui-react'



export default function ServicesDashboard(){


    return(
    <Item.Group>
         <ServicesList/>
    </Item.Group>
    )
}