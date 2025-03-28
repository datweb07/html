document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Ngăn chặn form gửi đi mặc định
  
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
  
      // Kiểm tra thông tin đăng nhập
      if (email === "dat82770@gmail.com" && password === "dat123456789") {
        window.location.href = "next-page.html"; // Chuyển hướng đến trang tiếp theo
      } else {
        alert("Email hoặc mật khẩu không chính xác!"); // Hiển thị cảnh báo nếu sai
      }
    });
  });
  