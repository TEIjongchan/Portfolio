import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { S } from "./style";

const menuItems = [
  { label: "Profile", path: "/", key: "profile" },
  { label: "Project", path: "/project", key: "project" },
  { label: "Portfolio", path: "/portfolio", key: "portfolio" },
];

function Header() {
  const router = useRouter();
  const isMain = router.pathname === "/";
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isMain ? Math.max(window.innerHeight - 100, 80) : 1;
      setIsSticky(window.scrollY >= threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMain]);

  const isSelected = (path) =>
    path === "/"
      ? router.pathname === "/"
      : router.pathname.startsWith(path);

  const getIcon = (item) => {
    const selected = isSelected(item.path);
    const suffix = selected ? "on" : "off";
    const white = isMain && !isSticky ? "_white" : "";
    return `/images/icon/icon_${item.key}_${suffix}${white}.svg`;
  };

  return (
    <S.Wrapper
      aria-label="주요 메뉴"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      $isSticky={isSticky}
      $isMain={isMain}
    >
      <S.Menu $isSticky={isSticky}>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path} passHref>
              <S.MenuItem
                $isSticky={isSticky}
                $isDark={!isMain || isSticky}
                $isSelected={isSelected(item.path)}
                aria-current={isSelected(item.path) ? "page" : undefined}
              >
                <img src={getIcon(item)} alt="" aria-hidden="true" />
                {!isSticky && <span>{item.label}</span>}
              </S.MenuItem>
            </Link>
          </li>
        ))}
      </S.Menu>
    </S.Wrapper>
  );
}

export default Header;
