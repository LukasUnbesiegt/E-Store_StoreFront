import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom'




function Lists() {


    const listItems = [
        {
            to: "/account/orders/",
            name: "your orders"

        },
        {
            to: "/account/settings",
            name: "account settings"

        }
    ]

    const renderListes = () => {


        return listItems.map((item) => {
            return (
                <ListGroupItem tag="a"><Link to={item.to}>{item.name}</Link></ListGroupItem>
            )
        })


    }



    return (
        <div>

            <ListGroup>

                {renderListes()}

            </ListGroup>
        </div>
    )
}



export default Lists;