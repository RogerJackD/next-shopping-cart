"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { increment, decrement, reset } from "@/redux/features/counterSlice";
import { changeUsername } from "@/redux/features/userSlice";
import { UseAppDistpatch, UseAppSelector } from "@/redux/services/hooks";

export default function Home() {
  const dispatch = UseAppDistpatch();

  const count = UseAppSelector((state) => state.counterReducer.value);

  const userName = UseAppSelector((state) => state.userReducer.userName);
  return (
    <>
      <div className="ml-100 mt-100">
        <h1 className="text-cyan-300 text-2xl">{count}</h1>

        <label htmlFor="">user name : </label>

        <Input 
          placeholder="enter username"
          onChange={(e) => dispatch(changeUsername(e.target.value))}/>

        

        <span>{userName}</span>

        <Button
          className="flex items-center gap-2"
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment
        </Button>

        <Button
          className="flex items-center gap-2 my-2 bg-blue-700"
          variant={"default"}
          size={'default'}
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement
        </Button>

        <Button
          className="flex items-center gap-2"
          variant={"destructive"}
          onClick={() => {
            dispatch(reset());
          }}
        >
          reset
        </Button>
      </div>
    </>
  );
}
