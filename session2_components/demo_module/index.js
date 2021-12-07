// file này là file module

import { InputGroup } from "./index_input_group.js";

const app = document.getElementById("app");

const usernameInput = new InputGroup("Username", "text");
const passwordInput = new InputGroup("Password", "password");

app.appendChild(usernameInput.render());
app.appendChild(passwordInput.render());

const btnSubmit = document.createElement("button");
btnSubmit.innerHTML = "Submit";
app.appendChild(btnSubmit);

btnSubmit.onclick = () => {
  usernameInput.setSuccessMessage("Look good !");
  passwordInput.setFailureMessage("This field is can not be empty !");
};
