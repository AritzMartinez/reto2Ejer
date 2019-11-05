<html>
<?php
$n1 = 1; // Dese
$n2 = 100;// Hasta

echo 'Números primos del '. $n1 .' al '. $n2;
for ($i = $n1; $i <= $n2; $i++) {
    $nDiv = 0; // Número de divisores
    for ($n = 1; $n <= $i; $n++) {
        if($i%$n == 0){
            $nDiv = $nDiv + 1;
        }
    }
    if($nDiv == 2 or $i == 1){
        print '<br>';
        print $i;
    }
}
?>
</html>