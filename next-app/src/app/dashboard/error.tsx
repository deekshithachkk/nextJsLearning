import * as React from 'react';

interface ErrorProps{
    error:Error,
    reset:Function
}

export function Error(props:ErrorProps) {
    const {error,reset}=props
  return (
    <div>
      An error occured:{error.message}
      <button onClick={()=>reset()}>Retry</button>
    </div>
  );
}
