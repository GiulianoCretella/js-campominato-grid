    function stampareGriglia() {
        let bloccoCentrale = document.querySelector('.my_container');
        let mainRow = document.querySelector('.main_row');
        bloccoCentrale.append(mainRow);
        console.log(bloccoCentrale);
        let colsCreate = creaColonne();
        mainRow.innerHTML += colsCreate;
        bloccoCentrale.append(mainRow);
    }
    
    function creaColonne() {
        let colNumber='';
        let difficult='';
        let difficoltà = document.getElementById("difficoltàMenu");
        let indiceOpzione = difficoltà.selectedIndex;
        let opzione = difficoltà.options[indiceOpzione];
        console.log(opzione.value)
        if(opzione.value === 'easy'){
            colNumber = 100;
            difficult = 'easy';
        } else if(opzione.value === 'medium'){
            colNumber = 81;
            difficult = 'medium';
        } else{
            colNumber = 49;
            difficult = 'difficult';
        }
        let cols = ''; 
        let numeriArray=[];
        // console.log(numeriArray)
        let i = 1
        while(i <= colNumber && numeriArray.length <= colNumber){
            if(numeriArray.length <= colNumber){
                numeriArray.push(i)
                cols+=`<div class="my-col col ${difficult}">${i}</div>`;
            }
            i++;
        }
        return cols;
        
    }


document.getElementById('bottonePlay').addEventListener('click', stampareGriglia);
