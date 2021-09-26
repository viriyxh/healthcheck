const Card = ({ children }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default Card
