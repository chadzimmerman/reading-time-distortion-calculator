import { useState } from "react";

type LanguageLevel = "native" | "c1" | "b2" | "b1" | "a2" | "a1" | "none";
type DifficultyLevel = "a1" | "a2" | "b1" | "b2" | "academic" | "philosophical";
type FocusLevel = "deep" | "normal" | "distracted" | "exhausted";

const BASE_TIME_PER_PAGE = 1;

const languageMultiplier: Record<LanguageLevel, number> = {
  native: 1,
  c1: 1.5,
  b2: 2.5,
  b1: 4,
  a2: 6,
  a1: 10,
  none: 20,
};

const difficultyMultiplier: Record<DifficultyLevel, number> = {
  a1: 1,
  a2: 1.5,
  b1: 2,
  b2: 3,
  academic: 4,
  philosophical: 5,
};

const focusMultiplier: Record<FocusLevel, number> = {
  deep: 0.8,
  normal: 1,
  distracted: 1.5,
  exhausted: 2,
};

export default function App() {
  const [pages, setPages] = useState<number>(10);
  const [language, setLanguage] = useState<LanguageLevel>("b2");
  const [difficulty, setDifficulty] = useState<DifficultyLevel>("b2");
  const [focus, setFocus] = useState<FocusLevel>("normal");
  const [showResult, setShowResult] = useState(false);

  const calculateTime = () => {
    const timePerPage =
      BASE_TIME_PER_PAGE *
      languageMultiplier[language] *
      difficultyMultiplier[difficulty] *
      focusMultiplier[focus];
    return Math.round(pages * timePerPage);
  };

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} minutes`;
    const hours = Math.floor(minutes / 60);
    const remaining = minutes % 60;
    return `${hours}h ${remaining}m`;
  };

  const totalMinutes = calculateTime();

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>[ SYSTEM.READER_CALC ]</h1>
          <div style={styles.scanline}></div>
        </header>

        <div style={styles.field}>
          <label style={styles.label}>&gt; INPUT_PAGES:</label>
          <input
            type="number"
            min={1}
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>&gt; LANG_PROXIMITY:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as LanguageLevel)}
            style={styles.input}
          >
            <option value="native">NATIVE / C2</option>
            <option value="c1">C1</option>
            <option value="b2">B2</option>
            <option value="b1">B1</option>
            <option value="a2">A2</option>
            <option value="a1">A1</option>
            <option value="none">UNKNOWN_ORIGIN</option>
          </select>
        </div>

        <div style={styles.field}>
          <label style={styles.label}>&gt; COMPLEXITY_INDEX:</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as DifficultyLevel)}
            style={styles.input}
          >
            <option value="a1">BASIC / A1</option>
            <option value="a2">SIMPLE / A2</option>
            <option value="b1">MODERATE / B1</option>
            <option value="b2">ADVANCED / B2</option>
            <option value="academic">ACADEMIC</option>
            <option value="philosophical">DEEP_THEORY</option>
          </select>
        </div>

        <div style={styles.field}>
          <label style={styles.label}>&gt; NEURAL_FOCUS:</label>
          <select
            value={focus}
            onChange={(e) => setFocus(e.target.value as FocusLevel)}
            style={styles.input}
          >
            <option value="deep">DEEP_SYNC</option>
            <option value="normal">STABLE</option>
            <option value="distracted">INTERFERENCE</option>
            <option value="exhausted">CRITICAL_FATIGUE</option>
          </select>
        </div>

        <button
          style={styles.button}
          onClick={() => setShowResult(true)}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#003300")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "black")
          }
        >
          EXECUTE_CALCULATION
        </button>

        {showResult && (
          <div style={styles.result}>
            <p style={{ margin: 0 }}>
              ESTIMATED_TIME:{" "}
              <span style={styles.highlight}>{formatTime(totalMinutes)}</span>
            </p>
            <p style={{ fontSize: "0.8rem", marginTop: "10px", opacity: 0.7 }}>
              STATUS: Reality distortion confirmed.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "#050505",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  container: {
    backgroundColor: "black",
    color: "#00ff00",
    fontFamily: "'Courier New', Courier, monospace",
    padding: "2.5rem",
    border: "2px solid #00ff00",
    maxWidth: "450px",
    width: "100%",
    boxShadow: "0 0 15px #00ff0066, inset 0 0 5px #00ff0044",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    marginBottom: "2.5rem",
    borderBottom: "1px solid #00ff00",
    paddingBottom: "1rem",
  },
  title: {
    fontSize: "1.5rem",
    textAlign: "center",
    margin: 0,
    textShadow: "0 0 8px #00ff00",
    letterSpacing: "2px",
  },
  label: {
    fontSize: "0.9rem",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1.5rem",
  },
  input: {
    backgroundColor: "transparent",
    color: "#00ff00",
    border: "1px solid #00ff00",
    padding: "0.75rem",
    outline: "none",
    fontSize: "1rem",
    textTransform: "uppercase",
  },
  button: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "black",
    color: "#00ff00",
    border: "2px solid #00ff00",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s all",
    boxShadow: "0 0 10px #00ff0044",
    marginTop: "1rem",
  },
  result: {
    marginTop: "2rem",
    padding: "1.5rem",
    border: "1px dashed #00ff00",
    textAlign: "center",
    backgroundColor: "#001100",
  },
  highlight: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    textShadow: "0 0 10px #00ff00",
    display: "block",
    marginTop: "5px",
  },
  scanline: {
    width: "100%",
    height: "2px",
    backgroundColor: "rgba(0, 255, 0, 0.1)",
    position: "absolute",
    top: 0,
    left: 0,
    pointerEvents: "none",
  },
};
