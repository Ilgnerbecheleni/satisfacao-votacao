import { useEffect, useState } from 'react'
import './App.css'
import { supabase } from './client'
function App () {
  const [dado, setDado] = useState({})

  async function lerDados () {
    try {
      const { data, error } = await supabase.from('satisfacao').select('*')
      if (error) throw error
      if (data != null) {
        // console.log(data)// [product1,product2,product3]
        setDado(...data)
        console.log(dado)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  async function atualiza () {}

  useEffect(() => {
    lerDados()
  }, [])

  async function alterarBD (data) {
    try {
      const { error } = await supabase
        .from('satisfacao')
        .update(data)
        .eq('id', '1')

      if (error) throw error
    } catch (error) {
      alert(error.message)
    }
  }

  // eslint-disable-next-line no-redeclare
  async function atualiza (valor) {
    const prev = dado[valor]
    const atual = prev + 1
    const newData = { ...dado, [valor]: atual }
    alterarBD(newData)
    setDado(newData)
    console.log(newData)
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
