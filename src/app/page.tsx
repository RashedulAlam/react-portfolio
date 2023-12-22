import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Profile from "@/components/profile/Profile";
import Project from "@/components/project/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Project />
      <div className="flex flex-row gap-10">
        {[1, 2, 3, 45].map((_, i) => (
          <Card key={i} />
        ))}
      </div> */}
      <Profile />
    </main>
  );
}
