import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const btnPink = {
  outline: "none!important",
  border: "none",
  color: "white",
  backgroundColor: "#bb21ab",
  fontSize: "18px",
  fontWeight: "800",
  padding: "10px 40px",
  transition: "all .3s",
  marginTop: "10px",
};

const SignupSchema=yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
})

function Form() {
  return (
    <>
      <section className="form">
        <div className="form-register">
          <h1 className="form-heading">Ready For The Free Trial</h1>
          <p className="form-decript">
            See for yourself just how much money and time Yojee will save you
            and your team
          </p>
          <div className="container mt-2">
            <div className="row">
              <div className="form-card col-12 col-sm-6">
                <img src="./image/Freight quote request.png" />
              </div>
              <div className="form-input col-12 col-sm-6">
                <form>
                  <div>
                    <label>First Name</label>
                    <input
                      placeholder="Your name..."
                      {...register("firstName")}
                    />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input
                      placeholder="Your last name..."
                      {...register("lastName")}
                    />
                  </div>
                  <div>
                    <label>Contact Number</label>
                    <input
                      placeholder="Your contact number..."
                      {...register("contactNumber")}
                    />
                  </div>
                  <div>
                    <label>Company</label>
                    <input
                      placeholder="Your company..."
                      {...register("company")}
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <input placeholder="Your email..." {...register("email")} />
                  </div>
                  <div>
                    <label>Country</label>
                    <select {...register("country")}>
                      <option value="usa">USA</option>
                      <option value="australia">Australia</option>
                      <option value="canada">Canada</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;

{
  /* <form>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="Your name.."
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Your last name.."
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input
                      type="number"
                      placeholder="Your contact number.."
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Company</label>
                    <input
                      type="text"
                      placeholder="Your company.."
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Your email.."
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>Australia</option>
                      <option>Canada</option>
                      <option>USA</option>
                    </select>
                  </div>

                  <div>
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LfTZQkeAAAAACCB-mQ7_k7etFsgX95O2RYghmX3"
                    />
                    <button type="submit" className="btn-pink" style={btnPink}>
                      BOOK DEMO
                    </button>
                  </div>
                </form> */
}
