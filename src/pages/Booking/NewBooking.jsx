import React, { useState } from 'react'
import Layout from '../../Layout'
import styled from 'styled-components'
import { Delete } from '@mui/icons-material'

const Wrap = styled.div`
  width: 80vw;
  margin: 4rem auto;
  background-color: white;
  border-radius: 5px;
  padding: 2rem;
  height: 100%;
`
const Heading = styled.p`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
const FormText = styled.span`
  font-size: 1.1rem;
  margin-right: 10px;
  font-weight: 500;
  min-width: 170px;
`
const FormInput = styled.input`
  max-width: 300px;
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  &:focus {
    outline: 2px solid black;
  }
`
const InputSet = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
`

const AddBtn = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 1rem;
  margin-left: 1rem;
  background-color: green;
`
const DelBtn = styled(AddBtn)`
  position: absolute;
  right: 5px;
  font-size: 0.7rem;
  padding: 0;
  background-color: transparent;
`

const DishItem = styled.li`
  margin-bottom: 5px;
  list-style-type: none;
  display: flex;
  position: relative;
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 10px;
  border: 2px solid #000000;
  padding: 0.5rem;
  border-radius: 5px;
  color: #000000;
  text-transform: uppercase;
  background-color: white;
`
const DishesSet = styled.div`
  min-width: 400px;
  border: 3px solid white;
  border-radius: 10px;
  margin-left: 20px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #2f2e2ea2;
`
const RightLeft = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
`

const NewBooking = () => {
  const [dish, setDish] = useState('')
  const [dishes, setDishes] = useState([])

  const handleAddDish = () => {
    if (dish) {
      setDishes([...dishes, dish])
      setDish('')
    }
  }
  const handleDeleteDish = (index) => {
    setDishes(dishes.filter((_, i) => i !== index))
  }
  return (
    <Layout>
      <Wrap>
        <Heading>Booking Form</Heading>
        <InputWrap>
          <InputSet>
            <FormText>Serial No # 12345</FormText>
          </InputSet>
        </InputWrap>
        <InputWrap>
          <InputSet>
            <FormText>Host :</FormText>
            <FormInput placeholder='Enter Host Name...' />
          </InputSet>
          <InputSet>
            <FormText>Function :</FormText>
            <FormInput placeholder='Enter Function Type...' />
          </InputSet>
        </InputWrap>
        <InputWrap>
          <InputSet>
            <FormText>Contact :</FormText>
            <FormInput placeholder='Phone Number...' />
          </InputSet>
          <InputSet>
            <FormText>Location :</FormText>
            <FormInput placeholder='Enter Address here...' />
          </InputSet>
        </InputWrap>
        <InputWrap>
          <InputSet>
            <FormText>Add Dishes : </FormText>
            <FormInput
              type='text'
              value={dish}
              onChange={(e) => setDish(e.target.value)}
              placeholder='Enter Dish Name...'
            />
            <AddBtn onClick={handleAddDish}> + Add </AddBtn>
          </InputSet>
          <InputSet>
            <FormText>Enter Dishes: {dishes.length}</FormText>
          </InputSet>
        </InputWrap>
        <RightLeft>
          <Left>
            <InputWrap>
              <InputSet>
                {dishes.length === 0 && (
                  <DishesSet style={{ color: 'white' }}>
                    No Dishes Added...
                  </DishesSet>
                )}
                {dishes.length > 0 && (
                  <DishesSet>
                    {dishes.map((dish, index) => (
                      <DishItem key={index}>
                        {dish}
                        <DelBtn onClick={() => handleDeleteDish(index)}>
                          <Delete style={{ color: '#ff0000' }} />
                        </DelBtn>
                      </DishItem>
                    ))}
                  </DishesSet>
                )}
              </InputSet>
            </InputWrap>
          </Left>
          <Right>
            <InputWrap>
              <InputSet>
                <FormText>Per Head </FormText>
                <FormInput type='text' placeholder='Per Head Amount...' />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Function Date:</FormText>
                <FormInput type='text' placeholder='Per Head Amount...' />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Timings: </FormText>
                <FormInput type='text' placeholder='Per Head Amount...' />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>No. Of Guest: </FormText>
                <FormInput type='text' placeholder='Enter Guests...' />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Food Amount: </FormText>
                <FormInput type='text' placeholder='Enter Amount...' />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Stage Amount: </FormText>
                <FormInput type='text' placeholder='Enter Amount...' />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Decoration Lights: </FormText>
                <FormInput type='text' placeholder='Enter Amount...' />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Sound System: </FormText>
                <FormInput type='text' placeholder='Enter Amount...' />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Cold Drink: </FormText>
                <FormInput type='text' placeholder='Enter Amount...' />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Mineral Water: </FormText>
                <FormInput type='text' placeholder='Enter Amount...' />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Hall Rent Balc: </FormText>
                <FormInput type='text' placeholder='Enter Amount...' />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Extra Decor: </FormText>
                <FormInput type='text' placeholder='Enter Amount...' />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Others: </FormText>
                <FormInput type='text' placeholder='Enter Amount...' />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText style={{ color: 'red' }}>Discount: </FormText>
                <FormInput type='text' placeholder='Enter Discount...' />
              </InputSet>
            </InputWrap>
          </Right>
        </RightLeft>
      </Wrap>
    </Layout>
  )
}

export default NewBooking
