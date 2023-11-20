'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface LoginProps  {
	userCreated: boolean,
	setUserCreated: Dispatch<SetStateAction<boolean>>
	userCreatedEmail: string,
	setUserCreatedEmail: Dispatch<SetStateAction<string>>
}

interface LoginContextProviderProps {
  children: ReactNode;
}


const LoginContext = createContext<LoginProps>({
	userCreated : false,
	setUserCreated: (): boolean => false,
	userCreatedEmail: '',
	setUserCreatedEmail: (): string => ''
})

export const LoginContextProvider = ({children}: LoginContextProviderProps) =>{
	const [userCreated, setUserCreated] = useState(false)
	const [userCreatedEmail, setUserCreatedEmail] = useState('')

	return (
		<LoginContext.Provider value={{userCreated, setUserCreated, userCreatedEmail, setUserCreatedEmail}}>
			{children}
		</LoginContext.Provider>
	)
}

export const useLoginContext = () => useContext(LoginContext)