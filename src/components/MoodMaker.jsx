import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoodMaker() {
  const location = useLocation();
  const autoMood = location.state?.mood;

  const [mood, setMood] = useState(autoMood || "");

  return (
    <div>
      {mood && (
        <img
          src={`/moods/${mood}.jpg`}
          onError={(e) => (e.target.src = `/moods/${mood}.png`)}
          alt={mood}
        />
      )}
    </div>
  );
}

export default MoodMaker;