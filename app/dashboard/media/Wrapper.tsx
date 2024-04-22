// // "use client";

// // import {
// //   Bird,
// //   Book,
// //   Bot,
// //   Code2,
// //   CornerDownLeft,
// //   LifeBuoy,
// //   Mic,
// //   Paperclip,
// //   Rabbit,
// //   Settings,
// //   Settings2,
// //   Share,
// //   SquareTerminal,
// //   SquareUser,
// //   Triangle,
// //   Turtle,
// // } from "lucide-react";

// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Drawer,
// //   DrawerContent,
// //   DrawerDescription,
// //   DrawerHeader,
// //   DrawerTitle,
// //   DrawerTrigger,
// // } from "@/components/ui/drawer";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import { Textarea } from "@/components/ui/textarea";
// // import {
// //   Tooltip,
// //   TooltipContent,
// //   TooltipProvider,
// //   TooltipTrigger,
// // } from "@/components/ui/tooltip";
// // import { Card, CardContent, CardHeader } from "@/components/ui/card";
// // import React from "react";
// // import ffmpeg from "fluent-ffmpeg";

// // function Dashboard() {
// //   const downloadBlob = (blob, fileName) => {
// //     const url = window.URL.createObjectURL(blob);
// //     const a = document.createElement("a");
// //     a.href = url;
// //     a.target = "_blank";
// //     a.style.display = "none";
// //     document.body.appendChild(a);
// //     a.download = fileName;
// //     a.click();
// //     window.URL.revokeObjectURL(url);
// //     document.body.removeChild(a);
// //   };

// //   const downloadFile = () => {
// //     ffmpeg("./16516645.jpeg")
// //       // loop for 5 seconds
// //       .loop(5)
// //       // using 25 fps
// //       .fps(25)
// //       // setup event handlers
// //       .on("end", function () {
// //         console.log("file has been converted succesfully");
// //       })
// //       .on("error", function (err) {
// //         console.log("an error happened: " + err.message);
// //       })
// //       // save to file
// //       .save("/path/to/your_target.m4v");
// //   };

// //   const savingFile = (blob, fileName) => {
// //     const reader = new FileReader();
// //     reader.addEventListener("loadend", () => downloadBlob(blob, fileName));
// //     reader.readAsText(blob);
// //   };

