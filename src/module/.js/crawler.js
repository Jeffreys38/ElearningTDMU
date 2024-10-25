// Module dùng để crawnler và tải dữ liệu
import cheerio from "cheerio"
import fetch from 'node-fetch'
import fs from 'fs'
import https from 'https'
import request from "request"
// Các module riêng
import { homepage, saveFile, URL_BAIDANG } from './config.js'
import { format } from "./format.js"

// Khởi tạo đối tượng f có trong class format (bao gồm các phương thức định dạng riêng cho dữ liệu crawnler)
var f = new format()

async function GET_LINK_IMAGE(url) {
  // Send Request && Receive Response
  const page = await fetch(url)

  const body = await page.text()

  // Nạp file html vào $
  const $ = cheerio.load(body)

  // Tìm tất cả thẻ <img> có class="noidungbaigiang"
  const images = $("body").find(".noidungbaidang > div img")

  if (images != 0) {
    var Link = []

    images.each(function (i, element) {
      const image = $(this)
      Link.push(
        {
          "url": homepage + image.attr('src'),
          "index": i
        }
      )
    })
    return Link
  } else {
    return 0 // Nếu không tìm thấy nội dung
  }
}
console.log(await GET_LINK_IMAGE("https://tuyensinh.tdmu.edu.vn/News/Detail/1387"))
/**
 * @param {const} MaNganhDaoTao Truyền mã ngành đào tạo (Ví dụ: 1681)
 * @param {object} file Dùng để lưu tiến độ tải
 */
export async function DownloadImage(MaNganhDaoTao, file) {
  let folder = saveFile + '/' + MaNganhDaoTao

  let url = URL_BAIDANG + MaNganhDaoTao

  let Link = await GET_LINK_IMAGE(url)

  // Create folder
  try {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  } catch (err) {
    console.error(err);
  }

  // Nếu tìm thấy ảnh (nội dung bài đăng)
  if (Link != 0) {
    let file_downloaded = 0

    Link.forEach(element => {
      https.get(element.url, (res) => {
        // Đường dẫn lưu trữ ảnh
        const path = `${folder}/${element.index}.png`;

        // Lưu file
        const filePath = fs.createWriteStream(path);
        res.pipe(filePath);

        // Nếu tải thành công
        filePath.on('finish', () => {
          filePath.close();

          // Code xử lý tiến độ tải
          // Cập nhật số lượng file đã tải được
          file_downloaded++;

          // Nếu đã tải hết tất cả các file
          if (file_downloaded === Link.length) {
            file.progess++; // Tiến độ tải
            console.log("Progess: " + file.progess + "/" + file.allFiles)
            file.callBack()
          }
        })
      })
    });
  } else {
    // Nếu không tìm thấy ảnh thì vẫn tính là đã tải
    file.progess++
    console.log("Progess: " + file.progess + "/" + file.allFiles)
    file.callBack()
  }
}

/** 
 *  Trả về 1 mảng kiểu object gồm:
 *    - MaKhoiNganh: Mã tương ứng của từng khối ngành
 *    - TenNganhDaoTao: Tên ngành đào tạo
 *    - MaNganhDaoTao: Mã ngành đào tạo riêng của ngành đó
*/
export async function GetAllPage(url) {
  const page = await fetch(url)

  const body = await page.text()

  // Load file .html
  const $ = cheerio.load(body)

  // Find all tag <img> in class="noidungbaigiang"
  const link = $("body").find(".list-ndt")
  // Store propertise
  let list = []

  let MaKhoiNganh = 1

  link.each(function (i, element) {
    const image = $(this)
    let INDEX_NGANH = []

    image.each(function (i, element) {
      let NganhDaoTao = $(element).find(".list-group-item")
      NganhDaoTao.each(function (i, element) {
        // Xử lí chuỗi trước khi gán vào list
        let format_TenNganhDaoTao = f.TenNganhDaoTao($(element).text())
        let format_MaKhoiNganhDaoTao = f.MaKhoiNganhDaoTao($(element).attr('href'))

        INDEX_NGANH.push(
          {
            MaKhoiNganh: MaKhoiNganh,
            TenNganhDaoTao: format_TenNganhDaoTao,
            MaNganhDaoTao: format_MaKhoiNganhDaoTao,
          }
        )
      })
    })

    if (INDEX_NGANH.length != 0)
      list.push(INDEX_NGANH)

    INDEX_NGANH = []
    MaKhoiNganh++
  })
  return list
}

export async function NameKhoiNganhDaoTao(url) {
  const page = await fetch(url)

  const body = await page.text()

  // Nạp file .html vào $
  const $ = cheerio.load(body)

  // Tìm tất cả thẻ <img> có class="noidungbaigiang"
  const link = $("body").find(".col-md-12 .img-responsive")

  // Store in array
  var list = []
  let array = []

  link.each(function (i, element) {
    const image = $(element)
    // Format src to name
    let name = f.NameKhoiNganhDaoTao(image.attr('src'))

    array.push(name)
    array.push(i + 1)

    list.push(array)

    array = []
  })
  return list
}

export async function GET_ALL_MaKhoiNganhDaoTao(url) {
  const page = await fetch(url)

  const body = await page.text()

  // Load file .html
  const $ = cheerio.load(body)

  // Find all tag <img> in class="noidungbaigiang"
  const link = $("body").find(".list-ndt")

  let result = []

  link.each(function (i, element) {
    const MaKhoiNganhDaoTao = $(element).find(".list-group-item")
    MaKhoiNganhDaoTao.each(function (i, element) {
      const code = f.MaKhoiNganhDaoTao($(element).attr('href'))
      result.push(code)
    })
  })
  return result
}

export function GET_THONGBAO_DIEMCHUAN(callback) {
  const url = 'https://tuyensinh.tdmu.edu.vn/News/ThongTinTuyenSinh/4';

  request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const resultArray = [];

      $('a').each((i, el) => {
        const h4 = $(el).find('h4').text().trim();
        if (h4.includes('Thông báo điểm chuẩn')) {
          const link = $(el).attr('href');
          const content = h4;
          resultArray.push({ content, link });
        }
      });

      callback(resultArray);
    }
  });
}