import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const MainComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <Card className="w-full max-w-2xl bg-gray-900 text-gray-100 border-gray-700 shadow-lg">
          <CardHeader className="border-b border-gray-700 pb-6">
            <CardTitle className="text-3xl font-bold text-white">
              Welcome to the React + Typescript + Shadcn + Tailwind Starter Kit
              By <span className="text-teal-600">Genesis</span>
            </CardTitle>
            <CardDescription className="text-gray-400 mt-2">
              This will simplify the whole process of setting up a new react
              project
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-6 text-gray-300">
              This starter template is part of the Genesis project, designed to
              jumpstart your web development with best practices and powerful
              tools.
            </p>
            <ul className="list-none mb-6 space-y-3 text-gray-300">
              {[
                "TypeScript for type safety",
                "Tailwind CSS for styling",
                "shadcn/ui for pre-built components",
                "axios and react-router-dom for make requests and routing within your application",
                "Proper folder structure, with components and pages set properly",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-emerald-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-3">
              <Button
                asChild
                variant="default"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <a
                  href="https://tailwindcss.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Tailwind Docs <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-gray-200 border-emerald-600 text-gray-800 hover:bg-emerald-800 hover:text-white"
              >
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  shadcn/ui <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <Card className="w-full max-w-2xl bg-gray-800 text-gray-100 border-gray-700 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Making an Axios Request
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="text-sm">
                <span className="text-blue-400">import</span>{" "}
                <span className="text-yellow-300">axios</span>{" "}
                <span className="text-blue-400">from</span>{" "}
                <span className="text-green-300">'axios'</span>;{"\n\n"}
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-300">fetchData</span>{" "}
                <span className="text-gray-400">=</span>{" "}
                <span className="text-purple-400">async</span>
                <span className="text-gray-400">()</span>{" "}
                <span className="text-purple-400">=&gt;</span>{" "}
                <span className="text-gray-400">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-purple-400">try</span>{" "}
                <span className="text-gray-400">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-300">response</span>{" "}
                <span className="text-gray-400">=</span>{" "}
                <span className="text-purple-400">await</span>{" "}
                <span className="text-yellow-300">axios</span>
                <span className="text-gray-400">.</span>
                <span className="text-blue-300">get</span>
                <span className="text-gray-400">(</span>
                <span className="text-green-300">
                  'https://api.example.com/data'
                </span>
                <span className="text-gray-400">);</span>
                {"\n"}
                {"    "}
                <span className="text-yellow-300">console</span>
                <span className="text-gray-400">.</span>
                <span className="text-blue-300">log</span>
                <span className="text-gray-400">(</span>
                <span className="text-yellow-300">response</span>
                <span className="text-gray-400">.</span>
                <span className="text-yellow-300">data</span>
                <span className="text-gray-400">);</span>
                {"\n"}
                {"  "}
                <span className="text-gray-400">{"}"}</span>{" "}
                <span className="text-purple-400">catch</span>{" "}
                <span className="text-gray-400">(</span>
                <span className="text-yellow-300">error</span>
                <span className="text-gray-400">)</span>{" "}
                <span className="text-gray-400">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-yellow-300">console</span>
                <span className="text-gray-400">.</span>
                <span className="text-blue-300">error</span>
                <span className="text-gray-400">(</span>
                <span className="text-green-300">'Error fetching data:'</span>
                <span className="text-gray-400">,</span>{" "}
                <span className="text-yellow-300">error</span>
                <span className="text-gray-400">);</span>
                {"\n"}
                {"  "}
                <span className="text-gray-400">{"}"}</span>
                {"\n"}
                <span className="text-gray-400">{"};"}</span>
                {"\n\n"}
                <span className="text-yellow-300">fetchData</span>
                <span className="text-gray-400">();</span>
              </code>
            </pre>
            <p className="mt-4 text-gray-300">
              This example demonstrates a simple GET request using Axios. You
              can easily modify this to suit your specific API needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MainComponent;
