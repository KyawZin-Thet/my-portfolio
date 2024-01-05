import CodeIcon from "@mui/icons-material/Code";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Image from "next/image";
import Link from "next/link";

interface Props {
  imageUrl: string;
  title: string;
  gitUrl: string;
  previewUrl: string;
}

export default function ProjectCard({
  imageUrl,
  title,
  gitUrl,
  previewUrl,
}: Props) {
  return (
    <div>
      <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-slate-950">
        <div className="h-52">
          <Image
            height={400}
            width={200}
            src={imageUrl}
            alt={title}
            style={{ width: "100%", height: "100%", borderRadius: "4px" }}
          />
        </div>
        <div className="px-6 py-4 text-white">
          <div className="h-10 text-lg mb-4">{title}</div>

          <div className="flex justify-around mt-4">
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
              <span>View Code</span>
            </Link>
            <Link
              style={{
                marginRight: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              href={previewUrl}
            >
              <RemoveRedEyeIcon fontSize="large" />
              <span>Live View</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
