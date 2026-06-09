import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./StoryTelling.css";

import maternity from "../../assets/img1.jpg";
import prewedding from "../../assets/img3.jpg";
import wedding from "../../assets/img2.jpg";
import bride from "../../assets/bride1.jpg";

const photographyData = [
  {
    id: 1,
    category: "Maternity",
    title: "THE BEAUTY OF WAITING",
    desc: "Capturing the radiant journey of motherhood with artistic, timeless portraits.",
    image: maternity,
    slug: "maternity"
  },

  {
    id: 2,
    category: "Pre-Wedding",
    title: "BEFORE THE FOREVER",
    desc: "Turning your love story into cinematic memories filled with romance and emotion.",
    image: prewedding,
    slug: "pre-wedding"
  },

  {
    id: 3,
    category: "Wedding",
    title: "THE SACRED BOND",
    desc: "Fine art wedding photography that documents every ritual and raw emotion.",
    image: wedding,
    slug: "wedding"
  },

  {
    id: 4,
    category: "Bride",
    title: "THE BRIDAL ELEGANCE",
    desc: "Capturing every detail, emotion, and timeless beauty of the bride before she begins her new journey.",
    image: bride,
    slug: "bride"
  }
];

const StoryBlock = ({ item, index }) => (
  <motion.div
    className={`story-block ${index % 2 !== 0 ? "reverse" : ""}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="story-image">
      <img src={item.image} alt={item.title} />
    </div>

    <div className="story-text">

      <span className="story-category">
        {item.category}
      </span>

      <h2>{item.title}</h2>

      <p>{item.desc}</p>

      <div className="btn-group">
        <Link
          to={`/gallery/${item.slug}`}
          className="view-more"
        >
          View More
        </Link>
      </div>

    </div>
  </motion.div>
);

function Storytelling() {
  return (
    <section className="storytelling-section">

      <h2 className="section-title">
        Our Services
      </h2>

      {photographyData.map((item, index) => (
        <StoryBlock
          key={item.id}
          item={item}
          index={index}
        />
      ))}

    </section>
  );
}

export default Storytelling;