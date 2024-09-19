// ตัวแปรสำหรับเก็บสถานะการปิด QR Code ของแต่ละโต๊ะ
let qrCodeStatus = {
  table1: true,
  table2: true,
  table3: true,
};

// สร้าง QR Code สำหรับโต๊ะที่ต้องการ
function generateQRCode(tableId, url) {
  if (qrCodeStatus[tableId]) {
    new QRCode(document.getElementById(`qrcode-${tableId}`), url);
  }
}

// ฟังก์ชันปิด QR Code
function closeQRCode(tableId) {
  qrCodeStatus[tableId] = false;
  document.getElementById(`qrcode-${tableId}`).innerHTML = ""; // ลบ QR Code ออกจากหน้าจอ
  alert(`QR Code สำหรับโต๊ะ ${tableId} ถูกปิดแล้ว`);
}

// เมื่อกดปุ่มแสดง QR Code ให้สร้าง QR Code สำหรับโต๊ะนั้นๆ
document
  .getElementById("generate-table1")
  .addEventListener("click", function () {
    generateQRCode("table1", "menu.html?table=1");
  });

document
  .getElementById("generate-table2")
  .addEventListener("click", function () {
    generateQRCode("table2", "menu.html?table=2");
  });

document
  .getElementById("generate-table3")
  .addEventListener("click", function () {
    generateQRCode("table3", "menu.html?table=3");
  });

// เพิ่มการทำงานให้กับปุ่มปิด QR Code
document.querySelectorAll("button.closeQR").forEach(function (button) {
  button.addEventListener("click", function () {
    const tableId = this.getAttribute("data-table");
    closeQRCode(tableId);
  });
});
