import React from 'react';
import Button from '@mui/material/Button';

type SMButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export default function SMButton(props: SMButtonProps) {
  const { label, onClick, disabled, type } = props;

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      type={type || 'button'} 
    >
      {label}
    </Button>
  );
}
