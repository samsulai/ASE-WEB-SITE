
function Button({className, text, children}) {
  return (
    <div className={`inline-flex bg-app-main font-bold text-white lg:px-12 lg:py-3 py-2 px-6 text-sm lg:text-base cursor-pointer ${className || ""}`}>
      {text || children}
    </div>
  )
}

export default Button
