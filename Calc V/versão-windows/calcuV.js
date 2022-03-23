//variável responsável para guardar tudo que for digitado
var val = "";

//variável para apresentar a operação
var eq = "";

//variável responsável para guardar o 1º valor digitado e outra para ajudar as operações
var a = 0;
var aBool = false;

//variável responsável para guardar o 2º valor digitado e outra para ajudar as operações
var b = 0;
var bBool = false;

//variável responsável para guardar o resultado das operações
var res = 0;
var rBool = false;

//variável responsável para guardar a operação a realizar
var op = "";

//variável booleana que impede inserir duas virgulas
var vBool = false;

//Função que representa e recebe o botão e o seu valor
function btNumero(value) {
    if (rBool)
        rBool = false;

    if (val.length < 1 && value === ",")
        val = "0";

    if (vBool && value === ",")
        val += "";
    else {
        val += value;

        if (!vBool && value === ",")
            vBool = true;

        writeEq();
        if (op === "")
            aBool = true;
        else bBool = true;
    }
}

function btOperacao(value) {
    if (rBool) {
        a = res;

        eq = a + " " + value;
        writeEq();

        op = value;
        val = "";

        vBool = false;
    }
    else if (aBool && !bBool) {

        a = parseFloat(val.replace(",", "."));

        eq = val + " " + value;
        writeEq();

        op = value;
        val = "";

        vBool = false;
    }
    else window.alert("Insira pelo menos um operando!");
}

function resultado() {
    if (aBool && bBool) {

        b = parseFloat(val.replace(",", "."));

        if (op === "+")
            res = somaDe(a, b);
        else if (op === "-")
            res = subtracaoDe(a, b);
        else if (op === "÷")
            res = divisaoDe(a, b);
        else if (op === "×")
            res = multiplicacaoDe(a, b);
        else window.alert("Erro!");

        val = res;
        rBool = true;

        eq = "";
        writeEq();
        val = "";

        vBool = false;
    }
}

function writeEq() {
    document.getElementById("eq").innerHTML = eq;
    document.getElementById("val").innerHTML = val;
}

function somaDe(op1, op2) {
    return op1 + op2;
}

function subtracaoDe(op1, op2) {
    return op1 - op2;
}

function multiplicacaoDe(op1, op2) {
    return op1 * op2;
}

function divisaoDe(op1, op2) {
    if (op2 != 0)
        return op1 / op2;

    window.alert("Impossível divisão por zero!");
}

function perc() {
    if (rBool) {
        res = divisaoDe(res, 100);

        val = res;
        eq = "";
        writeEq();
        val = "";
    }
    else if (aBool) {
        a = parseFloat(val.replace(",", "."));
        res = divisaoDe(a, 100);
        rBool = true;

        val = res;
        eq = "";
        writeEq();
        val = "";
    }
    vBool = false;
}

function raiz() {
    if (rBool) {
        if (res >= 0) {
            res = Math.sqrt(res);

            val = res;
            eq = "";
            writeEq();
            val = "";
        }
        else document.getElementById("val").innerHTML = "Raíz não é real";
    }
    else if (aBool) {
        a = parseFloat(val.replace(",", "."));

        if (a >= 0) {
            res = Math.sqrt(a);
            rBool = true;

            val = res;
            eq = "";
            writeEq();
            val = "";
        }
        else document.getElementById("val").innerHTML = "Raíz não é real";
    }
    vBool = false;
}

function quad() {
    if (rBool) {
        res = Math.pow(res, 2);

        val = res;
        eq = "";
        writeEq();
        val = "";
    }
    else if (aBool) {
        a = parseFloat(val.replace(",", "."));

        res = Math.pow(a, 2);
        rBool = true;

        val = res;
        eq = "";
        writeEq();
        val = "";
    }
    vBool = false;
}

function inversa() {
    if (rBool) {
        res = divisaoDe(1, res);

        val = res;
        eq = "";
        writeEq();
        val = "";
    }
    else if (aBool) {
        a = parseFloat(val.replace(",", "."));
        res = divisaoDe(1, a);
        rBool = true;

        val = res;
        eq = "";
        writeEq();
        val = "";
    }

    vBool = false;
}
//Função que limpa tudo
function resetC() {
    res = 0;
    rBool = false;

    a = 0;
    aBool = false;

    b = 0;
    bBool = false;

    val = res;
    eq = "";
    writeEq();
    val = "";

    vBool = false;
}

//Função que limpa o último digito
function backspace() {
    val = val.substring(0, val.length - 1);
    if (val.length < 1) {
        val = "0";
        vBool = false;
    }
    writeEq();
}

function hello() {
    window.alert("Oi " + window.prompt("Como te chamas?") + "!");
}