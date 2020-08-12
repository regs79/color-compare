import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.color ? props.color : '#ffffff'};
  color: ${props => props.textColor ? props.textColor : '#333333'};
  border: none;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 20px;
  &:hover {
    opacity: 0.8;
  }
`

const ButtonLabel = styled.span`
  margin-right: ${props => props.icon ? '10px' : null};
  font-size: 16px;
`

const ButtonIcon = styled.span``

const Button = ({
  color,
  handleClick,
  icon,
  label,
  textColor
}) => {
  return  (
    <StyledButton
      color={color}
      onClick={handleClick}
      textColor={textColor}
    >
      {label ? <ButtonLabel icon={icon}>{label}</ButtonLabel> : null}
      {icon ? <ButtonIcon>{icon}</ButtonIcon> : null}
    </StyledButton>
  )
}

export default Button
