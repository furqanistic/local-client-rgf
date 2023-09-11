import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'
import styled from 'styled-components'
import { Delete } from '@mui/icons-material'

const Wrap = styled.div`
  width: 80vw;
  margin: 4rem auto;
  background-color: white;
  border-radius: 5px;
  padding: 2rem;
  min-height: 100%;
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
const DateEr = styled.div`
  color: red;
  font-size: 0.5rem;
  margin-left: 5px;
`
const NewBooking = () => {
  const [dish, setDish] = useState('')
  const [dishes, setDishes] = useState([])
  const [date, setDate] = useState('')
  const [dateError, setDateError] = useState(null)
  const [perHead, setPerHead] = useState('')
  const [foodAmount, setFoodAmount] = useState('')
  const [stageAmount, setStageAmount] = useState('')
  const [decorationLights, setDecorationLights] = useState('')
  const [soundSystem, setSoundSystem] = useState('')
  const [coldDrink, setColdDrink] = useState('')
  const [mineralWater, setMineralWater] = useState('')
  const [hallRentBalc, setHallRentBalc] = useState('')
  const [extraDecor, setExtraDecor] = useState('')
  const [others, setOthers] = useState('')
  const [discount, setDiscount] = useState('')
  const [totalAmount, setTotalAmount] = useState('')

  useEffect(() => {
    calculateTotalAmount()
  }, [
    perHead,
    foodAmount,
    stageAmount,
    decorationLights,
    soundSystem,
    coldDrink,
    mineralWater,
    hallRentBalc,
    extraDecor,
    others,
    discount,
  ])

  const calculateTotalAmount = () => {
    const amounts = [
      perHead,
      foodAmount,
      stageAmount,
      decorationLights,
      soundSystem,
      coldDrink,
      mineralWater,
      hallRentBalc,
      extraDecor,
      others,
    ].map(Number)
    const total =
      amounts.reduce((acc, curr) => acc + curr, 0) - Number(discount)
    setTotalAmount(total)
  }

  const handleDateChange = (e) => {
    let newDate = e.target.value

    // Remove all non-digit characters
    newDate = newDate.replace(/\D/g, '')

    // Add dashes between DD, MM, and YYYY
    if (newDate.length <= 2) {
      setDate(newDate)
    } else if (newDate.length <= 4) {
      setDate(`${newDate.slice(0, 2)}-${newDate.slice(2)}`)
    } else {
      setDate(
        `${newDate.slice(0, 2)}-${newDate.slice(2, 4)}-${newDate.slice(4, 8)}`
      )
    }

    // Validate the date if it is in the correct format
    if (newDate.length === 8) {
      const error = validateDate(newDate)
      setDateError(error)
    }
  }

  const validateDate = (date) => {
    const regex = /^\d{2}-\d{2}-\d{4}$/
    if (!regex.test(date)) {
      return 'Wrong Date'
    }

    const [day, month, year] = date.split('-').map(Number)
    const dateObj = new Date(year, month - 1, day)

    if (
      dateObj.getFullYear() !== year ||
      dateObj.getMonth() + 1 !== month ||
      dateObj.getDate() !== day
    ) {
      return 'Invalid date. Please enter a valid date.'
    }

    return null
  }

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
                <FormInput
                  type='text'
                  placeholder='Per Head Amount...'
                  value={perHead}
                  onChange={(e) => setPerHead(e.target.value)}
                />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Function Date:</FormText>
                <FormInput
                  type='text'
                  value={date}
                  onChange={handleDateChange}
                  placeholder='DD-MM-YYYY'
                  maxLength='10'
                />
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
                <FormInput
                  type='text'
                  placeholder='Enter Amount...'
                  value={foodAmount}
                  onChange={(e) => setFoodAmount(e.target.value)}
                />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Stage Amount: </FormText>
                <FormInput
                  type='text'
                  placeholder='Enter Amount...'
                  value={stageAmount}
                  onChange={(e) => setStageAmount(e.target.value)}
                />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Decoration Lights: </FormText>
                <FormInput
                  type='text'
                  placeholder='Enter Amount...'
                  value={decorationLights}
                  onChange={(e) => setDecorationLights(e.target.value)}
                />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Sound System: </FormText>
                <FormInput
                  type='text'
                  placeholder='Enter Amount...'
                  value={soundSystem}
                  onChange={(e) => setSoundSystem(e.target.value)}
                />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Cold Drink: </FormText>
                <FormInput
                  type='text'
                  placeholder='Enter Amount...'
                  value={coldDrink}
                  onChange={(e) => setColdDrink(e.target.value)}
                />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Mineral Water: </FormText>
                <FormInput
                  type='text'
                  placeholder='Enter Amount...'
                  value={mineralWater}
                  onChange={(e) => setMineralWater(e.target.value)}
                />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Hall Rent Balc: </FormText>
                <FormInput
                  type='text'
                  placeholder='Enter Amount...'
                  value={hallRentBalc}
                  onChange={(e) => setHallRentBalc(e.target.value)}
                />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Extra Decor: </FormText>
                <FormInput
                  type='text'
                  placeholder='Enter Amount...'
                  value={extraDecor}
                  onChange={(e) => setExtraDecor(e.target.value)}
                />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText>Others: </FormText>
                <FormInput
                  type='text'
                  placeholder='Enter Amount...'
                  value={others}
                  onChange={(e) => setOthers(e.target.value)}
                />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText style={{ color: 'red' }}>Discount: </FormText>
                <FormInput
                  type='text'
                  placeholder='Enter Discount...'
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </InputSet>
            </InputWrap>
            <InputWrap>
              <InputSet>
                <FormText style={{ color: 'green' }}>Total Amount: </FormText>
                <FormInput type='text' value={totalAmount} readOnly />
              </InputSet>
            </InputWrap>
          </Right>
        </RightLeft>
      </Wrap>
    </Layout>
  )
}

export default NewBooking
