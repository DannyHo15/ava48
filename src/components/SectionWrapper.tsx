interface SectionWrapperProps {
  children: React.ReactNode
}

export function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="section-container fixed top-0 left-0 w-full h-full invisible">
      <div className="outer-wrapper w-full h-full overflow-hidden">
        <div className="inner-wrapper w-full h-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-transparent">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
