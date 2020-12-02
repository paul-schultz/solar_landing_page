function hideMessage() {
    var checkBox = document.getElementById('active');
    var message = document.getElementById('message');

    if (checkBox.checked == true) {
        message.style.display = 'none';
    } else {
        message.style.display = "block"
    }
}