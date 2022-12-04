const ContactUsInfo = (props) => {
  return (
    <>
      <div className="item mt-50">
        <i className={`fa ${props.icon}`}/>
        {props.operation === "" ? (
          <a href="ContactUsInfo">${props.content}</a>
        ) : (
          <a href={`${props.operation}: ${props.content}`}>{props.content}</a>
        )}
      </div>
    </>
  );
};
export default ContactUsInfo;
