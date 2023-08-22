let total = 0;
function clickItem(target) {
  const productList = document.getElementById("product-list");
  const newLi = document.createElement("li");
  newLi.innerText = target.childNodes[3].childNodes[3].innerText;
  productList.appendChild(newLi);

  const productPrice =
    target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  total = total + parseFloat(productPrice);

  const totalPrice = document.getElementById("total-price");
  totalPrice.innerText = total;

  const purchaseBtn = document.getElementById("purchase-btn");

  if (total > 0) {
    purchaseBtn.removeAttribute("disabled");
  } else {
    purchaseBtn.setAttribute("disabled", "");
  }

  const applyBtn = document.getElementById("apply-btn");

  if (total >= 200) {
    applyBtn.removeAttribute("disabled");
  } else {
    applyBtn.setAttribute("disabled", "");
  }

  document.getElementById("home-btn").addEventListener("click", function () {
    productList.removeChild(newLi);
  });
}

const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", function () {
  const inputField = document.getElementById("input");
  const inputValue = inputField.value;
  const discountField = document.getElementById("discount");
  const discountTotal = document.getElementById("total");

  if (inputValue === "SELL200") {
    discountField.innerText = total * 0.2;
    discountTotal.innerText = total - total * 0.2;
  } else {
    alert("Invalid Coupon");
  }
});

document.getElementById("home-btn").addEventListener("click", function () {
  document.getElementById("total-price").innerText = "0";
  document.getElementById("discount").innerText = "0";
  document.getElementById("total").innerText = "0";
  total = 0;
  document.getElementById("purchase-btn").setAttribute("disabled", "");
  document.getElementById("apply-btn").setAttribute("disabled", "");
  document.getElementById("input").value = "";
});
