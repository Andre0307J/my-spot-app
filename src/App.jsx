import React, { useState } from "react";
import ProfileSection from "./components/ProfileSection";
import Cards from "./components/Cards";
import Card from "./components/Card";
import ImageModal from "./components/ImageModal";
import NewPostModal from "./components/NewPostModal";
import ProfileModal from "./components/ProfileModal";
import Footer from "./components/Footer";
import "./App.css";

// Initial data for cards and profile
const initialCards = [
  {
    id: 1,
    imgSrc:
      "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/val-thorens.jpg",
    imgAlt: "Post Image 1",
    description: "Val Thorens",
  },
  {
    id: 2,
    imgSrc:
      "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/restaurant-terrace.jpg",
    imgAlt: "Post Image 2",
    description: "Restaurant terrace",
  },
  {
    id: 3,
    imgSrc:
      "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/outdoor-cafe.jpg",
    imgAlt: "Post Image 3",
    description: "An outdoor cafe",
  },
  {
    id: 4,
    imgSrc:
      "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/long-bridge.jpg",
    imgAlt: "Post Image 4",
    description: "A very long bridge, over the forest...",
  },
  {
    id: 5,
    imgSrc:
      "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/tunnel-morning-light.jpg",
    imgAlt: "Post Image 5",
    description: "Tunnel with morning light",
  },
  {
    id: 6,
    imgSrc:
      "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/mountain-house.jpg",
    imgAlt: "Post Image 6",
    description: "Mountain house",
  },
];

const initialProfile = {
  image: "./images/image 2.png",
  title: "Aliauna Damala Bouga Time Bongo Puru Nacka Lu Lu Lu Badara Akon",
  description:
    "Known mononymously as Akon (/ˈeɪkɒn/), is a Senegalese-American singer, record producer, and entrepreneur. An influential figure in modern world...",
};

function App() {
  const [cards, setCards] = useState(initialCards);
  const [imageModal, setImageModal] = useState({
    open: false,
    imgSrc: "",
    imgAlt: "",
  });
  const [newPostOpen, setNewPostOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [profile, setProfile] = useState(initialProfile);

  const handleImageClick = (imgSrc, imgAlt) =>
    setImageModal({ open: true, imgSrc, imgAlt });
  const closeImageModal = () =>
    setImageModal({ open: false, imgSrc: "", imgAlt: "" });

  const handleAddPost = ({ title, description, imageData }) => {
    setCards([
      ...cards,
      {
        id: Date.now(),
        imgSrc: imageData,
        imgAlt: title,
        description,
      },
    ]);
  };

  const handleProfileEdit = ({ title, description, imageData }) => {
    setProfile({
      ...profile,
      title,
      description,
      image: imageData || profile.image,
    });
  };

  return (
    <div className="App">
      <header>
        <img src="./images/brand-logo.png" alt="Brand Logo" />
      </header>
      <div className="main-container">
        <main>
          <ProfileSection
            profile={profile}
            onEdit={() => setProfileModalOpen(true)}
            onNewPost={() => setNewPostOpen(true)}
          />
          <Cards>
            {cards.map((card) => (
              <Card key={card.id} {...card} onImageClick={handleImageClick} />
            ))}
          </Cards>
          <ImageModal
            open={imageModal.open}
            imgSrc={imageModal.imgSrc}
            imgAlt={imageModal.imgAlt}
            onClose={closeImageModal}
          />
          <NewPostModal
            isOpen={newPostOpen}
            onClose={() => setNewPostOpen(false)}
            onSubmit={handleAddPost}
          />
          <ProfileModal
            isOpen={profileModalOpen}
            onClose={() => setProfileModalOpen(false)}
            onSubmit={handleProfileEdit}
            initialProfile={profile}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default App;
