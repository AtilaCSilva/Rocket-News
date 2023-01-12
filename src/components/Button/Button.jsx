import './style.css'
import send from '../../assets/send.svg'

export function Button() {
  return (
    <button aria-label="botão enviar" type="submit">
      <img src={send} alt="ícone de enviar em formato de aviãozinho" />
    </button>
  )
}
