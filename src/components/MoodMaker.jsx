import { useState } from "react";

function MoodMaker() {
  const [mood, setMood] = useState("");

  return (
    <div className="mood-maker">
      <select onChange={(e) => setMood(e.target.value)}>
        <option value="">Select mood</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="calm">Calm</option>
        <option value="energetic">Energetic</option>
      </select>
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