import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./websitePage.css";

const WebsitePage = () => {
    return (
        <div className="website-page">
            <Navbar />
            <div className="main-content-website">
                <div className="content-section-website">
                    <div className="dynamic-text"><h1>CloudHome</h1></div>
                    <div className="content">
                        <div className="paragraph">
                            <p>
                                <span className="highlighted"></span>Welcome to CloudHome, your ultimate cloud storage solution designed for modern needs. Our platform offers seamless storage capabilities, providing a secure and accessible space for all your files. Whether you're managing personal documents, collaborating on team projects, or sharing large media files,CloudHome  ensures efficient performance with top-notch security. Our user-friendly interface is designed for simplicity and ease of use, making file management effortless.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default WebsitePage;
