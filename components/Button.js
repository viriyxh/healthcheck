const Button = ({ color, onClick, message }) => {
  return (
    <div className="text-center">
      <button onClick={onClick}>{message}</button>
    </div>
  )
}

export default Button
