const ChoiceSelect = ({ color, onClick, message }) => {
  return (
    <div
      className="choiceSelect text-center mb-3"
      onClick={onClick}
      style={{ borderColor: color }}
    >
      {message}
    </div>
  )
}

export default ChoiceSelect
