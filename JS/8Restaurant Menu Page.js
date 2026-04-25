const menuItems = [
  {
    name: "Food 1",
    description: "This food is delicious and made with fresh ingredients.",
    price: "₦2,000",
    category: "breakfast",
    image: "images/8Restaurant Menu Page/food1.jpg"
  },
  {
    name: "Food 2",
    description: "This food is delicious and made with fresh ingredients.",
    price: "₦2,000",
    category: "breakfast",
    image: "images/8Restaurant Menu Page/food2.jpg"
  },
  {
    name: "Food 3",
    description: "This food is delicious and made with fresh ingredients.",
    price: "₦2,000",
    category: "dinner",
    image: "images/8Restaurant Menu Page/food3.jpg"
  },
  {
    name: "Food 4",
    description: "This food is delicious and made with fresh ingredients.",
    price: "₦2,000",
    category: "dinner",
    image: "images/8Restaurant Menu Page/food4.jpg"
  },
  {
    name: "Food 5",
    description: "This food is delicious and made with fresh ingredients.",
    price: "₦2,000",
    category: "lunch",
    image: "images/8Restaurant Menu Page/food5.jpg"
  },
  {
    name: "Food 6",
    description: "This food is delicious and made with fresh ingredients.",
    price: "₦2,000",
    category: "lunch",
    image: "images/8Restaurant Menu Page/food6.jpg"
  }
]

const menuContainer = document.getElementById("menuContainer");
const filterBtns = document.querySelectorAll(".filterBtn");

  // Builds and displays menu cards from an array of items
function displayItems(items) {
  menuContainer.innerHTML = items.map((item) => {
    return `
      <div class="menuItem">
        <img src="${item.image}" alt="${item.name}">
        <div class="menuItemInfo">
         <h3>${item.name}</h3>
         <p>${item.description}</p>
         <div class="menuItemFooter">
            <span class="price">${item.price}</span>
            <span class="category">${item.category}</span>
         </div>
        </div>
      </div>
      `;
  }).join("");
}

      // Filter buttons — update active state and display filtered items
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    
    filterBtns.forEach((b) => b.classList.remove("active"));
    
    btn.classList.add("active");
    
    const filter = btn.dataset.filter;
    if (filter === "all") {
      displayItems(menuItems);
    } else {
      const filtered = menuItems.filter((item) => item.category === filter);
      displayItems(filtered);
    }
  });
});


     // Display all items on page load
displayItems(menuItems);
