import React from "react";

export default function Cards({ children }) {
  return (
    <section className="post-flex">
      <div className="post-flex-row">
        {children}
      </div>
    </section>
  );
}

// import React, { useState } from "react";

// const initialCards = [
//   {
//     id: 1,
//     imgSrc:
//       "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/val-thorens.jpg",
//     imgAlt: "Post Image 1",
//     description: "Val Thorens",
//     heartId: "post1",
//   },
//   {
//     id: 2,
//     imgSrc:
//       "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/restaurant-terrace.jpg",
//     imgAlt: "Post Image 2",
//     description: "Restaurant terrace",
//     heartId: "post1",
//   },
//   {
//     id: 3,
//     imgSrc:
//       "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/outdoor-cafe.jpg",
//     imgAlt: "Post Image 3",
//     description: "An outdoor cafe",
//     heartId: "post1",
//   },
//   {
//     id: 4,
//     imgSrc:
//       "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/long-bridge.jpg",
//     imgAlt: "Post Image 4",
//     description: "A very long bridge, over the forest...",
//     heartId: "post1",
//   },
//   {
//     id: 5,
//     imgSrc:
//       "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/tunnel-morning-light.jpg",
//     imgAlt: "Post Image 5",
//     description: "Tunnel with morning light",
//     heartId: "post1",
//   },
//   {
//     id: 6,
//     imgSrc:
//       "https://raw.githubusercontent.com/slyde619/SpotImages/refs/heads/main/images/mountain-house.jpg",
//     imgAlt: "Post Image 1",
//     description: "Mountain house",
//     heartId: "post1",
//   },
// ];

// export default function Cards() {
//   const [cards, setCards] = useState(initialCards);
//   const [modal, setModal] = useState({ open: false, imgSrc: "", imgAlt: "" });

//   const handleDelete = (id) => {
//     setCards(cards.filter((card) => card.id !== id));
//   };

//   const handleImageClick = (imgSrc, imgAlt) => {
//     setModal({ open: true, imgSrc, imgAlt });
//     document.body.classList.add("modal-open");
//   };

//   const closeModal = () => {
//     setModal({ open: false, imgSrc: "", imgAlt: "" });
//     document.body.classList.remove("modal-open");
//   };

//   return (
//     <div>
//       <div className="card-container">
//         {cards.map((card) => (
//           <article className="card" key={card.id}>
//             <div className="image-container">
//               <img
//                 src={card.imgSrc}
//                 alt={card.description}
//                 onClick={() => handleImageClick(card.imgSrc, card.description)}
//                 style={{ cursor: "pointer" }}
//               />
//               <button
//                 className="delete-post"
//                 title="Delete Post"
//                 onClick={() => handleDelete(card.id)}
//               >
//                 &times;
//               </button>
//             </div>
//             <div className="card-content">
//               <p>{card.description}</p>
//               <i className="ri-heart-line heart-icon"></i>
//             </div>
//           </article>
//         ))}
//       </div>
//       {modal.open && (
//         <div className="image-modal active" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <img src={modal.imgSrc} alt={modal.imgAlt} />
//             <h2>{modal.imgAlt}</h2>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


