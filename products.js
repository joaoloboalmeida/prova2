let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]


function listar() {
    produtos.forEach(p => {
        console.log(p)
    })
}

function listar_por_categoria(categoria){
	const produtosCategoria = produtos.filter(p => p.categoria === categoria);
	console.log(produtosCategoria);
}

function listar_por_valor(valorMinimo, valorMaximo){
	cont produtosValor = produtos.filter(p => p.valor >= valorMinimo && p.valor <= valorMaximo);
	console.log(produtosValor);
}



