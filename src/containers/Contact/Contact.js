import AssuranceCard from "../../components/AssuranceCard/AssuranceCard";
import BreadcrumbBackground from "../../components/breadcrumbBackground/breadcrumbBackground";
import ContactForm from "./contactForm/contactForm";

const Contact = () => {
  return (
    <div className="Contact-main-container">
      <div className="Contact-Breadcrumb-container">
        <BreadcrumbBackground
          HeaderText={"Contact"}
          SecondaryText={"Contact"}
        />
      </div>

      <div className="Contact-Form-container">
        <ContactForm />
      </div>

      <div className="Contact-Assurance-container">
        <AssuranceCard />
      </div>
    </div>
  );
};

export default Contact;
