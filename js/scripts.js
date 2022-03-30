const MINA=-99;




function geraMinas(tabuleiro,num){
   let len=tabuleiro.length;
    for(i=1;i<=num;i++){
        let pos;
        do{
            pos=parseInt(Math.random()*len);
           // console.log(pos);
        }while(tabuleiro[pos]==MINA);

        tabuleiro[pos]=MINA;
        $('#debug').html($('#debug').html()+' '+pos);
    }
}
function geraNumeros(tabuleiro){
    let len=tabuleiro.length;
    for(i=0;i<=len;i++){
        if(tabuleiro[i]==MINA){
            ;
        }else{

            linha=parseInt(i/10);
            coluna=i%10;
            lIni=linha==0?0:linha-1;
            lFin=linha==13?13:linha+1;
            cIni=coluna==0?0:coluna-1;
            cFin=coluna==9?9:coluna+1;
            numMinas=0;
            for(k=lIni;k<=lFin;k++){
                for(j=cIni;j<=cFin;j++){

                    if(tabuleiro[k*10+j]==MINA)
                      numMinas++;
                }
            }
            tabuleiro[i]=numMinas;
        }
    }

}
function inicia(tabuleiro,minas){
    for(i=0;i<=139;i++)
        tabuleiro[i]=0;
    geraMinas(tabuleiro,minas);
    geraNumeros(tabuleiro);
}

function mostra1Mina(i) {
    $('#dv'+i).html('@');
}
function mostraMina(tabuleiro,i) {
    if(i<140){
        if (tabuleiro[i] == MINA) {
            mostra1Mina(i);
            setTimeout(function (){mostraMina(tabuleiro, i+1);}, 1);
         }else
            mostraMina(tabuleiro, i+1);
    }

}






function mostra(tabuleiro){
    let res=' ';
    for(i=0;i<=139;i++) {
        if (tabuleiro[i] == MINA)
            res = ' ';
        else
            if(tabuleiro[i]<0)
                res = tabuleiro[i]*-1;
            else
                res=' ';
        $('#dv' + i).html(res);
    }
}

function abre(i,tabuleiro){

    if (tabuleiro[i] == MINA) {
        mostraMina(tabuleiro,0);
        //alert('BUMMM');
    }
    else
        if(tabuleiro[i]<0) {
            return 0;
        }else{
            tabuleiro[i]*=-1;
            mostra(tabuleiro);
        }

}