// //   React.useEffect(() => {
// //     fetch(
// //       "https://sns-video-bd.xhscdn.com/stream/110/259/01e61bee3d6982d6010377038edd2399ea_259.mp4",
// //       {
// //         method: "GET",
// //         headers: new Headers({
// //           "Content-Type": "video/mp4",
// //         }),
// //       }
// //     )
// //       .then((res) => res.blob())
// //       .then((res) => {
// //         console.log(res);
// //         // let type = "video/*"; // 资源类型
// //         // let blob = new Blob([res], { type: type });
// //         // console.log(blob);
// //         // savingFile(blob, "test.mp4");
// //         // downloadBlob(res);
// //       });
// //   }, []);
// //   return (
// //     <TooltipProvider>
// //       <Card>
// //         <CardHeader>
// //           <Button onClick={downloadFile}>downloadFile</Button>
// //         </CardHeader>
// //         <CardContent>
// //           <video controls width="250" autoPlay>
// //             <source
// //               src="./01e61bee3d6982d6010377038edd2399ea_259.mp4"
// //               type="video/mp4"
// //             />
// //           </video>
// //           <div className="grid h-screen w-full">
// //             <div className="flex flex-col">
// //               <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
// //                 <h1 className="text-xl font-semibold">Playground</h1>
// //                 <Drawer>
// //                   <DrawerTrigger asChild>
// //                     <Button variant="ghost" size="icon" className="md:hidden">
// //                       <Settings className="size-4" />
// //                       <span className="sr-only">Settings</span>
// //                     </Button>
// //                   </DrawerTrigger>
// //                   <DrawerContent className="max-h-[80vh]">
// //                     <DrawerHeader>
// //                       <DrawerTitle>Configuration</DrawerTitle>
// //                       <DrawerDescription>
// //                         Configure the settings for the model and messages.
// //                       </DrawerDescription>
// //                     </DrawerHeader>
// //                     <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
// //                       <fieldset className="grid gap-6 rounded-lg border p-4">
// //                         <legend className="-ml-1 px-1 text-sm font-medium">
// //                           Settings
// //                         </legend>
// //                         <div className="grid gap-3">
// //                           <Label htmlFor="model">Model</Label>
// //                           <Select>
// //                             <SelectTrigger
// //                               id="model"
// //                               className="items-start [&_[data-description]]:hidden"
// //                             >
// //                               <SelectValue placeholder="Select a model" />
// //                             </SelectTrigger>
// //                             <SelectContent>
// //                               <SelectItem value="genesis">
// //                                 <div className="flex items-start gap-3 text-muted-foreground">
// //                                   <Rabbit className="size-5" />
// //                                   <div className="grid gap-0.5">
// //                                     <p>
// //                                       Neural{" "}
// //                                       <span className="font-medium text-foreground">
// //                                         Genesis
// //                                       </span>
// //                                     </p>
// //                                     <p className="text-xs" data-description>
// //                                       Our fastest model for general use cases.
// //                                     </p>
// //                                   </div>
// //                                 </div>
// //                               </SelectItem>
// //                               <SelectItem value="explorer">
// //                                 <div className="flex items-start gap-3 text-muted-foreground">
// //                                   <Bird className="size-5" />
// //                                   <div className="grid gap-0.5">
// //                                     <p>
// //                                       Neural{" "}
// //                                       <span className="font-medium text-foreground">
// //                                         Explorer
// //                                       </span>
// //                                     </p>
// //                                     <p className="text-xs" data-description>
// //                                       Performance and speed for efficiency.
// //                                     </p>
// //                                   </div>
// //                                 </div>
// //                               </SelectItem>
// //                               <SelectItem value="quantum">
// //                                 <div className="flex items-start gap-3 text-muted-foreground">
// //                                   <Turtle className="size-5" />
// //                                   <div className="grid gap-0.5">
// //                                     <p>
// //                                       Neural{" "}
// //                                       <span className="font-medium text-foreground">
// //                                         Quantum
// //                                       </span>
// //                                     </p>
// //                                     <p className="text-xs" data-description>
// //                                       The most powerful model for complex
// //                                       computations.
// //                                     </p>
// //                                   </div>
// //                                 </div>
// //                               </SelectItem>
// //                             </SelectContent>
// //                           </Select>
// //                         </div>
// //                         <div className="grid gap-3">
// //                           <Label htmlFor="temperature">Temperature</Label>
// //                           <Input
// //                             id="temperature"
// //                             type="number"
// //                             placeholder="0.4"
// //                           />
// //                         </div>
// //                         <div className="grid gap-3">
// //                           <Label htmlFor="top-p">Top P</Label>
// //                           <Input id="top-p" type="number" placeholder="0.7" />
// //                         </div>
// //                         <div className="grid gap-3">
// //                           <Label htmlFor="top-k">Top K</Label>
// //                           <Input id="top-k" type="number" placeholder="0.0" />
// //                         </div>
// //                       </fieldset>
// //                       <fieldset className="grid gap-6 rounded-lg border p-4">
// //                         <legend className="-ml-1 px-1 text-sm font-medium">
// //                           Messages
// //                         </legend>
// //                         <div className="grid gap-3">
// //                           <Label htmlFor="role">Role</Label>
// //                           <Select defaultValue="system">
// //                             <SelectTrigger>
// //                               <SelectValue placeholder="Select a role" />
// //                             </SelectTrigger>
// //                             <SelectContent>
// //                               <SelectItem value="system">System</SelectItem>
// //                               <SelectItem value="user">User</SelectItem>
// //                               <SelectItem value="assistant">
// //                                 Assistant
// //                               </SelectItem>
// //                             </SelectContent>
// //                           </Select>
// //                         </div>
// //                         <div className="grid gap-3">
// //                           <Label htmlFor="content">Content</Label>
// //                           <Textarea id="content" placeholder="You are a..." />
// //                         </div>
// //                       </fieldset>
// //                     </form>
// //                   </DrawerContent>
// //                 </Drawer>
// //                 <Button
// //                   variant="outline"
// //                   size="sm"
// //                   className="ml-auto gap-1.5 text-sm"
// //                 >
// //                   <Share className="size-3.5" />
// //                   Share
// //                 </Button>
// //               </header>
// //               <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
// //                 <div
// //                   className="relative hidden flex-col items-start gap-8 md:flex"
// //                   x-chunk="dashboard-03-chunk-0"
// //                 >
// //                   <form className="grid w-full items-start gap-6">
// //                     <fieldset className="grid gap-6 rounded-lg border p-4">
// //                       <legend className="-ml-1 px-1 text-sm font-medium">
// //                         Settings
// //                       </legend>
// //                       <div className="grid gap-3">
// //                         <Label htmlFor="model">Model</Label>
// //                         <Select>
// //                           <SelectTrigger
// //                             id="model"
// //                             className="items-start [&_[data-description]]:hidden"
// //                           >
// //                             <SelectValue placeholder="Select a model" />
// //                           </SelectTrigger>
// //                           <SelectContent>
// //                             <SelectItem value="genesis">
// //                               <div className="flex items-start gap-3 text-muted-foreground">
// //                                 <Rabbit className="size-5" />
// //                                 <div className="grid gap-0.5">
// //                                   <p>
// //                                     Neural{" "}
// //                                     <span className="font-medium text-foreground">
// //                                       Genesis
// //                                     </span>
// //                                   </p>
// //                                   <p className="text-xs" data-description>
// //                                     Our fastest model for general use cases.
// //                                   </p>
// //                                 </div>
// //                               </div>
// //                             </SelectItem>
// //                             <SelectItem value="explorer">
// //                               <div className="flex items-start gap-3 text-muted-foreground">
// //                                 <Bird className="size-5" />
// //                                 <div className="grid gap-0.5">
// //                                   <p>
// //                                     Neural{" "}
// //                                     <span className="font-medium text-foreground">
// //                                       Explorer
// //                                     </span>
// //                                   </p>
// //                                   <p className="text-xs" data-description>
// //                                     Performance and speed for efficiency.
// //                                   </p>
// //                                 </div>
// //                               </div>
// //                             </SelectItem>
// //                             <SelectItem value="quantum">
// //                               <div className="flex items-start gap-3 text-muted-foreground">
// //                                 <Turtle className="size-5" />
// //                                 <div className="grid gap-0.5">
// //                                   <p>
// //                                     Neural{" "}
// //                                     <span className="font-medium text-foreground">
// //                                       Quantum
// //                                     </span>
// //                                   </p>
// //                                   <p className="text-xs" data-description>
// //                                     The most powerful model for complex
// //                                     computations.
// //                                   </p>
// //                                 </div>
// //                               </div>
// //                             </SelectItem>
// //                           </SelectContent>
// //                         </Select>
// //                       </div>
// //                       <div className="grid gap-3">
// //                         <Label htmlFor="temperature">Temperature</Label>
// //                         <Input
// //                           id="temperature"
// //                           type="number"
// //                           placeholder="0.4"
// //                         />
// //                       </div>
// //                       <div className="grid grid-cols-2 gap-4">
// //                         <div className="grid gap-3">
// //                           <Label htmlFor="top-p">Top P</Label>
// //                           <Input id="top-p" type="number" placeholder="0.7" />
// //                         </div>
// //                         <div className="grid gap-3">
// //                           <Label htmlFor="top-k">Top K</Label>
// //                           <Input id="top-k" type="number" placeholder="0.0" />
// //                         </div>
// //                       </div>
// //                     </fieldset>
// //                     <fieldset className="grid gap-6 rounded-lg border p-4">
// //                       <legend className="-ml-1 px-1 text-sm font-medium">
// //                         Messages
// //                       </legend>
// //                       <div className="grid gap-3">
// //                         <Label htmlFor="role">Role</Label>
// //                         <Select defaultValue="system">
// //                           <SelectTrigger>
// //                             <SelectValue placeholder="Select a role" />
// //                           </SelectTrigger>
// //                           <SelectContent>
// //                             <SelectItem value="system">System</SelectItem>
// //                             <SelectItem value="user">User</SelectItem>
// //                             <SelectItem value="assistant">Assistant</SelectItem>
// //                           </SelectContent>
// //                         </Select>
// //                       </div>
// //                       <div className="grid gap-3">
// //                         <Label htmlFor="content">Content</Label>
// //                         <Textarea
// //                           id="content"
// //                           placeholder="You are a..."
// //                           className="min-h-[9.5rem]"
// //                         />
// //                       </div>
// //                     </fieldset>
// //                   </form>
// //                 </div>
// //                 <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
// //                   <Badge variant="outline" className="absolute right-3 top-3">
// //                     Output
// //                   </Badge>
// //                   <div className="flex-1" />
// //                   <form
// //                     className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
// //                     x-chunk="dashboard-03-chunk-1"
// //                   >
// //                     <Label htmlFor="message" className="sr-only">
// //                       Message
// //                     </Label>
// //                     <Textarea
// //                       id="message"
// //                       placeholder="Type your message here..."
// //                       className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
// //                     />
// //                     <div className="flex items-center p-3 pt-0">
// //                       <Tooltip>
// //                         <TooltipTrigger asChild>
// //                           <Button variant="ghost" size="icon">
// //                             <Paperclip className="size-4" />
// //                             <span className="sr-only">Attach file</span>
// //                           </Button>
// //                         </TooltipTrigger>
// //                         <TooltipContent side="top">Attach File</TooltipContent>
// //                       </Tooltip>
// //                       <Tooltip>
// //                         <TooltipTrigger asChild>
// //                           <Button variant="ghost" size="icon">
// //                             <Mic className="size-4" />
// //                             <span className="sr-only">Use Microphone</span>
// //                           </Button>
// //                         </TooltipTrigger>
// //                         <TooltipContent side="top">
// //                           Use Microphone
// //                         </TooltipContent>
// //                       </Tooltip>
// //                       <Button
// //                         type="submit"
// //                         size="sm"
// //                         className="ml-auto gap-1.5"
// //                       >
// //                         Send Message
// //                         <CornerDownLeft className="size-3.5" />
// //                       </Button>
// //                     </div>
// //                   </form>
// //                 </div>
// //               </main>
// //             </div>
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </TooltipProvider>
// //   );
// // }

