import { empLoginDB, Test } from "@/app/utils/database";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export async function POST(Request: any) {
  let dbRes = empLoginDB({ entry: "RahulT224", pword: "123RahulT" });
  return NextResponse.json({
    "success": true
  })
}
