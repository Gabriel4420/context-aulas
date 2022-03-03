import { createContext, useReducer } from 'react'
import {
  UserType,
  userInitialState,
  userReducer,
} from '../../Reducers/userReducer'
import { reducerActionType } from '../../types/reducerActionType'

type initialStateType = {
  user: UserType
}

type ContextType = {
  state: initialStateType
  dispatch: React.Dispatch<any>
}

const InitialState = {
  user: userInitialState,
}

export const Context = createContext<ContextType>({
  state: InitialState,
  dispatch: () => null,
})

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  user: userReducer(state.user, action),
})

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, InitialState)
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
