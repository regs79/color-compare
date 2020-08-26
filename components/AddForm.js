import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Plus } from 'react-feather'
import Button from './Button'

const AddForm = ({
  handleChange,
  handleSubmit,
  hasError,
  isVisible,
  value,
}) => {
  const inputRef = useRef(null)

  useEffect(() => {
    if (isVisible) {
      inputRef.current.focus()
    }
  }, [isVisible])

  return (
    <form>
      <InputWrap>
        <Input
          id="new-color"
          onChange={handleChange}
          placeholder="Enter a color"
          ref={inputRef}
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
    </form>
  )
}

AddForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  hasError: PropTypes.bool,
  isVisible: PropTypes.bool,
  value: PropTypes.string,
}

AddForm.defaultProps = {
  handleChange: () => {},
  handleSubmit: () => {},
  hasError: false,
  isVisible: false,
  value: '',
}

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
