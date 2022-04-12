"use strict";var signUpButton=document.getElementById("signUp"),signInButton=document.getElementById("signIn"),container=document.getElementById("container");signUpButton.addEventListener("click",(function(){container.classList.add("right-panel-active")})),signInButton.addEventListener("click",(function(){container.classList.remove("right-panel-active")}));var showPassSignUp=document.getElementById("show-password-sign-up"),hidePassSignUp=document.getElementById("hide-password-sign-up"),passwordInputSignUp=document.getElementById("password-sign-up");showPassSignUp.addEventListener("click",(function(){passwordInputSignUp.type="",showPassSignUp.classList.add("hide"),hidePassSignUp.classList.remove("hide")})),hidePassSignUp.addEventListener("click",(function(){passwordInputSignUp.type="password",hidePassSignUp.classList.add("hide"),showPassSignUp.classList.remove("hide")}));var showPassSignIn=document.getElementById("show-password-sign-in"),hidePassSignIn=document.getElementById("hide-password-sign-in"),passwordInputSignIn=document.getElementById("password-sign-in");showPassSignIn.addEventListener("click",(function(){passwordInputSignIn.type="",showPassSignIn.classList.add("hide"),hidePassSignIn.classList.remove("hide")})),hidePassSignIn.addEventListener("click",(function(){passwordInputSignIn.type="password",hidePassSignIn.classList.add("hide"),showPassSignIn.classList.remove("hide")}));var form=document.getElementById("form"),username=document.getElementById("name"),email=document.getElementById("email"),password=document.getElementById("password-sign-up");form.addEventListener("submit",(function(e){var s,n,t;e.preventDefault(),s=username.value.trim(),n=email.value.trim(),t=password.value.trim(),""===s?setErrorFor(username,"Name cannot be blank"):(setSuccessFor(username),""===n?setErrorFor(email,"Email cannot be blank"):isEmail(n)?(setSuccessFor(email),""===t?setErrorFor(password,"Password cannot be blank"):t.length<6?setErrorFor(password,"Password must be at least 6 characters long"):(setSuccessFor(password),e.currentTarget.submit())):setErrorFor(email,"Not a valid email"))}));var form2=document.getElementById("form2"),email2=document.getElementById("email2"),password2=document.getElementById("password-sign-in");function setErrorFor(e,s){var n=e.parentElement,t=n.querySelector("small");n.className="form-control error",t.innerText=s}function setSuccessFor(e){e.parentElement.className="form-control"}function isEmail(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}form2.addEventListener("submit",(function(e){var s,n;e.preventDefault(),s=email2.value.trim(),n=password2.value.trim(),""===s?setErrorFor(email2,"Email cannot be blank"):isEmail(s)?(setSuccessFor(email2),""===n?setErrorFor(password2,"Password cannot be blank"):(setSuccessFor(password2),e.currentTarget.submit())):setErrorFor(email2,"Not a valid email")}));
//# sourceMappingURL=sign.js.map