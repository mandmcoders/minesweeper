<?php
    if(isset($_GET['minas'])){
        $minas=intval($_GET['minas'])<10?10:(intval($_GET['minas'])>130?130:intval($_GET['minas']));
    }else{
        $minas=10;
    }
?>
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <title>Minesweeper</title>
    <script src="js/scripts.js"></script>
    <script>
        var tabuleiro=new Array;
        $('document').ready(function (){


            inicia(tabuleiro,<?php echo $minas?>);
           mostra(tabuleiro);
        });
    </script>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
<p id="debug"></p>
<h1>Minesweeper (<?php echo $minas?>)</h1>
<span class="btn btn-primary" id="btn">Aqui</span>
<div class="container">
    <div id="tabuleiroHtml">
        <?php
            for($i=0;$i<140;$i++){

                $class=($i+intval($i/10))%2?"escuro":"claro";
                echo "<div oncontextmenu=\"javascript:bandeira(this.id);return false;\" onclick=\"abre($i,tabuleiro)\" class=\"$class box\"  id=\"dv$i\"></div>\n";
            }
        ?>
    </div>
</div>




<!-- Optional JavaScript; choose one of the two! -->

<!-- Option 1: Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

<!-- Option 2: Separate Popper and Bootstrap JS -->
<!--
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
-->
</body>
</html>
