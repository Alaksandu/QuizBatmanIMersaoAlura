import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../source/components/Widgets';
import Footer from '../source/components/Footer';
import GitHubCorner from '../source/components/GitHubCorner';
import QuizBackground from '../source/components/QuizBackground';
import QuizLogo from '../source/QuizLogo';
import Botao from '../source/components/Botao';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

// function Title(props){
//   return <h1>{props.children}</h1>
// }

// const BackgroundImage = styled.div`
//     background-image: url(${db.bg});
//     flex: 1;
//     background-size: cover;
//     background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  } 
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log("retorno do use state", name, setName)

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1> Primeira Caixa</h1>
          </Widget.Header>
          <Widget.Content>

          <form onSubmit={function(infoEvent) {
            infoEvent.preventDefault();
            router.push(`/quiz?name=${name}`);
            console.log('Fazendo um submit pelo React');

          }}
          >
            <input onChange={function(infoEvent){
              console.log(infoEvent.target.value);
              // State
              //name = infoEvent.target.value;
              setName(infoEvent.target.value);
            }}
            placeholder="E ai, diz teu nome"/>
            <Botao type="submit" disabled={name.length === 0}>
              Jogar {name}
            </Botao>
          </form>   

          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Segunda Caixa</h1>

            <p>Lorem ipsum mussum e tals...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Alaksandu/QuizBatmanIMersaoAlura" />
    </QuizBackground>
  );
}
