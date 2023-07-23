import "./styles.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact_headline">
          <h2>Contact</h2>{" "}
          <span>Please fill the form below to get in touch with us</span>
        </div>
        <div className="contact_form">
          <div class="form">
            <form action="">
              <p>
                <label for="">Name</label>
                <input type="text" placeholder="Enter your name"/>
              </p>
              <p>
                <label for="">Email Address</label>
                <input type="text" placeholder="Enter your email"/>
              </p>
              <p>
                <label for="">Phone</label>
                <input type="text" placeholder="(+233) 34 - 567 - 8784"/>
              </p>
              <p>
                <label for="">Company</label>
                <input type="text" placeholder="Company name"/>
              </p>
              <p className="full-width">
                <label for="">Message</label>
                <textarea name="" id="" cols="30" rows="7" placeholder="Hi there! I would like to get in touch because...
"></textarea>
              </p>
              <p>
                <button className="form_button">Send Message</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
