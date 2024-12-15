// import {db} from "@/lib/db"
// import{auth} from "@clerk/nextjs"
// import { redirect } from "next/navigation";
// const CourseIdPage = async({
//     params
// }:{params:{courseId:string}}) => {
//             const{userId}=auth();
//             if(!userId){
//                 return redirect("/")
//             }
//     const course = await db.course.findUnique({
//         where:{
//             id:params.courseId
//         },
//     })
//     if(!course){
//         return redirect("/")
//     }
//     const requiredFields =[course.title ,course.description,course.imageUrl,course.price,course.categoryId]
//     const totalFields= requiredFields.length;
//     const completedFields = requiredFields.filter(Boolean).length
//     const completionText = `(${completedFields}/${totalFields})`
//     return ( 
//         <div>
//             Course Id :{params.courseId}
//         </div>
//      );
// }
 
// export default CourseIdPage;






// import { IconBadge } from "@/components/icon-badge";
// import { db } from "@/lib/db";
// import { auth } from "@clerk/nextjs";
// import { LayoutDashboard,ListChecks } from "lucide-react";
// import { redirect } from "next/navigation";
// import { TitleForm } from "./_components/title-form";
// import { DescriptionForm } from "./_components/description-form";
// import { ImageForm} from "./_components/image-form";
// import { CategoryForm} from "./_components/category-form";
// const CourseIdPage = async ({
//   params,
// }: {
//   params: { courseId: string };
// }) => {
//   // Get the user ID from authentication
//   const { userId } = auth();

//   // Redirect if the user is not authenticated
//   if (!userId) {
//     return redirect("/");
//   }

//   // Find the course by its ID
//   const course = await db.course.findUnique({
//     where: {
//       id: params.courseId,
//     },
//   });
// const categories = await db.category.findMany({
//     orderBy:{
//         name:"asc",
//     }
// })
// console.log(categories)
//   // Redirect if the course doesn't exist
//   if (!course) {
//     return redirect("/");
//   }

//   // List of required fields to track completion
//   const requiredFields = [
//     course.title,
//     course.description,
//     course.imageUrl,
//     course.price,
//     course.categoryId,
//   ];

//   // Calculate total and completed fields
//   const totalFields = requiredFields.length;
//   const completedFields = requiredFields.filter(Boolean).length;
//   const completionText = `(${completedFields}/${totalFields})`;

//   // Return the JSX for course setup page
//   return (
//     <div className="p-6">
//       <div className="flex items-center justify-between">
//         <div className="flex flex-col gap-y-2">
//           <h1 className="text-2xl font-medium">Course setup</h1>
//           <span className="text-sm text-slate-700">
//             Complete all fields {completionText}
//           </span>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
//         <div className="flex items-center gap-x-2">
         
//         </div>
//         <div className="flex items-center gap-x-2">
//           <IconBadge  icon={LayoutDashboard} />
//           <h2 className="text-xl">Customize your course</h2>
//         </div>
//         <TitleForm initialData={course} courseId={course.id}/>
//         <DescriptionForm initialData={course} courseId={course.id}/>
//         <ImageForm initialData={course} courseId={course.id}/>
//         <CategoryForm
//               initialData={course}
//               courseId={course.id}
//               options={categories.map((category) => ({
//                 label: category.name,
//                 value: category.id,
//               }))}
//             />
//       </div>
//       <div className = "space-y-6">
//         <div>
//             <div className="flex items-center gap-x-2">
//                 <IconBadge icon ={ListChecks}/>

//             </div>
//         </div>
//         </div>
//     </div>
//   );
// };

// export default CourseIdPage;








// import { IconBadge } from "@/components/icon-badge";
// import { db } from "@/lib/db";
// import { auth } from "@clerk/nextjs";
// import { LayoutDashboard, ListChecks } from "lucide-react";
// import { redirect } from "next/navigation";
// import { TitleForm } from "./_components/title-form";
// import { DescriptionForm } from "./_components/description-form";
// import { ImageForm } from "./_components/image-form";
// import { CategoryForm } from "./_components/category-form";

