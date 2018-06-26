<?php
if(isset($_POST['submit_image']))
{
  $uploadfile=$_FILES["uploadFile"]["tmp_name"];
  $folder="images/";
  move_uploaded_file($_FILES["uploadFile"]["tmp_name"], $folder.$_FILES["uploadFile"]["name"]);
  echo '<img src="'.$folder."".$_FILES["uploadFile"]["name"].'" width="300">';
  exit();
}
?>