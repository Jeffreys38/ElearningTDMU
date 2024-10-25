import onscroll_Page from "./onscroll_Page.js";
import onclick_ThongBaoDiemChuan from "./onclick_ThongBaoDiemChuan.js";
import onclick_NopHoSo from "./onclick_NopHoSo.js";
import tablet from "./tablet/main.js"

// Hiển thị nút cuộn lên đầu trang khi người dùng cuộn xuống 600 pixel
onscroll_Page()

onclick_ThongBaoDiemChuan()

onclick_NopHoSo()

// Sự kiện riêng cho thiết bị tablet
tablet()

// Vì nội dung trái + giữa dùng fixed nên phải tạo 1 div để bao lấy nội dung (cho giao diện dễ co giản bằng display flex)
const draft = document.getElementById('js-draft')
const ContentLeft = document.getElementById('scroll-bar')
const ContentMid = document.getElementById('content-mid')
const width_ContentLeft = ContentLeft.clientWidth
const width_ContentMid = ContentMid.clientWidth
// Đặt kích thước cho thẻ div = width_ContentLeft + width_ContentMid trên Desktop
draft.style.width = width_ContentLeft + width_ContentMid + 15 + "px"

// Khi trang web được load gặp hiện tượng: ảnh ở phần nội dung 100% màn hình sau đó thì bị đẩy qua bên phải, gây khó chịu
// do ảnh được load trước 2 thành phần ContentLeft và ContentMid
// Fix: đợi thành phần hiển thị trước, ảnh hiển thị sau
const post = document.getElementById('post-automatic')
post.style.display = "block"

// Sự kiện khi click vào menu (Header)
let isClickSubNav = false
const navmenu = document.getElementById('nav-menu')
const subnav = document.getElementById('subnav')

navmenu.addEventListener('click', function() {
    subnav.style.opacity = 1
    isClickSubNav = true
})

document.addEventListener('click', function(element) {
    if (isClickSubNav && !navmenu.contains(element.target))
    {
        subnav.style.opacity = 0
        isClickSubNav = false
    }
    element.stopPropagation()
})
