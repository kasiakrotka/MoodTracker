function getDataFromCallendar(){
    let result = {red: 0, purple: 0, green: 0, yellow: 0, blue: 0};
    let totalDays = document.getElementsByClassName("day").length;
    result.red = ((document.getElementsByClassName("red").length/totalDays)*100).toFixed(2);
    result.purple = ((document.getElementsByClassName("purple").length/totalDays)*100).toFixed(2);
    result.green = ((document.getElementsByClassName("green").length/totalDays)*100).toFixed(2);
    result.yellow =  ((document.getElementsByClassName("yellow").length/totalDays)*100).toFixed(2);
    result.blue =  ((document.getElementsByClassName("blue").length/totalDays)*100).toFixed(2);

    return result;
}