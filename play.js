function playgame() {
    modal.style.display = 'none'
    gridJogo.innerHTML = `
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="numberBOX">1</div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="numberBOX">2</div>
    <input id="RAMletra1" type="text" maxlength="1">
    <input id="RAMletra2" type="text" maxlength="1">
    <input id="RAMletra3" type="text" maxlength="1">
    <!---->
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="numberBOX">3</div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="numberBOX">4</div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Massaletra2" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="numberBOX">5</div>
    <input id="DualCoreletra1" type="text" maxlength="1">
    <!---->
    <input id="DualCoreletra2" type="text" maxlength="1">
    <input id="DualCoreletra3" type="text" maxlength="1">
    <input id="DualCoreletra4" type="text" maxlength="1">
    <input id="DualCoreletra5" type="text" maxlength="1">
    <input id="DualCoreletra6" type="text" maxlength="1">
    <input id="DualCoreletra7" type="text" maxlength="1">
    <input id="DualCoreletra8" type="text" maxlength="1">
    <!---->
    <input id="DualCoreletra9" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Massaletra3" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="DataBusletra2" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Registradoresletra2" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="numberBOX">6</div>
    <input id="ROMletra1" type="text" maxlength="1">
    <input id="ROMletra2" type="text" maxlength="1">
    <!---->
    <input id="ROMletra3" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="DataBusletra3" type="text" maxlength="1">
    <div class="numberBOX">7</div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Registradoresletra3" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="numberBOX">8</div>
    <input type="text" id="EPROMletra1" maxlength="1">
    <input type="text" id="EPROMletra2" maxlength="1">
    <input id="Massaletra5" type="text" maxlength="1">
    <input type="text" id="EPROMletra4" maxlength="1">
    <input type="text" id="EPROMletra5" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="numberBOX">9</div>
    <div class="vazio"></div>
    <input id="DataBusletra4" type="text" maxlength="1">
    <input id="CPUletra1" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Registradoresletra4" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Massaletra6" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="CSletra1" type="text" maxlength="1">
    <div class="vazio"></div>
    <input id="DataBusletra5" type="text" maxlength="1"> <!-- "-" -->
    <input id="CPUletra2" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Registradoresletra5" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="numberBOX">10</div>
    <input id="AddressBusletra1" type="text" maxlength="1">
    <!---->
    <input id="AddressBusletra2" type="text" maxlength="1">
    <input id="AddressBusletra3" type="text" maxlength="1">
    <input id="AddressBusletra4" type="text" maxlength="1">
    <input id="AddressBusletra5" type="text" maxlength="1">
    <input id="AddressBusletra6" type="text" maxlength="1">
    <input id="AddressBusletra7" type="text" maxlength="1">
    <input id="AddressBusletra8" type="text" maxlength="1"> <!-- "-" -->
    <input id="AddressBusletra9" type="text" maxlength="1">
    <!---->
    <input id="CPUletra3" type="text" maxlength="1">
    <!---->
    <input id="AddressBusletra11" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Registradoresletra6" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Massaletra8" type="text" maxlength="1"> <!-- "-" -->
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="DataBusletra7" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Registradoresletra7" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Massaletra9" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="DataBusletra8" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Registradoresletra8" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Massaletra10" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Registradoresletra9" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Massaletra11" type="text" maxlength="1"> <!-- "-" -->
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="numberBOX">11</div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Registradoresletra10" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Massaletra12" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="numberBOX">12</div>
    <input id="QuadCoreletra1" type="text" maxlength="1">
    <input id="QuadCoreletra2" type="text" maxlength="1">
    <input id="QuadCoreletra3" type="text" maxlength="1">
    <input id="QuadCoreletra4" type="text" maxlength="1">
    <!---->
    <input id="QuadCoreletra5" type="text" maxlength="1"> <!-- "-" -->
    <input id="QuadCoreletra6" type="text" maxlength="1">
    <input id="QuadCoreletra7" type="text" maxlength="1">
    <input id="QuadCoreletra8" type="text" maxlength="1">
    <!---->
    <input id="QuadCoreletra9" type="text" maxlength="1">
    <div class="numberBOX">13</div>
    <input id="ULAletra1" type="text" maxlength="1">
    <input id="ULAletra2" type="text" maxlength="1">
    <input id="ULAletra3" type="text" maxlength="1">
    <!---->
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="DMAletra2" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Registradoresletra12" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Massaletra14" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="DMAletra3" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Registradoresletra13" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <input id="Massaletra15" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="numberBOX">14</div>
    <input id="Flashletra1" type="text" maxlength="1">
    <input id="Flashletra2" type="text" maxlength="1">
    <input id="Flashletra3" type="text" maxlength="1">
    <!---->
    <input id="Flashletra4" type="text" maxlength="1">
    <input id="Flashletra5" type="text" maxlength="1">
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    <div class="vazio"></div>
    `
    boxPoints.innerHTML = `
    <div class="placar">
        <h1>Pontos: <b id="b_pontos">0</b></h1>
    </div>
    <div class="botoes">
        <div class="coluna">
            <div class="div_resp">
                <button onclick="resposta1()">Responder 1</button>
                <button onclick="dica1()">Definição</button>
                </p>
            </div>
            <div class="div_resp">
                <button onclick="resposta2()">Responder 2</button>
                <button onclick="dica2()">Definição</button>
            </div>
            <div class="div_resp">
                <button onclick="resposta3()">Responder 3</button><button onclick="dica3()">Definição</button>
            </div>
            <div class="div_resp">
                <button onclick="resposta4()">Responder 4</button><button onclick="dica4()">Definição</button>
            </div>
            <div class="div_resp">
                <button onclick="resposta5()">Responder 5</button><button onclick="dica5()">Definição</button>
            </div>
            <div class="div_resp">
                <button onclick="resposta6()">Responder 6</button><button onclick="dica6()">Definição</button>
            </div>
            <div class="div_resp">
                <button onclick="resposta7()">Responder 7</button><button onclick="dica7()">Definição</button>
            </div>
        </div>

        <div class="coluna">
            <div class="div_resp">
                <button onclick="resposta8()">Responder 8</button><button onclick="dica8()">Definição</button>
            </div>
            <div class="div_resp">
                <button onclick="resposta9()">Responder 9</button><button onclick="dica9()">Definição</button>
            </div>
            <div class="div_resp">
                <button onclick="resposta10()">Responder 10</button><button onclick="dica10()">Definição</button>
            </div>
            <div class="div_resp">
                <button onclick="resposta11()">Responder 11</button><button onclick="dica11()">Definição</button>
            </div>
            <div class="div_resp">
                <button onclick="resposta12()">Responder 12</button><button onclick="dica12()">Definição</button>
            </div>
            <div class="div_resp">
                <button onclick="resposta13()">Responder 13</button><button onclick="dica13()">Definição</button>
            </div>
            <div class="div_resp">
                <button onclick="resposta14()">Responder 14</button><button onclick="dica14()">Definição</button>
            </div>
        </div>

    </div>

`
}
