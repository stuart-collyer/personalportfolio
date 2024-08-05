// Format and display current date - START
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const today = new Date();
const year = today.getFullYear();
const month = months[today.getMonth()];

function ordinal_suffix_of(i) {
    let j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

document.getElementById('date').innerHTML = `${ordinal_suffix_of(today.getDate())} ${month} ${year}`;
// Format and display current date - END


// Code to change theme when selected from selection box. - START
const selectionBox = document.getElementById('theme');

function changeTheme() {
    const list = document.getElementById('page').classList;
    list.replace(list.value, selectionBox.value);
}

selectionBox.addEventListener('input', changeTheme);
// Code to change theme when selected from selection box. - END

