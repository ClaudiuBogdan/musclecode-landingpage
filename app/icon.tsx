import { ImageResponse } from "next/og";

export const runtime = "edge";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 32, height: 32 },
      id: "icon-32",
    },
    {
      contentType: "image/png",
      size: { width: 16, height: 16 },
      id: "icon-16",
    },
    {
      contentType: "image/png",
      size: { width: 64, height: 64 },
      id: "icon-64",
    },
  ];
}

export default function Icon({ id }: { id: string }) {
  // Choose size based on id
  const size = id === "icon-16" ? 16 : id === "icon-32" ? 32 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0ea5e9",
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: size * 0.5,
          fontWeight: "bold",
        }}
      >
        MC
      </div>
    ),
    { width: size, height: size }
  );
}
