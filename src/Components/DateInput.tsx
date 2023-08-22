import React from "react";

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  background: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const labelStyles: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,
};

type IdateInput = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: IdateInput) => {
  return (
    <div>
      <label style={labelStyles} htmlFor={label}>
        {label}
      </label>
      <input style={inputStyle} id={label} type="date" {...props} />
    </div>
  );
};

export default DateInput;
