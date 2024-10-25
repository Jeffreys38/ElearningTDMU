import fs from 'fs'
import sharp from 'sharp'
import path from 'path'
import fse from 'fs-extra'

const inputFolder = '../../../images';
const outputFolder = '../../../ico_images';

// Lấy tất cả các thư mục trong thư mục đầu vào
fs.readdir(inputFolder, (err, folders) => {
    if (err) throw err;
  
    // Lặp qua từng thư mục
    folders.forEach(folder => {
      const folderPath = path.join(inputFolder, folder);
  
      // Kiểm tra xem thư mục có ít nhất một file hình ảnh hay không
      const imageFiles = fs.readdirSync(folderPath).filter(file => {
        return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png');
      });
      if (imageFiles.length === 0) return;
  
      // Tạo thư mục đầu ra cho thư mục hiện tại (nếu chưa có)
      const outputFolderPath = path.join(outputFolder, folder);
      fse.ensureDirSync(outputFolderPath);
  
      // Lấy ảnh đầu tiên trong thư mục
      const firstFile = imageFiles[0];
      const inputPath = path.join(folderPath, firstFile);
      const outputPath = path.join(outputFolderPath, firstFile);
  
      sharp(inputPath)
        .resize(210, 160, {
          fit: sharp.fit.cover,
          position: sharp.position.right
        })
        .toFile(outputPath, (err, info) => {
          if (err) console.log(err);
          console.log(info);
        });
    });
  });