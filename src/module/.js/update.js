import { GET_THONGBAO_DIEMCHUAN, GetAllPage, NameKhoiNganhDaoTao, DownloadImage, GET_ALL_MaKhoiNganhDaoTao } from "./crawler.js";
import { URL_DaiHocChinhQuy, saveFile } from "./config.js";
import CONFIG_DB from "./database.js"
import fs from 'fs'

Update();

async function Update() {
    // CAP NHAT THONG TIN VE DIEM CHUAN
    // GET_THONGBAO_DIEMCHUAN((resultArray) => {
    //     let connection = CONFIG_DB()
    //     connection.connect(function (error) {
    //         if (error) throw error

    //         resultArray.forEach(e => {
    //             let statement =
    //                 `   INSERT INTO thongbao_diemchuan
    //                     VALUES ('${e.content}', '${e.link}')
    //                 `
    //             connection.query(statement, function (error, result) {
    //                 if (error) throw error;
    //                 console.log(result.affectRows)
    //             })
    //         });
    //         connection.end()
    //     })
    // });

    SQL_DELETE_DB()

    // Tải dữ liệu từ trên host: {homepage} về máy và lưu trong folder {saveFile}
    await DOWNLOAD_DATA().then(() => {
        SQL_INSERT()
    })
}

// Lấy dữ liệu: Tên ngành đào tạo và trả về kiểu mảng
async function crawnler_Name_NganhDaoTao() {
    return await NameKhoiNganhDaoTao(URL_DaiHocChinhQuy)
}

// Lấy dữ liệu của từng khối ngành và mỗi ngành đào tạo trong đó 
// trả về properties {TenNganhDaoTao, MaNganhDaoTao}
function crawnler_Properties_NganhDaoTao() {
    return GetAllPage(URL_DaiHocChinhQuy)
}

export function GET_NUMBER_FILE_OF_MaNganhDaoTao(MaNganhDaoTao) {
    let folder = `${saveFile}/${MaNganhDaoTao}/`

    try {
        const files = fs.readdirSync(folder)
        // Lấy từng tên folder (Tương ứng mã ngành đào tạo) có trong folder images 
        return files.length
    } catch (err) {
        console.log(err)
    }
}

function GET_NAME_FILE_IN_FOLDER(folder) {
    let array_file = []
    try {
        const files = fs.readdirSync(folder)
        // Lấy từng tên folder (Tương ứng mã ngành đào tạo) có trong folder images 
        files.forEach(file => {
            array_file.push(file)
        })
    } catch (err) {
        console.log(err)
    }
    return array_file
}

/**
 * Lấy số lượng ảnh của mỗi mã ngành đào tạo và cập nhật lên database
 */
export function SQL_INSERT_EndContent() {
    let connection = CONFIG_DB()

    connection.connect(function (err) {
        if (err) throw err;
        /* Sắp xếp giảm dần theo MaNganhDaoTao = để hiển thị ngành mới nhất
        */
        let statement = "ALTER TABLE nganhdaotao ORDER BY MaNganhDaoTao DESC"
        connection.query(statement, function (error, result) {
            // Nếu gặp lỗi thì dừng
            if (error) throw error;
            // Ngược lại
            console.log("[Successfully]  SQL_INSERT_EndContent()")
        });

        // Cập nhật lại EndContent
        let folder = saveFile
        let files = GET_NAME_FILE_IN_FOLDER(folder)

        let ALL_STATEMENT = () => {
            let result = ""
            files.forEach((MaNganhDaoTao) => {
                result += `
                UPDATE nganhdaotao
                SET EndContent = ${GET_NUMBER_FILE_OF_MaNganhDaoTao(MaNganhDaoTao)}
                WHERE MaNganhDaoTao = ${MaNganhDaoTao};
                \n
            `
            })
            return result
        }

        connection.query(ALL_STATEMENT(), function (error, result) {
            // Nếu gặp lỗi thì dừng
            if (error) throw error;
            // Ngược lại
            console.log("[Successfully] UPDATE nganhdaotao SET {EndContent} WHERE {MaNganhDaoTao}")
        });

        // close the database connection
        connection.end();
    });
}

async function DOWNLOAD_DATA() {
    return new Promise(async (resolve, reject) => {
        let MaNganhDaoTao = await GET_ALL_MaKhoiNganhDaoTao(URL_DaiHocChinhQuy)

        // Biến dùng để lưu lại tiến độ tải
        let file = {
            progess: 0,
            allFiles: MaNganhDaoTao.length,
            callBack: function () {
                if (file.progess == file.allFiles) {
                    console.log("Đã tải xong")
                    resolve()
                }
            }
        }

        for (let i = 0; i < file.allFiles; i++) {
            await DownloadImage(MaNganhDaoTao[i], file);
        }
    })
}

async function SQL_INSERT() {
    SQL_INSERT_nganhdaotao()

    await SQL_INSERT_daihocchinhquy()

    SQL_INSERT_EndContent()
}

function CONVERT_PROPERTIES_TO_MULTI_ARRAY(properties) {
    let query = []
    properties.forEach(MaKhoiNganh => {
        MaKhoiNganh.forEach(MaNganhDaoTao => {
            query.push([MaNganhDaoTao.MaKhoiNganh, `${MaNganhDaoTao.TenNganhDaoTao}`, MaNganhDaoTao.MaNganhDaoTao]
            )
        })
    });
    return query
}

async function SQL_INSERT_daihocchinhquy() {
    let array = await crawnler_Name_NganhDaoTao()

    // Tạo 1 kết nối mới đến db
    let connection = CONFIG_DB()

    // Truy vấn
    let statement = `INSERT INTO 
    daihocchinhquy(TenKhoiNganh, MaKhoiNganh)  
    VALUES ?`;

    connection.query(statement, [array], function (error, result) {
        // Nếu gặp lỗi thì dừng
        if (error) throw error;
        // Ngược lại
        console.log("[Successfully] SQL_INSERT_daihocchinhquy() ")
    });
    // close the database connection
    connection.end();
}

function SQL_DELETE_DB() {
    let connection = CONFIG_DB()
    connection.connect(function (error) {
        if (error) throw error
        let statement = "DELETE FROM daihocchinhquy; DELETE FROM nganhdaotao;"
        connection.query(statement, function (error, result) {
            if (error) throw error;
            console.log("[Successfully] DELETE")
        })
        connection.end()
    })
}

function SQL_INSERT_nganhdaotao() {
    let connection = CONFIG_DB()
    // Thêm (MaKhoiNganh, TenNganhDaoTao, MaNganhDaoTao) lên table_name nganhdaotao
    connection.connect(async function (err) {
        if (err) throw err;
        let list = await crawnler_Properties_NganhDaoTao()

        let statement = `INSERT INTO 
        nganhdaotao(MaKhoiNganh, TenNganhDaoTao, MaNganhDaoTao)  
        VALUES ?`;
        let nganhdaotao = CONVERT_PROPERTIES_TO_MULTI_ARRAY(list)

        connection.query(statement, [nganhdaotao], function (error, result) {
            // Nếu gặp lỗi thì dừng
            if (error) throw error;
            // Ngược lại
            console.log("[Successfully] SQL_INSERT_nganhdaotao()")
        });
        // close the database connection
        connection.end();
    });
}