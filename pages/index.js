import React, { useState } from 'react'
import Head from 'next/head'
import validateColor from 'validate-color'
import styled from 'styled-components'
import { Plus, RefreshCw } from 'react-feather'
import AddForm from '../components/AddForm'
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
  const [colors, setColors] = useState(['green', 'yellow', 'yellowgreen'])
  const [newColor, setNewColor] = useState(null)
  const [editColor, setEditColor] = useState(null)
  const [hasError, setHasError] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e) => {
    const { value } = e.target
    setNewColor(value)
  }

  const handleEdit = (index) => {
    setIsEditing(true)
    setNewColor(colors[index])
    setEditColor(index)
    setShowAdd(true)
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
      document.getElementById('new-color').value = ''
      setNewColor('')
      setShowAdd(false)
    } else {
      setHasError(false)
      setColors([...colors, newColor])
      document.getElementById('new-color').value = ''
      setNewColor('')
      setShowAdd(false)
    }
  }

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
              formOpen={showAdd}
              handleEdit={() => handleEdit(index)}
              handleRemove={() => handleRemove(index)}
              key={index}
            />
          ))}
        </Grid>
      ) : null}
      {colors.length >= 2 ? (
        <ActionWrap>
          <Button
            handleClick={() => setShowAdd(!showAdd)}
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
      ) : null}
      {colors.length < 2 || showAdd ? (
        <Modal>
          <AddForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            hasError={hasError}
            isVisible={setShowAdd}
            value={newColor}
          />
        </Modal>
      ) : null}
    </div>
  )
}
