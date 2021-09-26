const Input = ({ label, type, id, onChangeHandler }) => {
  return (
    <div className="pb-3 row align-items-center">
      <label htmlFor={id} className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-10">
        <input
          type={type}
          id={id}
          onChange={(e) => {
            onChangeHandler(e.target.value)
          }}
        />
      </div>
    </div>
  )
}

export default Input
