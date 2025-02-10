'use client'

import { createContext, useContext, useReducer } from 'react'
import type { Dispatch, ReactNode } from 'react'
import { writeReducer, initialState } from './WriteReducer'
import type { WriteAction, WriteState } from './WriteReducer'

interface IWriteState {
  state: WriteState
  dispatch: Dispatch<WriteAction>
}

const WriteContext = createContext<IWriteState | undefined>(undefined)

export function WriteProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(writeReducer, initialState)

  return <WriteContext.Provider value={{ state, dispatch }}>{children}</WriteContext.Provider>
}

export function useWriteContext() {
  const context = useContext(WriteContext)
  if (!context) {
    throw new Error('useWrite must be used within a WriteProvider')
  }

  return context
}
