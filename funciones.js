var ecuanción1_id = document.getElementById("ecuanción_text_1");

var ecuanción2_id_1 = document.getElementById("ecuanción_text_2.1");
var ecuanción2_id_2 = document.getElementById("ecuanción_text_2.2");

var resultado_id = document.getElementById("app");
var modulo_id = document.getElementById("type_función");
var y;

var X_id = document.getElementById("xValues");


function Y_return(x, formula) {
    formula = formula.replace("x", x);
    formula = formula.replace("x", x);
    formula = formula.replace("x", x);

    e = 0;
    largoText = formula.length;
    while (e <= largoText) { //pasar numero a radianes para poder operar con Math.
        charts = formula.charAt(e) + formula.charAt(e+1);
        if (charts == "en" || charts == "os" || charts == "an") {
            chartPos = formula.charAt(e+3);
            if (chartPos == "-"){
                chartPos = formula.substr(e+3, 2)

                file = true;
            }
            else {
                file = false;
            }

            // chartPos2 = formula.substr(e+3, 2);

            // message = formula.replace(/((?:.*?chartPos2).*?){1}.*?)chartPos2/, "$1chao");

            if (isNaN(chartPos) == false) {
                chartPos = Number(chartPos);
                chartPos = Math.radianes(chartPos);

                if (file) {
                    formula= formula.replace(formula.substr(e+3, 2), chartPos);  
                } else {
                    formula= formula.replace(formula.substr(e+3, 1), chartPos);
                }
                largoText = formula.length;
            }
        }
        e++;
    }


    formula = formula.replace("sen", "Math.sin");
    formula = formula.replace("cos", "Math.cos");
    formula = formula.replace("tan", "Math.tan");

    if (formula[ formula.indexOf('cos')-1] != ".") {
        formula = formula.replace("cos", "Math.cos");
    }

    if (formula[ formula.indexOf('tan')-1] != ".") {
        formula = formula.replace("tan", "Math.tan");
    }

    if (formula[ formula.indexOf('sen')-1] != ".") {
        formula = formula.replace("sen", "Math.sin");
    }

    eval(formula);
    console.log(`${x} ==> ${y}`);
    console.log(`(${x},${y})`);
    console.log(`y = ${y}`);

    return y.toFixed(5);
};

var Array_X = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
var Array_Y = [];

X_id.addEventListener("change", function() {
    Array_X = X_id.value.split(',').map(Number);
  });


var largo = Array_X.length;

function imprimir() {
    if (modulo == false) {
        resultado_id.innerHTML = `<p>corte en el eje ${ecuación}</p>`;
    }
    document.write("<table border>");
    document.write("<caption>Datos:</caption>");
    document.write("<thead> <th>X</th> <th>Y</th> <th>(x,y)</th> </thead>");
    document.write("<tbody>");
    i = 0;
    while (i <  Array_X.length) {
        document.write(`<tr> <td>${Array_X[i]}</td> <td>${Array_Y[i]}</td><td>(${Array_X[i]},${Array_Y[i]})</td> </tr>`);
        i++
    };
    document.write("</tbody>");
    document.write("</table>");
    document.write(`<p>Grafica en: <iframe src="https://www.geogebra.org/geometry" width="1500" height="500"> <iframe> geogebra</p>`);
};


var i = 0;
let ecuanción2, ecuación;

function operación() {
    modulo = modulo_id.value;
    modulo = eval(modulo);
    document = "";

    ecuanción2 = {
        ecuanción2_1: ecuanción2_id_1.value,
        ecuanción2_2: ecuanción2_id_2.value
    }
    
    if (modulo == true) {
        ecuación = ecuanción1_id.value;
    } else {
        ecuación = ecuanción2
        i = 0;
        while (a === '/') {
            a = ecuación.charAt(i);
            i++;    
        };
        ecuación = ecuación.replace(a, "");
        ecuación = ecuación.replace(" ", "");
        ecuación = ecuación.replace(" ", "");

    }
    ecuación = ecuación.replace("raiz", "Math.sqrt");
    ecuación = ecuación.replace("raiz", "Math.sqrt");



    while (i < largo) {
        X = Array_X[i];
        Y = Y_return(X, ecuación);
        Array_Y.push(Y);
        i++;
    };
    imprimir();
}

function replace(a, d) {
    ecuación = ecuación.replace(a, d);
    ecuación = ecuación.replace(a, d);
}

const selectElement = document.querySelector('.selector');
const div1 = document.getElementById('input_1');
const div2 = document.getElementById('input_2');

selectElement.addEventListener('change', () => {
    modulo = modulo_id.value;
    modulo = eval(modulo);
    if (modulo == false) {
        div2.style.display = "block";
        div1.style.display = "none";
    } else {
        div1.style.display = "block";
        div2.style.display = "none";
    }
});


function quitar_x(a, b) {
    i = 0;
    while (i <= largo) {
        largo = a.length-1;
        r = a.charAt(i);
        x1 = a.charAt(i - 1);
        x2 = a.charAt(i + 1);

        true1 = (r == "*" || r == "/");
        true2 = (x1 == "x" || x2 == "x");

        if (true1 && true2 == true) {
            a = a.replace(r, "");
        }
        else {
        }
        console.log(`el caracter a eliminar es:${r} x1:${x1} x2:${x2} y  true(s) 1:${true1} 2:${true2} a es: ${a} `);
        i++;
    }
    return a = a;
}

function puente(a) {
    i = 0;
    largo = a.length;
    while (i <= largo) {
        largo = a.length;
        r = a.charAt(i);
        x1 = a.charAt(i - 1);
        x2 = a.charAt(i + 1);

        Array_op = ["+", "-", "*", "/"];
        true2 = (x1 == Number(x1) && x2 == Number(x2));

        if (r == "-") {
            v = "";
        } else if (r == "+") {
            v = "-";
        } else if (r == "/") {
            v = "*";
        } else if (r == "*") {
            v = "/";
        }
        if (true1 && true2 == true) {
            a = a.replace(r, v);
        }
        else {
        }
        console.log(`el caracter a eliminar es:${r} x1:${x1} x2:${x2} y  true(s) 1:${true1} 2:${true2} a es: ${a} `);
        i++;
    }
}





    Math.grados = function(radianes) {
        return radianes * 180 / Math.PI;
      };
      
      Math.radianes = function(grados) {
        return grados * Math.PI / 180;
      };