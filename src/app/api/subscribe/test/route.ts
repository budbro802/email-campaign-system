export async function GET() {
  console.log("TEST ENV:", process.env.BREVO_API_KEY);

  return Response.json({
    key: process.env.BREVO_API_KEY || "undefined",
  });
}
