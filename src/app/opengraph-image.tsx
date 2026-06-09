import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Christopher Nguyen — Backend & Application Security Engineer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0d11",
          padding: "72px",
          color: "#e9eaed",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background: "#e9eaed",
              color: "#0b0d11",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            CN
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 3,
              color: "#93a6ff",
            }}
          >
            APPLICATION SECURITY · BACKEND · SOFTWARE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
            Christopher Nguyen
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#9aa0ab",
              maxWidth: 940,
              lineHeight: 1.35,
            }}
          >
            Backend engineer with security experience — building secure web
            applications, automation workflows, and data-driven tools.
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, fontSize: 22, color: "#9aa0ab" }}>
          <span>github.com/{siteConfig.githubHandle}</span>
          <span>linkedin.com/in/{siteConfig.linkedinHandle}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
