export class format {
    /**
     * 
     * @param {*} src /img/HinhNganhDaoTaoDH/{Name}.png
     * @returns String
     */
    NameKhoiNganhDaoTao(src) {
        var name = ""
        let i = src.length - 1
        while (src[i] != '/' && i != 0) {
            i--
        }
        for (; i < src.length; i++) {
            if (src[i] == '/')
                continue
            if (src[i] == '.')
                break;
            name += src[i]
        }
        return name
    }

    /**
     * 
     * @param {*} src "/News/Detail/{MaNganhDaoTao}"
     * @returns String
     */
    MaKhoiNganhDaoTao(src) {
        let MaKhoiNganhDaoTao = ""
        let i = src.length - 1
        while (src[i] != '/' && i != 0) {
            i--
        }
        for (; i < src.length; i++) {
            if (src[i] == '/')
                continue
            MaKhoiNganhDaoTao += src[i]
        }
        return MaKhoiNganhDaoTao
    }
    /**
     * Continue format unicode = 32
     * Lấy bắt đầu từ vị trí có ký tự a-z cho đến cuối chuỗi
     * Example:  "   KY THUAT PHAN MEM     "
     * @param {*} name 
     */
    TenNganhDaoTao(name) {
        let TenNganhDaoTao = ""
        let isResume = true
        let i = 0

        while (isResume) {
           
            if (name.charCodeAt(i) != 32 && name.charCodeAt(i) != 10) {
                while (isResume)
                {
                    TenNganhDaoTao += name[i]
                    i++

                    if (name.charCodeAt(i + 1) == 32 && name.charCodeAt(i + 2) == 32)
                        isResume = false
                }
            }
            i++
        }
        return TenNganhDaoTao
    }
}