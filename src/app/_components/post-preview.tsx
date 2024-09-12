import Link from "next/link";
import CoverImage from "./cover-image";



export function PostPreview {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={'https://www.connieramphoto.co.uk'} className="hover:underline">
          Photographic website
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">
        A site to display a photographic portfolio
      </p>
    </div>
  );
}
