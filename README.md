# Leaderboard-System-
A real-time full-stack leaderboard system where users can be added, claim random points (1–10), and get ranked dynamically. Features include user creation, animated top 3 podium, live leaderboard updates, point history logging, pagination, and a clean responsive UI. Built with Node.js, MongoDB, and React.js.
Perfect! Here's a **complete README.md** + supporting **documentation** you can directly include in your submission. It explains the project, setup, usage, features, and technologies clearly — just like companies expect.

---

## ✅ `README.md`

```md
# 🏆 Real-Time Leaderboard System

A full-stack real-time leaderboard system where users can be added, awarded points through a claim system, and ranked dynamically. Built with **Node.js**, **MongoDB**, and **React.js** (with TailwindCSS & Framer Motion for UI polish).

---

## 📌 Features

- ✅ Add new users dynamically
- ✅ Claim random points (1 to 10) for any user
- ✅ Real-time leaderboard ranking updates
- ✅ Top 3 displayed in podium layout
- ✅ Pagination for all users
- ✅ Claim history maintained in DB
- ✅ Fully responsive + modern animated UI
- ✅ Toast notifications & modal-based UX

---

## 🛠️ Tech Stack

| Frontend              | Backend                | Database    |
|-----------------------|------------------------|-------------|
| React.js              | Node.js + Express.js   | MongoDB Atlas |
| TailwindCSS           | REST API (Axios)       | Mongoose ODM |
| Framer Motion         | Socket.io (optional)   |             |
| React-Toastify        |                        |             |

---

```


## 🚀 Getting Started

### 📥 Clone the Repository
````


git clone https://github.com/your-username/leaderboard-app.git
cd leaderboard-app
````

### ⚙️ Backend Setup

```bash
cd backend
npm install
# Rename `.env.example` to `.env` and update your MongoDB URI
npm start
```

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Environment Variables

Create a `.env` file inside `/backend` and set:

```
MONGODB_URI = mongodb+srv://<user>:<pass>@cluster.mongodb.net/leaderboard
PORT = 3000
```

In `/frontend`, setup `VITE_API_BASE` in `.env`:

```
VITE_API_BASE = http://localhost:3000
```

---

## 🎯 API Endpoints

### ➕ Add User

`POST /api/users`

```json
{ "name": "Raeen" }
```

### 🎁 Claim Points

`POST /api/users/:id/claim`

### 📊 Get Leaderboard

`GET /api/leaderboard`

### 📜 Get Claim History

`GET /api/history`

---

## 🧩 Components Overview

| Component      | Purpose                             |
| -------------- | ----------------------------------- |
| `UserCard.jsx` | Displays each user with rank/points |
| `AddUserForm`  | Input + Add + View History buttons  |
| `ClaimModal`   | Popup for claiming random points    |
| `TopThreeCard` | Podium layout for top 3 users       |
| `Pagination`   | Reusable pagination controls        |

---

## 📸 Screenshots

### 💻 Desktop View

![Desktop Leaderboard](./screenshots/leaderboard-desktop.png)

### 📱 Mobile View

![Mobile View](./screenshots/leaderboard-mobile.png)

---

## ✅ Status

* [x] Functional User Management
* [x] Real-time Point Claiming
* [x] Live Rank Updates
* [x] Paginated Leaderboard
* [x] Fully Responsive UI

---

## 🏁 Submission Info

* ⏱️ Completed within 2-day window
* 🔥 Full functionality and polish
* 💡 Built following best practices

---

## 🙋‍♀️ Author

**Raeen Fatima**
BCA Student | MERN Dev | CyberSec + cloud Learner

---

## 📧 Contact

If you have any questions, feel free to reach out:

📩 Email: [raeenfatimahere@gmail.com](mailto:raeenfatimahere@gmail.com)
🔗 Portfolio: \[coming soon...]
🔗 GitHub: [github.com/raeen-fatima](https://github.com/raeen-fatima)

---

> “Code is poetry. Simplicity is elegance.”
> — Built with ❤️ by Raeen

```
