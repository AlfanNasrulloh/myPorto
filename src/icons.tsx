// Wrapper: bentuk squircle iOS
function IosIcon({ size = 56, className = "", style, children }) {
    return (
    <div
        className={`flex items-center justify-center shadow-lg shadow-zinc-400/30 ${className}`}
        style={{ width: size, height: size, borderRadius: "22.5%", ...style }}
    >
        {children}
    </div>
    );
}

export function LinkedInIcon({ size }) {
    return (
    <IosIcon size={size} style={{ background: "#0A66C2" }}>
        <svg viewBox="0 0 24 24" className="w-3/5 h-3/5 fill-white">
        <rect x="3" y="9" width="4" height="11" />
        <circle cx="5" cy="5" r="2.2" />
        <path d="M10 9h3.8v1.7c.6-1.1 1.9-2 3.7-2 3.4 0 4.5 2.1 4.5 5.3V20h-4v-5.2c0-1.4-.3-2.6-1.9-2.6-1.7 0-2.1 1.2-2.1 2.7V20h-4z" />
        </svg>
    </IosIcon>
    );
}

export function SpotifyIcon({ size }) {
    return (
    <IosIcon size={size} style={{ background: "#000" }}>
        <svg viewBox="0 0 24 24" className="w-3/5 h-3/5">
        <circle cx="12" cy="12" r="11" fill="#14e645" />
        <g fill="none" stroke="#000" strokeLinecap="round">
            <path d="M6 9.3Q12 7.2 18.2 10.2" strokeWidth="1.9" />
            <path d="M6.8 12.6Q12 11 17.4 13.4" strokeWidth="1.6" />
            <path d="M7.5 15.6Q12 14.4 16.5 16.2" strokeWidth="1.3" />
        </g>
        </svg>
    </IosIcon>
    );
}

export function PhotosIcon({ size }) {
    const petals = [
    ["#FBBF24", 0], ["#84CC16", 45], ["#22C55E", 90], ["#0EA5E9", 135],
    ["#6366F1", 180], ["#A855F7", 225], ["#EC4899", 270], ["#F97316", 315],
    ];
    return (
    <IosIcon size={size} style={{ background: "#fff" }} className="border border-zinc-200">
        <svg viewBox="0 0 24 24" className="w-3/4 h-3/4" style={{ isolation: "isolate" }}>
        {petals.map(([color, deg]) => (
            <ellipse
            key={deg}
            cx="12" cy="6.2" rx="3" ry="5"
            fill={color}
            transform={`rotate(${deg} 12 12)`}
            style={{ mixBlendMode: "multiply" }}
        />
        ))}
        </svg>
    </IosIcon>
    );
}

export function PodcastsIcon({ size }) {
    return (
    <IosIcon size={size} style={{ background: "linear-gradient(180deg, #D56EFF 0%, #872EC4 100%)" }}>
    <svg viewBox="0 0 24 24" className="w-3/5 h-3/5">
        <g fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round">
            <path d="M8.61 6.61A4.8 4.8 0 0 0 8.61 13.39" />
            <path d="M15.39 6.61A4.8 4.8 0 0 1 15.39 13.39" />
            <path d="M6.34 4.34A8 8 0 0 0 6.34 15.66" />
            <path d="M17.66 4.34A8 8 0 0 1 17.66 15.66" />
        </g>
        <circle cx="12" cy="10" r="2.3" fill="#fff" />
        <path d="M12 13.4c-1.3 0-2.1.9-2 1.9l.5 4.3a1.5 1.5 0 0 0 3 0l.5-4.3c.1-1-.7-1.9-2-1.9z" fill="#fff"
        />
    </svg>
    </IosIcon>
    );
}