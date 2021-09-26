const Button = ({ color, onClick, message }) => {
  return (
    <div className="text-center">
      <button style={{ backgroundColor: color }} onClick={onClick}>
        {message}
      </button>
    </div>
  )
}

export default Button
