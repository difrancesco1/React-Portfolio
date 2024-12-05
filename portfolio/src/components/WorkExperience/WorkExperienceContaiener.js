import React from "react";
import InvestCloudExperience from "./ExperienceCard";
import References from "./References";

const WorkContainer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.cardContainer}>
        <InvestCloudExperience />
        <References />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center", // Center the card container horizontally
    padding: "20px",
    width: "100%", // Ensure container spans the parent width
  },
  cardContainer: {
    display: "flex", // Horizontal layout for cards
    gap: "1.25rem", // Gap between ExperienceCard and References
    alignItems: "flex-start", // Align items at the top
    flexWrap: "nowrap", // Prevent wrapping, ensuring full width of children
  },
};

export default WorkContainer;
