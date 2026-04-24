// app/layout.tsx
export const metadata = {
  title: "Email Campaign System | Andrew Anderson",
  description:
    "A marketing campaign project demonstrating landing page development, lead capture, API integration, and automated email workflows using Next.js.",
};

export default function Home1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
