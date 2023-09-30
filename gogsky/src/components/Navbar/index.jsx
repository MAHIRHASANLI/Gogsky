import css from "./index.module.css";
import { LuSearch } from "react-icons/lu";
import { BsFillFlagFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className={css.navbar}>
      <div className={css.navbar_item}>
        <div className={css.navbar_links}>
          <div className={css.logo}>GOGsky</div>
          <div className={css.navbar_link}>
            <a href="*">Home</a>
            <a href="*">Blog</a>
            <a href="*">Blog</a>
            <a href="*">Tours</a>
          </div>
        </div>

        <div className={css.navbar_searchAndButtons}>
          <div className={css.search}>
            <div>
              <LuSearch />
            </div>

            <div className={css.flag}>
              <BsFillFlagFill />
              <IoIosArrowDown />
            </div>
          </div>

          <div className={css.buttons}>
            <button>Sign Up</button>
            <button>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
