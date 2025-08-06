import '../assets/TestimonialsSection.css';

import svgphoto1 from'../assets/svg/svgphoto1.svg';
import svgphoto2 from'../assets/svg/svgphoto2.svg';
import svgphoto3 from'../assets/svg/svgphoto3.svg';
import svgnjoma from'../assets/svg/svgnjoma.svg'; 
import svgkhatlfogani from'../assets/svg/svgkhatlfogani.svg';
import svglkhatltahtani from'../assets/svg/svglkhatltahtani.svg';

function TestimonialsSection() {

  const testimonials = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi sa eu. Fusce a iaculis leo. Maecenas tempor hendrerit cursus.",
      name: "Berkane Mr",
      photo: svgphoto2, 
      rating: 5, 
      theme: 'light'
    },
    {
      id: 2,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi sa eu. Fusce a iaculis leo. Maecenas tempor hendrerit cursus.",
      name: "Berkane Mr",
      photo: svgphoto1, 
      rating: 5, 
      theme: 'dark'
    },
    {
      id: 3,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi sa eu. Fusce a iaculis leo. Maecenas tempor hendrerit cursus.",
      name: "Berkane Mr",
      photo: svgphoto3, 
      rating: 5, 
      theme: 'light' 
    },
  ];

    const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className="star"
       
          style={{ color: i < rating ? 'gold' : '#ccc' }}
        >
          &#9733;
        </span>
      );
    }
    return <div className="rating">{stars}</div>;
  };

  return (
    <section className="testimonials-section">
      <div className="section-header">
     
        <img src={svgkhatlfogani} alt="Decorative line above title" />
        <h2>Découvrez l'avis de nos clients</h2> 
        <img src={svglkhatltahtani} alt="Decorative line below title" />
      </div>

      <div className="testimonials-carousel-container">
       
        <button className="carousel-arrow left-arrow">&#8249;</button> 

        <div className="testimonials-wrapper">
         
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={`testimonial-card ${testimonial.theme}`}>
              <div className="quote-icon">❝</div>
              <p className="testimonial-quote">{testimonial.quote}</p> 
              <div className="separator"></div> 
              <div className="client-info">
               
                <img src={testimonial.photo} alt={`Photo of ${testimonial.name}`} className="client-photo" />

                <div className="client-details">
                  <span className="client-name">{testimonial.name}</span> 
                 
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

     
        <button className="carousel-arrow right-arrow">&#8250;</button> 
      </div>
    </section>
  );
}

export default TestimonialsSection;