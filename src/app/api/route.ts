// IMPORTS
import { NextResponse } from "next/server";

// HOME PAGE HANDLER
export async function GET() {
    return NextResponse.json({
        message: "One simply does not accidently stumble upon this page."
    });
};