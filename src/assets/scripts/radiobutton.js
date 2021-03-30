function uncheckAllRadiobuttons(){
    let radiobuttons = document.getElementsByClassName("cell-input");
    let moodbuttons = document.getElementsByClassName("mood-input");

    for(let i = 0; i < radiobuttons.length; i++)
    if (radiobuttons.item(i).checked) {
        radiobuttons.item(i).checked = false;
    }

    for(let i = 0; i < moodbuttons.length; i++)
    if (moodbuttons.item(i).checked) {
        moodbuttons.item(i).checked = false;
    }
}