import React, { Fragment, useState } from "react";
import AltTitle from "../components/AltTitle";
import AboutCard from "../components/about/AboutCard";
import AboutSectionsTitle from "../components/about/AboutSectionsTitle";
import { faBolt, faBook, faBriefcase, faCrown, faLandMineOn, faMasksTheater, faMedal, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import JoinSection from "../components/about/JoinSection";

function AboutUs() {
  const arr = [1, 1, 1, 1];
  const [achieve, setAchieve] = useState([
    {
      icon: faCrown,
      head: "Trusted by Thousands",
      text: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals",
    },
    {
      icon: faMedal,
      head: "Award-Winning Courses",
      text: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
    },
    {
      icon: faMasksTheater,
      head: "Positive Student Feedback",
      text: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
    },
    {
      icon: faBolt,
      head: "Industry Partnerships",
      text: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
    },
  ]);

  const [goals, setGoals] = useState([
    {
      icon: faBriefcase,
      head: "Provide Practical Skills",
      text: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals",
    },
    {
      icon: faBook,
      head: "Foster Creative Problem-Solving",
      text: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
    },
    {
      icon: faPuzzlePiece,
      head: "Promote Collaboration and Community",
      text: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together",
    },
    {
      icon: faLandMineOn,
      head: "Stay Ahead of the Curve",
      text: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills",
    },
  ]);
  return (
    <Fragment>
      <AltTitle
        title="About Academy"
        desc="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. 
        We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed 
        in the ever- evolving digital landscape."
      />
      <section className="py-16">
        <AboutSectionsTitle
          title="Achievements"
          desc="Our commitment to excellence has led us to achieve significant
        milestones along our journey. Here are some of our notable achievements"
        />
        <div className="py-10 grid md:grid-cols-2 gap-5">
          {achieve.map(({icon, head, text}, i) => (
            <AboutCard icon={icon} head={head} text={text} key={i} />
          ))}
        </div>
      </section>
      <section className="py-16">
        <AboutSectionsTitle
          title="Our Goals"
          desc="At Academy, our goal is to empower individuals from all backgrounds to thrive in the world of design and development.
           We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact."
        />
        <div className="py-10 grid md:grid-cols-2 gap-5">
          {goals.map(({icon, head, text}, i) => (
            <AboutCard icon={icon} head={head} text={text} key={i} />
          ))}
        </div>
      </section>
      <JoinSection/>
    </Fragment>
  );
}

export default AboutUs;
