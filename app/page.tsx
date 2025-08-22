'use client'

import { decrement, increment } from '@/redux/features/counterSlice';
import { useAppDistpatch, useAppSelector } from '../redux/hooks';

export default function Home() {

  const count = useAppSelector( state => state.counterReducer.counter );
  const distpatch = useAppDistpatch();
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

    </div>
    </>
  );
}
