export default function onclick_SearchBox(input) {
    // Khi click vao hop tim kiem
    input.addEventListener('click', function (event) {
        const box = document.getElementById('box-search-list')
        
        // Hiển thị  
        box.style.display = "block"     
        // Tạo box hiển thị kết quả tìm kiếm
        const searchSuggestions = document.createElement("div")
        searchSuggestions.setAttribute("id", "search-results")
        box.appendChild(searchSuggestions)

        document.addEventListener('click', function(event) {
            if (event.target != input)
            {
                box.style.display = "none"     
            }
            event.stopPropagation()
        })
    })
}