"use client"

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
  isHomePage?: boolean
}

export function PageWrapper({ children, className = "", isHomePage = false }: PageWrapperProps) {
  return (
    <div className={`${isHomePage ? "" : "pt-16"} ${className}`}>
      {children}
    </div>
  )
}