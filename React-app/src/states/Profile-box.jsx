const ProfileCard = ({ name, age, email }) => {
  return (
    <div
      style={{
        width: "360px",
        background: "#fff",
        border: "1px solid #eef2f7",
        borderRadius: "20px",
        padding: "18px 20px",
        boxShadow:
          "0 1px 2px rgba(16,24,40,0.04), 0 8px 24px rgba(16,24,40,0.06)",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "16px",
            flexShrink: 0,
          }}
        >
          {name
            ?.split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </div>

        {/* User Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              margin: 0,
              color: "#111827",
              fontSize: "17px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            {name}
          </h3>

          <p
            style={{
              margin: "3px 0 0",
              color: "#6b7280",
              fontSize: "13px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {email}
          </p>
        </div>

        {/* Age Badge */}
        <div
          style={{
            padding: "8px 12px",
            borderRadius: "999px",
            background: "#f8fafc",
            border: "1px solid #e5e7eb",
            fontSize: "13px",
            fontWeight: 600,
            color: "#475569",
          }}
        >
          {age} yrs
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;