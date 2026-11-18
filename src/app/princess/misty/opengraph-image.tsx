import { ImageResponse } from "next/og";
import { MISTY_PRINCESS } from "@/config/princesses";

export const alt = MISTY_PRINCESS.metadata.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function PrincessMistyOpenGraphImage() {
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
            "linear-gradient(135deg, #FFF7FA 0%, #FFE1EC 55%, #FFF2F7 100%)",
          padding: "46px",
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
              marginBottom: "24px",
            }}
          >
            Princess Dreamland • {MISTY_PRINCESS.occasionDate}
          </div>

          <div
            style={{
              fontSize: "78px",
              fontWeight: 700,
              color: "#68485A",
              textAlign: "center",
              lineHeight: 1.12,
            }}
          >
            {MISTY_PRINCESS.displayName}
          </div>

          <div
            style={{
              fontSize: "28px",
              color: "#825C71",
              marginTop: "12px",
              textAlign: "center",
            }}
          >
            {MISTY_PRINCESS.royalTitle}
          </div>

          <div
            style={{
              width: "180px",
              height: "4px",
              backgroundColor: MISTY_PRINCESS.accentColors.primaryPink,
              borderRadius: "999px",
              margin: "26px 0",
            }}
          />

          <div
            style={{
              fontSize: "30px",
              color: "#68485A",
              textAlign: "center",
              maxWidth: "860px",
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
