import { TextField } from '@mui/material'
import { Dispatch } from 'react'
import {SetStateAction} from 'react'
import IconDollar from "./images/IconDollar"

interface Props {
    setBill:  Dispatch<SetStateAction<number>> }
export const Bill = ({setBill}:Props) =>{
  const bill = (e:any)=> {
    const cuenton = Number(e.target.value)
    if( isNaN(cuenton) ){
        e.target.parentElement.parentElement.previousSibling.classList.remove("error");
        e.target.value = e.target.value.substring(0, e.target.value.length-1)
      }
      else {
        e.target.parentElement.parentElement.previousSibling.classList.add("error")
    setBill(cuenton)
  }}
  return(
    <div className="bill">
      <span>Bill</span>
      <p className='error'>Numeric value needed</p>
      <TextField onChange={bill} className="billInput" size='small' style={{width: '274px'}}/>
      {/* <input onChange={bill} className="billInput" /> */}
      <IconDollar className="bill-icon"/>
    </div>
  )
}

