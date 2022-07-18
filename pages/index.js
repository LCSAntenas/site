import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6070745049136765"
     crossorigin="anonymous"></script>
        <title>LCS Segurança e Entretenimento</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <img src="/logo.png" alt="LCS Segurança e Entretenimento" className="logoTop" />

        <div className="grid">
          <a href="https://wa.me/5535988728509" target="_blank" rel="noopener noreferrer" className="card">
            <h3>Câmeras e Monitoramento <br /> &rarr;</h3>
            <p>Torne sua casa, comércio ou escritório mais seguro com nosso sistema de câmeras e monitoramento.</p>
            <br /><br />
            <span className="button">Saiba mais!</span>
            <br /><br />
          </a>

          <a href="https://wa.me/5535988728509" target="_blank" rel="noopener noreferrer" className="card">
            <h3>Antenas Via Satélite <br /> &rarr;</h3>
            <p>Obtenha conosco uma grande variedade de tecnologia, para oferecer o melhor em diversão em família.</p>
            <br /><br />
            <span className="button">Saiba mais!</span>
            <br /><br />
          </a>

          <a href="https://wa.me/5535988728509" target="_blank" rel="noopener noreferrer" className="card">
            <h3>Banda KU <br /> &rarr;</h3>
            <p>Instalação e apontamento desta frequência, com os melhores equipamentos e equipe especializada.</p>
            <br /><br />
            <span className="button">Saiba mais!</span>
            <br /><br />
          </a>

          <a href="https://wa.me/5535988728509" target="_blank" rel="noopener noreferrer" className="card">
            <h3>Automatização de Portões <br /> &rarr;</h3>
            <p>Facilidade e comodidade no seu dia a dia, com a instalação de portões automatizados para sua casa ou comércio.</p>
            <br /><br />
            <span className="button">Saiba mais!</span>
            <br /><br />
          </a>
        </div>
      </main>

      <footer>
        <a href="https://agenciastar.tec.br" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <img src="/star.png" alt="Agência Star" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #101726;
          border-color: #101726;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 3em;
        }

        .logoTop {
          height: 10em;
        }

        .button {
          background: #101726;
          color: #C9DFF2;
          padding: 1rem;
        }

        .button:hover {
          background: #C9DFF2;
          color: #101726;
          border-radius: 10px;
          transition: color 0.45s ease, border-color 0.45s ease;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
