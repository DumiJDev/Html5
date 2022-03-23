var mot = ["Js 1:7 Tão-somente esforça-te e tem mui bom ânimo, para teres o cuidado de fazer conforme a toda a lei que meu servo Moisés te ordenou; dela não te desvies, nem para a direita nem para a esquerda, para que prudentemente te conduzas por onde quer que andares.\nJs 1:8 Não se aparte da tua boca o livro desta lei; antes medita nele dia e noite, para que tenhas cuidado de fazer conforme a tudo quanto nele está escrito; porque então farás prosperar o teu caminho, e serás bem sucedido.\nJs 1: 9 Não to mandei eu ? Esforça - te, e tem bom ânimo; não temas, nem te espantes; porque o SENHOR teu Deus é contigo, por onde quer que andares.",
    "Rm 8:28 E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.",
    "Rm 8:31 Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós?\nRm 8: 32 Aquele que nem mesmo a seu próprio Filho poupou, antes o entregou por todos nós, como nos não dará também com ele todas as coisas ?"
];
var lou = ["Sl 150:6 Tudo quanto tem fôlego louve ao SENHOR. Louvai ao SENHOR.",
    "Sl 145:1 EU te exaltarei, ó Deus, rei meu, e bendirei o teu nome pelos séculos dos séculos e para sempre.\nSl 145: 2 Cada dia te bendirei, e louvarei o teu nome pelos séculos dos séculos e para sempre.\nSl 145: 3 Grande é o SENHOR, e muito digno de louvor, e a sua grandeza inescrutável.\nSl 145: 4 Uma geração louvará as tuas obras à outra geração, e anunciarão as tuas proezas.\nSl 145: 5 Falarei da magnificência gloriosa da tua majestade e das tuas obras maravilhosas.\nSl 145: 6 E se falará da força dos teus feitos terríveis; e contarei a tua grandeza.\nSl 145: 7 Proferirão abundantemente a memória da tua grande bondade, e cantarão a tua justiça.\nSl 145: 8 Piedoso e benigno é o SENHOR, sofredor e de grande misericórdia.\nSl 145: 9 O SENHOR é bom para todos, e as suas misericórdias são sobre todas as suas obras.\nSl 145: 10 Todas as tuas obras te louvarão, ó SENHOR, e os teus santos te bendirão.\nSl 145: 11 Falarão da glória do teu reino, e relatarão o teu poder,\nSl 145: 12 Para fazer saber aos filhos dos homens as tuas proezas e a glória da magnificência do teu reino.\nSl 145: 13 O teu reino é um reino eterno; o teu domínio dura em todas as gerações.    \nSl 145: 14 O SENHOR sustenta a todos os que caem, e levanta a todos os abatidos.        \nSl 145: 15 Os olhos de todos esperam em ti, e lhes dás o seu mantimento a seu tempo.\nSl 145: 16 Abres a tua mão, e fartas os desejos de todos os viventes.\nSl 145: 17 Justo é o SENHOR em todos os seus caminhos, e santo em todas as suas obras.\nSl 145: 18 Perto está o SENHOR de todos os que o invocam, de todos os que o invocam em verdade.\nSl 145: 19 Ele cumprirá o desejo dos que o temem; ouvirá o seu clamor, e os salvará.\nSl 145: 20 O SENHOR guarda a todos os que o amam; mas todos os ímpios serão destruídos.\nSl 145: 21 A minha boca falará o louvor do SENHOR, e toda a carne louvará o seu santo nome pelos séculos dos séculos e para sempre."
];
var med = ["Mt 11: 29 Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração; e encontrareis descanso para as vossas almas.",
    "Jó 19:25 Porque eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra.",
    "Sl 19:14 Sejam agradáveis as palavras da minha boca e a meditação do meu coração perante a tua face, SENHOR, Rocha minha e Redentor meu!",
    "Sl 1:1 BEM-AVENTURADO o homem que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores, nem se assenta na roda dos escarnecedores.\nSl 1: 2 Antes tem o seu prazer na lei do SENHOR, e na sua lei medita de dia e de noite.\nSl 1: 3 Pois será como a árvore plantada junto a ribeiros de águas, a qual dá o seu fruto no seu tempo; as suas folhas não cairão, e tudo quanto fizer prosperará.\nSl 1: 4 Não são assim os ímpios; mas são como a moinha que o vento espalha.\nSl 1: 5 Por isso os ímpios não subsistirão no juízo, nem os pecadores na congregação dos justos.\nSl 1: 6 Porque o SENHOR conhece o caminho dos justos; porém o caminho dos ímpios perecerá."
];

var i = 0;
var j = 0;
var k = 0;

function motivo() {
    window.alert(mot[i++ % mot.length]);
}

function louvor() {
    window.alert(lou[j++ % lou.length]);
}

function meditacao() {
    window.alert(med[k++ % med.length]);
}
/////////////////////////
var nEl = 0;
var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var sdp = "";

function drawTV() {

    var head = "<table><tbody>";

    head += "<tr>";

    for (var i = 0; i < parseInt(document.getElementById("nEl").value); i++)
        mem[i] = abc[i];

    getTV();

    for (var i = 0; i < mem.length; i++) {
        head += "<th>" + mem[i] + "</th>";
    }

    head += "<th>S</th></tr>";

    var bod = "";

    for (var i = 0; i < Math.pow(2, mem.length); i++) {
        bod += "<tr>";

        for (var j = 0; j < mem.length; j++) {
            bod += "<td>" + tv[i][j] + "</td>";
        }

        bod += "<td><input id=\"m" + i + "\" size=\"2\"/></td></tr>";
    }

    bod += "</tbody></table>";

    document.getElementById("tab").innerHTML = head + bod;
}

function getExSDP() {
    sdp = "";
    for (var i = 0; i < Math.pow(mem.length, 2); i++) {
        if (parseInt(document.getElementById("m" + i).value) == 1) {
            for (var index = 0; index < tv[i].length; index++) {
                if (parseInt(tv[i][index]) == 0)
                    sdp += "<span class=\"neg\">" + mem[index] + "</span>";
                else
                    sdp += mem[index];
            }
            sdp += "+"
        }
    }

    document.getElementById("sdp").innerHTML = sdp.substring(0, sdp.length - 1);
}

function getExPDS() {
    sdp = "";
    for (var i = 0; i < Math.pow(mem.length, 2); i++) {
        if (parseInt(document.getElementById("m" + i).value) == 1) {
            sdp += "(";
            for (var index = 0; index < tv[i].length; index++) {
                if (parseInt(tv[i][index]) == 0)
                    sdp += "<span class=\"neg\">" + mem[index] + "</span>+";
                else
                    sdp += mem[index] + "+";
            }

            sdp = sdp.substring(0, sdp.length - 1);

            sdp += ")";
        }
    }

    document.getElementById("sdp").innerHTML = sdp;
}