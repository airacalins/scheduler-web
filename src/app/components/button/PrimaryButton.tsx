import React from 'react'
import { Button } from 'react-bootstrap'

interface Props {
  label: String;
  onClick: () => void;
}

export const PrimaryButton = ({ label, onClick }: Props) => {
  return (
    <Button
      className='btn__primary'
      onClick={onClick}
    >
      {label}
    </Button>
  )
}
