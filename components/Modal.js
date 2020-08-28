import { forwardRef, useImperativeHandle, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Modal = forwardRef(({ children }, ref) => {
  const [display, setDisplay] = useState(false)

  const open = () => {
    setDisplay(true)
  }

  const close = () => {
    setDisplay(false)
  }

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    }
  })

  if (display) {
    return ReactDOM.createPortal(
      <Wrapper>
        <BackDrop onClick={close} />
        <Content>{children}</Content>
      </Wrapper>,
      document.body
    )
  }
  return null
})

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
`

const Content = styled.div`
  position: absolute;
  z-index: 101;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  /* height: 40%; */
  padding: 40px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`

Modal.displayName = 'Modal'
export default Modal
