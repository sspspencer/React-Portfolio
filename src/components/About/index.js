import React from "react";
import coverImage from "../../assets/cover/hero.jpg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          I am a full-stack developer who is never afraid of hard work, strives
          for excellence and knows the importance of research & experimentation.
          I'm excited to help clear roadblocks and solve problems. I'm
          passionate about this work because I love being challenged and get a
          sense of satisfaction after solving a problem.
        </p>
      </div>
    </section>
  );
}

export default About;
