import React from "react";
import './../../assets/scss/bootstrap/_form.scss';
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      <section className="form">
        <div className="form__register">
          <h1 className="form-heading">Ready For The Free Trial</h1>
          <p className="form-decript">
            See for yourself just how much money and time Yojee will save you
            and your team
          </p>
          <div className="container mt-2">
            <div className="row">
              <div className="form__card col-12 col-sm-6">
                <img src="./image/Freight quote request.png" />
              </div>
              <div className="form-input col-12 col-sm-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form__group">
                    <label>First Name</label>
                    <input
                      placeholder="Your name..."
                      {...register("firstName", {
                        required: true,
                        pattern: /^[A-Za-z]+$/i,
                        maxLength: 20,
                      })}
                    />

                    {errors?.firstName?.type === "required" && (
                      <p>This field is required</p>
                    )}
                    {errors?.firstName?.type === "maxLength" && (
                      <p>First name cannot exceed 20 characters</p>
                    )}
                    {errors?.firstName?.type === "pattern" && (
                      <p>Alphabetical characters only</p>
                    )}
                  </div>

                 <div className="form__group">
                 <label>Last Name</label>
                  <input
                    placeholder="Your last name..."
                    {...register("lastName", {
                      required: true,
                      pattern: /^[A-Za-z]+$/i,
                      maxLength: 20,
                    })}
                  />
                  {errors?.lastName?.type === "required" && (
                    <p>This field is required</p>
                  )}
                  {errors?.lastName?.type === "maxLength" && (
                    <p>Last name cannot exceed 20 characters</p>
                  )}
                  {errors?.lastName?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                  )}
                 </div>
                    <br />
                  <div className="form__group">
                  <label>Contact Number</label>
                  <input
                    placeholder="Your contact number..."
                    {...register("contactNumber", {
                      required: true,
                      pattern: /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/i,
                    })}
                  />
                  {errors?.contactNumber?.type === "required" && (
                    <p>This field is required</p>
                  )}
                  {errors?.contactNumber?.type === "pattern" && (
                    <p>Number characters only</p>
                  )}
                  </div>

                  <div className="form__group">
                  <label>Company</label>
                  <input
                    placeholder="Your company..."
                    {...register("company", { required: true })}
                  />
                  {errors?.company?.type === "required" && (
                    <p>This field is required</p>
                  )}
                  </div>

                  <div className="form__group">
                  <label>Email</label>
                  <input
                    placeholder="Your email..."
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                  {errors?.email?.type === "required" && (
                    <p>This field is required</p>
                  )}
                  {errors?.email?.type === "pattern" && <p>Email invalidate</p>}
                  </div>

                  <div className="form__group">
                  <label>Country</label>
                  <select {...register("country")}>
                    <option value="usa">USA</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                  </select>
                  </div>

                  <button type="submit" className="btn-pink">
                    BOOK A DEMO
                  </button>
                
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
                  <div className="form__group">
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
