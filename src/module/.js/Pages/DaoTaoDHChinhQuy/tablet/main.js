export default function talet() {
    const btn_open_menu = document.getElementById('tablet-btn-menu')

    btn_open_menu.addEventListener('click', function (event) {
        // Ẩn nội dung ở giữa
        const contentMid = document.getElementById('khoa-01')
        contentMid.style.display = 'none'

        // Ẩn nút
        btn_open_menu.style.display = 'none'

        // Hiển thị nội dung bên trái
        const contentLeft = document.getElementById('nav-bar')
        contentLeft.style.display = 'block'

        // Hiển thị nút đóng menu
        const btn_close_menu = document.getElementById('tablet-btn-close-menu')
        btn_close_menu.style.display = 'flex'

        btn_close_menu.addEventListener('click', function(event) {
            // Ẩn nút đóng menu
            btn_close_menu.style.display = 'none'
            // Hiển thị nội dung ở giữa
            contentMid.style.display = 'block'
            // Ẩn nội dung bên trái
            contentLeft.style.display = 'none'
            // Hiển thị nút menu
            btn_open_menu.style.display = 'flex'
        })
    })
}
