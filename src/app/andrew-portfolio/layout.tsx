// app/layout.tsx
export const metadata = {
  title: "Andrew Anderson | Email Developer Portfolio",
  description:
    "Email Developer specializing in responsive HTML email templates, CRM systems, and campaign troubleshooting. Portfolio featuring real-world email builds and case studies.",
};

export default function Home1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
