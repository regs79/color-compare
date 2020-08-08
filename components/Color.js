import styled from 'styled-components'

const ColorWrap = styled.div`
  width: auto;
  height: 100%;
  background-color: ${props => props.color ? props.color : '#cccccc'};
`

const Color = ({ color }) => {
  return (
    <ColorWrap color={color} />
  )
}

export default Color
