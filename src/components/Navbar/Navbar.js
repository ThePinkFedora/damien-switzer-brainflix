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
        <div className="navbar__logo-container">
          <Logo />
        </div>
        <div className="navbar__search-container">
          <SearchBar />
        </div>
        <div className="navbar__avatar-container">
          <Avatar imageSrc={getUserAvatar()} />
        </div>
        <div className="navbar__upload-container">
          <CtaButton
            text="UPLOAD"
            iconSrc={uploadIcon}
            iconAlt="upload"
            href="/upload"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
