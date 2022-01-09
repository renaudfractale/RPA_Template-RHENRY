function CleanFolder {

    param (
        [string]$Folder
    )

    "Clean [$Folder]"
    if (Test-Path -Path $Folder) {
        Remove-Item $Folder -Recurse
    }
    New-Item -Path $Folder -ItemType Directory
    New-Item -Path ($Folder+"\placeholder.txt") -ItemType File

}

$Folders = ".\Exceptions_Screenshots",".\Data\Recap",".\Data\Output",".\Data\Archive"

foreach ($Folder in $Folders) {CleanFolder $Folder}