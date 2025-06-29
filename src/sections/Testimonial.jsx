import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
const firstRow = ['/assets/4.png', '/assets/test4.JPG', '/assets/tabla.JPG'];
const secondRow = ['/assets/kartik.JPG','/assets/rudresh.JPG', '/assets/sarthak.JPG'];

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={twMerge(
        "relative h-50 w-64 cursor-pointer overflow-hidden rounded-xl border  border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
      )}
    >
      {/* <div className="h-64 w-64 overflow-hidden rounded-xl border border-gray-50/[.1] bg-black/10 shadow-lg"> */}
      {/* <img
        src={img}
        alt={alt}
        className="h-full w-full object-cover"
      /> */}
    {/* </div> */}

      {/* <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white/10"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote> */}

      <img src={img} alt="" className="w-full h-full object-cover" />
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">Our Baithak</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard img={review}/>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard img={review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
