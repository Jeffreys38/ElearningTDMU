<?php
if (isset($_GET['isClick_MaKhoiNganhDaoTao'])) {
    $MaKhoiNganhDaoTao = $_GET['isClick_MaKhoiNganhDaoTao'];
    HienThi_NoiDung($MaKhoiNganhDaoTao);
}
else if (isset($_GET['isClick_MaKhoiNganh'])) {
    include('../src/module/.php/database.php');

    $MaKhoiNganh = $_GET['isClick_MaKhoiNganh'];

    $query = "SELECT MaNganhDaoTao FROM nganhdaotao WHERE MaKhoiNganh = " . $MaKhoiNganh;

    $result = mysqli_query($connect, $query);

    $row = mysqli_fetch_row($result);
    
    // Nếu tồn tại mã ngành đào tạo của khối ngành tương ứng
    if ($row != null)
        HienThi_NoiDung($row[0]);
    
    //Closing the statement
    mysqli_free_result($result);

    //Closing the connection
    mysqli_close($connect);
}
// Hiển thị nội dung mặc định
else {
    HienThi_NoiDung(2800);
}

function HienThi_NoiDung($MaKhoiNganhDaoTao)
{
    include('../src/module/.php/database.php');

    $query = "SELECT StartContent, EndContent FROM nganhdaotao WHERE manganhdaotao =" . $MaKhoiNganhDaoTao;

    $result = mysqli_query($connect, $query);

    $row = mysqli_fetch_row($result);

    $saveFile = '../images/';

    // Nếu không có ảnh
    if ($row[1] == 0)
    {
        // Hiển thị banner đang được cập nhật
        echo "<img id='img-updating' src='../assets/img/updating.png' alt=''/>";
    } else {
        for ($x = $row[0]; $x < $row[1]; $x++) {
            $path = $saveFile;
            echo "<img src='" . $path . $MaKhoiNganhDaoTao . "/" . $x . ".png'>";
        }
    }

    //Closing the statement
    mysqli_free_result($result);

    //Closing the connection
    mysqli_close($connect);
}
?>