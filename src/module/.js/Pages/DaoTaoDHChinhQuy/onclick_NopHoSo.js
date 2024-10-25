export default function onclick_NopHoSo() {
    const wrapper = document.getElementById('wrapper')
    const popup = document.getElementById('pop-up')
    const button = document.getElementById('btn-close')
    const nophoso = document.getElementById('js-nophoso')

    nophoso.addEventListener('click', function (event) {
        // ẨN THÔNG BÁO KHÁC
        const diemchuan = document.getElementsByClassName('php-diemchuan')
        for (let i = 0; i < diemchuan.length; i++)
            diemchuan[i].style.display = "none"


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
            for (let i = 0; i < diemchuan.length; i++)
                diemchuan[i].style.display = "block"
        })
    })
}