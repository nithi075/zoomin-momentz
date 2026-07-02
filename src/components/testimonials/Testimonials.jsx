/* =============================================
   Testimonials — 3 rotating sets of 3 reviews
   ============================================= */
import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    body: "Zoomin Momentz beautifully captured every emotion of our wedding. Every candid smile, every happy tear, and every precious moment was preserved perfectly. Looking through our album feels like reliving our special day all over again.",
    couple: "Harini + Karthik",
  },
  {
    id: 2,
    body: "From our engagement shoot to the wedding reception, the entire team was incredibly professional, creative, and friendly. They made us feel comfortable throughout the day, and the photographs exceeded every expectation we had.",
    couple: "Aarthi + Praveen",
  },
  {
    id: 3,
    body: "Choosing Zoomin Momentz was one of the best decisions we made for our wedding. The cinematic video, candid moments, and traditional portraits were all captured with perfection. We couldn't have asked for a better team.",
    couple: "Nivetha + Arjun",
  },
  {
    id: 4,
    body: "The team's dedication and attention to every detail truly impressed us. They never missed a single important moment and made our wedding memories timeless. The final album is simply breathtaking.",
    couple: "Priya + Vignesh",
  },
  {
    id: 5,
    body: "Our pre-wedding shoot was such a fun experience because of Zoomin Momentz. They guided us naturally, making every picture look effortless and elegant. The wedding highlights video still gives us goosebumps.",
    couple: "Divya + Sanjay",
  },
  {
    id: 6,
    body: "Every member of the team was patient, energetic, and passionate about their work. They blended into the celebrations while capturing genuine emotions that we'll treasure forever. Highly recommended for every couple.",
    couple: "Keerthana + Bharath",
  },
  {
    id: 7,
    body: "The quality of the photographs and videos was outstanding. Every frame looked cinematic and beautifully edited. Zoomin Momentz transformed our wedding memories into something truly magical.",
    couple: "Shalini + Dinesh",
  },
  {
    id: 8,
    body: "We received so many compliments from our friends and family after sharing our wedding teaser. The creativity, storytelling, and editing were absolutely exceptional. Thank you for making our dream wedding unforgettable.",
    couple: "Aishwarya + Naveen",
  },
  {
    id: 9,
    body: "Zoomin Momentz gave us memories that will last a lifetime. Their professionalism, creativity, and commitment to capturing every beautiful emotion made our wedding experience even more special. We highly recommend them.",
    couple: "Megha + Rahul",
  },
];

/* Group into pages of 3 */
const pages = [
  testimonials.slice(0, 3),
  testimonials.slice(3, 6),
  testimonials.slice(6, 9),
]

export default function Testimonials() {
  const [page, setPage] = useState(0)

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials__container">
        <span className="section-label" id="testimonials-heading">Testimonials</span>

        <div className="testimonials__grid">
          {pages[page].map((t) => (
            <article key={t.id} className="testimonial-card">
              {/* Quotation mark */}
              <span className="testimonial-card__quote" aria-hidden="true">"</span>
              <p className="testimonial-card__body">{t.body}</p>
              <footer className="testimonial-card__footer">
                <p className="testimonial-card__couple">{t.couple}</p>
              </footer>
            </article>
          ))}
        </div>

        {/* Page dots */}
        <div className="testimonials__dots" role="tablist" aria-label="Testimonial page">
          {pages.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot${i === page ? ' testimonials__dot--active' : ''}`}
              onClick={() => setPage(i)}
              role="tab"
              aria-selected={i === page}
              aria-label={`Testimonials page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
