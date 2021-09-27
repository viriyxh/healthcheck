const Input = ({ label, type, id, color, onChangeHandler }) => {
  return (
    <div className="pb-3 row align-items-center">
      <label htmlFor={id} className="col-6 col-sm-4 col-form-label">
        {label}
      </label>
      <div className="col-6 col-sm-8">
        <input
          type={type}
          id={id}
          min={type === "number" ? "0" : ""}
          onChange={(e) => {
            onChangeHandler(e.target.value)
          }}
          style={{ borderColor: color }}
        />
      </div>
    </div>
  )
}

export default Input
