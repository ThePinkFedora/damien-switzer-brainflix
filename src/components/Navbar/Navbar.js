import "./Navbar.scss";
import Logo from "../Logo/Logo";
import Avatar from "../Avatar/Avatar";
import SearchBar from "../SearchBar/SearchBar";
import CtaButton from "../CtaButton/CtaButton";
import uploadIcon from "../../assets/images/upload.svg";

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
          <Avatar />
        </div>
        <div className="navbar__container navbar__container--upload-btn">
          <CtaButton text="UPLOAD" iconSrc={uploadIcon} iconAlt="upload" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
