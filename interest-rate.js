var SoTienGui = prompt("Nhập số tiền gửi:  (VNĐ)")
var SoNamGui = prompt("Nhập thời hạn gửi:  (Tháng)")
var LaiXuat = 6.9
var SoTienLai= (SoTienGui / 100)*LaiXuat * SoNamGui
var GocVaLai = SoTienGui + SoTienLai
document.write("Số tiền gửi: " + SoTienGui+" $")
document.write("<br>")      
document.write("Lãi xuất hàng tháng: " + LaiXuat + "%")
document.write("<br>")
document.write("Số tiền lãi được: " + SoTienLai+" $")
document.write("<br>")
document.write("Tổng Vốn và Lãi: " + GocVaLai+" $")
