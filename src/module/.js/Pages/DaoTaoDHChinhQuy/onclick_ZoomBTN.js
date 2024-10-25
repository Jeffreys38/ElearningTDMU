export default function onclick_ZoomBTN()
{
    const btn = document.getElementById("btn-zoom-inout")
    const status = document.getElementById("name-utility-zoom")
    const content = document.getElementById("content-right")
    const wrapper = document.getElementById("js-draft")
    
    btn.addEventListener("click", function(event) {
        if (status.innerHTML == "Phóng to nội dung")
        {
            content.style.width = "auto"
            content.style.background = "white"
            content.style.marginTop = "calc(var(--header) - 20px)"

            // Lớp phủ toàn trang
            wrapper.setAttribute("id", "js-draft-responsive");

            // Thay đổi trạng thái nút phóng to thành thu nhỏ
            status.innerHTML = "Thu nhỏ nội dung"
        } 
        else if (status.innerHTML == "Thu nhỏ nội dung")
        {
            content.style.width = "51%"//"calc(100% - (var(--nav-left) + var(--nav-mid)) - 83px)"
            content.style.background = "none"
            content.style.marginTop = "var(--header)"
            
            wrapper.setAttribute("id", "js-draft");
            // Thay đổi trạng thái nút thu nhỏ thành phóng to
            status.innerHTML = "Phóng to nội dung"
        }   
    })
}