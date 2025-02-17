# Shopping List App

A simple React shopping list application that allows users to **add, search, and delete items** with details like name, description, category, and price.

## 🚀 Features
- **Add Items**: Users can add new items with name, description, category, and price.
- **Search Items**: Users can search items by name in real-time.
- **Delete Items**: Users can remove items from the list.
- **Responsive UI**: Styled using Tailwind CSS for a clean and modern look.

## 📂 Project Structure
```
shopping-list/
│── src/
│   ├── components/
│   │   ├── ItemForm.jsx  # Form to add new items
│   │   ├── Items.jsx     # Display the list of items
│   │   ├── Search.jsx    # Search input component
│   ├── App.jsx           # Main application file
│   ├── index.js          # Entry point
│── public/
│── package.json          # Project dependencies
│── tailwind.config.js    # Tailwind CSS configuration
│── postcss.config.js     # PostCSS configuration
│── README.md             # Project documentation
```

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/LEAKONO/shopping-list
   cd shopping-list
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Run the app**:
   ```sh
   npm run dev
   ```

4. **Open the browser and visit**:
   ```
   http://localhost:5173
   ```

## 🖌️ Tailwind CSS Setup
This project uses Tailwind CSS. If you need to configure Tailwind, update `tailwind.config.js`.

## 📜 Usage
1. Type an item name, description, category, and price in the form.
2. Click the **Add Item** button.
3. Use the search bar to filter items.
4. Click **Delete** to remove an item.

## 🔧 Technologies Used
- **React** (Vite for fast development)
- **Tailwind CSS** (for styling)
- **JavaScript (ES6+)**

## 📌 Future Improvements
- Implement local storage to persist items.
- Add categories filter.
- Improve UI/UX with animations.

## 📜 License
This project is licensed under the MIT License.

---
🎉 **Enjoy building with React!** 🚀

