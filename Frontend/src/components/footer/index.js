import "./style.css";
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>
                        CloudHome is a leading cloud service provider offering reliable and scalable solutions for your business needs.
                    </p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Email: support@cloudhome.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 CloudHome | All Rights Reserved
            </div>
        </footer>

    )
};

export default Footer;