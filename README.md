
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

![UserList](<img width="1192" height="568" alt="image" src="https://github.com/user-attachments/assets/f091cb98-923d-4de9-8625-418b828611f1" />)
![Pagination](<img width="1080" height="544" alt="image" src="https://github.com/user-attachments/assets/95eb5d6d-3bc4-4a6b-b630-9d78ed2a5478" />)
![Leaderboard](<img width="1300" height="575" alt="image" src="https://github.com/user-attachments/assets/c88c5c4d-27ea-4d18-8844-eee2097eca9f" />)
![Leaderboard](<img width="1314" height="632" alt="image" src="https://github.com/user-attachments/assets/be0825b6-d6f5-4ec0-a2b5-154f0f9485c5" />)
![Claim History](<img width="1346" height="628" alt="image" src="https://github.com/user-attachments/assets/1bf7bce1-5010-443e-96ac-605e1f970e2e" />)
![Claim History](<img width="1270" height="620" alt="image" src="https://github.com/user-attachments/assets/9dbcf33c-92a8-45e1-a7b0-8cc59238e025" />)
![Claim Points](<img width="1308" height="618" alt="image" src="https://github.com/user-attachments/assets/10f5e53e-0fdc-4046-a25a-2aae27ce1f26" />)
![Toast](<img width="1268" height="625" alt="image" src="https://github.com/user-attachments/assets/6e68a948-f365-46e3-b63f-41293943cac4" />)


### 📱 Mobile View

![UserList](<img width="299" height="534" alt="image" src="https://github.com/user-attachments/assets/7512a330-830d-4b70-8491-38850dc4d434" />)
![Pagination](<img width="299" height="532" alt="image" src="https://github.com/user-attachments/assets/955784b9-4a44-43f7-8beb-40445f88b6c8" />)
![Leaderboard](<img width="300" height="536" alt="image" src="https://github.com/user-attachments/assets/499decc0-14e7-4ae9-91d0-37b164f7a4d1" />)
![Leaderboard](<img width="301" height="541" alt="image" src="https://github.com/user-attachments/assets/bce91ad9-886b-4fd8-bdac-1d89b25947df" />)
![Claim History](<img width="296" height="534" alt="image" src="https://github.com/user-attachments/assets/2955e232-d4a1-41ee-8217-dab35d970b48" />)
![Claim History](<img width="288" height="538" alt="image" src="https://github.com/user-attachments/assets/5199ec2e-4824-479e-830b-b77a4d433094" />)
![Claim Points](<img width="290" height="535" alt="image" src="https://github.com/user-attachments/assets/d2be4788-68b7-4177-911f-e180754ebc99" />)
![Toast](<img width="300" height="539" alt="image" src="https://github.com/user-attachments/assets/f51af5d8-55a6-4524-87e5-24ba9da996d6" />)


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

```
