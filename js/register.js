let first_name = document.querySelector("#Fname")
let last_name = document.querySelector("#Lname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let register_btn = document.querySelector("#submet")

register_btn.addEventListener("click", function (e) {
  e.preventDefault()
  if (first_name.value === "" || last_name.value === "" || email.value === "" || password.value === "") {
    alert("please fill data")
  }
  else {
    localStorage.setItem("firstname", first_name.value);
    localStorage.setItem("lastname", last_name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    setTimeout(() => { window.location = "login.html" }, 1500)
  }
})