# Sợi Chỉ Đỏ Định Mệnh — Wedding Quest V13

Thiệp cưới cổ tích Ông Tơ Bà Nguyệt. Trang đầu có giấy thiệp mở 3D, chữ Hỷ xoay 1.5 giây và hai cánh mở 2.5 giây.

Chỉ cần mở `index.html` trên máy tính hoặc đăng toàn bộ thư mục lên GitHub Pages để dùng trên iPhone/Safari. Trình xem nhanh HTML trong ứng dụng ChatGPT hoặc Tệp iPhone có thể hạn chế JavaScript.

Chỉnh tên đôi uyên ương, ngày cưới, địa điểm, câu chuyện, ảnh, URL Google Form bằng `config.js`. Mẫu RSVP và lời chúc chỉ lưu trên thiết bị nếu chưa cấu hình dịch vụ nhận dữ liệu. Đây là minh họa giao diện, không phải hệ thống lưu RSVP trực tuyến.

Điều khiển thật: mở thiệp, bản đồ sáu nút thắt, lật thẻ ký ức, xem album, ghép thẻ tìm một nửa, lưu lịch, bản đồ (cần URL), RSVP và lời chúc, nhặt ba trái tim mở thư, link cá nhân, nhạc, replay.

Bố cục được thiết kế mobile-first và mọi lớp trang trí có `pointer-events: none`, chỉ các nút/form mới nhận chạm.
## Phiên bản V7 – sửa vùng chạm con dấu Hỷ

- Vùng bấm trong suốt đường kính **240 px** trên máy tính và **208 px** trên điện thoại, lớn hơn con dấu nhìn thấy; chạm sát mép chữ Hỷ vẫn mở được.
- Các lớp hoa nổi và hai cánh giấy không nhận sự kiện chạm, con dấu vẫn hiển thị nguyên vẹn.
- Giữ hiệu ứng chữ Hỷ quay **1 vòng / 1,5 giây**, tiếp theo hai cánh mở **2,5 giây**.
- Nút ↻ trên thanh đầu trang cho phép phát lại.

# WEDDING QUEST — Website thiệp cưới khám phá

Website thiệp cưới tương tác, chạy trên máy tính và điện thoại. Đây là **bản demo đã lập trình đầy đủ giao diện và tương tác**. Tên, ngày, địa điểm, câu chuyện là dữ liệu mẫu, cần sửa trước khi gửi khách.

## 1. Chạy ngay

1. Giải nén `Wedding-Quest-Web.zip`.
2. Mở thư mục `wedding-quest`.
3. Nhấp đúp `index.html` để xem trên trình duyệt Chrome/Edge.

Nếu muốn thử bằng web server: mở Command Prompt trong thư mục, chạy `python -m http.server 8000`, rồi vào `http://localhost:8000/`.

## 2. Các chức năng đã có

- Màn mở đầu kín toàn màn hình: thiệp giấy trắng–hồng cánh sen dập hoa nổi, viền ép kim; chạm ấn chữ 囍 màu đỏ để mở hai cánh giấy chuyển động 3D.
- Thiệp cá nhân hóa theo tên người nhận (`?to=Tên%20khách`).
- Khu vườn minh họa, đồng hồ đếm ngược ngày cưới và cánh hoa bay.
- Bản đồ 6 địa điểm, lưu tiến độ khám phá.
- 4 thẻ chuyện tình có mặt trước/mặt sau.
- Album 5 ảnh chuyển trang; nếu chưa có ảnh, tự dùng hình minh họa.
- Mini game lật 12 thẻ, ghép 6 cặp, thắng có pháo giấy.
- Tìm 3 trái tim bí mật, mở khóa bức thư riêng.
- Xem lễ thành hôn và tiệc cưới, nút chỉ đường Google Maps (sau khi điền link).
- Tải file nhắc lịch `.ics` dùng được với nhiều ứng dụng lịch.
- Form xác nhận tham dự và vườn lời chúc lưu trên trình duyệt (bản demo).
- Nút tạo link cá nhân hóa, nút chia sẻ, chuyển giao diện ngày/đêm, nhạc nhẹ tự tạo (phát khi bấm).
- Giao diện responsive cho điện thoại, hỗ trợ thao tác chạm.

