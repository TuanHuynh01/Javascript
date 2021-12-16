var NguoiNhan = prompt("Nhập tên người nhận:");
var DiaChi = prompt("Nhập địa chỉ nhận:");
var Ngay = prompt("Nhập ngày nhận");
var Thang = prompt("Nhập tháng nhận");
var Nam = prompt("Nhập năm nhận");
var ThoiGian = Ngay + "/" + Thang + "/" + Nam
document.write("Người nhận: " +NguoiNhan);
document.write("<br>");
document.write("Địa chỉ: " +DiaChi);
document.write("<br>");
document.write("Thời gian: " +ThoiGian);
document.write("<br>");

