import React from "react";

const ContactUsTextArea = React.forwardRef((props, ref) => {
  return (
    <>
      <textarea
        id={props.id}
        name={props.submit}
        placeholder={props.placeholder}
        ref={ref}
      />
    </>
  );
});

export default ContactUsTextArea;
