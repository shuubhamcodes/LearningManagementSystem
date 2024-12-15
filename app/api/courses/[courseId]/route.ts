import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth(); // Retrieve the authenticated user ID
    const { courseId } = params; // Extract the course ID from the route parameters
    const values = await req.json(); // Parse the JSON payload from the request

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Update the course in the database
    const course = await db.course.update({
      where: {
        id: params.courseId,
        userId, // Ensure the user owns the course
      },
      data: {
        ...values, // Spread the incoming values to update
      },
    });

    // Return the updated course
    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
