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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  button + button {
    margin-left: 20px;
  }
`

const ColorLabel = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  transform: rotate(90deg);
  transform-origin: 100% 0;
  font-size: 40px;
  text-align: right;
`

const Color = ({ color }) => {
  return (
    <ColorWrap color={color}>
      <ColorLabel>{color}</ColorLabel>
      <ColorActions>
        <Button
          handleClick={() => console.log('edit')}
          icon={<Edit2 size={24} />}
          label="Edit"
          variant="icon"
        />
        <Button
          handleClick={() => console.log('delete')}
          icon={<Trash2 size={24} />}
          label="Delete"
          variant="icon"
        />
      </ColorActions>
    </ColorWrap>
  )
}

export default Color
