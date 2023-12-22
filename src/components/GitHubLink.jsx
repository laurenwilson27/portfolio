import React from "react";
import { Link } from "react-router-dom";

const GitHubLink = ({ repo }) => {
  return (
    <Link
      to={repo}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="tag gitHub">
        <span className="tagText">View on GitHub</span>
      </div>
    </Link>
  );
};

export default GitHubLink;
