export default function onchange_SearchBox(input) {
    input.addEventListener("input", function () {
        const box = document.getElementById('search-results');

        // Lấy giá trị user điền vào
        const value = input.value;

        // Tạo đối tượng XMLHttpRequest mới để thực hiện yêu cầu Ajax
        const xhr = new XMLHttpRequest();

        // Thiết lập yêu cầu POST đến trang PHP
        xhr.open('POST', '../src/module/.php/searchMajors.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send('inputValue=' + value);

        // Xử lý phản hồi từ tệp PHP
        xhr.onload = function () {
            if (xhr.status === 200) {
                // Nếu hợp lệ thì mới gán, còn không sẽ xảy ra lỗi khi setting cho 1 giá trị NULL
                if (box)
                {
                    if (value != "")
                        box.innerHTML = xhr.responseText;
                    else
                        box.innerHTML = "";
                }
            } else {
                console.log('Có lỗi xảy ra!')
            }
        };
    });
}