<?php
//include('database.php');
//include('config.php');
include('update_ThongBaoDiemChuan.php');

$resultArray = GET_THONGBAO_DIEMCHUAN();

foreach($resultArray as $content)
{
    echo '<a class="php-diemchuan" target="_blank" href="' . $content["link"] . '">' . $content["content"] . '</a>';
}
// $query = "SELECT * FROM thongbao_diemchuan";

// $result = mysqli_query($connect, $query);

// $STT = 1;

// while ($row = mysqli_fetch_row($result)) {
//     $url = $homepage.$row[1];
//     echo "<a target='_blank' href='$url'>$STT. $row[0]</a>";
//     $STT++;
// }

// //Closing the statement
// mysqli_free_result($result);

// //Closing the connection
// mysqli_close($connect);
?>