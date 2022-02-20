import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


interface OrderInfoPropsType {
  namePizza?: string
  numberPizza?:number,
  orderNotes?: string,
  price?: number,
  
}

interface ResultContext {
  orderInfo: Array<OrderInfoPropsType>,
  setOrderInfo: (order: Array<OrderInfoPropsType>) => void
 
}

interface ContextPropsType {
  children:ReactNode
}

export const GlobalContext = createContext({} as ResultContext);

export const GlobalStorage = (props:ContextPropsType) => {

  const [orderInfo, setOrderInfo] = useState<OrderInfoPropsType[]>([] as OrderInfoPropsType[]);
  
  
  return (
    <GlobalContext.Provider value={{orderInfo, setOrderInfo}}>
      {props.children}
    </GlobalContext.Provider>
  );
}