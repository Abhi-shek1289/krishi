const btn = document.querySelector("#submit_btn");
const crp = document.querySelector("#crp_name")
const name_ = document.querySelector("#name");
const add = document.querySelector("#add");
const phno = document.querySelector("#phno");
const area = document.querySelector("#area")
if (btn) {
    btn.addEventListener("click", function (e) {

        if (crp.value == "rice") {
            window.location.href = "main_page_rice.html";

        }
        else if (crp.value == "wheat") {
            window.location.href = "main_page_wheat.html";
        }
        else {
            console.log("");
        }
    });
}