import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


interface OrderInfoPropsType {
  id?:number,
  namePizza?: string
  numberPizza?:number,
  orderNotes?: string,
  price?: number,
  
}

interface ResultContext {
  orderInfo: Array<OrderInfoPropsType>,
  setOrderInfo: (order: Array<OrderInfoPropsType>) => void,
  deliveryTime: number,
  setDeliveryTime: (time: number) => void,
 
}

interface ContextPropsType {
  children:ReactNode
}

export const GlobalContext = createContext({} as ResultContext);

export const GlobalStorage = (props:ContextPropsType) => {

  const [orderInfo, setOrderInfo] = useState<OrderInfoPropsType[]>([] as OrderInfoPropsType[]);
  const [deliveryTime, setDeliveryTime] = useState(0)
  
  
  return (
    <GlobalContext.Provider value={{orderInfo, setOrderInfo, deliveryTime, setDeliveryTime}}>
      {props.children}
    </GlobalContext.Provider>
  );
}