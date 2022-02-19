//Card Border
const cardBlock = document.getElementById("cards"),
  allCard = cardBlock.getElementsByClassName("card");
for (let index = 0; index < allCard.length; index++) {
  allCard[index].addEventListener("click", function () {
    let current = document.getElementsByClassName("selected");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" selected", "");
    }
    this.className += " selected";
  });
}
//Slider
const customers = [
  {
    name: "Viezh, Robert",
    profile_pic_path: "images/people/first-person.png",
    location: "Warsaw, Poland",
    rating: "4.5",
    message:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "Yessica, Christy",
    profile_pic_path: "images/people/second person.png",
    location: "Shanxi, China",
    rating: "4.5",
    message:
      "I like it because I like to travel far and still can connect with high speed.",
  },
  {
    name: "Kim Young, Jou",
    profile_pic_path: "images/people/third person.png",
    location: "Seoul, South Korea",
    rating: "4.5",
    message:
      "This is very unusual for my business that currently requires a virtual private network that has high security.",
  },
];

let customerItems = document.querySelector(".customer-items");
let itemLinks = document.querySelector(".item-links");

customers.forEach((customer, i) => {
  let customerItem = document.createElement("div");
  customerItem.className = `customer-item ${i === 0 ? "selected" : ""}`;
  customerItem.innerHTML = `
    <div class="person-info-rating">
    <div class="person-info">
        <div class="person-icon-ctr">
        <img src="${customer.profile_pic_path}" alt="customer-photo" />
        </div>
        <div class="person-info-text">
        <p class="person-name">${customer.name}</p>
        <p class="person-location">${customer.location}</p>
        </div>
    </div>
    <div class="person-rating">
        <p>${customer.rating}</p>
        <div class="rating-icon-ctr">
        <img src="images/people/star.png" alt="star-rating" />
        </div>
    </div>
    </div>
    <div class="person-customer">
    <p>"${customer.message}".</p>
    </div>
    `;
  customerItems.appendChild(customerItem);

  let itemLink = document.createElement("div");
  itemLink.className = `item-link ${i === 0 && "com-selected"}`;

  itemLinks.appendChild(itemLink);
});

let customerItemsList = document.querySelectorAll(".customer-item");
let itemLinkList = document.querySelectorAll(".item-link");
let selectedIndex = 0;

function selectCustomer(index) {
  customerItemsList[selectedIndex].classList.remove("selected");
  itemLinkList[selectedIndex].classList.remove("selected");

  selectedIndex = index;

  let customerListItem = customerItemsList[selectedIndex];
  customerListItem.classList.add("selected");

  customerItems.scrollBy(
    customerListItem.offsetLeft -
      customerItems.offsetLeft -
      customerItems.scrollLeft,
    0
  );

  itemLinkList[selectedIndex].classList.add("selected");
}

itemLinkList.forEach((itemLink, i) => {
  itemLink.onclick = () => selectCustomer(i);
});

document.querySelector(".slider-btn.right").onclick = () => {
  let index =
    selectedIndex === customerItemsList.length - 1 ? 0 : selectedIndex + 1;
  selectCustomer(index);
};

document.querySelector(".slider-btn.left").onclick = () => {
  let index =
    selectedIndex === 0 ? customerItemsList.length - 1 : selectedIndex - 1;
  selectCustomer(index);
};
