$fileProjet = ".\project.json"

Write-Host "Welcome to demo of powershell prompt input" -ForegroundColor Green
$name= Read-Host -Prompt "Enter your name project"
$description= Read-Host -Prompt "Enter your description projet"
$projectVersion= Read-Host -Prompt "Enter your version projet"
if(($projectVersion -match '\d+\.\d+\.\d+') -and  ($name -match '[a-z,A-Z,\d,\-,_,\ ]+') -and  ($description -match '[a-z,A-Z,\d,\-,_,\ ]+'))
{
    $json = Get-Content $fileProjet | ConvertFrom-Json

    $json | add-member -membertype noteproperty -name name -value $name  -Force
    $json | add-member -membertype noteproperty -name description -value $description -Force
    $json | add-member -membertype noteproperty -name projectVersion -value $projectVersion -Force
    $file = $json | ConvertTo-Json
    
    $file | out-file $fileProjet -Encoding utf8
    Write-Host "Fichier Projet Mise à jour"
 } else {
   Write-Host "name(s) project bat formated"  
 }

