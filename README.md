# Matcha (Tinder Clone) Project

<!--  **Demo:** Explore the live demo of this project at [matcha.hmellahi.me](https://matcha.hmellahi.me) ( still working on it) -->

## Project Overview

Matcha is a modern web application inspired by Tinder's swiping interface. It enables users to discover potential matches based on shared interests and location. If two users mutually swipe right on each other's profiles, they can connect and start chatting, potentially leading to meaningful connections.

<!-- <div align="center">
  <img style="box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);" src="assets/Feed.png" alt="Matcha Project" width="80%">
  <p><em>Screenshot of the Matcha Feed Page</em></p>
</div> -->

## Technology Stack

This project employs a range of cutting-edge technologies:

<div style="display: flex; align-items: center; margin-left: 10px; margin-right: 10px;">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg" width="18" height="18" alt="Vue" />
  <span style="margin-left: 5px;"><strong>Vue 3:</strong> Frontend framework for building user interfaces.</span>
</div>

<div style="display: flex; align-items: center; margin-left: 10px; margin-right: 10px;">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="18" height="18" alt="TailwindCSS" />
  <span style="margin-left: 5px;"><strong>Tailwind CSS:</strong> Styling library for modern and responsive user interfaces.</span>
</div>

<div style="display: flex; align-items: center; margin-left: 10px; margin-right: 10px;">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="18" height="18" alt="Express" />
  <span style="margin-left: 5px;"><strong>Express JS:</strong> Backend framework for building the server-side application logic.</span>
</div>

<div style="display: flex; align-items: center; margin-left: 10px; margin-right: 10px;">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="18" height="18" alt="PostgreSQL" />
  <span style="margin-left: 5px;"><strong>Postgres:</strong> Database for efficient data storage with native SQL queries.</span>
</div>

<div style="display: flex; align-items: center; margin-left: 10px; margin-right: 10px;">
  <img src="https://github.com/python-websockets/websockets/raw/main/logo/icon.svg" width="18" height="18" alt="JavaScript" />
  <span style="margin-left: 5px;"><strong>WebSockets:</strong> Real-time communication for online gameplay and chat.</span>
</div>

<div style="display: flex; align-items: center; margin-left: 10px; margin-right: 10px;">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="18" height="18" alt="TypeScript" />
  <span style="margin-left: 5px;"><strong>TypeScript:</strong> Superset of JavaScript with static typing for enhanced development.</span>
</div>

## Installation

To run the Matcha project locally, follow these steps:

1. Ensure Docker is installed on your system. Refer to the Docker documentation for installation instructions.
2. Clone the project repository to your local machine.
3. Navigate to the `database` directory within the project using the terminal.
4. Execute the `sh run.sh` command to start the necessary database services.

Once the application is built and launched, access it by visiting [http://localhost:8890](http://localhost:8890) in your web browser.

## Key Features

### Registration and Signing-in

- Users can register with their email address, username, name, and protected password. A verification link is sent via email for account confirmation.
- Secure user login and password reset functionality.
- Convenient one-click logout from any page.

### User Profile

- Users can create detailed profiles including gender, sexual preferences, biography, interests with reusable tags, and profile pictures.
- Profile information is modifiable, including personal details.
- Tracking of profile visits and "likes" received from other users.
- Public "fame rating" to add an interactive element.

### Browsing and Matching

- Users receive curated match suggestions based on geographic area, common tags, and "fame rating."
- Intelligent matching prioritizes profiles from the same region and offers sort and filter options.
- Advanced search functionality with customizable criteria, including age, "fame rating," location, and interests.

### Interaction and Communication

- Explore other users' profiles, see their information, and track visits.
- "Like" a profile picture to initiate connections for real-time chat when mutual.
- Real-time chat functionality for connected users.
- Notifications for events like receiving "likes," profile views, messages, and mutual "likes."

### Location Services

- Integration of Google Maps for changing user location and enhancing the matching experience.

## Acknowledgments

This project was created by [Hamza Mellahi](https://github.com/hmellahi) and [Houssam Moumanis](https://github.com/hmoumani).

## Contributing

Contributions and feedback are welcome! Feel free to create issues or pull requests to improve this project.

---

_Disclaimer: Matcha is a project created for educational purposes and is not affiliated with Tinder or any dating platform._
