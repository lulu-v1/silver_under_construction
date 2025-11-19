// app/under-construction/page.jsx (Next.js 13+ with App Router)

export default function UnderConstruction() {
    return (
        <div style={{
            margin: 0,
            padding: 0,
            background: "black",
            fontFamily: "Candara, Arial, sans-serif",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            overflow: "hidden"
        }}>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "20px"
            }}>
                <img
                    src={"/silverPalace_logo_gris-1280x627.png"}
                    alt="Silver Palace Logo"
                    style={{ maxWidth: "500px", margin: "50px", width: "80%" }}
                />
                <p style={{ fontSize: "1.4rem", marginTop: "10px", color: "#f3f3f3" }}>
                    Ce site est actuellement en construction...<br />
                    Reviens très vite pour découvrir notre univers.
                </p>

                {/* Loading Bar */}
                <div style={{
                    width: "80%",
                    maxWidth: "400px",
                    height: "10px",
                    background: "#333",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "20px"
                }}>
                    <div className="loading-bar" style={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, #888, #fff, #888)",
                        backgroundSize: "200% 100%",
                        animation: "loading 2s infinite"
                    }}></div>
                </div>

                <style>{`
                    @keyframes loading {
                        0% { background-position: 200% 0; }
                        100% { background-position: -200% 0; }
                    }
                `}</style>
            </div>

        </div>
    );
}
