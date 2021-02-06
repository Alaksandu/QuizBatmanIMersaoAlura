import Head from 'next/head'

function HeadAlterado() {
  return (
    <div>
      <Head>
        <title>Quiz Batman Imersão Alura</title>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Quiz Batman Imersão Alura"/>
        <meta property="og:url" content="quiz-batman-imersao-alura.vercel.app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content="https://referencianerd.com/wp-content/uploads/2019/05/rumored-info-on-the-villains-who-might-be-used-in-the-batman-and-sucide-squad-2-social.jpg" />
      </Head>
    </div>
  )
}

export default HeadAlterado