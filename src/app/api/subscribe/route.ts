export async function POST(req: Request) {
  try {
    const { firstName, email } = await req.json();

    console.log(firstName, email); // ✅ verify input

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY as string,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: firstName,
        },
        listIds: [3], // 🔥 replace this
        updateEnabled: true,
      }),
    });

    const data = await response.json();
    console.log("BREVO RESPONSE:", data); // ✅ see Brevo response

    return Response.json(
      { success: response.ok, data },
      { status: response.ok ? 200 : 500 },
    );
  } catch (error) {
    console.error("ROUTE ERROR:", error);
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 },
    );
  }
}
