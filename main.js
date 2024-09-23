// ตัวแปรสำหรับเก็บสถานะการปิด QR Code ของแต่ละโต๊ะ
let qrCodeStatus = {
  table1: false,
  table2: true,
  table3: true,
};

// สร้าง QR Code สำหรับโต๊ะ
function generateQRCode(tableId, url) {
  if (qrCodeStatus[tableId]) {
    new QRCode(document.getElementById(`qrcode-${tableId}`), url);
  }
}

// ฟังก์ชันปิด QR Code
function closeQRCode(tableId) {
  qrCodeStatus[tableId] = false;
  document.getElementById(`qrcode-${tableId}`).innerHTML = ""; // ลบ QR Code
  alert(`QR Code สำหรับโต๊ะ ${tableId} ถูกปิดแล้ว`);
}

// ฟังก์ชันเช็ค QR Code เมื่อสแกน
function checkQRCodeStatus(tableId) {
  if (!qrCodeStatus[tableId]) {
    window.location.href = "https://qrtest01.netlify.app/404"; // เปลี่ยนไปหน้า 404
  } else {
    window.location.href = `https://qrtest01.netlify.app/menu?table=${tableId}`; // เปลี่ยนตามโต๊ะ
  }
}

// สร้าง qr สำหรับโต๊ะ
document
  .getElementById("generate-table1")
  .addEventListener("click", function () {
    generateQRCode("table1", "https://qrtest01.netlify.app/menu?table=1");
  });

document
  .getElementById("generate-table2")
  .addEventListener("click", function () {
    generateQRCode("table2", "https://qrtest01.netlify.app/menu?table=2");
  });

document
  .getElementById("generate-table3")
  .addEventListener("click", function () {
    generateQRCode("table3", "https://qrtest01.netlify.app/menu?table=3");
  });

// ปุ่มปิด QR Code
document.querySelectorAll("button.closeQR").forEach(function (button) {
  button.addEventListener("click", function () {
    const tableId = this.getAttribute("data-table");
    closeQRCode(tableId);
  });
});