## 3. Thay nội dung thật

Mở file **`config.js`** bằng Notepad hoặc Visual Studio Code. Thay các mục:

- `groom`, `bride`: tên chú rể, cô dâu.
- `ceremonyDate`, `weddingDate`: ngày/giờ ở định dạng `YYYY-MM-DDTHH:MM:SS+07:00` (giờ Việt Nam).
- `ceremony`: tiêu đề, nơi tổ chức, địa chỉ, link `mapsUrl`.
- `reception`: thông tin tiệc cưới tương tự.
- `secretMessage`: lời nhắn khi mở khóa 3 trái tim.
- `story`: bốn thẻ kỷ niệm.
- `gallery`: chú thích và đường dẫn 5 ảnh.
- `rsvpFormUrl`: link Google Form nếu muốn nhận xác nhận từ khách ở những thiết bị khác.

**Thay ảnh:** chép 5 ảnh `.jpg` vào thư mục `assets`, đặt tên chính xác `anh-1.jpg` đến `anh-5.jpg`. Nếu dùng ảnh `.png`, đổi đuôi trong đường dẫn `image` ở `config.js`. Ảnh nên ở tỷ lệ khoảng 4:5 hoặc 1:1. Website vẫn chạy khi chưa có ảnh.

## 4. RSVP và lời chúc — quan trọng

Đây là **website tĩnh không có máy chủ dữ liệu**. Mặc định các RSVP và lời chúc chỉ được lưu bằng `localStorage` trên thiết bị đang dùng. Chúng **không tự gửi về máy chủ, không hiện chung cho tất cả khách và không thể xem tổng hợp từ điện thoại khác**. Việc đóng trang không xóa dữ liệu nếu trình duyệt vẫn giữ localStorage.

Để nhận RSVP của khách thật:

1. Vào Google Forms, tạo một biểu mẫu với tên khách, tham dự / không tham dự, số người đi cùng và lời nhắn.
2. Bấm **Gửi** → sao chép đường link biểu mẫu dành cho người trả lời.
3. Dán đường link vào `rsvpFormUrl` trong file `config.js`.
4. Khi đó web sẽ hiện nút **Gửi RSVP chính thức qua biểu mẫu**. Khách cần bấm nút ấy và hoàn thành Google Form để cô dâu chú rể thực sự nhận được phản hồi. Dữ liệu nhập ở form demo không tự điền sang Google Form.

Muốn **RSVP gửi thẳng bằng 1 nút và lời chúc của mọi khách cùng xuất hiện**, cần kết nối backend như Google Apps Script + Google Sheets hoặc Firebase ở phiên bản tiếp theo.

Chủ sở hữu muốn xuất dữ liệu **trên chính thiết bị đang xem web**: mở DevTools → Console, chạy `WeddingQuest.exportLocalData()` để tải JSON. Đây không phải dữ liệu tổng hợp của các khách khác.

## 5. Đăng lên GitHub Pages

1. Tạo repository GitHub mới (ví dụ: `thiep-cuoi`).
2. Upload **4 file `index.html`, `style.css`, `config.js`, `app.js` và cả thư mục `assets`** ở thư mục gốc repo.
3. Vào **Settings → Pages** → chọn **Deploy from a branch** → branch **main**, folder **/ (root)** → **Save**.
4. Khi GitHub Pages triển khai xong, website thường có URL dạng `https://TEN-TAI-KHOAN.github.io/thiep-cuoi/`.
5. Mở đường link trên điện thoại để kiểm tra. Trước khi chia sẻ, hãy sửa toàn bộ thông tin demo và kiểm tra ảnh, giờ cưới, bản đồ.

