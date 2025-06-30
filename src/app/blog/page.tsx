import HeroSection from "../../components/HeroSection";
import { PostsBlog } from "./components/postsBlog";

export default function BlogPage() {
  return (
    <div className="flex flex-col  ">
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1748989431676-331a3926ef85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D"
        title="Blog"
      />
      <div className="max-w-11/12 mx-auto py-20">
        <PostsBlog />
      </div>
    </div>
  );
}
