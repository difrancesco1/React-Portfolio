import React from "react";
import spotlightImage from "../../images/spotlight3.png";

const InvestCloudExperience = () => {
  const experienceData = {
    title: "Frontend Developer at InvestCloud",
    dates: "January 2020 - November 2023",
    jobDescription: `Elevating from Junior to Mid-level Frontend Developer, I developed and
      maintained SaaS trading products on the Product Team including a stock
      trading portal, admin portal, and order log, using HTML, CSS, and JavaScript.
      While on the ADA team, I collaborated with the QA team to enhance testing
      processes and contributed to ADA compliance initiatives.`,
    keyProjects: [
      "Trading Platform V2: Improved performance and enhanced user experience.",
      "Stock Trading Portal: Built responsive designs with seamless functionality.",
      "Order Log System: Streamlined admin workflows for stock transactions.",
    ],
    responsibilities: [
      "Developed and tested HTML, CSS, JavaScript to meet accessibility and web browser standards for websites.",
      "Designed CSS templates for use in all pages on the website working with flex, grid, positioning, text, border, margin, padding, and table.",
      "Worked on responsive development for ISOMORPHIC responsive websites that could be served to desktop, tablets, and mobile users.",
      "Created Unit Testing using JavaScript for regressions for the UI after fixing issues which are reported by Testing Teams.",
      "Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on an everyday basis.",
    ],
    techUsed: ["HTML", "CSS", "JavaScript", "React", "Git", "Agile Development"],
  };

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img
          src={spotlightImage}
          alt="Spotlight"
          style={styles.image}
        />
      </div>
      <h2 style={styles.title}>{experienceData.title}</h2>
      <p style={styles.dates}>{experienceData.dates}</p>
      <p style={styles.description}>{experienceData.jobDescription}</p>
      <h3 style={styles.subtitle}>Key Projects:</h3>
      <ul style={styles.list}>
        {experienceData.keyProjects.map((project, index) => (
          <li key={index} style={styles.listItem}>
            {project}
          </li>
        ))}
      </ul>
      <h3 style={styles.subtitle}>Responsibilities:</h3>
      <ul style={styles.list}>
        {experienceData.responsibilities.map((responsibility, index) => (
          <li key={index} style={styles.listItem}>
            {responsibility}
          </li>
        ))}
      </ul>
      <h3 style={styles.subtitle}>Tech Used:</h3>
      <p style={styles.techUsed}>{experienceData.techUsed.join(", ")}</p>
    </div>
  );
};

const styles = {
  card: {
    width: "793px",
    height: "713px",
    border: "1px solid #e5e7eb",
    borderTopColor: "rgb(229, 231, 235)",
    borderRightColor: "rgb(229, 231, 235)",
    borderBottomColor: "rgb(229, 231, 235)",
    borderLeftColor: "rgb(229, 231, 235)",
    borderRadius: "12px",
    padding: "20px",
    backgroundColor: "rgb(14, 14, 16)",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 8px",
    "--tw-border-opacity": 1,
    borderColor: "rgb(28 28 33 / var(--tw-border-opacity))",
    position: "relative",
    overflow: "hidden",
  },
  imageContainer: {
    top: 0,
    right: 0,
    position: "absolute",
    width: "100%",
    height: "24rem",
  },
  image: {
    objectFit: "cover",
    borderRadius: ".75rem",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: 700,
    marginBottom: "10px",
    color: "#CACACA",
  },
  dates: {
    fontSize: "1rem",
    color: "#CACACA",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1rem",
    color: "#CACACA",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  subtitle: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginBottom: "10px",
    color: "#CACACA",
  },
  list: {
    listStyle: "disc",
    paddingLeft: "20px",
    marginBottom: "20px",
    color: "#CACACA",
  },
  listItem: {
    fontSize: "1rem",
    marginBottom: "10px",
  },
  techUsed: {
    fontSize: "1rem",
    color: "#CACACA",
    lineHeight: "1.5",
  },
};

export default InvestCloudExperience;