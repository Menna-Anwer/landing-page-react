import { Button } from "react-bootstrap"

const Buttons = ({ className, nameBtn, onClick }: any) => {
  return (
    <Button
      className={className}
      style={{ backgroundColor: 'var(--button-bg-color)', color: 'var(--button-text-color)', position: 'absolute' }}
      onClick={onClick} >{nameBtn}
    </Button>
  )
}

export default Buttons
