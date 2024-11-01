import MyButton from "../mainButton/MyButton";
import "./styles.scss";

const ContactUsPage = () => {
  return (
    <div className="about-us">
      <div className="about-us__container">
        {/* Left Section: Contact Information */}
        <div className="about-us__left">
          <h1 className="about-us__left__title">
            UAE International Investments
          </h1>
          <h2 className="about-us__left__subtitle">Get in touch with us!</h2>

          <div className="about-us__left__contact">
            <div className="about-us__left__contact-item">
              <img
                src="/phone.svg"
                alt="Phone Icon"
                className="about-us__icon"
              />
              <span>+123 456 789</span>
            </div>
            <div className="about-us__left__contact-item">
              <img
                src="/email.svg"
                alt="Email Icon"
                className="about-us__icon"
              />
              <span>info@example.com</span>
            </div>
            <div className="about-us__left__contact-item">
              <img
                src="/location.svg"
                alt="Location Icon"
                className="about-us__icon"
              />
              <span>1234 Street, City</span>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="about-us__right">
          <form className="about-us__right__form">
            {/* Name Fields */}
            <div className="about-us__right__form__row">
              <div className="about-us__right__form__input-group">
                <label>First Name</label>
                <input type="text" required />
              </div>
              <div className="about-us__right__form__input-group">
                <label>Last Name</label>
                <input type="text" required />
              </div>
            </div>

            {/* Email and Phone Fields */}
            <div className="about-us__right__form__row">
              <div className="about-us__right__form__input-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="about-us__right__form__input-group">
                <label>Phone Number</label>
                <input type="tel" required />
              </div>
            </div>

            <div className="about-us__right__form__radio-group">
              <h2 className="about-us__right__form__radio-title">
                Select Subject?
              </h2>
              <label>
                <input type="radio" name="subject" required />
                General Inquiry
              </label>
              <label>
                <input type="radio" name="subject" required />
                General Inquiry
              </label>
              <label>
                <input type="radio" name="subject" required />
                General Inquiry
              </label>
              <label>
                <input type="radio" name="subject" required />
                General Inquiry
              </label>
            </div>

            <div className="about-us__right__form__textarea-group">
              <label>Message</label>
              <textarea required rows="4"></textarea>
            </div>

            <MyButton title="send message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
