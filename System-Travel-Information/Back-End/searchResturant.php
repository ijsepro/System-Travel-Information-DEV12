<?php
/**
 * Created by IntelliJ IDEA.
 * User: User
 * Date: 4/16/2018
 * Time: 12:29 PM
 */
$id = $_GET['id'];

$result = mysqli_query($mysqli, "SELECT * FROM users WHERE id=$id");

while($res = mysqli_fetch_array($result))
{
    $name = $res['name'];
    $age = $res['age'];
    $email = $res['email'];
}
?>



