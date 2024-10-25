<?php
include('update_NopHoSo.php');

$resultArray = GET_THONGBAO_NOPHOSO();

foreach($resultArray as $content)
{
    echo '<a class="php-nophoso" target="_blank" href="' . $content["link"] . '">' . $content["content"] . '</a>';
}
?>