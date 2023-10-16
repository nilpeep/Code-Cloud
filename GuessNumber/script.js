

let sayi = Math.round(Math.random()*10);
console.log(sayi);

let sonucEl = document.getElementById('sonuc');

let listeEl = document.getElementById('liste');

let tahminInput = document.getElementById('tahminInput');

let tahminButton = document.getElementById('tahminButton');

let count = 0;

function myFunction(){
    

    let num1 = parseInt(tahminInput.value);

    let li = document.createElement('li');

    if(num1 === sayi){
        li.textContent = 'RESPECT';
        
        listeEl.appendChild(li);
        tahminInput.disabled = true;
        tahminButton.disabled = true;
    }else{
        if(num1<sayi){
            li.textContent=num1 + 'degil, artir' + (4-count) + 'hakkin kaldi.'
        }else{
            li.textContent = num1 + 'degil,azalt' + (4-count) + 'hakkin kaldi.'
        }

        listeEl.appendChild(li);
        count++;
        if(count===5){
            sonucEl.textContent='Hakkin bitti, cevap' + sayi;
            
            tahminInput.disabled = true;
            tahminButton.disabled = true;
        }
    }
}

