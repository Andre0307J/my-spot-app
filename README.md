# My Spot App

A React + Vite application for sharing and discovering cool spots!  
Users can view, add, and edit posts with images and descriptions, as well as update their profile.

## Features

- **Profile Section:** View and edit your profile, including your display image, name, and description.
- **Posts Gallery:** Browse a collection of spot cards with images and descriptions.
- **Add New Post:** Upload an image, enter a title and description to share a new spot.
- **Edit Profile:** Update your profile information and profile picture.
- **Image Modal:** Click on any post image to view it in a larger modal.
- **Responsive Design:** Works well on desktop and mobile devices.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  components/
    App.jsx
    ProfileSection.jsx
    Cards.jsx
    Card.jsx
    ImageModal.jsx
    NewPostModal.jsx
    ProfileModal.jsx
    ImageUpload.jsx
  App.css
  main.jsx
public/
  images/
    (profile and post images)
```

## Customization

- Update the initial cards and profile data in `src/App.jsx`.
- Add your own styles in `src/App.css`.

## License

This project is for educational/demo purposes.
