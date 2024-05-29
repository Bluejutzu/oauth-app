import "dotenv";
import { redirect } from "next/navigation";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: Request) {
  const DISCORD_ENDPOINT = "https://discord.com/api/v10";
  const CLIENT_ID = process.env.DISCORD_CLIENT_ID!;
  const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET!;
  const REDIRECT_URI = process.env.DISCORD_REDIRECT_URI!;

  const formData = await req.formData();
  const code = formData.get("code") as string;

  if (!code) {
    redirect("http://localhost:3000/error/no-code");
  }

  const oauthRes = await fetch(`${DISCORD_ENDPOINT!}/oauth2/token`, {
    method: "POST",
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: REDIRECT_URI,
      code: code,
    }).toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (!oauthRes.ok) {
    return NextResponse.json({
      error: `Failed with status code ${oauthRes.status} ${oauthRes.statusText}`,
    });
  }

  const oauthResJson = await oauthRes.json();
  console.log(oauthResJson);
  return NextResponse.json(oauthResJson);
}
