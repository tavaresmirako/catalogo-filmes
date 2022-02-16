import getJSON from "./json.js";

document.addEventListener('DOMContentLoaded', function() {

    // Estrutura cards
    const mainSection = document.querySelector(".mainSection");
    const card = document.createElement("div");

    // Fazer a solicitação JSON AQUI ---
    let getData = getJSON('https://rafaelescalfoni.github.io/desenv_web/filmes.json'); // Solicitei o json
    let jsonData = JSON.stringify(getData); // Transformei em string para poder trabalhar com isso
    let jsonDataParse = JSON.parse(JSON.parse(jsonData)); // Após isso, transformei em objeto para trabalhar

    // Conteúdo dinâmico dos cards
    for (let i = 0; i < jsonDataParse.length; i++) {
        console.log(jsonDataParse[i]);
        let classificacao = jsonDataParse[i].classificacao;
        let elenco = jsonDataParse[i].elenco;
        let img = jsonDataParse[i].figura;
        let generos = jsonDataParse[i].generos;
        let id = jsonDataParse[i].id;
        let opinioes = jsonDataParse[i].opinioes;
        let resumo = jsonDataParse[i].resumo;
        let titulo = jsonDataParse[i].titulo;
        let titulosSemelhantes = jsonDataParse[i].titulosSemelhantes;

        if (titulosSemelhantes.length == 2) {
            card.innerHTML = `
            <div class="mainSection__card">
                <div class="mainSection__card__top">
                    <div class="imgFilme">
                        <img src="${img}" alt="" class="mainSection__card__top__mainImage">
                    </div>
                    <div class="mainSection__card__top__middleContent">
                        <h3>${titulo}</h3>
                        <p>${generos}</p>
                        <img src="" alt="">                
                        <p><b>Elenco</b>: ${elenco}</p>
                    </div>
                    <div>            
                        <p class="age${i}">${classificacao}</p> 
                    </div>
                </div>
                <p class="mainSection__card__abstract">${resumo}</p>
                
                <h4>Títulos Similares</h4>
                <div class="mainSection__card__similars">
                    <div class="mainSection__card__similars__img displayBlock">
                        <img src="${jsonDataParse[titulosSemelhantes[0]-1].figura}" alt="">
                    </div>
                    <div class="mainSection__card__similars__img displayBlock">
                        <img src="${jsonDataParse[titulosSemelhantes[1]-1].figura}" alt="">
                    </div>     
                </div>
            </div>`;
        } else {

            if (titulosSemelhantes.length == 3) {
                card.innerHTML = `
                <div class="mainSection__card">
                    <div class="mainSection__card__top">
                        <div class="imgFilme">
                            <img src="${img}" alt="" class="mainSection__card__top__mainImage">
                        </div>
                        <div class="mainSection__card__top__middleContent">
                            <h3>${titulo}</h3>
                            <p>${generos}</p>
                            <img src="" alt="">                
                            <p><b>Elenco</b>: ${elenco}</p>
                        </div>
                        <div>            
                            <p class="age${i}">${classificacao}</p> 
                        </div>
                    </div>
                    <p class="mainSection__card__abstract">${resumo}</p>
                    
                    <h4>Títulos Similares</h4>
                    <div class="mainSection__card__similars">
                        <div class="mainSection__card__similars__img displayBlock">
                            <img src="${jsonDataParse[titulosSemelhantes[0]-1].figura}" alt="">
                        </div>
                        <div class="mainSection__card__similars__img displayBlock">
                            <img src="${jsonDataParse[titulosSemelhantes[1]-1].figura}" alt="">
                        </div>     
                        <div class="mainSection__card__similars__img displayBlock">
                            <img src="${jsonDataParse[titulosSemelhantes[2]-1].figura}" alt="">
                        </div>     
                    </div>
                </div>`;
            } else {
                if (titulosSemelhantes.length == 1) {
                    card.innerHTML = `
                    <div class="mainSection__card">
                        <div class="mainSection__card__top">
                            <div class="imgFilme">
                                <img src="${img}" alt="" class="mainSection__card__top__mainImage">
                            </div>
                            <div class="mainSection__card__top__middleContent">
                                <h3>${titulo}</h3>
                                <p>${generos}</p>
                                <img src="" alt="">                
                                <p><b>Elenco</b>: ${elenco}</p>
                            </div>
                            <div>            
                                <p class="age${i}">${classificacao}</p> 
                            </div>
                        </div>
                        <p class="mainSection__card__abstract">${resumo}</p>
                        
                        <h4>Títulos Similares</h4>
                        <div class="mainSection__card__similars">
                            <div class="mainSection__card__similars__img displayBlock">
                                <img src="${jsonDataParse[titulosSemelhantes[0]-1].figura}" alt="">
                            </div>                   
                        </div>
                    </div>`;
                } else {
                    card.innerHTML = `
                    <div class="mainSection__card">
                        <div class="mainSection__card__top">
                            <div class="imgFilme">
                                <img src="${img}" alt="" class="mainSection__card__top__mainImage">
                            </div>
                            <div class="mainSection__card__top__middleContent">
                                <h3>${titulo}</h3>
                                <p>${generos}</p>
                                <img src="" alt="">                
                                <p><b>Elenco</b>: ${elenco}</p>
                            </div>
                            <div>            
                                <p class="age${i}">${classificacao}</p> 
                            </div>
                        </div>
                        <p class="mainSection__card__abstract">${resumo}</p>
                    </div>`;
                }
            }
        }

        mainSection.innerHTML += card.innerHTML;

        let classEtaria = document.querySelector(`.age${i}`);
        let classEtariaNumber = document.querySelector(`.age${i}`).textContent;
        classEtariaNumber = parseInt(classEtariaNumber);

        // Mudando os bgs das ClassEtarias
        if (classEtariaNumber >= 18) {
            classEtaria.classList.add('classificacao18');
            classEtaria.classList.remove('classificacaoLivre')
            classEtaria.classList.remove('classificacao14');
            classEtaria.classList.remove('classificacao16');;
        }

        if ((classEtariaNumber > 15) & (classEtariaNumber < 17)) {
            classEtaria.classList.add('classificacao16');
            classEtaria.classList.remove('classificacaoLivre');
            classEtaria.classList.remove('classificacao14');
            classEtaria.classList.remove('classificacao18');
        }

        if (classEtariaNumber <= 15) {
            classEtaria.classList.add('classificacaoLivre');
            classEtaria.classList.remove('classificacao14');
            classEtaria.classList.remove('classificacao16');
            classEtaria.classList.remove('classificacao18');
        }

        // Colocando a palavra livre no lugar de 12 ou menos
        if (classificacao <= 12) {
            classEtaria.textContent = `Livre`;
        }

    }
});