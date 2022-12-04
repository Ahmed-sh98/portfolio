import React from "react";

const ContactUsInput = React.forwardRef((props , ref) => {
    return(
        <input
                  type={props.type}
                  id={props.id}
                  placeholder={props.placeholder}
                  ref={ref}
                />
    )
});
export default ContactUsInput;
