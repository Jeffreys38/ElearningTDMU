-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2023 at 08:57 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elearning`
--

-- --------------------------------------------------------

--
-- Table structure for table `daihocchinhquy`
--

CREATE TABLE `daihocchinhquy` (
  `TenKhoiNganh` varchar(50) NOT NULL,
  `MaKhoiNganh` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `daihocchinhquy`
--

INSERT INTO `daihocchinhquy` (`TenKhoiNganh`, `MaKhoiNganh`) VALUES
('SƯ PHẠM', 1),
('KINH TẾ', 2),
('NGOẠI NGỮ', 3),
('ÂM NHẠC - MỸ THUẬT', 4),
('TỰ NHIÊN - THỰC PHẨM', 5),
('KHOA HỌC QUẢN LÝ', 6),
('KỸ THUẬT - CÔNG NGHỆ', 7),
('KIẾN TRÚC - XÂY DỰNG', 8),
('XÃ HỘI VÀ NHÂN VĂN', 9),
('ĐÀO TẠO BẰNG TIẾNG ANH', 10),
('y-duoc', 11);

-- --------------------------------------------------------

--
-- Table structure for table `nganhdaotao`
--

CREATE TABLE `nganhdaotao` (
  `MaKhoiNganh` int(11) NOT NULL,
  `TenNganhDaoTao` varchar(60) NOT NULL,
  `MaNganhDaoTao` int(11) NOT NULL,
  `StartContent` int(11) NOT NULL,
  `EndContent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `nganhdaotao`
--

INSERT INTO `nganhdaotao` (`MaKhoiNganh`, `TenNganhDaoTao`, `MaNganhDaoTao`, `StartContent`, `EndContent`) VALUES
(10, 'GIÁO DỤC MẦM NON', 3091, 0, 0),
(10, 'GIÁO DỤC TIỂU HỌC', 3090, 0, 0),
(9, 'QUẢN LÝ VĂN HÓA', 3088, 0, 4),
(2, 'THƯƠNG MẠI ĐIỆN TỬ', 3087, 0, 4),
(2, 'KIỂM TOÁN', 3086, 0, 5),
(2, 'MARKETING', 3085, 0, 4),
(5, 'TOÁN HỌC', 2960, 0, 8),
(5, 'CÔNG NGHỆ SINH HỌC', 2959, 0, 8),
(4, 'TRUYỀN THÔNG ĐA PHƯƠNG TIỆN', 2957, 0, 8),
(3, 'NGÔN NGỮ HÀN QUỐC', 2956, 0, 9),
(10, 'HÓA HỌC', 2944, 0, 0),
(10, 'KỸ THUẬT ĐIỆN', 2942, 0, 0),
(10, 'CÔNG NGHỆ THÔNG TIN', 2941, 0, 0),
(10, 'QUẢN TRỊ KINH DOANH', 2940, 0, 0),
(7, 'KỸ THUẬT ĐIỆN TỬ - VIỄN THÔNG', 2824, 0, 10),
(7, 'TRÍ TUỆ NHÂN TẠO VÀ KHOA HỌC DỮ LIỆU', 2822, 0, 9),
(4, 'ÂM NHẠC', 2821, 0, 9),
(4, 'MỸ THUẬT', 2820, 0, 11),
(7, 'CÔNG NGHỆ THÔNG TIN', 2819, 0, 9),
(1, 'SƯ PHẠM NGỮ VĂN', 2800, 0, 9),
(1, 'SƯ PHẠM LỊCH SỬ', 2799, 0, 8),
(5, 'ĐẢM BẢO CHẤT LƯỢNG VÀ AN TOÀN THỰC PHẨM', 2797, 0, 11),
(5, 'CÔNG NGHỆ THỰC PHẨM', 2796, 0, 9),
(9, 'DU LỊCH', 2795, 0, 13),
(2, 'LOGISTICS VÀ QUẢN LÝ CHUỖI CUNG ỨNG', 2753, 0, 12),
(7, 'CÔNG NGHỆ KỸ THUẬT Ô TÔ', 2748, 0, 9),
(7, 'KỸ THUẬT ĐIỀU KHIỂN VÀ TỰ ĐỘNG HÓA ', 2705, 0, 9),
(6, 'TÂM LÝ HỌC', 2703, 0, 8),
(9, 'QUAN HỆ QUỐC TẾ', 2701, 0, 9),
(8, 'QUẢN LÝ ĐÔ THỊ', 2699, 0, 11),
(8, 'KỸ NGHỆ GỖ', 2698, 0, 7),
(4, 'THIẾT KẾ ĐỒ HỌA', 2695, 0, 9),
(7, 'KỸ THUẬT CƠ ĐIỆN TỬ', 2693, 0, 8),
(6, 'CHÍNH TRỊ HỌC', 2501, 0, 8),
(4, 'VĂN HÓA HỌC', 2500, 0, 8),
(6, 'QUẢN LÝ ĐẤT ĐAI', 1441, 0, 9),
(1, 'GIÁO DỤC TIỂU HỌC', 1404, 0, 9),
(1, 'GIÁO DỤC MẦM NON', 1403, 0, 9),
(9, 'CÔNG TÁC XÃ HỘI', 1402, 0, 8),
(3, 'NGÔN NGỮ TRUNG QUỐC', 1401, 0, 9),
(3, 'NGÔN NGỮ ANH', 1399, 0, 10),
(6, 'LUẬT', 1398, 0, 9),
(6, 'GIÁO DỤC HỌC', 1397, 0, 8),
(2, 'QUẢN LÝ CÔNG NGHIỆP', 1394, 0, 8),
(6, 'QUẢN LÝ NHÀ NƯỚC', 1393, 0, 10),
(6, 'QUẢN LÝ TÀI NGUYÊN VÀ MÔI TRƯỜNG', 1392, 0, 9),
(8, 'QUY HOẠCH VÙNG VÀ ĐÔ THỊ', 1389, 0, 13),
(5, 'HÓA HỌC', 1387, 0, 10),
(8, 'KIẾN TRÚC', 1385, 0, 12),
(8, 'KỸ THUẬT XÂY DỰNG', 1384, 0, 12),
(7, 'KỸ THUẬT ĐIỆN ', 1383, 0, 9),
(2, 'QUẢN TRỊ KINH DOANH', 1382, 0, 7),
(2, 'TÀI CHÍNH - NGÂN HÀNG', 1381, 0, 8),
(2, 'KẾ TOÁN', 1380, 0, 8),
(6, 'KỸ THUẬT MÔI TRƯỜNG', 1379, 0, 9),
(7, 'KỸ THUẬT PHẦN MỀM', 1377, 0, 8),
(7, 'HỆ THỐNG THÔNG TIN (CNTT)', 1376, 0, 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daihocchinhquy`
--
ALTER TABLE `daihocchinhquy`
  ADD KEY `MaKhoiNganh` (`MaKhoiNganh`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `daihocchinhquy`
--
ALTER TABLE `daihocchinhquy`
  MODIFY `MaKhoiNganh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
