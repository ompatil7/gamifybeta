# Gamify

![Gamify Preview](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXF3ZHp2MHJzbmlwNHR0ZHJ1NGUwaWl3NjRnZWhqaTQ1N3c4YnF2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TQOTjlzMHRmoqF27CC/giphy.gif)

## Overview

Gamify is a comprehensive game management platform that offers a robust, real-time interactive experience for users. Built with modern technologies, Gamify provides features like user authentication, game management, and real-time communication, all within a sleek and responsive UI.

## Tech Stack

### Frontend
- **React**: For building a dynamic and responsive user interface.
- **Chakra UI**: For modular and accessible component styling.
- **React Router**: For seamless navigation.
- **Axios**: For handling HTTP requests.
- **Socket.IO**: For real-time communication.

### Backend
- **Node.js**: For the server-side environment.
- **Express**: For building the backend API.
- **MongoDB**: As the database to store game and user data.
- **Mongoose**: For MongoDB object modeling.
- **Cloudinary**: For managing and storing images and videos.
- **JWT (JSON Web Tokens)**: For secure authentication.

### Deployment
- **Render**: For backend deployment.
- **Vercel**: For frontend deployment.

## Features

1. **User Authentication**
   - Secure login and registration using JWT.
   - Password reset functionality.

2. **Game Management**
   - Add, update, and delete games.
   - Each game includes a name, description, image, logo, tags, and gifs.
   - Detailed game pages displaying tags and player counts.

3. **Real-Time Communication**
   - Chat functionality using Socket.IO.
   - Real-time updates for game status and player activity.

4. **Responsive Design**
   - Optimized for both desktop and mobile devices.
   - Dynamic UI components that adjust to screen sizes.

5. **Interactive UI**
   - Smooth animations and transitions.
   - Hover effects and interactive elements for better user engagement.

6. **Game Insights**
   - Display of player counts and other relevant statistics.
   - Organized by tags and categories for easy navigation.

## Unique Features

- **Real-Time Interaction**: Enhances user engagement with real-time chat and updates.
- **Comprehensive Game Management**: Rich media support and detailed game pages.
- **Modern Tech Stack**: Ensures robustness and scalability.
- **User-Centric Design**: Provides a responsive and interactive UI.

## Live Site

Check out the live site: [Gamify](https://your-live-site-link.com)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/gamify.git
    ```

2. Install dependencies:
    ```bash
    cd gamify
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your environment variables (e.g., MongoDB URI, Cloudinary API keys, JWT secret).

4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

- Navigate to the homepage.
- Register or log in to your account.
- Add, update, or delete games.
- Enjoy real-time chat and updates.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

