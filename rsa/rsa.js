var p , q , mod , f , e , d;


function UnShifration(){
    var shift = document.getElementById('shifr_out').value;
    var un_shift = Math.pow(shift, d) % mod;
    var text = num_to_text(un_shift);

    console.log("shifr = " + shift);
    console.log("Match : " + Math.pow(shift, d));
    console.log("unshifr = " + un_shift);

    document.getElementById('text_out').value = un_shift;

}
function Shifration(){
    var text = document.getElementById('text_in').value;
    // var bin_text = text_to_num(text); 
    var bin_text = text
    console.log("bin text: " + bin_text);
    document.getElementById('shifr_out').value = Math.pow(bin_text, e) % mod;
}


function WikiExemple(){
    p = 3; 
    q = 7;
    mod = p * q;
    f = 12;
    e = 5;
    d = 5;

	console.log("p/q Два простых числа: " + p + " | " + q);
	console.log("mod Произведение: " + mod);
	console.log("f Функция Эйлера: " + f);
	console.log("e Открытая экспонента: " + e);
	console.log("d Секретная экспонента : " + d);

	document.body.innerHTML += "<div>";
	document.body.innerHTML += "p и q: " + p + " " + q 		  + "<br>";
	document.body.innerHTML += "Произведение: " + mod         + "<br>";
	document.body.innerHTML += "Функция Эйлера: " + f         + "<br>";
	document.body.innerHTML += "Открытая экспонента: " + e    + "<br>";
	document.body.innerHTML += "Секретная экспонента : " + d  + "<br>";
	document.body.innerHTML += "<hr> </div>";
}

function Generation(){
  while (true) {
    // gen simple nums
    var rand = randomvareger(2, 29)
    p = rand[0]; q = rand[1];
    console.log("p/q Два простых числа: " + p + " | " + q);
    // произведение
    mod = p * q;
    console.log("mod Произведение: " + mod);
    f = funEyler(p , q);
    console.log("f Функция Эйлера: " + f);
    // open exponent
    e = 3;
    console.log("e Открытая экспонента: " + e);
    // sicret  exponent
    d = secretExp();
    if (d == false) { 
      console.log("----------------------------");
      continue; 
    }
    else { 
		console.log("d Секретная экспонента : " + d);
		document.body.innerHTML += "<div>";
		document.body.innerHTML += "p и q: " + p + " " + q		  + "<br>";

		document.body.innerHTML += "Произведение: " + mod         + "<br>";
		document.body.innerHTML += "Функция Эйлера: " + f         + "<br>";
		document.body.innerHTML += "Открытая экспонента: " + e    + "<br>";
		document.body.innerHTML += "Секретная экспонента : " + d  + "<br>";
		document.body.innerHTML += "<hr> </div>";
		break; 
    }
  }

	function randomvareger(min, max) {
		var f;
		while (true){
			f = 0;
			var r1 = min - 0.5 + Math.random() * (max - min + 1); r1 = Math.round(r1);
			var r2 = min - 0.5 + Math.random() * (max - min + 1); r2 = Math.round(r2);

			if (r1 == r2) { continue; }
			for(var i = 2; r1 > i; i++){ if (r1 % i == 0){ f++; break } }
			for(var i = 2; r2 > i; i++){ if (r2 % i == 0){ f++; break } }
			if (f == 0) { break; }
			}
		var rand = [r1 , r2];
		return rand;
	}
	function funEyler(p , q){ return (p -1) * (q - 1); }
	function secretExp(){ 
		var t; var mas = [];
		for(var i = 1; ; i++){
		t = i * e % f
		if (t == 1){ mas.push(i); }

		if (i > 1000){
		  if (mod.length > 1 || i < 1000000){ break; }
		}
		}
		// console.log(mas);
		if (mas.length > 0){ 
		var i = 0 - 0.5 + Math.random() * ((mas.length-1) - 0 + 1); i = Math.round(i);
		return mas[i]; 
		}
		else { return false; }
	}
}

function text_to_num(text){
    var newText = "";
    for (var i = 0; text.length > i; i++){
      var char = text[i];
      switch (char) {       
          case '0': newText += "50"; break; 
          case '1': newText += "51"; break; 
          case '2': newText += "52"; break; 
          case '3': newText += "53"; break; 
          case '4': newText += "54"; break; 
          case '5': newText += "55"; break; 
          case '6': newText += "56"; break; 
          case '7': newText += "57"; break; 
          case '8': newText += "58"; break;     
          case '9': newText += "59"; break; 
          case 'a': newText += "35"; break; 
          case 'b': newText += "10"; break;
          case 'c': newText += "11"; break;
          case 'd': newText += "12"; break;
          case 'i': newText += "13"; break;
          case 'f': newText += "14"; break;
          case 'g': newText += "15"; break;
          case 'h': newText += "16"; break;
          case 'i': newText += "17"; break;
          case 'j': newText += "18"; break;
          case 'k': newText += "19"; break;
          case 'l': newText += "20"; break;
          case 'm': newText += "21"; break;
          case 'n': newText += "22"; break;
          case 'o': newText += "23"; break;
          case 'p': newText += "24"; break;
          case 'q': newText += "25"; break;
          case 'r': newText += "26"; break;
          case 's': newText += "27"; break;
          case 't': newText += "28"; break;
          case 'u': newText += "29"; break;
          case 'v': newText += "30"; break;
          case 'w': newText += "31"; break;
          case 'x': newText += "32"; break;
          case 'y': newText += "33"; break;
          case 'z': newText += "34"; break;
          default: break;
      }
    }
    return newText;
}
  
function num_to_text(text){
    var newText = "";
    for (var i = 0; text.length > i; i+=2){      
        var char = text[i] + text[i+1];
        switch (char) {       
            case "50": newText += '0'; break; 
            case "51": newText += '1'; break; 
            case "52": newText += '2'; break; 
            case "53": newText += '3'; break; 
            case "54": newText += '4'; break; 
            case "55": newText += '5'; break; 
            case "56": newText += '6'; break; 
            case "57": newText += '7'; break; 
            case "58": newText += '8'; break;     
            case "59": newText += '9'; break; 
            case "35": newText += 'a'; break; 
            case "10": newText += 'b'; break;
            case "11": newText += 'c'; break;
            case "12": newText += 'd'; break;
            case "13": newText += 'i'; break;
            case "14": newText += 'f'; break;
            case "15": newText += 'g'; break;
            case "16": newText += 'h'; break;
            case "17": newText += 'i'; break;
            case "18": newText += 'j'; break;
            case "19": newText += 'k'; break;
            case "20": newText += 'l'; break;
            case "21": newText += 'm'; break;
            case "22": newText += 'n'; break;
            case "23": newText += 'o'; break;
            case "24": newText += 'p'; break;
            case "25": newText += 'q'; break;
            case "26": newText += 'r'; break;
            case "27": newText += 's'; break;
            case "28": newText += 't'; break;
            case "29": newText += 'u'; break;
            case "30": newText += 'v'; break;
            case "31": newText += 'w'; break;
            case "32": newText += 'x'; break;
            case "33": newText += 'y'; break;
            case "34": newText += 'z'; break;
            default: break;
        }
    }
    return newText;
}