# 🛍️ Myntra Clone — E-commerce Cart App

A fully functional e-commerce cart application inspired by Myntra, built with React. See products, add them to your bag, and view a real-time price breakdown — all with a clean, responsive UI.

---

## 🚀 Live Demo

> _Coming soon_

---

## ✨ Features

- 🛒 **Product Listing** — 16 products with images, ratings, reviews, and pricing
- ➕ **Add to Cart** — Toggle between "Add to Bag" and "Remove"
- ❌ **Remove from Cart** — Remove items from both product page and cart page
- 🔢 **Live Cart Count** — Header badge updates instantly
- 📄 **Cart Page** — View all added items with details
- 💰 **Price Summary**:
  - Total MRP
  - Discount on MRP
  - Convenience Fee
  - Final Total Amount
- 🗑️ **Empty Cart State** — Friendly message when cart is empty
- 📱 **Responsive Design** — Works across screen sizes

---

## 🧠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | Component-based UI |
| **Context API** | Global state management |
| **React Router** | Multi-page navigation |
| **Bootstrap** | Responsive styling |
| **React Icons** | Icons (bag, delete, wishlist) |
| **CSS (Flexbox/Grid)** | Custom layout and design |
| **Vite** | Fast build tool |

---

## 📁 Project Structure

src/
├── assets/ # Product images and logo
├── Components/
│ ├── Header.jsx # Navbar with cart count
│ ├── Mainpage.jsx # Product listing page
│ ├── Cartcomp.jsx # Cart page with price summary
│ ├── Footer.jsx # Footer
│ └── Vault.jsx # Context API setup
├── App.jsx # Main app with global state
├── main.jsx # Entry point with routing
└── App.css # Global styles



---

## 🧩 How It Works

### 1. Product Listing
Each product is displayed as a card with:
- Product image
- Rating + review count
- Product name and details
- Discounted price, original price, and % off

### 2. Add to Cart
Clicking **Add to Bag**:
- Adds the product index to `cartItems`
- Adds the original price to `totalPriceList`
- Adds the discount amount to `totalDiscountPrice`
- Toggles the button to **Remove**

### 3. Cart Page
Displays:
- All added items with images and details
- Price breakdown (MRP, discount, convenience fee, total)
- Delete button per item

### 4. Derived Totals
All totals are **computed during render** (not stored in state) using `reduce()`:
```js
const totalPrice = totalPriceList.reduce((acc, item) => acc + item.itemPrice, 0);
const discountPrice1 = totalDiscountPrice.reduce((acc, item) => acc + item.discountedPrice, 0);
const totalAmount = totalPrice - discountPrice1 + convenienceFee;

🎯 What I Learned

    Managing complex global state with Context API

    Derived data instead of useState for computed values

    Using .map(), .filter(), and .reduce() for list operations

    Building multi-page apps with React Router

    Handling conditional rendering (empty cart, button toggle)

    Writing clean, modular CSS with Flexbox

🔧 Installation & Setup
bash

# Clone the repository
git clone https://github.com/Darksyntax/myntra-clone.git

# Navigate into the project
cd myntra-clone

# Install dependencies
npm install

# Start the development server
npm run dev

🚧 Future Improvements

    □

    Product detail page
    □

    Search functionality
    □

    Filter by category / price
    □

    User authentication
    □

    Checkout flow
    □

    Save to localStorage (cart persistence)


👨‍💻 Author

Mayank Madhukar
Frontend Developer
📧 mayankmadhukar67@gmail.com
🔗 github.com/Darksyntax


Built with ❤️ and a lot of chai ☕
