var area = []; xMax = 16; yMax = 8;
var arr = ['', 'red', 'blue', 'green' , '#806b2a' , 'brown' , '#cc6c5c' , 'orange'];
var min = 1; var max = arr.length-1;
var button1 = []; var button2 = []; var xMax = 0; var yMax = 0;
var widthBox = `${100/xMax}%`; var heightBox = `${100/yMax}%`;

function genArea(){                                                     // Создание и вывод поля
    xMax = 16; yMax = 8;
    var widthBox = `${100/xMax}%`; var heightBox = `${100/yMax}%`;

    for (var x = 1; x <= xMax; x++ ){ area[x] = []; }

    var div_area = document.createElement('div');
    div_area.classList = 'area';
    
    var x = 1; var y = 1;
    for (; y <= yMax; y++ ){
        for (; x <= xMax; x++ ){
            var rand = min - 0.5 + Math.random() * (max - min + 1); rand = Math.round(rand);            
    
            area[x][y] = rand;

            div_area.innerHTML += `<button class='btn2' 
            onclick="clicker([${x},${y}])" id = '${x}:${y}'
            style=' width: ${widthBox}; height: ${heightBox}; 
            background:${arr[rand]};'>${x}:${y}</button>`;
        }
        x = 1;
    }
    space.appendChild(div_area);

    // Добавление пустот по краям
    area[0] = []; area[xMax+1] = [];
    y = 0; for (var x = 0; x <= xMax+1; x++) { area[x][y] = 0; }
    y = yMax+1; for (var x = 0; x <= xMax+1; x++) { area[x][y] = 0; }
    x = 0; for (var y = 0; y <= yMax+1; y++) { area[x][y] = 0; }
    x = xMax+1; for (var y = 0; y <= yMax+1; y++) { area[x][y] = 0; }
}

function clicker(val){                                                  // Обработка нажатия на кнопку
    if (button1[0] == undefined) { button1 = val }  
    else if (button2[0] == undefined) { 
        button2 = val 
        if1 = button1[0] != button2[0] || button1[1] != button2[1];
        if2 = area[button1[0]][button1[1]] == area[button2[0]][button2[1]];

        if (if1 && if2){
            get = stalker();                                            // Вызов сталкера

            if (get) {                                                  // Удалить кнопку если true                           
                clearButton();
                button1 = []; button2 = [];                             // Очистить button1 и button2
            }
            else {                                                      // Ничего не делать если false  
                button1 = []; button2 = [];                             // Очистить button1 и button2
                console.log(false);
            }
        }
        else { 
            button1 = []; button2 = [];                                 // Очистить button1 и button2
            console.log(false); 
        }                                    
    }

    if(testArea()){
        alert('Победа!');
        location.reload();
    }
}

function clearButton(){                                                 // Отчистить кнопку
    var obj = document.getElementById(`${button1[0]}:${button1[1]}`);   // Отчистка кнопки 1   
     obj.innerHTML = "."; obj.style.color = "white";  
    obj.style.background = "white"; 

    var obj = document.getElementById(`${button2[0]}:${button2[1]}`);   // Отчистка кнопки 2
     obj.innerHTML = ".";  obj.style.color = "white";  
    obj.style.background = "white";

    x = button1[0]; y = button1[1]; area[x][y] = 0;
    x = button2[0]; y = button2[1]; area[x][y] = 0;

    button1 = []; button2 = [];                                         // Очистить button1 и button2
    console.log(true);
}

function testArea(){                                                    // Проверка поля на пустоту
    var x =1; var y = 1; 
    for (; y <= yMax; y++ ){
        for (; x <= xMax; x++ ){
            if (area[x][y] != 0) {
                return false;
            }
        }
    }
    return true;
}