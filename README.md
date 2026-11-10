# Wedding Quest V64 — Sửa hiển thị iPhone

**Bản sửa phần “Từ hai nhà, thành một duyên”.** Hai thanh gấp khúc nối nhau, hai đèn trượt ra rồi rọi sáng thông tin hai gia đình.

- Trên iPhone các thông tin Nhà trai / Nhà gái hiển thị **hai cột song song**, nhãn và nội dung nằm riêng dòng, kích thước chữ vừa màn hình.
- CSS và script của section được **nhúng trong `index.html`** để tránh việc máy iPhone dùng CSS cũ; các asset bên ngoài được gắn `?v=64`.
- Mọi ảnh, giao diện hero, nhạc và hiệu ứng mở thiệp giữ nguyên.
- Có nút **Xem lại khoảnh khắc kết nối**.

## Triển khai GitHub Pages

Giải nén ZIP, vào thư mục `Wedding-Quest-v64-source` rồi tải **các file BÊN TRONG** (không tải cả thư mục bao ngoài) lên thư mục gốc của repo `wedding-quest`. Ghi đè `index.html`, `style.css`, `app.js` và các file còn lại. Để bảo đảm GitHub Pages cập nhật, tối thiểu cần cập nhật `index.html`; nên cập nhật đồng bộ 3 file.

Kiểm tra bằng cách truy cập `https://vunguyen1710.github.io/wedding-quest/?v=64` sau khi GitHub Actions báo deploy thành công. Đây là cùng trang, tham số v=64 giúp bỏ qua cache HTML cũ. Trên iPhone có thể đóng tab và mở lại nếu máy vẫn dùng phiên bản cũ.

Thông tin hai nhà nằm trong `config.js` ở các khóa `family.groomParents`, `family.brideParents`, `family.groomAddress`, `family.brideAddress`, `family.groomTime`, `family.brideTime`.
