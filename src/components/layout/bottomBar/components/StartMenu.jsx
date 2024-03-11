import Image from "next/image";
import nekiImg from "../../../../../asset/images/네키.png";
import { MenuList, MenuListItem, Separator } from "react95";

export default function StartBtn() {
  return (
    <MenuList
      style={{
        position: "absolute",
        left: "0",
        bottom: "100%",
      }}
      onClick={() => setOpen(false)}
    >
      <MenuListItem>
        <span>
          <Image src={nekiImg} width={25} height={25} alt="네키" />
        </span>
        Github
      </MenuListItem>
      <MenuListItem>
        <span role="img" aria-label="📁">
          📁
        </span>
        My account
      </MenuListItem>
      <Separator />
      <MenuListItem disabled>
        <span role="img" aria-label="🔙">
          🔙
        </span>
        Logout
      </MenuListItem>
    </MenuList>
  );
}
