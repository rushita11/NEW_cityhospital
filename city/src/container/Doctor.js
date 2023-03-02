import React from 'react';
import List from '../Component/List/List'
const data = [
  {
    id: 101,
    image: "../assets/img/doctors/doctors-1.jpg",
    name: "Atha Smith",
    position: "Chief Medical Officer",
    desc: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.",
    social: {
      facebook: "https://facebook.com/",
      insta: "https://www.instagram.com/",
      twitter: "https://twitter.com/",
      linkin: "https://www.linkedin.com/",
    }
  },
  {
    id: 102,
    image: "../assets/img/doctors/doctors-2.jpg",
    name: "Atha Smith",
    position: "Anesthesiologist",
    desc: "Aenean ac turpis ante. Mauris velit sapien.",
    social: {
      facebook: "https://facebook.com/",
      insta: "https://www.instagram.com/",
      twitter: "https://twitter.com/",
      linkin: "https://www.linkedin.com/",
    }
  },
  {
    id: 103,
    image: "../assets/img/doctors/doctors-3.jpg",
    name: " Umika Loha",
    position: "Cardiology",
    desc: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.",
    social: {
      facebook: "https://facebook.com/",
      insta: "https://www.instagram.com/",
      twitter: "https://twitter.com/",
      linkin: "https://www.linkedin.com/",
    }
  },
  {
    id: 104,
    image: "../assets/img/doctors/doctors-1.jpg",
    name: "Atha Smith",
    position: "Chief Medical Officer",
    desc: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.",
    social: {
      facebook: "https://facebook.com/",
      insta: "https://www.instagram.com/",
      twitter: "https://twitter.com/",
      linkin: "https://www.linkedin.com/",
    },

  }
]

function Doctor(props) {
  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <div className="section-title">
          <h2>Doctors</h2>
          <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
        </div>
     
        <List listdata={data} />
      </div>
    </section>

  );
}

export default Doctor;