class InputGroup {
  $container;
  $label;
  $input;
  $notify; // variable to notiy login success or failed

  constructor($label, $inputType) {
    this.$container = document.createElement("div");
    this.$container.style.display = "flex";
    this.$container.style.flexDirection = "column";

    this.$label = document.createElement("label");
    this.$label.innerHTML = $label;

    this.$input = document.createElement("input");
    this.$input.type = $inputType;

    this.$notify = document.createElement("span");
    this.$notify.classList.add('notify');
  }

  render() {
    this.$container.appendChild(this.$label);
    this.$container.appendChild(this.$input);
    this.$container.appendChild(this.$notify);

    return this.$container;
  }

  setSuccessMessage = (message) => {
    this.$notify.innerHTML = message;
    this.$notify.style.color = "green";
    this.$input.style.borderColor = "green";
  };

  setFailureMessage = (message) => {
    this.$notify.innerHTML = message;
    this.$notify.style.color = "red";
    this.$input.style.borderColor = "red";
  };
}

export { InputGroup }; // export tên class để qua index.js import vào để sử dụng
