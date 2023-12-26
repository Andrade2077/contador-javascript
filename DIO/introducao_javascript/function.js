//function é a variavel para declarar funcões no codigo
//os parenteses são parametros 'regras' que minha função deve seguir

function soma() {
    console.log(a + b); //console.log serve para mostrar no console essa função e o que está sendo pedido
    return a + b; //8 //usado caso quisermos manipular futuramente o resultado
}

//executando 'invocando' a função
soma(3, 5);


//codigo limpo

function soma() {
    console.log(a + b); 
    return a + b;
}

soma(3, 5);
