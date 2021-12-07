import { InputGroup } from "./input-group.js";

class Register {
  $container;
  $title;

  $formRegister;
  $inputGroupDisplayName;
  $inputGroupEmail;
  $inputGroupPassword;
  $inputGroupConfirmPassword;

  $notifyMsg;
  $btnSubmit;
  
  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("center", "h-screen", "flex-row");

    // create title
    this.$title = document.createElement("h3");
    this.$title.innerHTML = "Register";

    // create form
    this.$formRegister = document.createElement("form");
    this.$formRegister.addEventListener("submit", this.handleSubmit);

    this.$inputGroupDisplayName = new InputGroup(
      "text",
      "Display Name",
      "displayName"
    );
    this.$inputGroupEmail = new InputGroup("email", "Email", "email");
    this.$inputGroupPassword = new InputGroup(
      "password",
      "Password",
      "password"
    );
    this.$inputGroupConfirmPassword = new InputGroup(
      "password",
      "Confirm Password",
      "confirmPassword"
    );

    // create Message
    this.$notifyMsg = document.createElement("div");

    // create Button
    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.innerHTML = "Submit";
    this.$btnSubmit.type = "Register";
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.$inputGroupEmail);
    const email = this.$inputGroupEmail.getInputValue();
    
    const displayName = this.$inputGroupDisplayName.getInputValue();
    const password = this.$inputGroupPassword.getInputValue();
    const confirmPassword = this.$inputGroupConfirmPassword.getInputValue();

    // trước khi form submit reset các value input về null
    this.$inputGroupDisplayName.setValue(null);
    this.$inputGroupEmail.setValue(null);
    this.$inputGroupPassword.setValue(null);
    this.$inputGroupConfirmPassword.setValue(null);

    //validate value form input
    if (!email) {
      this.$inputGroupEmail.setErrorMsg("Email can not be empty !");
    }

    if (!displayName) {
      this.$inputGroupDisplayName.setErrorMsg(
        "Display Name can not be empty !"
      );
    }

    if (password.length < 6) {
      this.$inputGroupPassword.setErrorMsg(
        "Password length must be at least 6 characters !"
      );
    }

    if (password !== confirmPassword) {
      this.$inputGroupPassword.setErrorMsg("Confirm password not match !");
    }

    // // xác thực người dùng
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     this.$notifyMsg.innerHTML = "Register Successfully !";
    //     firebase.auth.currentUser.sendEmailVerification(); // gửi thông tin về mail để xác nhận

    //     this.$inputGroupDisplayName.setValue("");
    //     this.$inputGroupEmail.setValue("");
    //     this.$inputGroupPassword.setValue("");
    //     this.$inputGroupConfirmPassword.setValue("");
    //   })
    //   .catch((err) => {
    //     this.$notifyMsg.innerHTML = err.toString(); // in ra lỗi của firebase
    //     console.error(err);
    //   });
  }

  render() {
    // append input group to form
    this.$formRegister.appendChild(this.$inputGroupDisplayName.render());
    this.$formRegister.appendChild(this.$inputGroupEmail.render());
    this.$formRegister.appendChild(this.$inputGroupPassword.render());
    this.$formRegister.appendChild(this.$inputGroupConfirmPassword.render());
    // append button
    this.$formRegister.appendChild(this.$btnSubmit);

    // append form to container
    this.$container.appendChild(this.$title);
    this.$container.appendChild(this.$notifyMsg);
    this.$container.appendChild(this.$formRegister);

    return this.$container;
  }
}

export { Register };