// // export default Dashboard;

// "use client";

// import { FFmpeg } from "@ffmpeg/ffmpeg";
// import { fetchFile, toBlobURL } from "@ffmpeg/util";
// import { useRef, useState } from "react";

// export default function Home() {
//   const [loaded, setLoaded] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const ffmpegRef = useRef(new FFmpeg());
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const messageRef = useRef<HTMLParagraphElement | null>(null);

//   const load = async () => {
//     setIsLoading(true);
//     const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
//     const ffmpeg = ffmpegRef.current;
//     ffmpeg.on("log", ({ message }) => {
//       if (messageRef.current) messageRef.current.innerHTML = message;
//     });
//     // toBlobURL is used to bypass CORS issue, urls with the same
//     // domain can be used directly.
//     await ffmpeg.load({
//       coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
//       wasmURL: await toBlobURL(
//         `${baseURL}/ffmpeg-core.wasm`,
//         "application/wasm"
//       ),
//     });
//     setLoaded(true);
//     setIsLoading(false);
//   };

//   const transcode = async () => {
//     const ffmpeg = ffmpegRef.current;
//     // u can use 'https://ffmpegwasm.netlify.app/video/video-15s.avi' to download the video to public folder for testing
//     await ffmpeg.writeFile(
//       "input.avi",
//       await fetchFile(
//         "https://raw.githubusercontent.com/ffmpegwasm/testdata/master/video-15s.avi"
//       )
//     );
//     await ffmpeg.exec(["-i", "input.avi", "output.mp4"]);
//     const data = (await ffmpeg.readFile("output.mp4")) as any;
//     if (videoRef.current)
//       videoRef.current.src = URL.createObjectURL(
//         new Blob([data.buffer], { type: "video/mp4" })
//       );
//   };

//   return loaded ? (
//     <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//       <video ref={videoRef} controls></video>
//       <br />
//       <button
//         onClick={transcode}
//         className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded"
//       >
//         Transcode avi to mp4
//       </button>
//       <p ref={messageRef}></p>
//     </div>
//   ) : (
//     <button
//       className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
//       onClick={load}
//     >
//       Load ffmpeg-core
//       {isLoading && (
//         <span className="animate-spin ml-3">
//           <svg
//             viewBox="0 0 1024 1024"
//             focusable="false"
//             data-icon="loading"
//             width="1em"
//             height="1em"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
//           </svg>
//         </span>
//       )}
//     </button>
//   );
// }
