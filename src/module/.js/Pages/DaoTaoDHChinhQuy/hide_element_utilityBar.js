export default function hide_element_utilitiBar()
{
    // Lấy thẻ <img id='img-updating' />
    const img = document.getElementById('img-updating')
    
    // Lấy thanh tiện ích
    const utilitiBar = document.getElementById('utility-bar')

    // Nếu tìm thấy thẻ <img id='img-updating' /> thì ẩn thanh tiện ích
    if (img)
    {
        utilitiBar.style.display = "none"
    }
}