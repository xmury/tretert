function stalker(){
    mass_button1 = []; mass_button2 = [];
    mass_button1 = collector(button1[0] , button1[1]); 
    mass_button2 = collector(button2[0] , button2[1]);
    mass_button1.push([ button1[0] , button1[1] ]);
    mass_button2.push([ button2[0] , button2[1] ]);
    arr_nodes = searchNode()
    
    return testNode(arr_nodes);
}
    
function testNode(arr_nodes){
    for (var i = 0; i < arr_nodes.length; i++ ){
        r2_out = router2(arr_nodes[i]);
        if (r2_out) { return true; }
    }

    return false;
}

function router2(nodes){
    start = nodes.start;
    end = nodes.end;

    startX = start[0]; startY = start[1];
    endX = end[0]; endY = end[1];

    ifX = startX == endX;                                   // Статичен ли Х
    ifY = startY == endY;                                   // Статичен ли Y

    if (ifX && ifY) { return true; }                        // Равны ли начало и конец

    if (ifX) { moreORless = startY > endY; }                // Больше или меньше другой элемент
    if (ifY) { moreORless = startX > endX; }                // Больше или меньше другой элемент
    
    while(true){
        if (ifX) {                                          // Сдвиг Y
            if (moreORless) { startY--; }                   // Если конец ниже 
            else            { startY++; }                   // Если конец выше
        } 
        else {                                              // Сдвиг X
            if (moreORless) { startX--; }                   // Если конец левее 
            else            { startX++; }                   // Если конец правее
        } 
        if (ifX) { if (startY == endY)  { return true; } }  // Условие
        else { if (startX == endX)      { return true; } }
        
        if (area[startX][startY] != 0)  { return false;  }  // Проход
    }
}

function searchNode(){
    output = [];
    mass_button1.forEach(function(item, i, arr){
        mass_button2.forEach(function(item2, i2, arr2){
            if (item[0] == item2[0] || item[1] == item2[1]) {
                output.push({'start':item , 'end':item2});
            }
        });
    });
    return output;
}

function collector(x , y){
        var muv = []; start = [x , y];

        way = ['x' , 0]; muv = muv.concat(router(way , start));
        way = ['x' , 1]; muv = muv.concat(router(way , start));
        way = ['y' , 0]; muv = muv.concat(router(way , start));
        way = ['y' , 1]; muv = muv.concat(router(way , start));

        return muv;
}

function router(way , start){
    // way = ['x'/'y' , 0/1] 
    // 0 -> down | 1 -> up
    // start = [x,y] -> start coordinates

    x = start[0]; y = start[1];
    muving = []; test = true;

    while (test){
        // Сдиг по маршруту
        if (way[0] == 'x') { 
            if (way[1] == 0)    { x--; }
            else                { x++; }
         }
        else {
            if (way[1] == 0)    { y--; }
            else                { y++; }
        }
        // Проверка границ
        if (way[1] == 0) { // Убывание
            if (way[0] == 'x')  { if (x == 0) { muving.push([x,y]); break; } } 
            else                { if (y == 0) { muving.push([x,y]); break; } }
        } 
        else if (way[1] == 1) { // Возрастание
            if (way[0] == 'x')  { if (x > xMax) { muving.push([x,y]); break; } }  
            else                { if (y > yMax) { muving.push([x,y]); break; } }
        }

        // Проверка на пустоту ячейки
        if (area[x][y] != 0) { return muving; }
        else { muving.push([x,y]); }      

        // Выделение
        // var obj = document.getElementById(`${x}:${y}`); 
        // obj.innerHTML = `<${x}:${y}>`; obj.style.background = "black";  obj.style.color = "white";    

    }
    return muving;
}
