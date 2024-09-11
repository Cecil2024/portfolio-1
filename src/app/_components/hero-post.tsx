import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
              About me
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">
          I am a Visual Artist and Photographer with a passion for capturing the beauty of the world through my lens. My journey has taken me through various creative landscapes, from the fine arts to digital photography, where I've honed my skills in visual storytelling. Now, I'm exploring the fascinating intersection of art and technology by integrating code into my portfolio.          </p>
        </div>
      </div>
    </section>
  );
}
