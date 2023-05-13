import { ReactNode } from "react"

interface Props {
  children: ReactNode,
  className?: String,
}

export const Center = ({ children, className }: Props) => {
  return (
    <div className={`w-100 vh-100 d-flex align-items-center justify-content-center ${className}`}>
      {children}
    </div>
  )
}
