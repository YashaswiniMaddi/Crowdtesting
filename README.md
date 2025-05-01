# 🧪 CrowdTest

**CrowdTest** is a lightweight, responsive web application that connects developers and non-professional testers to crowdsource bug reports, making testing simpler and more effective — especially for small projects and startups.

🚀 [Live Site on Vercel](https://crowdtesting.vercel.app/)

---

## 📌 Features

- 👤 Login/Register for Developers and Testers
- 🗂 Developer Dashboard to submit code-based projects
- 🧪 Tester Dashboard to browse, test, and report bugs
- 📝 Bug report includes title, severity, steps to reproduce, and screenshots
- 📄 Projects can be submitted via text or file upload (multi-file support)
- 🔁 Developer can view and edit submitted projects
- 🔔 Notifications and real-time updates (basic)
- 🎯 Firebase Authentication + Local Storage simulation
- 📱 Fully responsive for mobile and desktop views

---

## 💡 Why CrowdTest?

Traditional testing tools are complex or expensive. **CrowdTest** makes it possible for:
- Small teams and startups to collect useful bug feedback
- Everyday users to contribute as testers
- Faster product improvements before full release

---

## 🛠 Built With

- **HTML**, **CSS**, **JavaScript**, **React**
- **Firebase Authentication**
- **Local Storage** for simulation of data handling
- **Responsive Design** with media queries
- **Deployed with Vercel**

---

## 📂 Folder Structure

/project-folder │
                ├── index.html # Landing page 
                ├── app.html # Inlined dashboard logic (developer/tester view) 
                ├── styles.css # All styling, responsive and themed 
                ├── api.js # Core logic: auth, bug/project handling 
                ├── firebase-config.js # Firebase initialization 
                ├── assets : screenshots, logos
