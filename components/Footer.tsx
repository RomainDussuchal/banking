import { signOut } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

// eslint-disable-next-line no-undef
const Footer = ({ user, type }: FooterProps) => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const loggedOut = await signOut();
      if (loggedOut) {
        router.push("/sign-in");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user.name[0]}</p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogout}>
        <Image src="/icons/logout.svg" fill alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
