export default function onclick_ThongBaoDiemChuan() {
    const menu = document.getElementById('js-diemchuan')
    const wrapper = document.getElementById('wrapper')
    const popup = document.getElementById('pop-up')
    const button = document.getElementById('btn-close')


    menu.addEventListener('click', function (event) {
        // ẨN THÔNG BÁO KHÁC
        const nophoso = document.getElementsByClassName('php-nophoso')
        for (let i = 0; i < nophoso.length; i++)
            nophoso[i].style.display = "none"


        // SHOW WRAPPER
        wrapper.style.display = 'block'

        // SHOW POP-UP
        popup.style.display = 'block'

        // SHOW BTN
        button.style.display = 'flex'

        event.stopPropagation();

        button.addEventListener('click', function (event) {
            // HIDE WRAPPER
            wrapper.style.display = 'none'
            // HIDE BTN
            button.style.display = 'none'
            // HIDE POP-UP
            popup.style.display = 'none'

            // HIỂN THỊ THÔNG BÁO KHÁC
            const hoso = document.getElementsByClassName('php-nophoso')
            for (let i = 0; i < nophoso.length; i++)
                nophoso[i].style.display = "block"
        })
    })
}