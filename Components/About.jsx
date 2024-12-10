import React from 'react';

function toggleText(sectionId) {
  const dots = document.querySelector(`#${sectionId} .dots`);
  const moreText = document.querySelector(`#${sectionId} .more`);
  const btnText = document.querySelector(`#${sectionId} .myBtn`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

const About = () => {
  return (
    <div id="aboutSection">
      <h2>About Us</h2>
      <div className="aboutWrapper">
        {/* Our Story Section */}
        <div className="ourStory" id="storySection">
          <h1>Our Story</h1>
          <p>
            At Awake, we believe great coff
            <span className="dots">...</span>
            <span className="more">
              ee brings people together and sparks new ideas. What began as a passion project has grown into a vibrant coffee house, where every cup serves as an invitation to connect. From sourcing the finest beans to creating a welcoming space, our story is built on a love for quality coffee and fostering community.
            </span>
          </p>
          <button
            onClick={() => toggleText("storySection")}
            className="myBtn"
          >
            Read more
          </button>
        </div>

        {/* About Image */}
        <img src="./assets/about.png" alt="about" className="aboutImage" />

        {/* Our Vision Section */}
        <div className="ourVision" id="visionSection">
          <h1>Our Vision</h1>
          <p>
            Our vision at Awake is to trans
            <span className="dots">...</span>
            <span className="more">
              form the coffee experience into something more meaningful. We aim to be a place where creativity thrives, conversations flow, and people feel at home. Through exceptional coffee and service, we strive to inspire connection and bring joy to every moment shared over a cup.
            </span>
          </p>
          <button
            onClick={() => toggleText("visionSection")}
            className="myBtn"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
