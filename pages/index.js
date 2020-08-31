import React, { useCallback, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import validateColor from 'validate-color'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { Plus, RefreshCw } from 'react-feather'
import Form from '../components/Form'
import Grid from '../components/Grid'
import Color from '../components/Color'
import Button from '../components/Button'
import Modal from '../components/Modal'

const ActionWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  button + button {
    margin-top: 16px;
  }
`

export default function Home() {
  const [colors, setColors] = useState(['yellow', 'yellowgreen', 'green'])
  const [newColor, setNewColor] = useState('')
  const [editColor, setEditColor] = useState(null)
  const [hasError, setHasError] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [contentType, setContentType] = useState(null)

  const modalRef = useRef()

  const openModal = () => {
    modalRef.current.openModal()
  }

  const closeModal = () => {
    document.getElementById('color').value = ''
    setNewColor('')
    modalRef.current.closeModal()
  }

  const handleAdd = useCallback(() => {
    setContentType('add')
    openModal()
    setNewColor('')
  }, [])

  const handleChange = (e) => {
    const { value } = e.target
    setNewColor(value)
  }

  const handleEdit = (index) => {
    setContentType('edit')
    setIsEditing(true)
    setNewColor(colors[index])
    setEditColor(index)
    openModal()
  }

  const handleRemove = (index) => {
    const array = [...colors]
    if (index !== -1) {
      array.splice(index, 1)
      setColors(array)
    }
  }

  const handleReset = () => {
    setColors([])
    setNewColor(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateColor(newColor)) {
      setHasError(true)
    } else if (isEditing) {
      setHasError(false)
      const array = [...colors]
      array[editColor] = newColor
      setColors(array)
      setEditColor(null)
      setIsEditing(false)
      document.getElementById('color').value = ''
      setNewColor('')
      closeModal()
    } else {
      setHasError(false)
      setColors([...colors, newColor])
      document.getElementById('color').value = ''
      setNewColor('')
      closeModal()
    }
  }

  function ModalContent(type) {
    switch (type) {
      case 'add':
        return (
          <Form
            label="Add"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            hasError={hasError}
            isVisible={setShowModal}
            value={newColor}
            key="form"
          />
        )
      case 'edit':
        return (
          <Form
            label="Change"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            hasError={hasError}
            isVisible={setShowModal}
            value={newColor}
            key="form"
          />
        )
      default:
        return <div>You know...the usual</div>
    }
  }

  useEffect(() => {
    if (colors.length <= 0) {
      handleAdd()
    }
  }, [colors, handleAdd])

  return (
    <div>
      <Head>
        <title>Color Compare</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {colors.length ? (
        <Grid>
          {colors.map((color, index) => (
            <Color
              color={color}
              formOpen={showModal}
              handleEdit={() => handleEdit(index)}
              handleRemove={() => handleRemove(index)}
              key={index}
            />
          ))}
        </Grid>
      ) : null}
      <ActionWrap>
        <Button
          handleClick={handleAdd}
          icon={<Plus size={24} />}
          label="Add"
          variant="icon"
        />
        <Button
          handleClick={handleReset}
          icon={<RefreshCw size={24} />}
          label="Reset"
          variant="icon"
        />
      </ActionWrap>
      <AnimatePresence>
        <Modal ref={modalRef}>{ModalContent(contentType)}</Modal>
      </AnimatePresence>
    </div>
  )
}
