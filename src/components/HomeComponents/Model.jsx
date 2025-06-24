import React from "react";
import ModelViewer from "../ModeViewer";
import Spinner from "../Spinner";
function Model() {
  return (
    <>
      <section className="modelviewer" id='Service'>
        <div className="container">
          <h3 style={{textAlign:"center"}}>Services</h3>
          <div className="row-1">
            <ModelViewer />
          </div>
          <div className="row-2">
            <div className="col-1">
              <h3>Content management System</h3>
              <p>
               
                The right CMS will make your website easy to manage and update.
              </p>
            </div>
          </div>
          <div className="row-3 ">
            <div className="col-1 r">
              <h3>SEO</h3>
              <p
                style={{
                  marginBottom: "50px",
                }}
              >
                I can help you build brand authority and visibility. You are
                only one click away from your target audience.
              </p>
              <Spinner text="Lorem ipsum" />
            </div>
          </div>
          <div className="row-4">
            <div className="col-1">
              <h3>Web Development</h3>
              <p>
                I devote undivided attention to writing every line of code,
                which is a proof of a well-defined methodology and impeccable
                reasoning.
              </p>
            </div>
          </div>
                  <div className="row-5 ">
            <div className="col-1 r">
              <h3>UI/UX Design</h3>
              <p>
                Transform your digital vision into reality with our expert UI/UX design services. We craft seamless, user-friendly interfaces that leave a lasting impression.
              </p>
            </div>
          </div>
           <div className="row-6">
            <div className="col-1">
              <h3>Website Maintainance</h3>
              <p>
                We understand the importance of having a well-maintained and up-to-date website to ensure a seamless online experience for your visitors.
              </p>
            </div>
          </div>
           <div className="row-7">
            <div className="col-1 r">
              <h3>Web Design</h3>
              <p>
                 Unique web design solutions made with love and in accordance
                with the newest technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Model;
