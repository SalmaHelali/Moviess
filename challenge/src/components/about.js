import img from '../images/John-Doe.jpg'

function Abb({name}) {
    return (
 
<section id="about-me">
      <h1>
        Hello, my name is
        <span class="rotate text-important">{name}</span>,<br />
        and i make horrible websites.
      </h1>
      <img class="avatar" src={img} alt="jhon-doe" />
    </section>
      
    );
  }
  
  export default Abb;



