import React, { useEffect, useState } from 'react'

export default function useDelayedUnmounting(time = 500) {
  const [state, setState ] = useState("unmounted");

  const show = () => {
    if(state === "unmounting"){
      return;
    }

    setState("mounting");

  }

  const hide = () => {
    if(state === "mounting"){
      return
    }
  }
  
  return (
    <div>
      
    </div>
  )
}
