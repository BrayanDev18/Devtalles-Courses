interface ChildrenProps {
  children: React.ReactNode
}

export const TagLine = ({ children }: ChildrenProps) => {
  return (
    <div className="capitalize text-indigo-600 text-3xl">
      {children}
    </div>
  )
}