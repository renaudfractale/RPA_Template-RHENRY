<?php
//var_dump($_GET);
//$fp = fopen("php://input", "r");    
$a = json_decode($_GET["rq"], true);
//echo "<br><br>";
//var_dump($a);
//echo $a;
       $curl = curl_init();
        curl_setopt_array($curl, array(
          CURLOPT_URL => $a["url"],
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => '',
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST =>  $a["methode"],
         CURLOPT_POSTFIELDS => json_encode($a["body"]),
          CURLOPT_HTTPHEADER => $a['head']
        ));
       $response = curl_exec($curl);
        
        curl_close($curl);
       echo $response;
?>



