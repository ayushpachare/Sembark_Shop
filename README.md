##  GitHub Repository

Project Link:
https://github.com/ayushpachare/Sembark_Shop

---

##  How to Run the Project Locally

Follow the steps below to set up and run the project on your system:

---

###  Clone the Repository

```bash
git clone https://github.com/ayushpachare/Sembark_Shop.git
cd Sembark_Shop
```

---

###  Setup Backend (Server)

```bash
cd server
npm install
npx ts-node index.ts
```

 Server will run on:
http://localhost:3030

---

### 3️Setup Frontend (Client)

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

✔ Frontend will run on:
http://localhost:5173

---

###  API Endpoint

```bash
GET http://localhost:3030/api/products
```

---

## Notes

* Make sure Node.js is installed
* Backend must be running before frontend
* If port changes, update API URL in frontend

---

##  Final Result

* Open browser → http://localhost:5173
* Browse products
* Add to cart
* View cart & update quantity
