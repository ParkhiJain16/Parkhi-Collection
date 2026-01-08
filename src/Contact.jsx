import "./Contact.css"
function Contact(){
    const handleClick =(e)=>{
        e.preventDefault();
        alert("Form Has been Submitted. Our Team will contact you soon!")
    }
    return(
        <div className="contact-page">
            <section className="contact-header">
                <h1>Contact Us</h1>
                <p>We’re here to help you</p>
            </section>
            <section className="contact-container">
                <div className="contact-info">
                    <p>
                    If you have any questions, feedback, or inquiries, feel free
                    to contact us using the details below or the form.
                    </p>
                    <p><strong>Email:</strong> support@parkhicollection.com</p>
                    <p><strong>Phone:</strong> +91 8218947701, +91 7500967701</p>
                    <p><strong>Location:</strong> India</p>
                </div>

                <form className="contact-form" onSubmit={handleClick}>
                    <input type = "text" placeholder="Your Name" required />
                    <input type = "email" placeholder="Your Email" required />
                    <textarea rows="5" placeholder="Message" required />
                    <button type = "submit">Send Message</button>
                </form>
            </section>

        </div>
    )
}
export default Contact;