'use client'

import { increment, decrement, reset } from '@/redux/features/counterSlice';
import { changeUsername } from '@/redux/features/userSlice';
import { UseAppDistpatch, UseAppSelector } from "@/redux/services/hooks";


export default function Home() {

  const distpatch = UseAppDistpatch();

  const count = UseAppSelector( (state) => state.counterReducer.value )

  const userName = UseAppSelector( (state) => state.userReducer.userName )
  return (
    <>

    <div className="ml-100 mt-100">

      <h1 className="text-cyan-300 text-2xl">{count}</h1>

      <button className="border rounded px-2 py-0.5"
        onClick={() => {
          distpatch(increment())
        }}
      >
        increment
      </button>

      <br />

      <button className="border rounded px-2 py-0.5"
        onClick={() => {
          distpatch(decrement())
        }}>
        decrement
      </button>


      <button className="border rounded px-2 py-0.5"
        onClick={() => {
          distpatch(reset())
        }}>
        reset
      </button>

      <label htmlFor="">user name : </label>

      <input type="text"  
      className='border' 
      onChange={ (e) => distpatch(changeUsername(e.target.value))}/>

      <span>{ userName }</span>


    </div>
    </>
  );
}
