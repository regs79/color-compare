import styled from 'styled-components'
import { Edit2, Trash2 } from 'react-feather'
import Button from '../components/Button'

const ColorWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: auto;
  height: 100%;
  background-color: ${props => props.color ? props.color : '#cccccc'};
`

const ColorActions = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 40px;
  button + button {
    margin-left: 20px;
  }
  ${ColorWrap}:hover & {
    display: ${props => !props.formOpen ? 'flex' : 'none'};
  }
`

const ColorLabel = styled.div`
  position: absolute;
  width: 400px;
  bottom: 10px;
  left: -390px;
  transform: rotate(90deg);
  transform-origin: right bottom;
  font-size: 32px;
  text-align: right;
`

const Color = ({ color, formOpen, handleEdit, handleRemove }) => {
  return (
    <ColorWrap color={color}>
      <ColorLabel>{color}</ColorLabel>
      <ColorActions formOpen={formOpen}>
        <Button
          handleClick={handleEdit}
          icon={<Edit2 size={24} />}
          label="Edit"
          variant="icon"
        />
        <Button
          handleClick={handleRemove}
          icon={<Trash2 size={24} />}
          label="Delete"
          variant="icon"
        />
      </ColorActions>
    </ColorWrap>
  )
}

export default Color
