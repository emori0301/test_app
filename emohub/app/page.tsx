import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="m-4 border rounded-2xl bg-muted">
        <div className="m-4 w-10 aspect-square border rounded-full bg-primary-foreground"></div>
      </div>
      <div className="m-4 border rounded-2xl bg-muted aspect-video"></div>
    </div>
  );
}