Ví dụ link mời riêng: `https://TEN-TAI-KHOAN.github.io/thiep-cuoi/?to=Anh%20Tuan`

Ngay trong website cũng có mục **Gửi lời mời riêng cho từng người** để tạo và sao chép URL tự động.

## 6. Ghi chú kỹ thuật

- Không cần cài React/Node.js, không có phí hosting bắt buộc nếu dùng GitHub Pages.
- Web dùng HTML + CSS + JavaScript thuần; các nút đã gắn xử lý thật.
- Thiệp có phông chữ Google Fonts khi có mạng; mất mạng vẫn dùng font dự phòng.
- Giai điệu nền phát từ Web Audio sau khi khách bấm ♫; không dùng nhạc bản quyền.
- Các lựa chọn khám phá, trái tim, chế độ màu lưu độc lập trên trình duyệt.
- Để xóa tiến độ khám phá trên trình duyệt đang dùng, mở Console và chạy `WeddingQuest.resetExploration()`.
- Phiên bản này chưa tích hợp thanh toán/chuyển khoản, tạo QR hay hệ thống quản lý khách mời trên máy chủ.

## Bản v4 — giao diện thiệp giấy 3D

- Trang mở đầu **không hiển thị chữ ngoài biểu tượng Hỷ đỏ**. Dấu giữa có nền giấy ngà, chữ 囍 là nét đỏ lớn gần kín mặt tròn.
- Bề mặt thiệp dùng vân giấy cotton (`assets/cotton-paper.webp`), hoa nổi vẽ riêng hai bên (`assets/emboss-left.svg`, `assets/emboss-right.svg`) và đường viền ép kim.
- Ấn Hỷ xoay trước, sau đó hai cánh thiệp mở theo trục dọc với phối cảnh 3D và có mặt sau giấy.
- Nếu gửi 1 file HTML độc lập, hãy dùng `Wedding-Quest-Standalone-v4.html` vì ảnh giấy và hoa đã nhúng sẵn.

## Bản v5 — kiểm soát animation mở thiệp (2,9 giây)

- Chạm chữ 囍 đỏ ở giữa tấm thiệp: dấu xoay **2 vòng trong 0,9 giây**.
- Khoảng **0,66–2,48 giây**, hai cánh giấy mở dần trên trục bản lề 3D.
- Khoảng **2,47–2,90 giây**, lớp thiệp tan nhẹ và website bên trong xuất hiện hoàn toàn.
- Toàn bộ sequence chạy một lần sau mỗi thao tác mở, không mất animation vì trình duyệt chuyển màn hình sớm.
- **↻** ở thanh điều hướng trang chính đưa bạn về tấm thiệp đang đóng để xem lại hiệu ứng.
- Nếu sử dụng bản `.html` độc lập, mọi họa tiết giấy/hoa đã được nhúng trực tiếp, không cần thư mục `assets`.

## Bản v6 — chuyển động chậm, liên tục và mượt

- Nhấn trực tiếp vào chữ **囍** ở giữa thiệp để bắt đầu.
- **0–1,5 giây:** dấu chữ Hỷ xoay đúng **một vòng 360°**, không thu/phóng hoặc biến mất giữa lúc quay.
- **1,5–4,0 giây:** hai cánh thiệp mở liên tục trên bản lề 3D trong **2,5 giây**; chỉ sử dụng thuộc tính `transform` để hạn chế giật hình.
- **4,0–4,42 giây:** lớp thiệp tan nhẹ, trang chính được kích hoạt sau khi cửa mở hoàn tất.
- Nhấn nút **↻** trên thanh điều hướng để xem lại từ đầu. Các tiện ích khác giữ nguyên.

