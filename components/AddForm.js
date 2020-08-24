import styled from 'styled-components'
import { Plus } from 'react-feather'
import Button from './Button'

const AddForm = ({
  handleChange,
  handleSubmit,
  hasError,
  newColor,
}) => {
  return(
    <Wrapper>
      <Form>
        <InputWrap>
          <Input
            id="new-color"
            onChange={handleChange}
            placeholder="Enter a color"
            value={newColor}
          />
          <Button
            handleClick={handleSubmit}
            color="#1dab3e"
            icon={<Plus />}
            label="Add"
            textColor="#ffffff"
            variant="text"
          />
        </InputWrap>
        {hasError && 'Invalid format'}
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* background-color: rgba(255,255,255,0.9); */
`

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 60px 40px;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  padding: 4px 8px;
  margin-right: 20px;
  height: 44px;
  font-size: 24px;
  border: none;
  border-bottom: 1px solid #dcdcdc;
  &:focus {
    outline: 2px solid #42a5f5;
  }
`

// const ButtonWrap = styled.div`
//   padding: 8px;
//   border-radius: 50px;
//   background: linear-gradient(145deg, #e6e6e6, #ffffff);
//   box-shadow:  20px 20px 60px #d9d9d9, 
//              -20px -20px 60px #ffffff;
// `

// const Button = styled.button`
//   width: 50px;
//   height: 50px;
//   color: #fff;
//   font-size: 16px;
//   text-shadow: 2px 2px rgba(0,0,0,0.1);
//   border: none;
//   border-radius: 37px;
//   background: linear-gradient(145deg, #2af459, #23cd4b);
//   box-shadow:  1px 1px 2px #1dab3e, 
//               -1px -1px 2px #31ff68;
//   &:hover {
//     background: linear-gradient(145deg, #23cd4b, #2af459);
//   }
//   &:active {
//     background: #27e453;
//     box-shadow: inset 2px 2px 4px #1dab3e, 
//             inset -2px -2px 4px #31ff68;
//   }
// `

export default AddForm