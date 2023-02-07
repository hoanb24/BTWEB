var product = [
  {
    id: "SP1",
    name: "Quần baggy đen sang trọng QQ",
    img: "https://hidanz.com/wp-content/uploads/2021/05/phoi-quan-baggy-3.jpg",
    price: 12000,
  },
  {
    id: "SP2",
    name: "The Cosmo (Đen) Quần short kaki",
    image:"https://product.hstatic.net/1000133495/product/92717350_1550460445148889_2896197718726672384_o_96b5113398494a6d822ad0eb2ec93f14_master.jpg",
    price: 400000,
  },
  {
    id: "SP3",
    name: "The Cosmo (Đen) Quần short kaki",
    img: "https://cf.shopee.vn/file/dc61b5a7d14f5ad85ca1a4e81e8dcf75",
    price: 2131210,
  },
  {
    id: "SP4",
    name: "Váy Fashion",
    img: "https://bizweb.dktcdn.net/100/409/545/products/262025818-3089178968068377-6635938409906308020-n.jpg?v=1638258195347",
    price: 52000,
  },
  {
    id: "SP5",
    name: "Váy ngắn hiện đại",
    img: "https://daynitda.com/wp-content/uploads/2021/10/cach-phoi-do-voi-chan-vay-ngan.jpg",
    price: 654000,
  },
  {
    id: "SP6",
    name: "Áo thun phối váy ngắn",
    img: "https://daynitda.com/wp-content/uploads/2021/10/cach-phoi-do-voi-chan-vay-ngan.jpg",
    price: 123000,
  },
  {
    id: "SP7",
    name: "Áo khoác",
    img: "https://cbu01.alicdn.com/img/ibank/O1CN01C7Hf8X1dpZqmBmA1m_!!2210949963785-0-cib.jpg",
    price: 345000,
  },
  {
    id: "SP8",
    name: "Áo thun",
    img: "https://sakurafashion.vn/upload/sanpham/large/70121-ao-thun-nu-hinh-chu-ga-con-1.jpg",
    price: 258000,
  },
];
// đẩy mảng product vào local
function Save() {
  localStorage.setItem("listProduct", JSON.stringify(product));
}
//lấy sản phẩm
function load() {
  product = JSON.parse(localStorage.getItem("listProduct"));
}
//xuất sản phẩm ra html
if (localStorage.getItem("listProduct") != null) {
  load();
}
var listLocal = function () {
  var listproduct = "";
  for (var i in product) {
    var data = JSON.parse(JSON.stringify(product[i]));

    var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
    listproduct += '<div class="card product p-2" styte="width:auto">';
    listproduct +=
      '<img class="card-img-top" src="' + data.img + '" alt="...">';

    listproduct +=
      '<div class="card-title product-title text-center h5" >' +
      data.name +
      "</div>";

    listproduct +=
      '<div class="price text-center h6">' + data.price + "₫</div>";

    listproduct +=
      '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' +
      data.id +
      " data-name=" +
      data.name +
      " data-img=" +
      data.img +
      " data-price=" +
      data.price +
      '" onclick="tks()">';
    listproduct += "<a>";
    listproduct += '<i class="fas fa-cart-plus"></i>';
    listproduct += "</a>";
    listproduct += "</span>";
    listproduct +=
      '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' +
      data.id +
      " data-name=" +
      data.name +
      " data-img=" +
      data.img +
      " data-price=" +
      data.price +
      '" onclick="tks()">';
    listproduct += "<a>";
    listproduct +=
      '<button class="btn btn-secondary" data-toggle="modal" data-target="#proDetails" onclick="proDetail(' +
      i +
      ')">Detail</button>';
    listproduct += "</a>";
    listproduct += "</span>";
    listproduct += "</div>";
    listproduct += "</div>";
    document.getElementById("banchay").innerHTML += listproduct;
  }
  Save();
};
listLocal();
localStorage.clear();
function proDetail(i) {
  var pDetail = "";
  for (var key in product) {
    if (key == i) {
      var data = product[i];
      pDetail += '<form class="form-row">';
      pDetail += '<div class="col-lg-12 col-md-6 col-sm-6 col-6 mt-3">';
      pDetail += '<div class="card" style="width:auto">';
      pDetail += '<img class="card-img-top" src="' + data.img + '" alt="...">';
      pDetail += '<div class="card-body">';
      pDetail += '<div class="card-title">' + data.name + "</div>";
      pDetail += '<div class="card-text">';
      pDetail += data.price + "</div>";
      pDetail += '<span class="text-center add-to-cart btn">';
      pDetail +=
        '<button class="btn btn-success">' +
        '<i class="fa fa-cart-plus mt-3"> </i>' +
        "</button> </span>";
      pDetail += "</form>";
      break;
    }
  }
  document.getElementById("proDetail").innerHTML = pDetail;
}
