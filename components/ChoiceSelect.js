const ChoiceSelect = ({ color, onClick, message }) => {
  return (
    <div
      className="choiceSelect text-center mb-4"
      onClick={onClick}
      style={{ borderColor: color }}
    >
      {message}
    </div>
  )
}

export default ChoiceSelect
