import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap"

const ShackShow = ({shacks}) => {
  const { id } = useParams()
  let currentShack = shacks?.find((shack) => shack.id === +id)
  return(
    <div data-testid="shackshow">
      {currentShack && (
        <>
          <Card className='shackcard'>
            <CardImg
              alt="a space you need to experience"
              src={currentShack.image}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Located in {currentShack.hill}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {currentShack.street}, {currentShack.unit}, {currentShack.hill}
              </CardSubtitle>
              <CardText>
                {currentShack.square_footage} square footage that includes {currentShack.bedrooms} bedrooms and {currentShack.bathrooms} bathrooms going for {currentShack.price}
              </CardText>
            </CardBody>
          </Card>
        </>
      )}
    </div>
  )
}

export default ShackShow