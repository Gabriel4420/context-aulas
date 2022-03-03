import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../contexts/Context'
const SignUp: React.FC = () => {
  const { state, dispatch } = useContext(Context)

  const { name, age } = state.user
  return (
    <div>
      Tela Signup de {name} e tem {age} anos.
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'CHANGE_NAME', payload: { name: e.target.value } })
        }
      />
      <input
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'CHANGE_AGE', payload: { age: e.target.value } })
        }
      />
      <br />
      <Link to="/home">ir para Home</Link>
    </div>
  )
}

export default SignUp
