const InputRadio = ({ label, items, name, onChangeHandler }) => {
  return (
    <div className="pb-3 row align-items-center">
      <span className="col-sm-2 col-form-label">{label}</span>
      <div className="col-sm-10">
        <div>
          {items.map((item) => {
            return (
              <div key={item.id} className="d-inline-block me-3">
                <input
                  type="radio"
                  id={item.id}
                  name={name}
                  value={item.value}
                  onChange={(e) => {
                    onChangeHandler(e.target.value)
                  }}
                />
                <label htmlFor={item.id}>{item.label}</label>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default InputRadio
