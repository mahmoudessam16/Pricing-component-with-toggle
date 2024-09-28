let basic = document.querySelector(".basic");
let pro = document.querySelector(".pro");
let master = document.querySelector(".master");
let peer = document.querySelector(".peer");
let toggleBtn = document.querySelector(".toggle");


function changeFromAnnualToMonth() {
    if (peer.checked) {
        basic.textContent = '$19.99';
        pro.textContent = '$24.99';
        master.textContent = '$39.99';
    } else {
        basic.textContent = '$199.99';
        pro.textContent = '$299.99';
        master.textContent = '$399.99';
    }
}

toggleBtn.onclick = function () {
    changeFromAnnualToMonth();
}
