<?php
include_once 'libary/simplehtmldom_1_9_1/simple_html_dom.php';
include ('config.php');

$keyword = array("hồ sơ", "thủ tục", "nhập học");
function GET_THONGBAO_NOPHOSO()
{
  global $keyword;
  global $homepage;

  $url = 'https://tuyensinh.tdmu.edu.vn/News/Category/19';

  $html = file_get_html($url);

  $resultArray = [];

  foreach ($html->find('a') as $el) {
    $h4 = $el->find('h4', 0);

    if ($h4) {
      $content = html_entity_decode($h4->plaintext);
      $link = $el->href;

      foreach ($keyword as $key)
      {
        if (stripos($content, $key) !== false) {
          $link = $homepage . $el->href;
          $resultArray[] = array('content' => $content, 'link' => $link);
          break;
        }
      }
    }
  }

  return $resultArray;
}
?>