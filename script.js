// get element
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// check email is valid
function isValidEmali(email) {
  const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return re.test(String(email));
}
//event listener

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "用户名为必填项");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "邮箱为必填项");
  } else if (!isValidEmali(email.value)) {
    showError(email, "邮箱格式错误");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "密码为必填项");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "确认密码为必填项");
  } else {
    showSuccess(password2);
  }
});
