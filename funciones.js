var ecuanción1_id = document.getElementById("ecuanción_text_1");

var ecuanción2_id_1 = document.getElementById("ecuanción_text_2.1");
var ecuanción2_id_2 = document.getElementById("ecuanción_text_2.2");

var resultado_id = document.getElementById("resultado");
var modulo_id = document.getElementById("type_función");
var y;
function Y_return(x, formula) {
    if (condition) {
    }
    formula = formula.replace("x", x);
    formula = formula.replace("x", x);
    eval(formula);
    console.log(`${x} ==> ${y}`);
    console.log(`(${x},${y})`);
    console.log(`y = ${y}`);
    return y;
};


var Array_X = [-5, -4, -3, -2, -1, 0, 1, 3, 4, 5];
var Array_Y = [];

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
    while (i < largo) {
        document.write(`<tr> <td>${Array_X[i]}</td> <td>${Array_Y[i]}</td><td>(${Array_X[i]},${Array_Y[i]})</td> </tr>`);
        i++
    };
    document.write("</tbody>");
    document.write("</table>");
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