import React from 'react'

export default function SectionHeading(props) {

    const {title,subtitle} =props;

  return (
    <>
    <div className='text-center section-heading'>
        <h5 className='section-subtitle text-uppercase text-primary mb-2'>{subtitle}</h5>
        <h2 className='section-title mb-4'>{title}</h2>
    </div>
      
    </>
  )
}
