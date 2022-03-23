window.alert("Oi Vânia! Essas dicas são para ti.");

            //Variável que guarda a expressão
            var exp = "";

            //Variável para tabela de verdade(Matriz)
            var tv = [];
            var S = [];

            //Variável para cada letra
            var mem = new Array();

            function getMem() {
                var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

                value = document.getElementById("exp").value.toUpperCase();

                mem = [];

                for (var i = 0; i < abc.length; i++)
                    for (var j = 0; j < value.length; j++) {
                        if (abc[i] == value[j])
                            mem.push(abc[i]);
                    }

            }

            function ordenaMem() {
                var ind = [];
                for (var index = 0; index < mem.length; index++)
                    for (var i = 0; i < mem.length; i++) {
                        if (mem[index] == mem[i] && index != i)
                            ind.push(i);
                    }

                for (var index = ind.length - 1; index >= 0; index--)
                    mem.splice(ind[index], 1);

                mem.sort();
            }

            function getTV() {
                var tab = [];
                var val = [0, 1];

                for (var i = 0; i < mem.length; i++) {
                    tab[i] = new Array();

                    for (var k = 0; k < Math.pow(2, i + 1); k++) {
                        for (var j = 0; j < Math.pow(2, mem.length - (i + 1)); j++) {
                            tab[i].push(k % 2);
                        }
                    }
                }

                for (var i = 0; i < Math.pow(2, mem.length); i++)
                    tv[i] = new Array();

                for (var i = 0; i < Math.pow(2, mem.length); i++)
                    for (var j = 0; j < mem.length; j++)
                        tv[i][j] = tab[j][i];
            }

            function getSDP(value) {
                var sBool = [false, true];
                var sNum = [0, 1];

                var m = [];

                m = value.split("\+");

                for (var index = 0; index < m.length; index++) {

                    value = value.replace(m[index], toAND(m[index].toUpperCase()));
                }

                var eq = "" + value;
                var eqSub = "";
                var aux = [];

                for (var linha = 0; linha < tv.length; linha++) {
                    eqSub = eq;
                    for (var membro = 0; membro < tv[linha].length; membro++) {
                        eqSub = eqSub.replace(mem[membro], tv[linha][membro]);
                    }

                    eqSub = Not(eqSub);

                    aux = eqSub.split("\+");

                    for (var membro = 0; membro < aux.length; membro++) {
                        eqSub = eqSub.replace(aux[membro], And(aux[membro]));
                    }

                    S[linha] = Or(eqSub);
                }

            }

            function toAND(value) {
                var and = "";
                for (var i = 0; i < value.length; i++) {
                    if (value[i] != "~" && i != value.length - 1) {
                        and += value[i] + "*";
                    }
                    else {
                        and += value[i];
                    }
                }

                return and;
            }

            function And(value) {
                for (var index = 0; index < value.length; index++) {
                    if (value[index] == "0")
                        return "0";
                }
                return "1";
            }

            function Or(value) {
                for (var index = 0; index < value.length; index++) {
                    if (value[index] == "1")
                        return "1";
                }
                return "0";
            }

            function Not(value) {
                for (var index = 0; index < value.split("\+").length; index++) {
                    value = value.replace("\~\~", "").replace("\~0", "1").replace("\~1", "0");
                }
                return value;
            }

            function eqExp(value) {
                value = Not(value);

                var val = "";

                for (var i = 0; i < value.length; i++) {
                    if (value[i] == "\~") {
                        val += "<span class=\"neg\">" + value[++i] + "</span>";
                    }
                    else
                        val += value[i];
                }

                return val;
            }

            function desenhaTV() {
                getMem();
                ordenaMem();
                getTV();
                getSDP(document.getElementById("exp").value);
                if (mem.length > 0) {
                    var head = "<table><tbody>";

                    head += "<tr>";

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

                        bod += "<td>" + S[i] + "</td></tr>";
                    }

                    bod += "</table></tbody>";

                    document.getElementById("tabV").innerHTML = head + bod;

                }
            }

            function calcTV() {
                desenhaTV();

                document.getElementById("exp1").innerHTML = "S = " + eqExp(document.getElementById("exp").value);
                document.getElementById("exp").value = "";
            }