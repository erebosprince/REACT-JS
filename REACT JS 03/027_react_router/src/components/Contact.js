import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
    
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
      fNgay: "thu3"
      // fName:"",
      // fEmail:"",
      // fPhone:"",
      // fMess:""

    }
  }
  
      isChange = (event) => {
        const ten = event.target.name;
        const giaTri = event.target.value;

        // console.log(ten);  
        // console.log(giaTri);
        this.setState({
          [ten]: giaTri
        });     

          
      }

      isFileChange = (event) => {
        const tenAnh = event.target.files[0].name;
        this.setState({
          fAnh: tenAnh
        });
        
      }

      submitForm = (event) => {
        event.preventDefault();
        this.setState({
          isRedirect: true
        });
    }

      getGiaTri = () => {
        var noiDung = "";
        noiDung += "Tên là : " + this.state.fName;
        noiDung += " .Email là : " + this.state.fEmail;
        noiDung += " .Phone là : " + this.state.fPhone;
        noiDung += " .Message là : " + this.state.fMess;
        noiDung += " .Thứ là : " + this.state.fNgay;
        noiDung += " .Tên ảnh là : " + this.state.fAnh;

        return noiDung
      }
    render() {
        if (this.state.isRedirect === true) {
          console.log( this.getGiaTri() );
          
          return <Redirect to="/"/>
        }

        return (
                <div>
                <header className="masthead tintuc">
                  <div className="container h-100">
                    <div className="row h-100">
                      <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                          <h1 className="mb-1 text-center">Trang liên hệ.</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                {/* begin lien he  */}
                <section id="contact">
                  <div className="container">
                    <h2 className="text-center text-uppercase text-secondary mb-0">Liên hệ với chúng tôi</h2>
                    <hr className="star-dark mb-5" />
                    <div className="row">
                      <div className="col-lg-8 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                        {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                        <form name="sentMessage" id="contactForm" noValidate="novalidate">
                          <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                              <label>Name</label>
                              <input name="fName" onChange={(event) => this.isChange(event)} className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                              <p className="help-block text-danger" />
                            </div>
                          </div>
                          <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                              <label>Email Address</label>
                              <input name="fEmail" onChange={(event) => this.isChange(event)} className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                              <p className="help-block text-danger" />
                            </div>
                          </div>
                          <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                              <label>Phone Number</label>
                              <input name="fPhone" onChange={(event) => this.isChange(event)} className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                              <p className="help-block text-danger" />
                            </div>
                          </div>
                          <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                              <label>Message</label>
                              <textarea name="fMess" onChange={(event) => this.isChange(event)} className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                              <p className="help-block text-danger" />
                            </div>
                          </div>
                          <br />

                            {/* <div class="form-group"> */}
                              <label>Chọn ngày</label>
                              <select value={this.state.fNgay} onChange={(event) => this.isChange(event)} className="form-control" name="fNgay" id="">
                                <option value="thu2">Thứ 2</option>
                                <option value="thu3">Thứ 3</option>
                                <option value="thu4">Thứ 4</option>
                              </select>
                            <br/>
                              <input  onChange={(event) => this.isFileChange(event)} type="file" name="fAnh" id=""/>
                            <br/>
                            <br/>
                          <div id="success" />
                          <div className="form-group">
                            <button onClick={(event)=>this.submitForm(event)} type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
        );
    }
}

export default Contact;