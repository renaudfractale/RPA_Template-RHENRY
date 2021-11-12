<?php
  switch($_SERVER["REQUEST_METHOD"])
  {
    case 'POST':
        $curl = curl_init();

        curl_setopt_array($curl, array(
          CURLOPT_URL => $this->request->getPost()["url"],
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => '',
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST =>  $_POST["methode"],
          CURLOPT_POSTFIELDS => $_POST["body"],
          CURLOPT_HTTPHEADER => $_POST['head']
        ));
        
        $response = curl_exec($curl);
        
        curl_close($curl);
        echo $response;
        break;
    default:
      // Requête invalide
      header("HTTP/1.0 405 Method Not Allowed");
      break;
  }

?>

