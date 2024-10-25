<?php
if (isset($_GET['isClick_MaKhoiNganh'])) {
    $MaKhoiNganh = $_GET['isClick_MaKhoiNganh'];
    HienThi_KhoiNganhDaoTao($MaKhoiNganh);
} else if (isset($_GET['isClick_MaKhoiNganhDaoTao'])) {
    $MaKhoiNganh = TraVe_MaKhoiNganh($_GET['isClick_MaKhoiNganhDaoTao']);
    HienThi_KhoiNganhDaoTao($MaKhoiNganh);
} else {
    HienThi_KhoiNganhDaoTao(1);
}

function TraVe_MaKhoiNganh($MaKhoiNganhDaoTao)
{
    include('database.php');

    $query = "SELECT MaKhoiNganh FROM nganhdaotao WHERE MaNganhDaoTao = $MaKhoiNganhDaoTao";

    $result = mysqli_query($connect, $query);
    $row = mysqli_fetch_row($result);

    return $row[0];
}
function HienThi_KhoiNganhDaoTao($MaKhoiNganh)
{
    include('database.php');

    $query = "SELECT * FROM nganhdaotao WHERE MaKhoiNganh = $MaKhoiNganh";

    $result = mysqli_query($connect, $query);

    while ($row = mysqli_fetch_row($result)) {
        echo "<a href='DaoTaoDHChinhQuy.php?isClick_MaKhoiNganhDaoTao=$row[2]'>";
        echo "<div id='post-$row[2]' class='card'>";
        // IMAGE AUTO
        $outputFolder = '../ico_images';
        $folders = scandir($outputFolder);

        foreach ($folders as $folder) {
            // Nếu tìm thấy mã ngành tương ứng
            if ($folder == $row[2]) {
                $file = scandir($outputFolder . '/' . $folder)[2]; // lấy ảnh duy nhất trong folder
                echo "<img src='{$outputFolder}/{$folder}/{$file}' alt='{$file}' />";
                break;
            }
        }
        // END IMAGE AUTO
        echo "<div>";
        echo "<h3>$row[1]</h3>";
        echo "<p class='note'>Ngành đào tạo</p>";
        echo "</div>";
        echo "</div>";
        echo "</a>";
    }

    //Closing the statement
    mysqli_free_result($result);

    //Closing the connection
    mysqli_close($connect);
}
?>