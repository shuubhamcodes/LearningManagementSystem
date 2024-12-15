// "use client"
//  import * as z from "zod"
//  import axios from "axios"
//  import {zodResolver} from "@hookform/resolvers/zod"

//  import {useForm} from "react-hook-form"
//  import{useRouter} from "next/navigation";



// import{
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormLabel,
//     FormMessage,
//     FormItem,
// } from "@/components/ui/form"
// import {Button} from "@/components/ui/button"
// import {Input} from "@/components/ui/input"
// import Link from "next/link"
// import { toast } from "react-hot-toast"

// const formSchema =z.object({
//     title: z.string().min(1,{
//         message:"Title is required"
//     }),

// })
// const CreatePage=()=>{
// const router = useRouter();
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver:zodResolver(formSchema),
//     defaultValues:{
//         title:""
//     },
//   });
//   const{isSubmitting , isValid} =form.formState;
  
//   const onSubmit =async (values: z.infer<typeof formSchema>)=>{
//     try {
//         const response= await axios.post("/api/courses",values);
//         router.push(`/teacher/courses/${response.data.id}` );
//     } catch  {
//         toast.error("something went wrong")
//     }
//   }

//     return(
//         <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
//             <div>
//                 <h1 className ="text-2xl">
//                     Name your course
//                 </h1>
//                 <p className = "text-sm text-slate-600">
//                     What Would You Like To Name Your Course? Don't Worry You Can Change This Later
//                 </p>
//                 <Form {...form}>
//                    <form onSubmit={form.handleSubmit(onSubmit )} className="space-y-8 mt-8">
//                       <FormField control ={form.control}
//                       name="title"
//                       render={({field})=>(
//                             <FormItem>
//                               <FormLabel> 
//                                 Course Title
//                               </FormLabel>
//                               <FormControl>
//                                  <Input disabled={isSubmitting} placeholder = "e.g 'Advanced web development'"
//                                  {...field}
//                                  />
                                 
//                               </FormControl>
//                               <FormDescription>
//                                 What Will You Teach In This Course?
//                               </FormDescription>
//                               <FormMessage/>
//                             </FormItem>
//                       )}
//                       />
//                       <div className ="flex items-center gap-x-2">
//                         <Link href="/">
//                         <Button type = "button" variant ="ghost">
//                             Cancel 
//                         </Button>
//                         </Link>
//                         <Button type = "submit" disabled={!isValid || isSubmitting}>
//                              Continue
//                         </Button>
//                       </div>

//                    </form>
//                 </Form>
//             </div>
           
//         </div>
//     )
// }

// export default CreatePage;






















// "use client";

// import * as z from "zod";
// import axios from "axios";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import { toast } from "react-hot-toast";


// const formSchema = z.object({
//   title: z.string().min(1, {
//     message: "Title is required!",
//   }),
// });


 

// const CreatePage = () => {
//   const router = useRouter();

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       title: "",
//     },
//   });

//   const { isSubmitting, isValid } = form.formState;

// //   const onSubmit = async (values: z.infer<typeof formSchema>) => {
// //     try {
// //       const response = await axios.post("/api/courses", values); // Correct endpoint
// //       router.push(`/teacher/courses/${response.data.id}`); // Correct route
// //     } catch (error) {
// //       toast.error("Something went wrong!"); // Error message
// //     }
// //   };



// const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
//       console.log("Submitting values:", values);
//       // Simulate an error for testing
//       throw new Error("Simulated error"); 

//       // API request (will fail for now)
//       const response = await axios.post("/api/courses", values);
//       router.push(`/teacher/courses/${response.data.id}`);
//       toast.success("CourseCreated")
//     } catch (error) {
//       console.error("Error details:", error); // Log error for debugging
//       if (axios.isAxiosError(error) && error.response) {
//         toast.error(`API Error: ${error.response.data.message || "Something went wrong!"}`);
//       } else {
//         toast.error("Unexpected error occurred!");
//       }
//     }
//   };
//   return (
//     <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
//       <div>
//         <h1 className="text-2xl">Name your course</h1>
//         <p className="text-sm text-slate-600">
//           What would you like to name your course? Don&apos;t worry, you can
//           change this later.
//         </p>
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="space-y-8 mt-8"
//           >
//             <FormField
//               control={form.control}
//               name="title"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Course Title</FormLabel>
//                   <FormControl>
//                     <Input
//                       disabled={isSubmitting}
//                       placeholder="e.g 'Advanced Web Development'"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription>
//                     What will you teach in this course?
//                   </FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <div className="flex items-center gap-x-2">
//               <Link href="/">
//                 <Button variant="ghost" type="button">
//                   Cancel
//                 </Button>
//               </Link>
           
//               <Button type="submit" disabled={!isValid || isSubmitting}>
//                 Continue
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default CreatePage;

































"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required!",
  }),
});

const CreatePage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("Submitting values:", values);

      // Perform the API request
      const response = await axios.post("/api/courses", values);

      // Redirect on success
      router.push(`/teacher/courses/${response.data.id}`);
      toast.success("Course created successfully!");
    } catch (error) {
      console.error("Error details:", error); // Log the error for debugging

      // Handle Axios errors
      if (axios.isAxiosError(error) && error.response) {
        toast.error(
          `API Error: ${error.response.data.message || "Something went wrong!"}`
        );
      } else {
        // Handle other unexpected errors
        toast.error("Unexpected error occurred!");
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name your course</h1>
        <p className="text-sm text-slate-600">
          What would you like to name your course? Don&apos;t worry, you can
          change this later.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g 'Advanced Web Development'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What will you teach in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button variant="ghost" type="button">
                  Cancel
                </Button>
              </Link>

              <Button type="submit" disabled={!isValid || isSubmitting}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
