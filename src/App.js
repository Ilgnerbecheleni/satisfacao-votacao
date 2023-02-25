import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { supabase } from './client'
function App () {
  const [dado, setDado] = useState({})

  function fetchSatisfacao() {
    return new Promise((resolve, reject) => {
      supabase
        .from('satisfacao')
        .select('*')
        .then(({ data, error }) => {
          if (error) {
            reject(error)
          } else {
            resolve(data)
          }
        })
    })
  }



  async function lerDados () {
    try {
      const data = await fetchSatisfacao();
      setDado(data[0]);
      return data[0];
      console.log(dado);
    } catch (error) {
      console.log(error)
    }
  }

  async function atualiza () {}

  useEffect(() => {
lerDados();
  }, [])

  async function alterarBD (data) {
    try {
      const { error } = await supabase
        .from('satisfacao')
        .update(data)
        .eq('id', '1')

      if (error) {throw error}
      else{setDado(data);}

    } catch (error) {
      alert(error.message)
    }
  }

  // eslint-disable-next-line no-redeclare
  async function atualiza (valor) {

    const antigo = await lerDados();
    const prev = antigo[valor]
    const atual = prev + 1
    let newData = { ...antigo, [valor]: atual }
    alterarBD(newData);
    lerDados();
    console.log(newData);

  }

  return (
    <div className='App'>
      <h1>Como você classifica nosso atendimento?</h1>
      <div className='botoes'>
        <button onClick={() => atualiza('ruim')} className='ruim'>
          Ruim &#128532;{' '}
        </button>
        <button onClick={() => atualiza('bom')} className='bom'>
          Bom &#128521;
        </button>
        <button onClick={() => atualiza('otimo')} className='otimo'>
          Otimo &#128513;
        </button>
      </div>
    </div>
  )
}

export default App
