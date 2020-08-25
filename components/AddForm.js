import styled from 'styled-components'
import { Plus } from 'react-feather'
import Button from './Button'

const AddForm = ({
  handleChange,
  handleSubmit,
  hasError,
  value,
}) => {
  return(
    <Wrapper>
      <Form>
        <InputWrap>
          <Input
            id="new-color"
            onChange={handleChange}
            placeholder="Enter a color"
            value={value}
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
  border-radius: 20px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
              rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
              rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
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

export default AddForm