import type { MetaFunction } from "@remix-run/node";
import { Mycard } from "./book";
export const meta: MetaFunction = () => {
  return [
    { title: "Parit" },
    { name: "description", content: "Welcome to Parit" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <Mycard />
      
    </div>
  );
}
