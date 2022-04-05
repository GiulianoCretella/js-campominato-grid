    
     function selezioneLivello() {
      
        let difficoltà = document.getElementById("difficoltàMenu");
        let indiceOpzione = difficoltà.selectedIndex;
        let opzione = difficoltà.options[indiceOpzione];
        console.log(opzione.value)
        let colNumber;
        let colsPerSide;
        if(opzione.value === 'easy'){
            colNumber = 100;
            colsPerSide = 10;
        } else if(opzione.value === 'medium'){
            colNumber = 81;
            colsPerSide = 9;
        } else{ 
            colNumber = 49;
            colsPerSide = 7;
        }
        console.log (colsPerSide);
        stampareGriglia(colNumber,colsPerSide);
    }

    function stampareGriglia(colNumber, colsPerSide) {
        console.log(colNumber);
        let bloccoCentrale = document.querySelector('.my_container');
        bloccoCentrale.innerHTML='';
        let mainRow = document.createElement('div');
        mainRow.setAttribute('class','row main_row')
        for (let i = 1;  i<= colNumber; i++){
            const cols = stampaCella(i, colsPerSide); 
            mainRow.append(cols);
        }
        bloccoCentrale.append(mainRow);
    }

    function stampaCella(colNumber,colsPerSide){
        let cols = document.createElement('div');
        cols.setAttribute('class', 'col my-col');
        cols.style.flex = `0 0 calc(100% / ${colsPerSide})`;
        cols.style.height = `calc(100% / ${colsPerSide})`;
        cols.innerHTML = `<span> ${colNumber} </span>`;
        return cols
    }


document.getElementById('bottonePlay').addEventListener('click', selezioneLivello);