## V16 – Cung Trăng Hồng Duyên 2,5D
- Đường sợi chỉ đỏ liên tục nối xuyên nội dung, vẽ dần theo chiều cuộn trang (v16.js).
- 6 cuộn thư cổ tích tại các chương: chạm nút 'Chạm để mở cuộn thư' để cuộn giấy cuộn lại, nội dung trang vẫn bấm được.
- Mây 3 lớp xa/gần ở từng chương và mây nổi có bóng đổ, chuyển động nhẹ.
- Không còn trò chơi ghép 6 cặp. Chương 03 là cảnh sợi chỉ đỏ 2,5D.
- Hỗ trợ tắt/chậm chuyển động khi hệ thống bật Reduce Motion.

**Đăng web:** đưa toàn bộ thư mục lên GitHub Pages. Nên mở bằng Safari/Chrome trên đường link https://, không mở file HTML trong trình xem trước của ứng dụng, nơi có thể chặn JavaScript.

**Ảnh cưới:** các nền mẫu trong `assets/bg-*.webp`; có thể thay bằng ảnh cưới riêng.

**RSVP và lời chúc:** bản tĩnh lưu vào trình duyệt của khách; muốn dữ liệu chung trên mọi thiết bị cần kết nối biểu mẫu/đầu cuối dữ liệu.


V17: khôi phục họa tiết ép hoa màn mở thiệp trong HTML độc lập bằng cách nhúng SVG/CSS. Khung bên trong có mép giấy 3D, giấy cuộn, bảng lễ chạm nổi, album ảnh ép khung và bảng lời chúc.


## V19 – Sửa thao tác trên iPhone
- Thêm touchstart/touchend dự phòng cho lật thẻ và nút chuyển album, bỏ qua vuốt cuộn trang và ngăn click lặp.
- Sửa backface-visibility cho Safari/WebKit, đảm bảo lớp trang trí không nhận chạm.
- Tăng vùng bấm mũi tên album lên 52px và chấm chọn ảnh lên ít nhất 44px.
- iOS Quick Look/ChatGPT preview có thể chặn JavaScript; nên đăng GitHub Pages và mở Safari khi dùng thật.


V20: Các thẻ kỷ niệm là HTML `<details>`, album chọn ảnh bằng CSS radio và label, bản đồ dùng link neo. Các thao tác này không yêu cầu JavaScript. Nếu mở trong trình xem trước tệp trên iPhone, chức năng gửi RSVP/lưu lời chúc vẫn cần JavaScript và không được đảm bảo; để đầy đủ hãy sử dụng website HTTPS trên Safari.

## V24 — Phong cách điện ảnh vàng đồng, Vũ & Thương
- Cập nhật tên mặc định trong `config.js`: `groom: "Vũ"`, `bride: "Thương"`.
- Phần hero sử dụng hình minh họa nghệ thuật điêu khắc giấy dưới ánh nắng vàng; tên Vũ & Thương là chữ HTML có thể tùy chỉnh.
- 6 nút khám phá đã thay emoji bằng tài nguyên hình ảnh: `assets/meeting.webp`, `memories.webp`, `red-thread.webp`, `rings.webp`, `envelope.webp`, `flowers.webp`.
- Các hình này là **minh họa tạo bằng AI**, KHÔNG phải ảnh cưới thực tế của hai bạn. Có thể thay file trong `assets/` bằng ảnh của hai bạn, giữ cùng tên để website tự cập nhật.
- Giữ album vuốt ngang không cần JavaScript; các khu vực bản đồ là đường dẫn #hash thật.
- Các tính năng lưu RSVP và lời chúc cần trình duyệt cho phép bộ nhớ (ví dụ website HTTPS GitHub Pages). RSVP lưu ở thiết bị, không được gửi tới cô dâu chú rể trừ khi cấu hình Google Form.


## V25
- Hero đã đổi từ cô gái đứng một mình sang cặp đôi bằng nghệ thuật giấy, được thu nhỏ và căn theo màn hình iPhone.
- Kiểu chữ tiêu đề dùng Didot/Bodoni/Playfair với nét mảnh, tương phản cao, hai dòng Vũ & / Thương.
- Ảnh cặp đôi là minh họa AI, chưa phải ảnh chân dung thật.


