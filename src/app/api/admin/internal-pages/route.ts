import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-key-123";

async function verifyAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) return false;
  try {
    await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    return true;
  } catch {
    return false;
  }
}

export async function GET() {
  if (!(await verifyAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const pages = await prisma.internalPage.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return NextResponse.json(pages);
}

export async function POST(req: Request) {
  if (!(await verifyAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const data = await req.json();
    const page = await prisma.internalPage.create({
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        type: data.type,
        isActive: data.isActive ?? true,
        sortOrder: Number(data.sortOrder) || 0,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
      },
    });
    return NextResponse.json(page);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
