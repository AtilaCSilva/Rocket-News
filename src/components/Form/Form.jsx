import { useState } from 'react'
import { Button } from '../Button/Button'
import './style.css'

export function Form() {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    alert('Email successfully sent!')
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Insira seu email:</legend>
        <div>
          <input
            type="email"
            placeholder="oi@rocketseat.com"
            required
            size={90}
            autoFocus
            value={email}
            pattern="+@rocketseat\.com\.br"
            onChange={e => setEmail(e.target.value)}
          />

          <Button />
        </div>
      </fieldset>
    </form>
  )
}
