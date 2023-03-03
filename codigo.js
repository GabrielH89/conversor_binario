let x = 15;

let bin = x.toString(2)

console.log(bin)

/*if(valor.value === ""){
    document.getElementById("converter").disabled = true;
}else{
    document.getElementById("converter").disabled = false;
}*/

function converter_valores(){
    let inteiro_bin = document.getElementById("inteiro_bin");
    let bin_inteiro = document.getElementById("bin_inteiro");
    let valor = document.getElementById("valor").value;


    if(inteiro_bin.checked == true){
        let newValor = parseInt(valor);
        let binario = newValor.toString(2)
        document.getElementById("resultado").textContent = binario;
    }else if(bin_inteiro.checked == true){
            let newValue = valor.toString(2);
            let inteiro = parseInt(newValue, 2);
            document.getElementById("resultado").textContent = inteiro;
    }

    
}