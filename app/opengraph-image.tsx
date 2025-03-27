import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "MuscleCode.io - AI-Powered Learning Platform for Developers";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(to bottom, #000000, #111827)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#0ea5e9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M13 3L16.293 6.293C16.923 6.923 17.6189 7.5 19.5 7.5C20.3284 7.5 21 8.17157 21 9V12C21 12.8284 20.3284 13.5 19.5 13.5H19.4647M11 21L7.70711 17.7071C7.07714 17.0771 6.38122 16.5 4.5 16.5C3.67157 16.5 3 15.8284 3 15V12C3 11.1716 3.67157 10.5 4.5 10.5H4.53527"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "52px",
              background: "linear-gradient(to right, #0ea5e9, #93c5fd)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            MuscleCode.io
          </div>
        </div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "58px",
            textAlign: "center",
            color: "white",
            marginBottom: "24px",
            maxWidth: "80%",
          }}
        >
          Train your coding muscles with AI
        </div>
        <div
          style={{
            fontSize: "28px",
            textAlign: "center",
            color: "#9ca3af",
            maxWidth: "70%",
          }}
        >
          Become a production-ready developer faster with personalized AI
          learning
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
