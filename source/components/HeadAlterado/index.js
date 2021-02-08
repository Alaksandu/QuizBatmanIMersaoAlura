import React from 'react';
import Head from 'next/head';

function HeadAlterado() {
  return (
    <div>
      <Head>
      
        <title>Quiz Batman Alura</title>
        <meta name="title" content="Quiz Batman Alura" />
        <meta name="description" content="Até Onde Você Sabe Sobre o Morcego?" />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quiz-batman-imersao-alura.vercel.app/" />
        <meta property="og:title" content="Quiz Batman Alura" />
        <meta property="og:description" content="Até Onde Você Sabe Sobre o Morcego?" />
        <meta property="og:image" content="https://referencianerd.com/wp-content/uploads/2019/05/rumored-info-on-the-villains-who-might-be-used-in-the-batman-and-sucide-squad-2-social.jpg" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quiz-batman-imersao-alura.vercel.app/" />
        <meta property="twitter:title" content="Quiz Batman Alura" />
        <meta property="twitter:description" content="Até Onde Você Sabe Sobre o Morcego?" />
        <meta property="twitter:image" content="https://referencianerd.com/wp-content/uploads/2019/05/rumored-info-on-the-villains-who-might-be-used-in-the-batman-and-sucide-squad-2-social.jpg" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
    </div>
  );
}

export default HeadAlterado;
