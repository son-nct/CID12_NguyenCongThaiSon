class InputGroup {
  $container;
  $input;
  $label;
  $errorMsg;

  constructor(type, label, name) {
    this.$container = document.createElement("div");
    this.$container.classList.add("input-group");

    this.$input = document.createElement("input");
    this.$input.type = type;
    this.$input.name = name;

    this.$label = document.createElement("label");
    this.$label.innerHTML = label;

    this.$errorMsg = document.createElement("div");
    this.$errorMsg.classList.add("errorMsg");
  }

  getInputValue = () => {
    return this.$input.value;
  };

  setInputValue = (newValue) => {
    this.$input.value = newValue;
  };

  setErrorMsg = (msg) => {
      if(msg) {
          this.$errorMsg.innerHTML = msg;
          this.$errorMsg.classList.add('has-error');
      }else {
          this.$errorMsg.innerHTML = '';
          this.$errorMsg.classList.remove('has-error');
      }
  }

  render() {
      this.$container.appendChild(this.$label);
      this.$container.appendChild(this.$input);
      this.$container.appendChild(this.$errorMsg);

      return this.$container;
  }
}

// mỗi lần tạo 1 component xong thì export để qua module sử dụng các component này
export {InputGroup}
