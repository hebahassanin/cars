import React from 'react'

export default function SectionHeading(props) {

    const {title,subtitle, align="center"} =props;

  return (
    <>
    <div className={`text-${align} section-heading`}>
        <h5 className='section-subtitle text-uppercase text-primary mb-2'>{subtitle}</h5>
        <h2 className='section-title mb-2'>{title}</h2>
    </div>
      
    </>
  )
}
