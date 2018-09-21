function AreaUpdate(){
    var mass = []; var count = 0;
    for (var x = 1; x <= xMax; x++) {
        for (var y = 1; y <= yMax; y++) {
            if(area[x][y] != 0){ count++; mass.push([x,y]); }
        }
    }
    testT();
    while(count >= 1){
        var rand = min - 0.5 + Math.random() * (max - min + 1); rand = Math.round(rand);
        min2 = 1; max2 = xMax;
        var x = min2 - 0.5 + Math.random() * (max2 - min2 + 1); x = Math.round(x);   
        max2 = yMax;
        var y = min2 - 0.5 + Math.random() * (max2 - min2 + 1); y = Math.round(y);   

        if (area[x][y] == 0){
            var obj = document.getElementById(`${x}:${y}`); 
            obj.innerHTML = `${x}:${y}`; obj.style.background = arr[rand];  
            obj.style.color = "black";    

            area[x][y] = rand
            count--;
        }
    }
}

function testT(){
    for (x = xMax; x >= 1; x-- ){
        for (y = yMax; y >= 1; y --){
            area[x][y] = 0;
            var obj = document.getElementById(`${x}:${y}`); 
            obj.style.background = "white";  obj.style.color = "white";
        }
    }
}