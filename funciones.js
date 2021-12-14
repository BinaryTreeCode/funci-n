var ecuanción_id = document.getElementById("ecuanción_text"); 

function Y_return(x, formula) {
    a = (5 * x) - 2;
    b = x -2;
    y = a / b;
    
    console.log(`${x} ==> ${y}`);
    console.log(`(${x},${y})`);
    console.log(`y = ${y}`);
    return y;
};
suma = (2+3) 
Y = Math.pow(suma, 2);


var Array_X = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var Array_Y = [];

var largo = Array_X.length;

function imprimir() {
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
function operación() {
    document = "";
    ecuanción = ecuanción_id.value;
    while (i < largo) {
        X = Array_X[i];
        Y =Y_return(X, ecuanción);
        Array_Y.push(Y);
        i++;
    };
    imprimir();
}
