import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(255,255,255,0.9); */
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow:  20px 20px 60px rgba(0,0,0,0.3), 
              -20px -20px 60px rgba(0,0,0,0.1);
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

const ButtonWrap = styled.div`
  padding: 8px;
  border-radius: 50px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow:  20px 20px 60px #d9d9d9, 
             -20px -20px 60px #ffffff;
`

const Button = styled.button`
  width: 50px;
  height: 50px;
  color: #fff;
  font-size: 16px;
  text-shadow: 2px 2px rgba(0,0,0,0.1);
  border: none;
  border-radius: 37px;
  background: linear-gradient(145deg, #2af459, #23cd4b);
  box-shadow:  1px 1px 2px #1dab3e, 
              -1px -1px 2px #31ff68;
  &:hover {
    background: linear-gradient(145deg, #23cd4b, #2af459);
  }
  &:active {
    background: #27e453;
    box-shadow: inset 2px 2px 4px #1dab3e, 
            inset -2px -2px 4px #31ff68;
  }
`

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
          <ButtonWrap>
            <Button onClick={handleSubmit}>ADD</Button>
          </ButtonWrap>
        </InputWrap>
        {hasError && 'Invalid format'}
      </Form>
    </Wrapper>
  )
}

export default AddForm