//1

let num1 = 5;
let num2 = 4;
sumanums = num1 + num2;
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(sumanums);

//2

let nm1 = 10;
let nm2 = 7;
let nm3 = 1;
let mayor = nm1;
let menor = nm2;

if (nm2 > mayor)
{
    mayor = nm2;
}
else if (nm3 > mayor)
{
    mayor = nm3;
}
if (nm2 < menor)
{
    menor = nm2;
}
else if (nm3 < menor)
{
    menor = nm3;
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(`mayor: ${mayor} 
menor: ${menor}`);

//3

let word = "javascript";
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(`la palabra es: ${word} y tiene ${word.length} letras`)

//4

let par = 0;
let impar = 0;
let ej4 = 7;

result = ej4 % 2;

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
if (result === 0)
{
    console.log(`${ej4} es par`);
}
else
{
    console.log(`${ej4} es impar`);
}

//5

var word2 = "word"

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
for (var cantidad = 4; cantidad > 0; cantidad--)
{
    console.log(word2);
}

//6

function sep(a, b) {
    let [men, may] = a < b ? [a, b] : [b, a]; 
    let ej6nums = "";
    for (let espacio = men + 1; espacio < may; espacio++)
    {
        if (espacio == may - 1) 
            {
                ej6nums += `y ${espacio}`;
            }
        else if (espacio == may - 2)
            {
                ej6nums += `${espacio} `;
            }
        else 
            {
                ej6nums += `${espacio}, `;
            }
    }
    return {ej6nums, a, b};
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let ej6res = sep(2, 8);
console.log(`entre ${ej6res.a} y ${ej6res.b} estan ${ej6res.ej6nums}`);

//7

function mul(a, b) {
    let [men, may] = a < b ? [a, b] : [b, a];
    let ej7nums = "";
    for (let espacio = men + 1; espacio < may; espacio++)
    {
        if (espacio % 3 == 0)
        {
            if (espacio == may - 1) 
                {
                    ej7nums += `y ${espacio}`;
                }
            else if (espacio == may - 2)
                {
                    ej7nums += `${espacio} `;
                }
            else 
                {
                    ej7nums += `${espacio}, `;
                }
        }
    }
    return {ej7nums, a, b};
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
res = mul(2, 8);
if (res.ej7nums == "")
{
    console.log(`no existen multiplos de 3 entre ${res.a} y ${res.b}`);
}
else
{
    console.log(`los multiplos de 3 entre ${res.a} y ${res.b} son: ${res.ej7nums}`);
}

//8

var multi = 0;
var a = 0;
while (a < 100) 
{
    if (a % 2 == 0 || a % 5 == 0)
    {
         multi += `${a}, `;
    }
    a++;
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(`los multiplos de 2 y 5 menores que 100 son: ${multi}`);

//9

let array = [2, 5, 42];
let suma = 0;
for (let a = 0; a < array.length; a++)
{
    suma += array[a]; 
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(`los elementos del array sumados son: ${suma}`);

//10

array = [10, 5, 4];
suma = 0;
for (let a = 0; a < array.length; a++)
{
    if (array[a] % 2 == 0)
    {
        suma += array[a];
    }
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(`los elementos pares del array sumados son: ${suma}`);

//11

function contar(word3) {
    let letras = {}; 
    for (let indice = 0; indice < word3.length; indice++) 
    {
        if (letras[word3[indice]]) 
        {
            letras[word3[indice]]++; 
        } 
        else 
        {
            letras[word3[indice]] = 1; 
        }
    }
    return letras;
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
word3 = contar("PERRO");
console.log(word3);

//12

var personas = [
    { nombre: "Matias", sexo: "masculino", edad: 20 },
    { nombre: "Stella", sexo: "femenino", edad: 49 },
    { nombre: "Pablo", sexo: "masculino", edad: 15 },
    { nombre: "Veronica", sexo: "femenino", edad: 32 },
];

let sumaEdad = 0;
let sumaedadmujeres = 0;
let menorhombre = Infinity;
let mayormujer = 0;

for (let i = 0; i < personas.length; i++)
{
    sumaEdad += personas[i].edad;
    if (personas[i].sexo === "femenino")
        {
            sumaedadmujeres += personas[i].edad
            if (personas[i].edad > mayormujer)
            {
                mayormujer = personas[i].edad
                var nombremujermayor = personas[i].nombre;
            }
        }
        else 
        {
            if (personas[i].edad < menorhombre)
                {
                    menorhombre = personas[i].edad
                    var nombrehombremenor = personas[i].nombre;
                }
        }
}

let promedioedad = sumaEdad / personas.length;
let promedioedadmujeres = sumaedadmujeres / personas.filter(filtrosexo => filtrosexo.sexo === "femenino").length; 

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(`El promedio de edad, redondeado, es de ${Math.round(promedioedad)}`);
console.log(`El nombre de la mujer mayor es ${nombremujermayor}`);
console.log(`El nombre del hombre menor es ${nombrehombremenor}`);
console.log(`El Promedio de edad de las mujeres es ${Math.round(promedioedadmujeres)}`);

//13

var personas2 = [
    { nombre: "Valentin", sexo: "masculino", edad: 17 },
    { nombre: "Juanita", sexo: "femenino", edad: 19 },
    { nombre: "Alejo", sexo: "masculino", edad: 22 },
    { nombre: "Sofia", sexo: "femenino", edad: 21 },
];

function obtenerPromedioEdad(array) 
{
    sumaEdad = 0;
    for (let i = 0; i < array.length; i++)
        {
            sumaEdad += array[i].edad;
        }
    return sumaEdad / array.length;
}

function obtenerMujerMayor(array) 
{
    for (let i = 0; i < array.length; i++)
        {
            if (array[i].sexo === "femenino")
                {
                    if (array[i].edad > mayormujer)
                    {
                        mayormujer = array[i].edad
                        nombremujermayor = array[i].nombre;
                    }
                }
        }
    return {nombremujermayor};
}

function obtenerHombreMenor(array) 
{
    let menorhombre = Infinity;
    for (let i = 0; i < array.length; i++)
        {
            if (array[i].edad < menorhombre)
                {
                    menorhombre = array[i].edad
                    nombrehombremenor = array[i].nombre;
                }
        }
    return {nombrehombremenor};
}

function obtenerPromedioEdadMujeres(array) 
{
    sumaedadmujeres = 0
    for (let i = 0; i < array.length; i++)
        {
            if (array[i].sexo === "femenino")
                {
                    sumaedadmujeres += personas[i].edad
                }
        }
    return sumaedadmujeres / array.filter(filtrosexo => filtrosexo.sexo === "femenino").length;
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(`El promedio de edad es ${Math.round(obtenerPromedioEdad(personas2))}`);
console.log(`La mujer con mayor edad es ${nombremujermayor}`);
console.log(`El hombre con menor edad es ${nombrehombremenor}`);
console.log(`El promedio de edad de las mujeres es ${Math.round(obtenerPromedioEdadMujeres(personas2))}`);

//14

function lista(minimo, maximo, divisor) 
{
    var list = "";
    for (let i = minimo; i <= maximo; i++)
        {
            if (i % divisor === 0)
            {
                list += `${i}, `;
            }

        }
    return {list, minimo, maximo};
}

var divs = lista(4, 42, 2);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(`los divisores entre ${divs.minimo} y ${divs.maximo} son ${divs.list}`);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");