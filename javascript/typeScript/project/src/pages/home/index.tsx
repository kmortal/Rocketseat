import React, {useEffect, useState} from 'react'

import './styles.css'
import {Card, CardProps} from '../../components/Card'

export function Home() {
  let [convidedName, setConvidedName] = useState('Digite o nome')
  const [convideds, setConvideds] = useState<CardProps[]>([])

  function handleConvided(){
    const newConvided = {
      name: convidedName,
      time: new Date().toLocaleDateString('pr-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setConvideds(prevState => [...prevState, newConvided])
  }

  function handleName(name){
    convidedName = name
  }

  useEffect(() => {
    console.log('useEffect foi chamado')
  }, [convideds]) //executado quando a interface é renderizada. {} é o corpo e [] são os estados que o useEffect depende (ser executado quando tal estado mudar, podemos utilizar mais de um estado)

  return (
    <article>

      <header>
        <h1>Nome: {convidedName}</h1>
        <article>
          <strong>Kelvyn</strong>
          <img src='https://source.unsplash.com/random' alt='Foto'></img>
        </article>
      </header>
      
      <input 
        type="text" 
        placeholder="Digite o nome."
        onChange={e => setConvidedName(e.target.value)}
        >
      </input>
      <button type="button" onClick={handleConvided}>
        Adicionar
      </button>
      {
        convideds.map(convided => 
        <Card  
          key={convided.time}
          name={convided.name} 
          time={convided.time}
        />)
        
      }
    </article>
  )
}