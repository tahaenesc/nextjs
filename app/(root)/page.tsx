import Hello from "./components/hello";

export default function Home() {
  console.log("what am ı doing here ? -- server");

  return (
    <>
      <h1 className="text-3xl">Welcome</h1>
      <Hello />
    </>
  );
}
