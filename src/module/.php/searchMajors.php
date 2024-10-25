<?php
include("database.php");

$LIMIT_RESULT = 10; // Giới hạn kết quả tìm kiếm
$inputValue = $_POST['inputValue'];

// Xử lý kết quả tìm kiếm
$query = "
  SELECT TenKhoiNganh, TenNganhDaoTao, MaNganhDaoTao
  FROM nganhdaotao, daihocchinhquy
  WHERE TenNganhDaoTao LIKE '%$inputValue%' 
  AND nganhdaotao.MakhoiNganh = daihocchinhquy.MakhoiNganh
  LIMIT {$LIMIT_RESULT}
  ";

$result = mysqli_query($connect, $query);

if (mysqli_affected_rows($connect) != 0)
{
  $STT = 1;

  echo "<h4 style='margin-bottom: 10px;'>NGÀNH HỌC (KHỐI NGÀNH ĐÀO TẠO) </h4>";
  while ($row = mysqli_fetch_row($result)) {
    echo "<a href='DaoTaoDHChinhQuy.php?isClick_MaKhoiNganhDaoTao={$row[2]}'>";
      echo "<div class='result'>";
        echo "<p class='nganhdaotao'>{$STT}. {$row[1]} ({$row[0]})</p>";
      echo "</div>";
    echo "</a>";

    $STT++;
  }
} else {
  echo "Không tìm thấy !";
}

mysqli_free_result($result);
mysqli_close($connect);
?>