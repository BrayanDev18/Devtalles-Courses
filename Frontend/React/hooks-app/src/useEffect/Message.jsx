import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {

    const onMouseMove = (event) => {
      console.log(event);
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div>
      <h1>Usuario registrado</h1>
    </div>
  );
}