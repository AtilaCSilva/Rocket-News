import { Form } from '../../components/Form/Form'
import './style.css'
import logo from '../../assets/logo.svg'
import arrow from '../../assets/arrow-right.svg'

export function Home() {
  return (
    <main>
      <section className="content">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>

        <div className="article">
          <h2>atualize ideias e informações em 5 minutos</h2>
          <span>
            Tudo que você precisa saber para começar seu dia bem e informado
          </span>
          <aside>
            noticias sobre o universo Rocketseat, e tudo o que precisa para
            começar o dia melhor. <br />
            perfeito para se preparar para codar ☕
          </aside>
        </div>

        <Form />

        <div className="link">
          <a href="https://mail.google.com/mail/u">deixe-me ler primeiro</a>
          <img src={arrow} alt="ícone de seta " className="arrow" />
        </div>
      </section>
      <section className="background"></section>
    </main>
  )
}
