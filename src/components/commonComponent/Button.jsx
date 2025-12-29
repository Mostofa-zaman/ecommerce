
const Button = ({children, className }) => {
  return (
    <div  className={`${className} px-8 rounded cursor-pointer bg-primary_500 `}>{children}</div>
  )
}

export default Button