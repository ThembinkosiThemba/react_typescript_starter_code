import type React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const Main: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-8">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Card className="w-full max-w-2xl bg-black/90 text-gray-100 border-gray-800 shadow-2xl hover:shadow-gray-800/30 transition-all duration-300">
          <CardHeader className="border-b border-gray-800 pb-6">
            <CardTitle className="text-3xl font-bold text-white tracking-tight">
              Welcome to the React + Typescript + Shadcn + Tailwind Starter Kit
              By <span className="text-gray-300 font-extrabold">Genesis</span>
            </CardTitle>
            <CardDescription className="text-gray-400 mt-3 text-lg">
              This will simplify the whole process of setting up a new react
              project
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              This starter template is part of the Genesis project, designed to
              jumpstart your web development with best practices and powerful
              tools.
            </p>
            <ul className="space-y-3 text-gray-300">
              {[
                "TypeScript for type safety",
                "Tailwind CSS for styling",
                "shadcn/ui for pre-built components",
                "axios and react-router-dom for make requests and routing within your application",
                "Proper folder structure, with components and pages set properly",
              ].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <span className="mr-3 text-white flex items-center justify-center w-5 h-5 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300">
                    ✓
                  </span>
                  <span className="group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <Button
                asChild
                variant="default"
                className="bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-gray-800/40 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <a
                  href="https://tailwindcss.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-11"
                >
                  Tailwind Docs{" "}
                  <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-gray-800 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-700 transition-all duration-300 h-11"
              >
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  shadcn/ui <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Card className="w-full max-w-2xl bg-black/90 text-gray-100 border-gray-800 shadow-2xl hover:shadow-gray-800/30 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Making an Axios Request
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-950 p-5 rounded-lg overflow-hidden shadow-inner border border-gray-800 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
              <pre className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-950">
                <code className="text-sm font-mono">
                  <span className="text-gray-400">import</span>{" "}
                  <span className="text-gray-300">axios</span>{" "}
                  <span className="text-gray-400">from</span>{" "}
                  <span className="text-gray-500">'axios'</span>;{"\n\n"}
                  <span className="text-gray-400">const</span>{" "}
                  <span className="text-gray-300">fetchData</span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-gray-400">async</span>
                  <span className="text-gray-500">()</span>{" "}
                  <span className="text-gray-400">=&gt;</span>{" "}
                  <span className="text-gray-500">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-gray-400">try</span>{" "}
                  <span className="text-gray-500">{"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-gray-400">const</span>{" "}
                  <span className="text-gray-300">response</span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-gray-400">await</span>{" "}
                  <span className="text-gray-300">axios</span>
                  <span className="text-gray-500">.</span>
                  <span className="text-gray-400">get</span>
                  <span className="text-gray-500">(</span>
                  <span className="text-gray-500">
                    'https://api.example.com/data'
                  </span>
                  <span className="text-gray-500">);</span>
                  {"\n"}
                  {"    "}
                  <span className="text-gray-300">console</span>
                  <span className="text-gray-500">.</span>
                  <span className="text-gray-400">log</span>
                  <span className="text-gray-500">(</span>
                  <span className="text-gray-300">response</span>
                  <span className="text-gray-500">.</span>
                  <span className="text-gray-300">data</span>
                  <span className="text-gray-500">);</span>
                  {"\n"}
                  {"  "}
                  <span className="text-gray-500">{"}"}</span>{" "}
                  <span className="text-gray-400">catch</span>{" "}
                  <span className="text-gray-500">(</span>
                  <span className="text-gray-300">error</span>
                  <span className="text-gray-500">)</span>{" "}
                  <span className="text-gray-500">{"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-gray-300">console</span>
                  <span className="text-gray-500">.</span>
                  <span className="text-gray-400">error</span>
                  <span className="text-gray-500">(</span>
                  <span className="text-gray-500">'Error fetching data:'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-gray-300">error</span>
                  <span className="text-gray-500">);</span>
                  {"\n"}
                  {"  "}
                  <span className="text-gray-500">{"}"}</span>
                  {"\n"}
                  <span className="text-gray-500">{"};"}</span>
                  {"\n\n"}
                  <span className="text-gray-300">fetchData</span>
                  <span className="text-gray-500">();</span>
                </code>
              </pre>
            </div>
            <p className="mt-6 text-gray-300 leading-relaxed">
              This example demonstrates a simple GET request using Axios. You
              can easily modify this to suit your specific API needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Main;
