import React from 'react'
import styles from '@/app/components/common/components/button.module.css'

interface ButtonProps {
  solid: boolean
  text: string
}

const Button: React.FC<ButtonProps> = ({ solid, text }) => {
  return (
    <button
      className={
        solid ? `${styles.button} ${styles.solid}` : `${styles.button}`
      }
    >
      {text}
    </button>
  )
}

export default Button
