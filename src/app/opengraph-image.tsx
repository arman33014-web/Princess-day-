import { ImageResponse } from "next/og";
import { MISTY_PRINCESS } from "@/config/princesses";

export const alt = "Princess Dreamland | A Magical Fairytale For Misty";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #FFF7FA 0%, #FFE1EC 52%, #FFF2F7 100%)",
          padding: "48px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: "36px",
            border: "4px solid #E8C77B",
            boxShadow: "0 20px 60px rgba(167, 123, 145, 0.25)",
            padding: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 28px",
              borderRadius: "999px",
              backgroundColor: "#FFE1EC",
              border: "2px solid #E8C77B",
              color: "#68485A",
              fontSize: "24px",
              marginBottom: "28px",
            }}
          >
            International Princess Day • {MISTY_PRINCESS.occasionDate}
          </div>

          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              color: "#68485A",
              textAlign: "center",
              lineHeight: 1.15,
            }}
          >
            Princess Dreamland
          </div>

          <div
            style={{
              width: "180px",
              height: "4px",
              backgroundColor: "#E8C77B",
              borderRadius: "999px",
              margin: "28px 0",
            }}
          />

          <div
            style={{
              fontSize: "32px",
              color: "#7E576D",
              textAlign: "center",
              maxWidth: "820px",
            }}
          >
            {MISTY_PRINCESS.metadata.ogSubtitle}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
