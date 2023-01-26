function addGuest() {
    var input = document.getElementById('guestInput').value;
    var guestList = document.getElementById('guestList')
    // console.log(input)
    let guestName = input
    var entry = document.createElement('li');
    console.log(entry)
    entry.appendChild(document.createTextNode(guestName));
    guestList.appendChild(entry);
}