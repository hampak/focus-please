import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET() {
  const user = getKindeServerSession();

  return user;
}
