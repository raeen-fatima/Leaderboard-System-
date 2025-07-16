
---


```md
🏆 Real-Time Leaderboard System

A full-stack real-time leaderboard system where users can be added, awarded points through a claim system, and ranked dynamically. Built with **Node.js**, **MongoDB**, and **React.js** (with TailwindCSS & Framer Motion for UI polish).

---

📌 Features

- ✅ Add new users dynamically
- ✅ Claim random points (1 to 10) for any user
- ✅ Real-time leaderboard ranking updates
- ✅ Top 3 displayed in podium layout
- ✅ Pagination for all users
- ✅ Claim history maintained in DB
- ✅ Fully responsive + modern animated UI
- ✅ Toast notifications & modal-based UX

---

 🛠️ Tech Stack

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
![Postman](https://github.com/user-attachments/assets/820cc4c0-8202-4378-a242-059ba62724ab)
![Postman](https://github.com/user-attachments/assets/2f7d834a-ebf6-469f-a1b6-8845e09b125f)
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

![UserList](https://github.com/user-attachments/assets/0305615b-1dab-4086-8375-8f3f519d0e22)
![Pagination](https://github.com/user-attachments/assets/a5a86679-5c0c-4c08-a393-256b675068fb)
![Leaderboard](https://github.com/user-attachments/assets/03a017fa-fb3c-4098-b080-4fe9a571a573)
![Leaderboard](https://github.com/user-attachments/assets/189bb4a4-d292-4a96-9240-07d33e14e7a2)
![Claim History](https://github.com/user-attachments/assets/eb01dd74-e338-4bea-9a16-ec1a1afbd20f)
![Claim History](https://github.com/user-attachments/assets/f9a4f14c-4a31-4776-a0fe-7b5ba173f5c0)
![Claim Points](https://github.com/user-attachments/assets/2c176905-a7cb-4292-b8f1-f2580fd7605b)
![Toast](https://github.com/user-attachments/assets/1884d2a5-0fff-4abe-a1c0-e0a03ac5a321)


### 📱 Mobile View

![UserList](https://github.com/user-attachments/assets/1bd9de5e-7a5a-4153-b964-689f0d6a0841)
![Pagination](https://github.com/user-attachments/assets/ce874525-b0c5-4c56-ace9-2971c9364fea)
![Leaderboard](https://github.com/user-attachments/assets/079f240c-ff9f-4b22-9340-43434d980275)
![Leaderboard](https://github.com/user-attachments/assets/eb9ea1fd-86b7-4a98-904e-8630a99d6d63)
![Claim History](https://github.com/user-attachments/assets/149d2476-0ec4-42ce-b78c-9b5fec261eea)
![Claim History](https://github.com/user-attachments/assets/dab62da3-6703-4353-9622-0ae694b7e967)
![Claim Points](https://github.com/user-attachments/assets/7b7aa65e-b79a-4b0e-9c00-689225f8bfc0)
![Toast](https://github.com/user-attachments/assets/57e14d14-b15a-4572-80b6-700d23e2b752)


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
🔗 Portfolio: https://raeen-s-portfolio.vercel.app/
🔗 GitHub: [github.com/raeen-fatima](https://github.com/raeen-fatima)

---

> “Code is poetry. Simplicity is elegance.”
> — Built with ❤️ by Raeen

