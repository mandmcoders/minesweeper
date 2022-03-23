function geraMinas(tabuleiro,num){
   let len=tabuleiro.length;
    for(i=1;i<=num;i++){
        let pos;
        do{
            pos=parseInt(Math.random()*len);
            console.log(pos);
        }while(tabuleiro[pos]==-1);

        tabuleiro[pos]=-1;
    }
}
function geraNumeros(tabuleiro){
    let len=tabuleiro.length;
    for(i=0;i<=len;i++){
        if(tabuleiro[i]==-1){
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

                    if(tabuleiro[k*10+j]==-1)
                      numMinas++;
                }
            }
            tabuleiro[i]=numMinas;
        }
    }

}
function inicia(tabuleiro){
    for(i=0;i<=139;i++)
        tabuleiro[i]=0;
    geraMinas(tabuleiro,21);
    geraNumeros(tabuleiro);
}

function mostra(tabuleiro){
    for(i=0;i<=139;i++)
        $('#dv'+i).html(tabuleiro[i]);
}