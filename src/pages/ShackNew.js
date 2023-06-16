import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap"

const ShackNew = ( {createShack, currentUser }) => {

  const [newShack, setNewShack] = useState({
    street: "",
    unit: "",
    hill: "",
    square_footage: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    user_id: currentUser?.id
  });

  const handleChange = (e) => {
    setNewShack({...newShack, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate()

  const handleSubmit = () => {
    createShack(newShack)
    navigate("/shackindex")
  }


  return (
    <div 
      data-testid="shacknew"
      style={{
        backgroundImage: "url(back.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="street">
              Street
            </Label>
            <Input
              id="street"
              name="street"
              placeholder="Enter your street info"
              type="text"
              onChange={handleChange}
            value={newShack.street}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="unit">
              Unit number
            </Label>
            <Input
              id="unit"
              name="unit"
              placeholder="Enter your unit"
              type="text"
              onChange={handleChange}
              value={newShack.unit}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="hill">
              Hill
            </Label>
            <Input
              id="hill"
              name="hill"
              placeholder="Enter your hill"
              type="text"
              onChange={handleChange}
              value={newShack.hill}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="square_footage">
              Square footage
            </Label>
            <Input
              id="square_footage"
              name="square_footage"
              placeholder="Enter your square footage"
              type="number"
              onChange={handleChange}
              value={newShack.square_footage}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="price">
              price
            </Label>
            <Input
              id="price"
              name="price"
              placeholder="Enter your price"
              type="text"
              onChange={handleChange}
              value={newShack.price}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <FormGroup>
            <Label for="bedrooms">
              Bedrooms
            </Label>
            <Input
              id="bedrooms"
              name="bedrooms"
              placeholder="Enter your bedrooms"
              type="number"
              onChange={handleChange}
              value={newShack.bedrooms}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="bathrooms">
              Bathrooms
            </Label>
            <Input
              id="bathrooms"
              name="bathrooms"
              placeholder="Enter your bathrooms"
              type="number"
              onChange={handleChange}
              value={newShack.bathrooms}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="pets">
              Pets
            </Label>
            <Input
              id="pets"
              name="pets"
              placeholder="Enter yes or no"
              type="text"
              onChange={handleChange}
              value={newShack.pets}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="image">
          Image
        </Label>
        <Input
          id="image"
          name="image"
          placeholder="Provide link to a photo of your unit"
          onChange={handleChange}
          value={newShack.image}
        />
      </FormGroup>
      <Button onClick={handleSubmit} name="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default ShackNew