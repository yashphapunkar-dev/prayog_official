import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const swaras = ["सा", "रे", "ग", "म", "प", "ध", "नि", "सां"];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {swaras.map((skill, index) => (
          <Swar text={skill}/>
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={100} reverse speed={3}>
        {swaras.reverse().map((skill, index) => (
          <Swar text={skill}/>
        ))}
      </OrbitingCircles>
    </div>
  );
}
const Swar = ({ text }) => (
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white text-lg font-semibold shadow-md hover:scale-110 transition-transform duration-50">
    {text}
  </div>
);
