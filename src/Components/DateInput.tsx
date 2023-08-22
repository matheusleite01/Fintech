import React from 'react'

type IdateInput = React.ComponentProps<'input'> & {
  label: string;
}

const DateInput = ({label, ...props}: IdateInput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} type="date" {...props}/>
    </div>
  )
}

export default DateInput