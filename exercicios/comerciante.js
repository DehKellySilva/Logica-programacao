const valorCompra = 15;
const porcentagem = 0.45;
const lucro = valorCompra * porcentagem;
const produtoVender = valorCompra + lucro;

const porcentagem2 = 0.30;
const lucro2 = valorCompra * porcentagem2;
const produtoVender2 = valorCompra + lucro2;


if (valorCompra < 20) {
    console.log(produtoVender);
} else {
    console.log(produtoVender2) 
}
