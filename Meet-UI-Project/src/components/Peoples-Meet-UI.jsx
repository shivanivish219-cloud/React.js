import React, { useContext, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "../Context/ThemeContext";
// import { useContext } from "react";

// ---- 1. Dummy data (baad me ye API se aayega) ----
const peopleData = [
  { id: 1, name: "Shivani Vishwakarma (You)", role: "student" },
  { id: 2, name: "Abhishek Garg", role: "student" },
  { id: 3, name: "Almas Chamadiya", role: "teacher" },
  { id: 4, name: "ANKIT RAJPUT", role: "student" },
  { id: 5, name: "aviral jain", role: "student" },
  { id: 6, name: "Ayush Gupta", role: "teacher" },
  { id: 7, name: "Deepanshu Garg", role: "student" },
  { id: 8, name: "Pinky Thawani", role: "teacher" },
  { id: 9, name: "Prakash", role: "student" },
  { id: 10, name: "Pranav Khare", role: "student" },
];

// ---- 2. Categories config (yaha se naye roles add kar sakte ho) ----
const categories = [
  { key: "all", label: "All" },
  { key: "teacher", label: "Teacher" },
  { key: "student", label: "Student" },
];

function getInitial(name) {
  const clean = name.replace(/\(You\)/i, "").trim();
  return clean.charAt(0).toUpperCase();
}

export default function PeoplePanel() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  // useSearchParams se URL ka ?role=teacher read aur update hota hai
  const [searchParams, setSearchParams] = useSearchParams();

  // agar URL me ?role nahi hai, default "all" maan lo
  const activeRole = searchParams.get("role") || "all";
  const searchText = searchParams.get("q") || "";

  // ---- 3. Tab click handler -> URL update karega ----
  const handleRoleChange = (roleKey) => {
    const params = new URLSearchParams(searchParams);

    if (roleKey === "all") {
      params.delete("role"); // "all" ke liye URL clean rakho (?role=all nahi)
    } else {
      params.set("role", roleKey);
    }
    setSearchParams(params);
  };

  // ---- 4. Search input handler -> URL me ?q= bhi update hoga ----
  const handleSearchChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    setSearchParams(params);
  };

  // ---- 5. Filtering logic ----
  const filteredPeople = useMemo(() => {
    return peopleData.filter((person) => {
      const roleMatch = activeRole === "all" || person.role === activeRole;
      const searchMatch = person.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return roleMatch && searchMatch;
    });
  }, [activeRole, searchText]);

  return (
    <div className="people-panel">
      <div className="people-panel__header">
        <h3>People</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button aria-label="Close" className="people-panel__close">
            ×
          </button>
        </div>
      </div>

      <input
        type="text"
        className="people-panel__search"
        placeholder="Search for people"
        value={searchText}
        onChange={handleSearchChange}
      />

      {/* ---- Category tabs ---- */}
      <div className="people-panel__tabs">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={
              "people-panel__tab" +
              (activeRole === cat.key ? " people-panel__tab--active" : "")
            }
            onClick={() => handleRoleChange(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p className="people-panel__section-label">In the meeting</p>
      <div className="people-panel__count-row">
        <span>Contributors</span>
        <span>{filteredPeople.length}</span>
      </div>

      <div className="people-panel__list">
        {filteredPeople.length === 0 && (
          <p className="people-panel__empty">No people found</p>
        )}

        {filteredPeople.map((person) => (
          <div key={person.id} className="people-panel__row">
            <div className="people-panel__avatar">
              {getInitial(person.name)}
            </div>
            <div className="people-panel__info">
              <p className="people-panel__name">{person.name}</p>
              <p className="people-panel__role">
                {person.role === "teacher" ? "Teacher" : "Student"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
