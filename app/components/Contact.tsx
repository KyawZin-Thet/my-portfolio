import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-center border-t-2 border-slate-800 p-10 text-white "
    >
      <div className=" container grid grid-cols-2   ">
        <div className="  flex flex-col justify-center items-center">
          <h3 className="mx-8 text-center text-xl sm:text-2xl font-semibold text-white">
            Contact Me
          </h3>
          <ul className=" ml-3  sm:ml-0 mt-5 my-0 sm:my-8 flex flex-col items-start gap-y-3">
            <li className="flex  ">
              <EmailIcon sx={{ fontSize: { xs: "small", sm: "medium" } }} />{" "}
              <p className="text-xs  sm:text-base ml-2">
                kyawzinthett7@gmail.com
              </p>
            </li>
            <li className="flex  ">
              <LocalPhoneIcon
                sx={{ fontSize: { xs: "small", sm: "medium" } }}
              />{" "}
              <p className="text-xs sm:text-base ml-2">09790833940</p>
            </li>
            <li className="flex ">
              <HomeIcon sx={{ fontSize: { xs: "small", sm: "medium" } }} />{" "}
              <p className="text-xs sm:text-base  ml-2">
                Shwe Pyi Thar, Yangon
              </p>
            </li>
          </ul>
        </div>
        <div className=" flex ml-8 flex-col justify-center items-center">
          <h3 className="text-start mx-8 text-xl sm:text-2xl font-semibold text-white">
            Social
          </h3>
          <ul className=" ml-7 sm:ml-0  mt-5 sm:my-8 flex flex-col items-start gap-y-3">
            <Link
              href="https://www.facebook.com/MinGaLarPar.69?mibextid=ZbWKwL"
              style={{ textDecoration: "none" }}
            >
              <li className="flex  ">
                <FacebookIcon /> <p className="ml-2">Facebook</p>
              </li>
            </Link>
            <Link
              href="https://github.com/KyawZin-Thet"
              style={{ textDecoration: "none" }}
            >
              <li className="flex  ">
                <GitHubIcon /> <p className="ml-2">GitHub</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}
