/*
  CHỈNH THÔNG TIN THIỆP CƯỚI TẠI ĐÂY.
  - Ảnh: chép ảnh vào thư mục assets/ với tên anh-1.jpg ... anh-5.jpg.
  - Google Form: điền link vào rsvpFormUrl nếu cần nhận RSVP từ mọi thiết bị.
  - Địa chỉ bản đồ: dán link chia sẻ từ Google Maps.
*/
window.WEDDING_CONFIG = {
  family: {
    groomParents: "Thông tin đang cập nhật",
    groomAddress: "Địa chỉ nhà trai đang cập nhật",
    brideParents: "Thông tin đang cập nhật",
    brideAddress: "Địa chỉ nhà gái đang cập nhật",
    groomTime: "Đang cập nhật",
    brideTime: "Đang cập nhật"
  },
  groom: "Vũ",
  bride: "Thương",
  ceremonyDate: "2027-02-14T08:00:00+07:00",
  weddingDate: "2027-02-14T17:30:00+07:00",
  ceremony: {
    title: "Lễ thành hôn",
    venue: "Tư gia nhà trai",
    address: "Địa chỉ đang cập nhật",
    mapsUrl: ""
  },
  reception: {
    title: "Tiệc chung vui",
    venue: "Trung tâm tiệc cưới",
    address: "Địa chỉ đang cập nhật",
    mapsUrl: ""
  },
  // Tạo Google Form để nhận xác nhận tham dự; điền link chia sẻ vào đây.
  rsvpFormUrl: "",
  secretMessage: "Cảm ơn bạn đã đến với ngày vui của chúng mình. Hẹn gặp bạn trong khoảnh khắc thật đẹp này!",
  story: [
    {year:"01", icon:"✧", title:"Lần đầu gặp gỡ", short:"Một lời chào rất nhẹ.", long:"Mọi điều bắt đầu từ một lần gặp gỡ rất dịu dàng."},
    {year:"02", icon:"☕", title:"Những ngày bên nhau", short:"Đi cùng nhau qua những ngày vui.", long:"Những điều bình thường trở nên đẹp hơn khi có nhau."},
    {year:"03", icon:"✿", title:"Thương nhau nhiều hơn", short:"Từ hai người thành một nhà.", long:"Tình yêu lớn dần qua những điều nhỏ bé mỗi ngày."},
    {year:"04", icon:"💍", title:"Ngày mình cưới", short:"Và hôm nay là ngày hạnh phúc.", long:"Rất mong được đón bạn đến chung vui cùng chúng mình."}
  ],
  gallery: [
    {title:"Khoảnh khắc đầu tiên", caption:"Một khoảnh khắc rất dịu dàng.", image:"assets/meeting.webp", symbol:"✿", theme:"rose"},
    {title:"Mình đi đâu đó nhé", caption:"Đi đâu cũng vui khi có nhau.", image:"assets/memories.webp", symbol:"✈", theme:"sage"},
    {title:"Những ngày rất đỗi bình thường", caption:"Bình yên trong những điều giản dị.", image:"assets/red-thread.webp", symbol:"☕", theme:"peach"},
    {title:"Một lời hẹn ước", caption:"Một lời hứa cho mai sau.", image:"assets/rings.webp", symbol:"♡", theme:"lilac"},
    {title:"Từ hôm nay đến mãi về sau", caption:"Bắt đầu hành trình mới.", image:"assets/envelope.webp", symbol:"✦", theme:"gold"}
  ]
};
