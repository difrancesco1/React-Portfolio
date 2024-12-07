import React from "react";
import InvestCloudExperience from "./ExperienceCard";
import References from "./References";
import '../../App.css';

const WorkContainer = () => {
  return (
    <div style={styles.container}>
      <div className="work-experience-cont" style={styles.cardContainer}>
        <InvestCloudExperience />
        <References />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    width: "100%",
  },
  cardContainer: {
    display: "flex", 
    gap: "1.25rem", 
    alignItems: "flex-start", 
    flexWrap: "nowrap", 
  },
};

export default WorkContainer;
