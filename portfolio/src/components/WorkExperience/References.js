import React from "react";
import '../../App.css';

const referencesData = [
  {
    name: "Wolfie Frank",
    position: "Head of Product - Trading",
    company: "InvestCloud",
    email: "wfrank@gmail.com",
    linkedin: "https://www.linkedin.com/in/wolfiefrank",
  },
  {
    name: "Sam Semchuck",
    position: "Lead Frontend Architect",
    company: "InvestCloud",
    email: "ssemchuck@gmail.com",
    linkedin: "https://www.linkedin.com/in/sam-semchuck-57018513",
  },
  {
    name: "Adrian Craighead",
    position: "Senior Software Engineer",
    company: "InvestCloud",
    email: "adrian66craig@gmail.com",
    linkedin: "https://www.linkedin.com/in/adriancraighead",
  },
  {
    name: "Austin Pierce",
    position: "Product Delivery Manager",
    company: "InvestCloud",
    email: "austinentpierce@gmail.com",
    linkedin: "https://www.linkedin.com/in/austin-pierce-5017b0220",
  },
  {
    name: "Matthew Walton",
    position: "Software Engineer",
    company: "Walton Brothers",
    email: "matthew2738@gmail.com",
    linkedin: "https://www.linkedin.com/in/matthew-walton-60128929a",
  },
];

const References = () => {
  return (
    <div className="ref-card" style={styles.card}>
      <h2 style={styles.title}>References</h2>
      <ul className="list-refs" style={styles.list}>
        {referencesData.map((reference, index) => (
          <li
            key={index}
            style={{
              ...styles.listItem,
              borderBottom: index === referencesData.length - 1 ? "none" : "1px solid #ddd", // Remove border for the last item
            }}
          >
            <p style={styles.name}>{reference.name}</p>
            <p style={styles.details}>
              {reference.position} at {reference.company}
            </p>
            <p style={styles.details}>
              <a href={`mailto:${reference.email}`} style={styles.link}>
                {reference.email}
              </a>
            </p>
            <p style={styles.details}>
              <a
                href={reference.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                LinkedIn Profile
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  card: {
    flex: "0 0 auto", // Prevent Flexbox from overriding width
    maxWidth: "400px", // Example width for References card
    height: "auto", // Allow height to adjust to content

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
  },
  title: {
    textAlign: "center",
    opacity: 1,
    color: "#CACACA",
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: "2rem",
    margin: 0,
    paddingBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: "16px",
    color: "#afafaf",
    borderBottom: "1px solid #ddd", 
    paddingBottom: "8px",
  },
  name: {
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  details: {
    fontSize: "0.9rem",
    margin: "4px 0",
  },
  link: {
    color: "inherit", 
    textDecoration: "none", 
    cursor: "pointer",
  },
};

export default References;
