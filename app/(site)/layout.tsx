import Header from "@/components/site/layouts/header";
import "../globals.css";
import React from 'react'

type Props = {
    children:React.ReactNode
}

const FrontLayout = ({children}: Props) => {
  return (<>
    <Header/>
    <div>{children}</div>
    </>)
}

export default FrontLayout