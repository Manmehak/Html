let myBtn = document.getElementsByClassName('btn');
myBtn.addEventListener('click', alert);

function alert() {
    alert("Your Form has been submitted");
    prompt("Hello")

let formData = localStorage.getItem('formData');
if (formData == null) {
    formObj = [];
}
else {
    formObj = JSON.parse(formData);
}
let myObj = {
    name: form.name,
    age: form.age,
    email: form.email,
    address: form.address,
    desc: form.desc,
}
formObj.push(myObj);
localStorage.setItem("formData", JSON.stringify(formObj));
}
