
function Heading({ className, children }) {
  return (
    <h1 className={`text-2xl lg:text-3xl text-center text-app-main font-bold ${className}`}>{children}</h1>
  )
}

export default Heading;
