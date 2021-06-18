var  train  =  true ;

 configuração da função ( )  {
    createCanvas ( 500 ,  500 ) ;
    fundo ( 0 ) ;

    nn  =  novo  RedeNeural ( 2 ,  3 ,  1 ) ;

    // Problema XOR
    dataset  =  {
        entradas :
            [ [ 1 ,  1 ] ,
            [ 1 ,  0 ] ,
            [ 0 ,  1 ] ,
            [ 0 ,  0 ] ] ,
        saídas :
            [ [ 0 ] ,
            [ 1 ] ,
            [ 1 ] ,
            [ 0 ] ]
    }
}

function  draw ( )  {
    if  ( treinar )  {
        para  ( var  i  =  0 ;  i  <  10000 ;  i ++ )  {
             índice  var =  chão ( aleatório ( 4 ) ) ;
            nn . treinar ( conjunto de dados . entradas [ índice ] ,  conjunto de dados . saídas [ índice ] ) ;
        }
        if  ( nn . prever ( [ 0 ,  0 ] ) [ 0 ]  <  0,04  &&  nn . prever ( [ 1 ,  0 ] ) [ 0 ]  >  0,98 )  {
            trem  =  falso ;
            console . log ( "terminou" ) ;
        }
    }
}
© 2021 GitHub, Inc.
