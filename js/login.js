let email = document.querySelector("#email")
let password = document.querySelector("#password")
let register_btn = document.querySelector("#submet")

let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")

register_btn.addEventListener("click", function (e) {
  e.preventDefault()
  if (email.value === "" || password.value === "") {
    alert("please fill data ")
  } else {
    if (getEmail && getEmail.trim() === email.value.trim() && getPassword && getPassword.trim() === password.value.trim()) {
      setTimeout(() => { window.location = "index.html" }, 1500)
    } else {
      alert("username or password is wrong ")
    }
  }
})




