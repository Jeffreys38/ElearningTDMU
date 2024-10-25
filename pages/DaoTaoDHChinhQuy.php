<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tuyển sinh TDMU</title>
    <!-- FONT FAMILY -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <!-- LOGO -->
    <link rel="shortcut icon" href="../assets/ico/logo-tdmu.ico" />
    <!-- CSS -->
    <link rel="stylesheet" href="../assets/css/DaoTaoDHChinhQuy.css">
    <link rel="stylesheet" href="../assets/css/responsive/mobile.css">
    <link rel="stylesheet" href="../assets/css/responsive/tablet.css">
    <!-- CDN -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
</head>

<body>
    <div id="main">
        <!--HEADER-->
        <div class="row box-center" id="header">
            <div class="col col-25">
                <div class="logo">
                    <a href="https://tuyensinh.tdmu.edu.vn"><img src="https://tdmu.edu.vn/img/logo2018-1.png"
                            alt="logo"></a>
                </div>
            </div>
            <div class="col col-35">
                <div class="box-search">
                    <input id="js-search" class="search" type="text" placeholder="Tìm ngành học ở đây">
                    <span class="material-symbols-outlined">Search</span>
                    <!-- List search -->
                    <div id="box-search-list">
                    </div>
                </div>
            </div>
            <div class="col col-45">
                <div id="nav-right" class="row">
                    <div class="col nav"><a id="js-diemchuan" href="#">Điểm chuẩn</a></div>
                    <div class="col"><a id="js-nophoso" href="#">Nộp hồ sơ</a></div>
                    <div id="nav-menu">
                        <a href="#"><span class="material-symbols-outlined">menu</span></a>
                        <ul id="subnav">
                            <li>
                                <p><a target="_blank" href="https://tuyensinh.tdmu.edu.vn/News/Detail/2648">
                                    Học bổng</a>
                                </p>
                            </li>
                            <li>
                                <p><a target="_blank" href="https://tuyensinh.tdmu.edu.vn/News/Detail/2650">Học
                                    phí</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!---->

        <!--CONTENT-->
        <div class="row">
            <!-- THANH ĐIỀU HƯỚNG -->
            <div class="col" id="nav-bar">
                <!--EXPLORE-->
                <div id="scroll-bar">
                    <div id="js-action" class="group">
                        <h2>Các khối ngành đào tạo</h2>
                        <?php
                        include('../src/module/.php/database.php');

                        $query = "
                        SELECT TenKhoiNganh, MaKhoiNganh, (SELECT EndContent FROM nganhdaotao WHERE daihocchinhquy.MaKhoiNganh = nganhdaotao.MaKhoiNganh LIMIT 1)
                        FROM daihocchinhquy
                        ";
                        $result = mysqli_query($connect, $query);
                        while ($row = mysqli_fetch_row($result)) {
                            // Nếu ngành đào tạo đó chưa có thì ẩn không hiển thị
                            if ($row[2] == NULL)
                                continue;
                            // Ngược lại
                            echo "<a id='$row[1]' href='DaoTaoDHChinhQuy.php?isClick_MaKhoiNganh=$row[1]'>$row[0]</a>";
                        }
                        //Closing the statement
                        mysqli_free_result($result);

                        //Closing the connection
                        mysqli_close($connect);
                        ?>
                        <!-- <a class="readmore" href="#">Explore All</a> -->
                    </div>
                </div>
            </div>
            <!-- HIỂN THỊ CÁC CHƯƠNG TRÌNH ĐÀO TẠO -->
            <div class="col col-35" id="content-mid">
                <div id="khoa-01" class="group">
                    <?php
                    include('../src/module/.php/isClick_MaKhoiNganh.php')
                        ?>
                </div>

                <!-- NÚT (MỞ) THANH MENU TRÊN TABLET -->
                <div id="tablet-btn-menu">
                    <span class="material-symbols-outlined">menu</span>
                </div>

                <!-- NÚT (ĐÓNG) THANH MENU TRÊN TABLET -->
                <div id="tablet-btn-close-menu">
                    <span class="material-symbols-outlined">close</span>
                </div>
            </div>

            <div id="js-draft"></div>

            <!-- HIỂN THỊ NỘI DUNG CỦA TỪNG NGÀNH -->
            <div class="col col-45" id="content-right">
                <div id="post-automatic">
                    <!--Nút phóng to/thu nhỏ nội dung-->
                    <div id="utility-bar">
                        <div id="scroll-up"><span class="material-symbols-outlined">expand_less</span></div>
                        <div id="btn-zoom-inout">
                            <span class="material-symbols-outlined">zoom_in</span>
                            <span id="name-utility-zoom">Phóng to nội dung</span>
                        </div>
                    </div>
                    <?php
                    include('../src/module/.php/isClick_MaNganhDaoTao.php')
                        ?>
                </div>
            </div>
        </div>
    </div>
    <div id="wrapper">
        <div id="pop-up">
            <div id="btn-close"><span class="material-symbols-outlined">cancel</span></div>
            <div id="content">
                <?php
                include('../src/module/.php/isClick_Main.php')
                    ?>
            </div>
        </div>
    </div>
    <script type="module" src="../src/module/.js/Pages/DaoTaoDHChinhQuy/main_SearchBox.js"></script>
    <script type="module" src="../src/module/.js/Pages/DaoTaoDHChinhQuy/main_UtilityBar.js"></script>
    <script type="module" src="../src/module/.js/Pages/DaoTaoDHChinhQuy/main_Page.js"></script>
</body>

</html>