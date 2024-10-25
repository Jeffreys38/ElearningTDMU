<?php
/**
 * Usage: 
 * Lấy kết quả truy vấn: $result = mysqli_query($connect, $query); 
 * Closing the statement: mysqli_free_result($result);
 * Closing the connection: mysqli_close($connect);
 */
$servername = "localhost";
$username = "elearning";
$password = "elearning";
$database = "elearning";

// Create connection
$connect = new mysqli($servername, $username, $password, $database);

// Check connection
if ($connect->connect_error) {
  die("Connection failed: " . $connect->connect_error);
}
?>