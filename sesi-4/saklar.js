function saklar() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");

    let toggleGroup1 = document.getElementById("default-toggle-group1");
    let toggleGroup2 = document.getElementById("default-toggle-group2");
    let toggleGroup3 = document.getElementById("default-toggle-group3");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");
    let lampu7 = document.getElementById("lampu7");
    let lampu8 = document.getElementById("lampu8");
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");

    // toggle masing-masing
    if (toggle1.checked) {
        lampu1.src = "assets/images/on.gif";
        toggleGroup1.checked = true;
    } else {
        lampu1.src = "assets/images/off.gif";
        toggleGroup1.checked = false;
    }
    if (toggle2.checked) {
        lampu2.src = "assets/images/on.gif";
        toggleGroup1.checked = true;
    } else {
        lampu2.src = "assets/images/off.gif";
    }
    if (toggle3.checked) {
        lampu3.src = "assets/images/on.gif";
        toggleGroup1.checked = true;
    } else {
        lampu3.src = "assets/images/off.gif";
    }
    if (toggle4.checked) {
        lampu4.src = "assets/images/on.gif";
    } else {
        lampu4.src = "assets/images/off.gif";
    }
    if (toggle5.checked) {
        lampu5.src = "assets/images/on.gif";
        toggleGroup2.checked = true;
    } else {
        lampu5.src = "assets/images/off.gif";
        toggleGroup2.checked = false;
    }
    if (toggle6.checked) {
        lampu6.src = "assets/images/on.gif";
        toggleGroup2.checked = true;
    } else {
        lampu6.src = "assets/images/off.gif";
    }
    if (toggle7.checked) {
        lampu7.src = "assets/images/on.gif";
        toggleGroup3.checked = true;
    } else {
        lampu7.src = "assets/images/off.gif";
        toggleGroup3.checked = false;
    }
    if (toggle8.checked) {
        lampu8.src = "assets/images/on.gif";
        toggleGroup3.checked = true;
    } else {
        lampu8.src = "assets/images/off.gif";
    }
    if (toggle9.checked) {
        lampu9.src = "assets/images/on.gif";
        toggleGroup3.checked = true;
    } else {
        lampu9.src = "assets/images/off.gif";
    }
    if (toggle10.checked) {
        lampu10.src = "assets/images/on.gif";
        toggleGroup3.checked = true;
    } else {
        lampu10.src = "assets/images/off.gif";
    }


}

function ruangKeluarga() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");

    let toggleGroup1 = document.getElementById("default-toggle-group1");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (toggleGroup1.checked) {
        lampu1.src = "assets/images/on.gif";
        lampu2.src = "assets/images/on.gif";
        lampu3.src = "assets/images/on.gif";
        toggle1.checked = true;
        toggle2.checked = true;
        toggle3.checked = true;
    } else {
        lampu1.src = "assets/images/off.gif";
        lampu2.src = "assets/images/off.gif";
        lampu3.src = "assets/images/off.gif";
        toggle1.checked = false;
        toggle2.checked = false;
        toggle3.checked = false;
    }
}
function ruangTidur() {
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");

    let toggleGroup2 = document.getElementById("default-toggle-group2");

    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");

    if (toggleGroup2.checked) {
        lampu5.src = "assets/images/on.gif";
        lampu6.src = "assets/images/on.gif";
        toggle5.checked = true;
        toggle6.checked = true;
    } else {
        lampu5.src = "assets/images/off.gif";
        lampu6.src = "assets/images/off.gif";
        toggle5.checked = false;
        toggle6.checked = false;
    }
}
function ruangTamu() {
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");

    let toggleGroup3 = document.getElementById("default-toggle-group3");

    let lampu7 = document.getElementById("lampu7");
    let lampu8 = document.getElementById("lampu8");
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");

    if (toggleGroup3.checked) {
        lampu7.src = "assets/images/on.gif";
        lampu8.src = "assets/images/on.gif";
        lampu9.src = "assets/images/on.gif";
        lampu10.src = "assets/images/on.gif";
        toggle7.checked = true;
        toggle8.checked = true;
        toggle9.checked = true;
        toggle10.checked = true;
    } else {
        lampu7.src = "assets/images/off.gif";
        lampu8.src = "assets/images/off.gif";
        lampu9.src = "assets/images/off.gif";
        lampu10.src = "assets/images/off.gif";
        toggle7.checked = false;
        toggle8.checked = false;
        toggle9.checked = false;
        toggle10.checked = false;
    }
}