const Card = ({ children, color }) => {
  return (
    <div className="card mb-4" style={{ borderColor: color }}>
      <div className="card-body">{children}</div>
    </div>
  )
}

export default Card
