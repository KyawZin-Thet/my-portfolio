import CodeIcon from "@mui/icons-material/Code";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Image from "next/image";
import Link from "next/link";

interface Props {
  key: number;
  imageUrl: string;
  title: string;
  description?: string;
  gitUrl: string;
  previewUrl: string;
}

export default function ProjectCard({
  key,
  imageUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: Props) {
  return (
    <div key={key} className="m-8 w-full flex justify-center flex-wrap">
      <Image
        height={0}
        width={300}
        src={imageUrl}
        alt={title}
        style={{
          borderRadius: "2px",
          objectFit: "cover",
        }}
        className="h-72 md:mr-3"
      />

      <div className="w-full sm:w-3/5 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-#0ea5e9 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-4">
          <div className="text-white font-bold text-xl my-2">{title}</div>
          <div className=" mt-4 overflow-y-scroll h-32 ">
            <p className="text-white text-base ">{description}</p>
          </div>
        </div>
        {description && (
          <div className="flex items-center">
            <div className="flex justify-around mt-2 text-white">
              <Link
                href={gitUrl}
                style={{
                  marginRight: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CodeIcon fontSize="large" />
                <span className="text-center text-sm">View Code</span>
              </Link>
              <Link
                style={{
                  marginRight: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginLeft: 4,
                }}
                href={previewUrl}
              >
                <RemoveRedEyeIcon fontSize="large" />
                <span className="text-center text-sm">Live View</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
