var pontos = 0;
var ganhou1 = 0;
var ganhou2 = 0;
var ganhou3 = 0;
var ganhou4 = 0;
var ganhou5 = 0;
var ganhou6 = 0;
var ganhou7 = 0;
var ganhou8 = 0;
var ganhou9 = 0;
var ganhou10 = 0;
var ganhou11 = 0;
var ganhou12 = 0;
var ganhou13 = 0;
var ganhou14 = 0;

function dica1() {
    alert("Possui como função armazenar grandes quantidades de informações, portanto é uma memória não-volátil que mantém os dados mesmo com seu desligamento, possui uma velocidade menor comparada às outras memórias de computador devido sua alta capacidade de armazenamento de dados. Presente comumente em unidades de disco rígido.")
}
function dica2() {
    alert("É uma memória volátil capaz de carregar os programas em execução e os respectivos dados do utilizador, usada pelo processador para armazenamento temporário de arquivos e programas que estão sendo processados no momento. O seu funcionamento permite uma troca de dados mais rápida pelo processador do que pelo acesso ao disco rígido devido sua maior velocidade de largura de banda.")
}
function dica3() {
    alert("A “Comunicação de Dados” possui como função o transporte dos dados de um computador. Ele é um sistema de comunicação que transfere os dados entre diferentes componentes de um computador ou entre diferentes computadores, possuindo seus diversos barramentos como o de, memória, de “Peripheral Component Interconnect standard” (PCI), e “Universal Serial Bus” (USB).")
}
function dica4() {
    alert("É uma memória presente dentro do CPU, está no topo da hierarquia de memória de um computador, portanto apresentam pequenas quantidades e são limitadas quanto ao seu tamanho, porém são de alta velocidade. É capaz de armazenar instruções que manipulam dados. São muito utilizados na execução de programas, os processadores são capazes de acessá-los diretamente.")
}
function dica5() {
    alert("Um processador que possui suas operações divididas em duas partes, permitindo que seu trabalho seja realizado em um ambiente multitarefa. Podendo dividir suas tarefas, apresentam concentrações de calor menores e de maiores largura de banda de dados. Exemplos: AMD Athlon 64 X2, Intel Celeron Dual-Core, Intel Pentium D, Intel Core 2 Duo, Intel Core i3.")
}
function dica6() {
    alert("Ele é um tipo de memória de acesso aleatório, que as informações são gravadas uma única vez e após isso não podem ser alteradas ou apagadas, somente acessadas, memórias cujo conteúdo é gravado permanentemente.")
}
function dica7() {
    alert("Ele é capaz de realizar operações diversas como cálculos aritméticos, lógica booleana, processamento de dados, e realiza a comunicação com outros componentes do computador, também conhecido como o “cérebro do computador”.")
}
function dica8() {
    alert("É um tipo de memória não volátil, ou seja, capaz de realizar armazenamento de dados em massa. Uma vez programada, ela é capaz de ser lida ilimitadas vezes e pode ser apagada apenas por exposição a uma forte luz ultravioleta. Usada antigamente em chips de BIOS de PCs.")
}
function dica9() {
    alert("É uma linha de controle que habilita a memória para que as portas de entrada e saída (I/O) sejam liberadas para a operação desejada. Ele é um pino de comando presente em vários circuitos integrados que conecta as portas de entrada e saída no dispositivo para o circuito interno daquele dispositivo. Um exemplo é o protocolo “Serial Peripheral Interface” (SPI).")
}
function dica10() {
    alert("A “Comunicação de Endereços” possui como função indicar o endereço de memória dos dados que o processador deve retirar ou enviar. A largura da comunicação de endereço determina quanta memória o sistema pode endereçar. Por exemplo: um sistema com comunicação de endereço de 32  bits pode endereçar 2³² locações de memória, se cada locação de memória for de 1 byte então o espaço de memória endereçável é de 4GB.")
}
function dica11() {
    alert("Ele realiza o acesso a memória RAM do sistema sem depender do processador, realizando este acesso direto, a transferência de dados ocorre de uma forma muito mais rápida, que com deste processo, ele permite que o processador não seja sobrecarregado. Utilizado comumente em controladores de disco, placas gráficas, placas de rede ou placas de som.")
}
function dica12() {
    alert("Um processador que em sua arquitetura possui suas operações divididas em quatro partes, permitindo que seu trabalho seja realizado em um ambiente multitarefa. Portanto possuem um poder de processamento muito maior em relação aos antecessores devido sua presença do dobro de núcleos físicos o que auxilia em maiores capacidades de multitarefa. Exemplos: AMD Athlon II X4, Intel Core 2 Quad, Intel Core i5, Intel Core i7, AMD Ryzen 5.")
}
function dica13() {
    alert("É o circuito digital capaz de combinar uma variedade de operações lógicas e aritméticas a serem executadas no computador, também conhecida como “grande calculadora eletrônica”")
}
function dica14() {
    alert("É um tipo de dispositivo de armazenamento não volátil, trata-se de um chip re-escrevível que preserva seu conteúdo sem necessidade de fonte de alimentação. Apresenta maior resistência comparado aos discos rígidos e possuem altas velocidades de transferência, porém apresentam uma número finito de escritas/exclusões. Usada atualmente em cartões de memória, pen drives, Unidades de Estado Sólido (SSD).")
}
function resposta1() {
    if (ganhou1 == 1) {
        alert("Você já acertou.")
    } else {
        var Massaletra_1 = RAMletra3.value.toUpperCase();
        var Massaletra_2 = Massaletra2.value.toUpperCase();
        var Massaletra_3 = Massaletra3.value.toUpperCase();
        var Massaletra_4 = ROMletra2.value.toUpperCase();
        var Massaletra_5 = Massaletra5.value.toUpperCase();
        var Massaletra_6 = Massaletra6.value.toUpperCase();
        var Massaletra_7 = AddressBusletra1.value.toUpperCase();
        var Massaletra_8 = Massaletra8.value.toUpperCase();
        var Massaletra_9 = Massaletra9.value.toUpperCase();
        var Massaletra_10 = Massaletra10.value.toUpperCase();
        var Massaletra_11 = Massaletra11.value.toUpperCase();
        var Massaletra_12 = Massaletra12.value.toUpperCase();
        var Massaletra_13 = ULAletra3.value.toUpperCase();
        var Massaletra_14 = Massaletra14.value.toUpperCase();
        var Massaletra_15 = Massaletra15.value.toUpperCase();
        var Massaletra_16 = Flashletra3.value.toUpperCase();
        if (Massaletra_1 == 'M' && Massaletra_2 == 'E' && Massaletra_3 == 'M' && Massaletra_4 == 'O' && Massaletra_5 == 'R' && Massaletra_6 == 'I' && Massaletra_7 == 'A' && (Massaletra_8 == '-' || Massaletra_8 == '') && Massaletra_9 == 'D' && Massaletra_10 == 'E' && (Massaletra_11 == '-' || Massaletra_11 == '') && Massaletra_12 == 'M' && Massaletra_13 == 'A' && Massaletra_14 == 'S' && Massaletra_15 == 'S' && Massaletra_16 == 'A') {
            alert("Acertou! +200 pontos")
            pontos += 200;
            b_pontos.innerHTML = pontos;
            ganhou1++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }

}
function resposta2() {
    if (ganhou2 == 1) {
        alert("Você já acertou.")
    } else {
        RAMletra_1 = RAMletra1.value.toUpperCase();
        RAMletra_2 = RAMletra2.value.toUpperCase();
        RAMletra_3 = RAMletra3.value.toUpperCase();
        if (RAMletra_1 == 'R' && RAMletra_2 == 'A' && RAMletra_3 == 'M') {
            alert("Acertou! +50 pontos")
            pontos += 50;
            b_pontos.innerHTML = pontos;
            ganhou2++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function resposta3() {
    if (ganhou3 == 1) {
        alert("Você já acertou.")
    } else {
        Dataletra_1 = DualCoreletra1.value.toUpperCase();
        Dataletra_2 = DataBusletra2.value.toUpperCase();
        Dataletra_3 = DataBusletra3.value.toUpperCase();
        Dataletra_4 = DataBusletra4.value.toUpperCase();
        Dataletra_5 = DataBusletra5.value.toUpperCase();
        Dataletra_6 = AddressBusletra9.value.toUpperCase();
        Dataletra_7 = DataBusletra7.value.toUpperCase();
        Dataletra_8 = DataBusletra8.value.toUpperCase();
        if (Dataletra_1 == 'D' && Dataletra_2 == 'A' && Dataletra_3 == 'T' && Dataletra_4 == 'A' && (Dataletra_5 == '-' || Massaletra_5 == '') && Dataletra_6 == 'B' && Dataletra_7 == 'U' && Dataletra_8 == 'S') {
            alert("Acertou! +150 pontos")
            pontos += 150;
            b_pontos.innerHTML = pontos;
            ganhou3++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function resposta4() {
    if (ganhou4 == 1) {
        alert("Você já acertou.")
    } else {
        Registradoresletra_1 = DualCoreletra8.value.toUpperCase();
        Registradoresletra_2 = Registradoresletra2.value.toUpperCase();
        Registradoresletra_3 = Registradoresletra3.value.toUpperCase();
        Registradoresletra_4 = Registradoresletra4.value.toUpperCase();
        Registradoresletra_5 = Registradoresletra5.value.toUpperCase();
        Registradoresletra_6 = Registradoresletra6.value.toUpperCase();
        Registradoresletra_7 = Registradoresletra7.value.toUpperCase();
        Registradoresletra_8 = Registradoresletra8.value.toUpperCase();
        Registradoresletra_9 = Registradoresletra9.value.toUpperCase();
        Registradoresletra_10 = Registradoresletra10.value.toUpperCase();
        Registradoresletra_11 = QuadCoreletra8.value.toUpperCase();
        Registradoresletra_12 = Registradoresletra12.value.toUpperCase();
        Registradoresletra_13 = Registradoresletra13.value.toUpperCase();
        if (Registradoresletra_1 == 'R' && Registradoresletra_2 == 'E' && Registradoresletra_3 == 'G' && Registradoresletra_4 == 'I' && Registradoresletra_5 == 'S' && Registradoresletra_6 == 'T' && Registradoresletra_7 == 'R' && Registradoresletra_8 == 'A' && Registradoresletra_9 == 'D' && Registradoresletra_10 == 'O' && Registradoresletra_11 == 'R' && Registradoresletra_12 == 'E' && Registradoresletra_13 == 'S') {
            alert("Acertou! +200 pontos")
            pontos += 200;
            b_pontos.innerHTML = pontos;
            ganhou4++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function resposta5() {
    if (ganhou5 == 1) {
        alert("Você já acertou.")
    } else {
        DualCoreletra_1 = DualCoreletra1.value.toUpperCase();
        DualCoreletra_2 = DualCoreletra2.value.toUpperCase();
        DualCoreletra_3 = DualCoreletra3.value.toUpperCase();
        DualCoreletra_4 = DualCoreletra4.value.toUpperCase();
        DualCoreletra_5 = DualCoreletra5.value.toUpperCase();
        DualCoreletra_6 = DualCoreletra6.value.toUpperCase();
        DualCoreletra_7 = DualCoreletra7.value.toUpperCase();
        DualCoreletra_8 = DualCoreletra8.value.toUpperCase();
        DualCoreletra_9 = DualCoreletra9.value.toUpperCase();
        if (DualCoreletra_1 == 'D' && DualCoreletra_2 == 'U' && DualCoreletra_3 == 'A' && DualCoreletra_4 == 'L' && (DualCoreletra_5 == '-' || DualCoreletra_5 == '') && DualCoreletra_6 == 'C' && DualCoreletra_7 == 'O' && DualCoreletra_8 == 'R' && DualCoreletra_9 == 'E') {
            alert("Acertou! +150 pontos")
            pontos += 150;
            b_pontos.innerHTML = pontos;
            ganhou5++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function resposta6() {
    if (ganhou6 == 1) {
        alert("Você já acertou.")
    } else {
        ROMletra_1 = ROMletra1.value.toUpperCase();
        ROMletra_2 = ROMletra2.value.toUpperCase();
        ROMletra_3 = ROMletra3.value.toUpperCase();
        if (ROMletra_1 == 'R' && ROMletra_2 == 'O' && ROMletra_3 == 'M') {
            alert("Acertou! +50 pontos")
            pontos += 50;
            b_pontos.innerHTML = pontos;
            ganhou6++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function resposta7() {
    if (ganhou7 == 1) {
        alert("Você já acertou.")
    } else {
        CPUletra_1 = CPUletra1.value.toUpperCase();
        CPUletra_2 = CPUletra2.value.toUpperCase();
        CPUletra_3 = CPUletra3.value.toUpperCase();
        if (CPUletra_1 == 'C' && CPUletra_2 == 'P' && CPUletra_3 == 'U') {
            alert("Acertou! +50 pontos")
            pontos += 50;
            b_pontos.innerHTML = pontos;
            ganhou7++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function resposta8() {
    if (ganhou8 == 1) {
        alert("Você já acertou.")
    } else {
        EPROMletra_1 = EPROMletra1.value.toUpperCase();
        EPROMletra_2 = EPROMletra2.value.toUpperCase();
        EPROMletra_3 = Massaletra5.value.toUpperCase();
        EPROMletra_4 = EPROMletra4.value.toUpperCase();
        EPROMletra_5 = EPROMletra5.value.toUpperCase();
        if (EPROMletra_1 == 'E' && EPROMletra_2 == 'P' && EPROMletra_3 == 'R' && EPROMletra_4 == 'O' && EPROMletra_5 == 'M') {
            alert("Acertou! +75 pontos")
            pontos += 75;
            b_pontos.innerHTML = pontos;
            ganhou8++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function resposta9() {
    if (ganhou9 == 1) {
        alert("Você já acertou.")
    } else {
        CSletra_1 = CSletra1.value.toUpperCase();
        CSletra_2 = AddressBusletra7.value.toUpperCase();
        if (CSletra_1 == 'C' && CSletra_2 == 'S') {
            alert("Acertou! +50 pontos")
            pontos += 50;
            b_pontos.innerHTML = pontos;
            ganhou9++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function resposta10() {
    if (ganhou10 == 1) {
        alert("Você já acertou.")
    } else {
        AddressBusletra_1 = AddressBusletra1.value.toUpperCase();
        AddressBusletra_2 = AddressBusletra2.value.toUpperCase();
        AddressBusletra_3 = AddressBusletra3.value.toUpperCase();
        AddressBusletra_4 = AddressBusletra4.value.toUpperCase();
        AddressBusletra_5 = AddressBusletra5.value.toUpperCase();
        AddressBusletra_6 = AddressBusletra6.value.toUpperCase();
        AddressBusletra_7 = AddressBusletra7.value.toUpperCase();
        AddressBusletra_8 = AddressBusletra8.value.toUpperCase();
        AddressBusletra_9 = AddressBusletra9.value.toUpperCase();
        AddressBusletra_10 = CPUletra3.value.toUpperCase();
        AddressBusletra_11 = AddressBusletra11.value.toUpperCase();
        if (AddressBusletra_1 == 'A' && AddressBusletra_2 == 'D' && AddressBusletra_3 == 'D' && AddressBusletra_4 == 'R' && AddressBusletra_5 == 'E' && AddressBusletra_6 == 'S' && AddressBusletra_7 == 'S' && (AddressBusletra_8 == '-' || AddressBusletra_8 == '') && AddressBusletra_9 == 'B' && AddressBusletra_10 == 'U' && AddressBusletra_11 == 'S') {
            alert("Acertou! +150 pontos")
            pontos += 150;
            b_pontos.innerHTML = pontos;
            ganhou10++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function resposta11() {
    if (ganhou11 == 1) {
        alert("Você já acertou.")
    } else {
        DMAletra_1 = QuadCoreletra4.value.toUpperCase();
        DMAletra_2 = DMAletra2.value.toUpperCase();
        DMAletra_3 = DMAletra3.value.toUpperCase();
        if (DMAletra_1 == 'D' && DMAletra_2 == 'M' && DMAletra_3 == 'A') {
            alert("Acertou! +50 pontos")
            pontos += 50;
            b_pontos.innerHTML = pontos;
            ganhou11++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function resposta12() {
    if (ganhou12 == 1) {
        alert("Você já acertou.")
    } else {
        QuadCoreletra_1 = QuadCoreletra1.value.toUpperCase();
        QuadCoreletra_2 = QuadCoreletra2.value.toUpperCase();
        QuadCoreletra_3 = QuadCoreletra3.value.toUpperCase();
        QuadCoreletra_4 = QuadCoreletra4.value.toUpperCase();
        QuadCoreletra_5 = QuadCoreletra5.value.toUpperCase();
        QuadCoreletra_6 = QuadCoreletra6.value.toUpperCase();
        QuadCoreletra_7 = QuadCoreletra7.value.toUpperCase();
        QuadCoreletra_8 = QuadCoreletra8.value.toUpperCase();
        QuadCoreletra_9 = QuadCoreletra9.value.toUpperCase();
        if (QuadCoreletra_1 == 'Q' && QuadCoreletra_2 == 'U' && QuadCoreletra_3 == 'A' && QuadCoreletra_4 == 'D' && (QuadCoreletra_5 == '-' || QuadCoreletra_5 == '') && QuadCoreletra_6 == 'C' && QuadCoreletra_7 == 'O' && QuadCoreletra_8 == 'R' && QuadCoreletra_9 == 'E') {
            alert("Acertou! +150 pontos")
            pontos += 150;
            b_pontos.innerHTML = pontos;
            ganhou12++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function resposta13() {
    if (ganhou13 == 1) {
        alert("Você já acertou.")
    } else {
        ULAletra_1 = ULAletra1.value.toUpperCase();
        ULAletra_2 = ULAletra2.value.toUpperCase();
        ULAletra_3 = ULAletra3.value.toUpperCase();
        if (ULAletra_1 == 'U' && ULAletra_2 == 'L' && ULAletra_3 == 'A') {
            alert("Acertou! +50 pontos")
            pontos += 50;
            b_pontos.innerHTML = pontos;
            ganhou13++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}
function resposta14() {
    if (ganhou14 == 1) {
        alert("Você já acertou.")
    } else {
        Flashletra_1 = Flashletra1.value.toUpperCase();
        Flashletra_2 = Flashletra2.value.toUpperCase();
        Flashletra_3 = Flashletra3.value.toUpperCase();
        Flashletra_4 = Flashletra4.value.toUpperCase();
        Flashletra_5 = Flashletra5.value.toUpperCase();
        if (Flashletra_1 == 'F' && Flashletra_2 == 'L' && Flashletra_3 == 'A' && Flashletra_4 == 'S' && Flashletra_5 == 'H') {
            alert("Acertou! +100 pontos")
            pontos += 100;
            b_pontos.innerHTML = pontos;
            ganhou14++;
            if (pontos == 1475) {
                alert("Parabéns!! Você acertou tudo!")
            }
        } else {
            alert("Errou")
        }
    }
}