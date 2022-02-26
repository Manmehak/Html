let video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// Get access to the camera!

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: {
                exact: 'environment'
            }
        }
    }).then(function (stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

showImages();


// var video = document.getElementById('video');

let clickSnap = document.getElementById("clickSnapBtn");
clickSnap.addEventListener("click", function () {
    context.drawImage(video, 0, 0, 400, 250);
});


let addImage = document.getElementById('addBtn');
addImage.addEventListener('click', createImageData);

function createImageData() {

    let addAddress = document.getElementById('addAddress').value;

    let imageAddress = localStorage.getItem('imageAddress');
    let imgAsDataURL = canvas.toDataURL("image/png");

    if (imageAddress == null) {
        addressObj = [];
    }
    else {
        addressObj = JSON.parse(imageAddress);
    }
    let myObj = {
        address: addAddress, // add new functionality to application 
        imgDataURL: imgAsDataURL,
    }
    addressObj.push(myObj);
    localStorage.setItem("imageAddress", JSON.stringify(addressObj));
    showImages();

}

function showImages() {
    let imageAddress = localStorage.getItem('imageAddress');
    let imgAsDataURL = canvas.toDataURL("image/png");
    if (imageAddress == null) {
        addressObj = [];
    }
    else {
        addressObj = JSON.parse(imageAddress);
    }
    let myObj = {
        address: addAddress.value, // add new functionality to application 
        imgDataURL: imgAsDataURL,
    }
    localStorage.setItem("imageAddress", JSON.stringify(addressObj));

    let html = '';

    addressObj.forEach(function (element, index) {
        html += `<div id= "cards" class="noteCard card mx-2 my-2" style="width: 18rem;" >
            <div class="card-body">
                <h5 class="card-title">Address ${index}</h5>
                <p class="card-title">${element.address}</p>
                <img src="${element.imgDataURL}" class="img-thumbnail" alt="Try Reloading The Page">
                </div>
                </div>`
    });

    let addressElm = document.getElementById('imageShow');
    if (addressObj.length != 0) {
        addressElm.innerHTML = html;
    }
    else {
        addressElm.innerHTML = `Nothing to Show Here . Add an Image.`
    }
}
