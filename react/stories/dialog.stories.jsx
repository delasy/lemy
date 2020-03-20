import React, { useState } from 'react'

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Radio
} from '../index'

export const Default = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={handleButtonClick}>
        Open Dialog
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={handleClose}>
        <DialogHeader>
          Dialog Title
        </DialogHeader>
        <DialogBody>
          <Radio label='Radio Option 1' name='radio' />
          <Radio label='Radio Option 2' name='radio' />
          <Radio label='Radio Option 3' name='radio' />
        </DialogBody>
        <DialogFooter>
          <Button className='mr-1' skin='white'>
            Action 1
          </Button>
          <Button>
            Action 2
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default {
  component: Dialog,
  title: 'Components/Dialog'
}