## V29 — duyệt chữ
Chỉ thay kích thước và vị trí của PNG Vũ & Thương; ánh sáng được mask theo alpha của ảnh. Không sửa các mục khác.


## V30
Chỉ sửa animation ánh sáng trên chữ PNG: dải sáng di chuyển thực, cắt theo alpha của PNG. Giữ nguyên kích thước, vị trí và mọi thành phần khác.


## V32
Đổi hiệu ứng chữ sang dùng tài nguyên riêng `assets/title-vu-thuong-sweep.webp` (WEBP động nền trong suốt) chồng lên PNG chữ để dễ thấy trong trình xem HTML trên điện thoại.


## V33 — GIF động trực tiếp
Tên `Vũ & Thương` hiện là file `assets/title-vu-thuong-animated.gif`: đầy đủ chữ và vệt sáng trong từng khung hình, tự chạy hai lượt mỗi 3,6 giây, lặp vô hạn. Không còn PNG dưới/overlay trên và không phụ thuộc animation CSS. Kích thước và vị trí giữ nguyên.


## V34
Sửa lỗi GIF bị bể nét bằng PNG động APNG RGBA 32 khung, giữ nguyên alpha và nét chữ gốc trong mọi khung. Hiệu ứng sáng trực tiếp trên từng pixel chữ, lặp vô hạn; không phụ thuộc CSS animation hay lớp chồng.


## V35
Tăng cường ánh sáng trên chữ động: dải sáng rộng hơn, lõi trắng-vàng mạnh hơn và thêm quầng sáng nhẹ, vẫn chỉ nằm trong nét chữ và hoa văn. Giữ nguyên vị trí/kích thước chữ.


## V36 — Mô hình giấy 3D
Mô hình cô dâu chú rể được xuất thành `assets/vu-thuong-origami-3d.glb` (mesh 3D thực, có thể nhập Blender). Trình xem tại `origami-3d.js` dựng hình từ các mặt tam giác 3D với phép chiếu phối cảnh và nguồn sáng ảo, xoay một vòng trong 48 giây. Không cần thư viện CDN/WebGL. Khi không có canvas/JS, ảnh tĩnh của V35 vẫn hiện. Các phần khác giữ nguyên.

## V37 – Đúc lại mô hình cặp đôi giấy
- Mô hình GLB mới tạo từ hình học 3D thực, gồm khoảng 6.500 mặt tam giác; không chỉ xoay một tấm ảnh.
- Váy cô dâu có nhiều tầng gấp, đuôi váy kéo dài, voan giấy liền mặt; chú rể có áo vest, ve áo, nơ và quần tách phần; hai người cầm bó hoa ở giữa.
- Giữ mô hình trong khu vực hero, xoay 360 độ trong khoảng 56 giây. Vẫn có ảnh dự phòng.
- Dữ liệu nằm ở `assets/vu-thuong-origami-3d.glb` và `assets/vu-thuong-origami-mesh.json`; bộ dựng xoay trong `origami-3d.js`.
- Chất liệu là mặt giấy low-poly cách điệu. Đây là một bản dựng mô hình 3D thật để xem trước / duyệt, chưa phải bản điêu khắc 3D siêu chi tiết như ảnh concept.


## V38
Replaced V37 model mesh with `assets/vu-thuong-origami-3d.glb` (V38). Renderer `origami-3d.js` embeds the same geometry for offline previews and rotates slowly, 56 seconds per turn. Existing title animation and layout untouched.


## V40
Gỡ mô hình 3D và canvas, thay bằng hình minh họa cặp đôi origami 2D nền trong suốt `assets/vu-thuong-couple-cutout.png`. Giữ nguyên typography, APNG ánh sáng tiêu đề và toàn bộ nội dung khác.


V42: Fix broken V41 GIF transparency by replacing it with high-quality APNG with original alpha preserved. Optimized title APNG and couple APNG, both looping infinitely. No layout changes.


V43 updates: larger 2D couple, gentle stationary sunlight, animated dress and veil.

