import React, { useState } from 'react'
import Head from 'next/head'
import validateColor from 'validate-color'
import styled from 'styled-components'
import { Plus, RefreshCw } from 'react-feather'
import AddForm from '../components/AddForm'
import Grid from '../components/Grid'
import Color from '../components/Color'
import Button from '../components/Button'

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
  const [colors, setColors] = useState([])
  const [newColor, setNewColor] = useState(null)
  const [hasError, setHasError] = useState(false)
  const [showAdd, setShowAdd] = useState(true)

  const handleChange = e => {
    const { value } = e.target
    setNewColor(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!validateColor(newColor)) {
      setHasError(true)
    } else {
      setHasError(false)
      setColors([...colors, newColor])
      setShowAdd(false)
      document.getElementById("new-color").value = ''
    }
  }

  return (
    <div>
      <Head>
        <title>Color Compare</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {colors.length < 2 || showAdd ? (
        <AddForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          hasError={hasError}
          value={newColor}
        />
      ) : null}
      {colors.length ? (
        <Grid>
          {colors.map((color, index) =>
            <Color color={color} key={index} />
          )}
        </Grid>
      ) : null}
      {colors.length >= 2 ? (
        <ActionWrap>
          <Button
            handleClick={() => setShowAdd(true)}
            icon={<Plus size={16} />}
            label="Add"
          />
          <Button
            handleClick={() => setColors([])}
            icon={<RefreshCw size={16} />}
            label="Reset"
          />
        </ActionWrap>
      ) : null}
    </div>
  )
}
