import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Sports() {
  const testimonials = [
    {
      quote:
        "Snooker isn't just about hitting balls - it's about strategy, patience, and precision. Kind of like debugging code, but with more felt and fewer error messages! 🎱",
      name: "Priyansh Singhvi",
      designation: "Snooker Enthusiast",
      src: "/sports/snooker1.jpg", // Replace with your actual image
    },
    {
      quote:
        "Every shot requires focus and calculation. It's a mental game that teaches you to think several moves ahead - skills that translate perfectly to software engineering.",
      name: "Priyansh Singhvi",
      designation: "Strategic Thinker",
      src: "/sports/snooker2.jpg", // Replace with your actual image
    },
    {
      quote:
        "When I'm not coding or building AI projects, you'll find me at the snooker table. It's my meditation, my escape, and honestly, one of the few places where being patient actually pays off immediately! 😄",
      name: "Priyansh Singhvi",
      designation: "Patient Player",
      src: "/sports/snooker3.jpg", // Replace with your actual image or duplicate
    },
  ];

  return (
    <div className="w-full">
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
}