function showNumbers() {
    let i = 100;
    let output = '';
    while (i >= 1) {
        output += i + ', ';
        i--;
    }
    document.getElementById('numberList').innerHTML = "<br>"+ output;
}

function resetNumbers() {
    document.getElementById('numberList').innerHTML = '';
}
