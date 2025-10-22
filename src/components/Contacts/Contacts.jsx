import "./contacts.css";
import ContactSvg from "./ContactSvg";
import Promote from "../Promote/Promote";

const Contact = () => {
  return (
    <div className="contact">
      <div className="cSection ">
        <Promote />
      </div>
      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
