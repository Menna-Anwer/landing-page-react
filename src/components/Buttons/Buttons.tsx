import { Button } from "react-bootstrap"

const Buttons = ({className,nameBtn}: any) => {
  return (
       <Button className={className} >{nameBtn}</Button>
  )
}

export default Buttons
