import Image from "next/image"

const Footer = ({ variant }) => {
  const image = variant === "light" ? "/embify.png" : "/embify.png"

  return (
    <div className="position-relative text-center py-5">
      <Image src={image} alt="" width={100} height={100} />
    </div>
  )
}

export default Footer
