const ChoiceSelect = ({ color, bgColor, list, message }) => {
  return (
    <div className="d-flex align-items-center pb-4">
      <div className="me-2">
        <div
          className="choiceList d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: bgColor,
            color: color,
          }}
        >
          {list}.
        </div>
      </div>
      <div className="flex-grow-1">
        <span>{message}</span>
      </div>
    </div>
  )
}

export default ChoiceSelect
