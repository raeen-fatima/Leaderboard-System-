
---

# 🏆 Real-Time Leaderboard App

A dynamic full-stack leaderboard system where users can join, claim points, and rise in the rankings — all in real time. Built with **Node.js**, **MongoDB**, and **React.js**, with a clean, responsive UI styled using **TailwindCSS** and animated with **Framer Motion**.

---

## ✨ Features

- ➕ Add users dynamically  
- 🎲 Claim random points (1–10)  
- 🪄 Real-time leaderboard updates  
- 🥇 Stylish podium view for top 3  
- 📜 Tracks claim history in DB  
- 📱 Fully responsive (mobile-first)  
- 💬 Toast alerts & animated modals  
- 📚 Pagination for easy navigation  

---

## 🧰 Tech Stack

| Frontend        | Backend             | Database        |
|-----------------|---------------------|-----------------|
| React.js        | Node.js + Express   | MongoDB Atlas   |
| TailwindCSS     | REST API (Axios)    | Mongoose ODM    |
| Framer Motion   | Socket.io (optional)|                 |
| React-Toastify  |                     |                 |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/leaderboard-app.git
cd leaderboard-app
````

---

### 2. Backend Setup

```bash
cd backend
npm install
# Rename `.env.example` to `.env` and add your MongoDB URI
npm start
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌱 Environment Variables

In `/backend/.env`:

```
MONGODB_URI = mongodb+srv://<username>:<password>@cluster.mongodb.net/leaderboard
PORT = 3000
```

In `/frontend/.env`:

```
VITE_API_BASE = http://localhost:3000
```

---

## 📡 API Overview

### ➕ Add a New User

`POST /api/users`

```json
{ "name": "Raeen" }
```

### 🎁 Claim Points

`POST /api/users/:id/claim`

### 📊 Get Leaderboard

`GET /api/leaderboard`

### 📜 View Claim History

`GET /api/history`

---

## 🧩 Components Overview

| Component      | Purpose                             |
| -------------- | ----------------------------------- |
| `UserCard`     | Displays user's name, rank & points |
| `AddUserForm`  | Add users & open history modal      |
| `ClaimModal`   | Pop-up to claim random points       |
| `TopThreeCard` | Podium-style layout for top 3       |
| `Pagination`   | Handles pagination of user list     |

---

## 🖼️ Screenshots

### 💻 Desktop View

| Description        | Screenshot                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| User List          | ![UserList](https://github.com/user-attachments/assets/0305615b-1dab-4086-8375-8f3f519d0e22)      |
| Pagination         | ![Pagination](https://github.com/user-attachments/assets/a5a86679-5c0c-4c08-a393-256b675068fb)    |
| Leaderboard View 1 | ![Leaderboard1](https://github.com/user-attachments/assets/03a017fa-fb3c-4098-b080-4fe9a571a573)  |
| Leaderboard View 2 | ![Leaderboard2](https://github.com/user-attachments/assets/189bb4a4-d292-4a96-9240-07d33e14e7a2)  |
| Claim History 1    | ![ClaimHistory1](https://github.com/user-attachments/assets/eb01dd74-e338-4bea-9a16-ec1a1afbd20f) |
| Claim History 2    | ![ClaimHistory2](https://github.com/user-attachments/assets/f9a4f14c-4a31-4776-a0fe-7b5ba173f5c0) |
| Claim Modal        | ![ClaimPoints](https://github.com/user-attachments/assets/2c176905-a7cb-4292-b8f1-f2580fd7605b)   |
| Toast Alert        | ![Toast](https://github.com/user-attachments/assets/1884d2a5-0fff-4abe-a1c0-e0a03ac5a321)         |

---

### 📱 Mobile View

| Description        | Screenshot                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| User List          | ![UserList-Mobile](https://github.com/user-attachments/assets/1bd9de5e-7a5a-4153-b964-689f0d6a0841)      |
| Pagination         | ![Pagination-Mobile](https://github.com/user-attachments/assets/ce874525-b0c5-4c56-ace9-2971c9364fea)    |
| Leaderboard View 1 | ![Leaderboard-Mobile1](https://github.com/user-attachments/assets/079f240c-ff9f-4b22-9340-43434d980275)  |
| Leaderboard View 2 | ![Leaderboard-Mobile2](https://github.com/user-attachments/assets/eb9ea1fd-86b7-4a98-904e-8630a99d6d63)  |
| Claim History 1    | ![ClaimHistory-Mobile1](https://github.com/user-attachments/assets/149d2476-0ec4-42ce-b78c-9b5fec261eea) |
| Claim History 2    | ![ClaimHistory-Mobile2](https://github.com/user-attachments/assets/dab62da3-6703-4353-9622-0ae694b7e967) |
| Claim Modal        | ![ClaimPoints-Mobile](https://github.com/user-attachments/assets/7b7aa65e-b79a-4b0e-9c00-689225f8bfc0)   |
| Toast Alert        | ![Toast-Mobile](https://github.com/user-attachments/assets/57e14d14-b15a-4572-80b6-700d23e2b752)         |

---

## ✅ Status

* [x] Functional user management
* [x] Real-time point claiming
* [x] Dynamic leaderboard ranking
* [x] Paginated leaderboard
* [x] Clean & responsive UI

---

## ⏱️ Submission Info

* ⏳ Built in under 2 days
* 🛠️ Complete & production-ready
* ✨ Focused on user experience and modular design

---

## 🙋‍♀️ Author

**Raeen Fatima**
BCA Student | MERN Stack Dev | Learning Cybersecurity & Cloud

---

## 📬 Reach Out

📧 Email: [raeenfatimahere@gmail.com](mailto:raeenfatimahere@gmail.com)
🌐 Portfolio: [raeen-s-portfolio.vercel.app](https://raeen-s-portfolio.vercel.app)
🐱 GitHub: [github.com/raeen-fatima](https://github.com/raeen-fatima)

---

> “Code is poetry. Simplicity is elegance.”
> *Built with ❤️ by Raeen*



---