V44: cô dâu chú rể là một GIF duy nhất (`assets/vu-thuong-couple-wind-sun-v44.gif`), váy/voan/chút nắng đã nằm trong từng khung ảnh, không chồng ba ảnh bằng CSS nữa.


## V45
One GIF for bride/groom; skirt fully static, veil moves slightly, bride head bows toward groom. Gentle stationary sunlight. No extra layered images.


V46: removed all old content from Con đường duyên đỏ to the end, along with six-zone map, chapters, album, RSVP, wishes, secret, progress. Retains invitation gate, hero art/title, countdown, and minimal footer. New content area is empty for redesign.


## V47 — Hai bên gia đình
Giữ nguyên V46, chỉ thêm mục Hai nhà, một duyên phía dưới đồng hồ. Sửa `family.groomParents`, `family.groomAddress`, `family.brideParents`, `family.brideAddress` trong `config.js`. Không có thông tin thực nên bản mẫu dùng nhãn đang cập nhật.


## V48
- Thiết kế lại phần Hai bên gia đình với bố cục sang hơn.
- Thêm animation xuất hiện lần đầu khi cuộn đến section này.


## V49
- Gộp thông tin nhà trai và nhà gái lên cùng một tờ thư chân thật.
- Bỏ 2 khung 2D riêng, thay bằng một lá thư giấy trung tâm.
- Giữ animation xuất hiện khi cuộn tới lần đầu.


## V50 — Thư mở bốn góc
Khi cuộn tới phần Hai bên gia đình, 8 khung hình mở bốn góc được phát một lần; sau đó dừng trên một tờ giấy dài và hiện nội dung hai bên. Không phát lại khi cuộn lên xuống. Khung hình là PNG RGBA nền trong suốt, đã xử lý nền đen. Ảnh và thông tin đều hoạt động ngoại tuyến.

## V51
Sửa lỗi thư không tự mở trên iPhone: theo dõi sự kiện cuộn và viewport trực tiếp cùng IntersectionObserver; có chạm/mở dự phòng. Hiệu ứng chỉ chạy một lần, luôn chuyển sang thông tin cuối.


## V52: Safari single-file fix
Frames are explicit assets in source and base64 embedded directly into standalone HTML. Image error falls through to the fully opened letter; scroll rechecked after the opening gate closes.


V53: CSS-native four-fold opening, no image-frame sequence. Native <details> tap fallback; auto-open when scrolled into view.


## V54
Phần Hai gia đình thay bằng lá thư tĩnh 2 cột, không còn animation hay nút mở. Ảnh nền: `assets/wedding-letter-blank-v54.png`. Sửa tên bố mẹ, địa chỉ, thời gian trong `config.js` tại `family`.


V55: Bỏ hoàn toàn ảnh nền lá thư ở phần gia đình; chỉ còn văn bản nhà trai/nhà gái trên nền hiện tại.


## V56
- Nhà trai / Nhà gái nằm ngang trên tất cả kích thước màn hình.
- Chữ mờ 8% rồi hiện rõ khi cuộn tới lần đầu, không lặp.
- Không dùng ảnh hoặc khung nền cho phần này.


## V57
- Typography heading Hai nhà / một duyên refined as cinematic Playfair editorial title.
- CSS keyframe fade/reveal starts once upon reaching family section, without old opacity overrides.
- Keeps two family text columns side by side on iPhone.


## V58 — animation theo vị trí cuộn
- Độ mờ dựa trực tiếp trên `getBoundingClientRect().top` và chiều cao viewport; khi cuộn phần Hai nhà vào vùng nhìn thấy, chữ chuyển từ rất nhạt sang rõ.
- Tự khóa trạng thái sau khi đạt 100%, không lặp và không mờ lại.
- Giữ nguyên hai cột ngang, màu và kiểu chữ.


## V59
Cuộn tới phần hai gia đình sẽ khởi chạy fade-in trong ~2 giây; đã bỏ logic nhảy 100% khi chạm cuối trang.
