"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.scss";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  const handleClick = () => setOpenMenu(!openMenu);
  const closeMenu = () => setOpenMenu(false);

  const menuItems = [
    { path: "/", text: "inicio" },
    { path: "/bio", text: "bio" },
    { path: "/catalogo", text: "catálogo" },
    { path: "/videos", text: "videos" },
    { path: "/links", text: "links" },
  ];

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.menuButton}
        onClick={handleClick}
        aria-label="abrir o cerrar menu"
      >
        {openMenu ? (
          <MdClose size={"1.8em"} />
        ) : (
          <MdOutlineMenu size={"1.8em"} />
        )}
      </button>

      <ul
        key={pathname}
        className={openMenu ? `${styles.menu} ${styles.openMenu}` : styles.menu}
      >
        {menuItems.map((item, idx) => {
          const isActive = pathname === item.path  || pathname === item.path + '/';

          return (
            <li key={idx}>
              <Link
                href={item.path}
                className={
                  isActive
                    ? `${styles.menuLink} ${styles.active}`
                    : styles.menuLink
                }
                onClick={closeMenu}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;