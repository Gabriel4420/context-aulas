import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../contexts/Context'
// import { Container } from './styles';

const Home: React.FC = () => {
  const { state, dispatch } = useContext(Context)
  const { name } = state.user
  return (
    <div>
      Tela Home de {name}
      <br />
      <Link to="/">voltar para signup</Link>
    </div>
  )
}

export default Home