// const CourseIdPage = async ({
//   params,
// }: {
//   params: { courseId: string };
// }) => {
//   // Get the user ID from authentication
//   const { userId } = auth();

//   // Redirect if the user is not authenticated
//   if (!userId) {
//     return redirect("/");
//   }

//   // Find the course by its ID
//   const course = await db.course.findUnique({
//     where: {
//       id: params.courseId,
//     },
//   });

//   // Fetch all categories
//   const categories = await db.category.findMany({
//     orderBy: {
//       name: "asc",
//     },
//   });

//   console.log(categories);

//   // Redirect if the course doesn't exist
//   if (!course) {
//     return redirect("/");
//   }

//   // List of required fields to track completion
//   const requiredFields = [
//     course.title,
//     course.description,
//     course.imageUrl,
//     course.price,
//     course.categoryId,
//   ];

//   // Calculate total and completed fields
//   const totalFields = requiredFields.length;
//   const completedFields = requiredFields.filter(Boolean).length;
//   const completionText = `(${completedFields}/${totalFields})`;

//   // Return the JSX for the course setup page
//   return (
//     <div className="p-6">
//       {/* Header Section */}
//       <div className="flex items-center justify-between">
//         <div className="flex flex-col gap-y-2">
//           <h1 className="text-2xl font-medium">Course setup</h1>
//           <span className="text-sm text-slate-700">
//             Complete all fields {completionText}
//           </span>
//         </div>
//       </div>

//       {/* Forms Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
//         {/* Section Header */}
//         <div className="flex items-center gap-x-2">
//           <IconBadge icon={LayoutDashboard} />
//           <h2 className="text-xl">Customize your course</h2>
//         </div>

//         {/* Forms for editing course details */}
//         <TitleForm initialData={course} courseId={course.id} />
//         <DescriptionForm initialData={course} courseId={course.id} />
//         <ImageForm initialData={course} courseId={course.id} />
//         <CategoryForm
//           initialData={course}
//           courseId={course.id}
//           options={categories.map((category) => ({
//             label: category.name,
//             value: category.id,
//           }))}
//         />
//       </div>

//       {/* Additional Section */}
//       <div className="space-y-6 mt-8">
//         {/* Checklist Section */}
//         <div className="flex items-center gap-x-2">
//           <IconBadge icon={ListChecks} />
//           <h2 className="text-xl">Course Completion Checklist</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseIdPage;
















import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { CircleDollarSign, LayoutDashboard, ListChecks ,File} from "lucide-react";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
import { CategoryForm } from "./_components/category-form";
import { PriceForm } from "./_components/price-form";
import { AttachmentForm } from "./_components/attachement-form";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      userId,
    },
    include:{
      attachments:{
        orderBy:{
          createdAt: "desc"
        }
      },
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  if (!course) {
    return redirect("/");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.categoryId,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Course Setup</h1>
          <span className="text-sm text-slate-700">
            Complete all fields {completionText}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <h2 className="text-xl">Customize your course</h2>
          </div>
          <TitleForm initialData={course} courseId={course.id} />
          <DescriptionForm initialData={course} courseId={course.id} />
          <ImageForm initialData={course} courseId={course.id} />
          <CategoryForm
            initialData={course}
            courseId={course.id}
            options={categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
          />
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={ListChecks} />
              <h2 className="text-xl">Course Chapters</h2>
            </div>
            <div>
              TODO: Chapters
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={CircleDollarSign}/>
              <h2 className="text-xl">
                  sell your course
              </h2>

            </div>
            <PriceForm initialData={course} courseId={course.id} />
          </div>
          <div>

          <div className="flex items-center gap-x-2">
              <IconBadge icon={File}/>
              <h2 className="text-xl">
                 Resources & Attachements
              </h2>

            </div>
                <div>
               
            <AttachmentForm initialData={course} courseId={course.id} />
</div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;












