import "./Navbar.scss";
import { getUserAvatar } from "../../js/utils";
import Logo from "../Logo/Logo";
import Avatar from "../Avatar/Avatar";
import SearchBar from "../SearchBar/SearchBar";
import CtaButton from "../CtaButton/CtaButton";
import uploadIcon from "../../assets/images/upload.svg";

/**
 * Navigation Bar which provides easy access for navigating the site.
 * Navbar includues {@link Logo}, {@link SearchBar}, {@link Avatar}, and a {@link CtaButton} (Upload Button).
 */
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__content">
        <div className="navbar__container navbar__container--logo">
          <Logo />
        </div>
        <div className="navbar__container navbar__container--search-bar">
          <SearchBar />
        </div>
        <div className="navbar__container navbar__container--avatar">
          <Avatar imageSrc={getUserAvatar()} />
        </div>
        <div className="navbar__container navbar__container--upload-btn">
          <CtaButton text="UPLOAD" iconSrc={uploadIcon} iconAlt="upload" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
