import React from 'react'
import { Card, CardGroup, CardImg, CardBody, CardTitle, Button, NavLink } from "reactstrap"

const ShackIndex = ({ shacks }) => {
  return(
    <div data-testid="shackindex">
      <CardGroup>
        {shacks?.map((shack, index) => {
          return(
            <Card key={index}>
              <CardImg
                alt="a space you need to experience"
                src={shack.image}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Located in {shack.hill}
                </CardTitle>
                <Button>
                  <NavLink href={`/shackshow/${shack.id}`}>
                    More Details
                  </NavLink>
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </CardGroup>
    </div>
  )
}

export default ShackIndex