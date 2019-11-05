function changeWidth(){
    //Получение значения текстбокса
    var width=document.getElementById("width").value;
    //Изменение ширины
    document.getElementById('color').style.width=width;
}

function changeHeight(){
    //Получение значения текстбокса
    var height=document.getElementById("height").value;
    //Изменение высоты
    document.getElementById('color').style.height=height;
}

function randomColor() {
    //Получение случайных значений RGB
    var  red    = Math.floor(Math.random() * (256));
    var  green  = Math.floor(Math.random() * (256));
    var  blue   = Math.floor(Math.random() * (256));
    //Переменная случайного цвета
    var color=('#' + red.toString(16) + green.toString(16) + blue.toString(16));
    //Изменение цвета
    document.getElementById('color').style.backgroundColor=color;
}


