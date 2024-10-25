<?php
include_once 'libary/simplehtmldom_1_9_1/simple_html_dom.php';
include ('config.php');

$keyword = 'điểm chuẩn';
function GET_THONGBAO_DIEMCHUAN()
{
  global $keyword;
  global $homepage;

  $url = 'https://tuyensinh.tdmu.edu.vn/News/ThongTinTuyenSinh/4';

  $html = file_get_html($url);

  $resultArray = [];

  foreach ($html->find('a') as $el) {
    $h4 = $el->find('h4', 0);

    if ($h4) {
      $content = html_entity_decode($h4->plaintext);
      $link = $el->href;

      if (stripos($content, $keyword) !== false) {
        $link = $homepage . $el->href;
        $resultArray[] = array('content' => $content, 'link' => $link);
      }
    }
  }

  return $resultArray;
}
?>