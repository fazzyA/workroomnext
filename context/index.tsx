"use client"
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';// type Context = {
//     state: State;
//     setState: any;

// }
// type State = {
//     sessionId: string;
// }

const AppContext = createContext({sessionId: uuidv4()});
const userSessionId = `uid_${uuidv4()}`
export function AppWrapper({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState({sessionId: userSessionId})
    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}
export function useAppContext(){
    return useContext(AppContext)
}