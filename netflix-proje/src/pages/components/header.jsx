import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.87);
  padding: 1vh;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: larger;
  justify-content: space-between;
  color: #d6d6d6;
`;

const Logo = styled.span`
  a {
    text-decoration: none;
    font-size: 4vh;
    color: red;
    font-weight: bold;
  }
`;

const PrimaryMenuList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1vh;
  margin: 0;
`;

const PrimaryMenuItem = styled.li`
  margin-right: 1vh;

  a {
    color: var(--white);
    text-decoration: none;
  }
`;

const SecondaryMenuList = styled.ul`
  list-style: none;
  align-items: center;
  display: flex;
  margin: 0;
`;

const SecondaryMenuItem = styled.li`
  margin-left: 2rem;

  a {
    color: var(--white);
    text-decoration: none;
  }
`;

const UserIcon = styled.span`
  img {
    border-radius: 15%;
    height: 5vh;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <PrimaryMenuList>
          <Logo>
            <a href="">FOXFLİX</a>
          </Logo>
          <PrimaryMenuItem>
            <a href="#">Anasayfa</a>
          </PrimaryMenuItem>
          <PrimaryMenuItem>
            <a href="#">Diziler</a>
          </PrimaryMenuItem>
          <PrimaryMenuItem>
            <a href="#">Filmler</a>
          </PrimaryMenuItem>
          <PrimaryMenuItem>
            <a href="#">Yeni ve Popüler</a>
          </PrimaryMenuItem>
          <PrimaryMenuItem>
            <a href="#">Listem</a>
          </PrimaryMenuItem>
        </PrimaryMenuList>
        <SecondaryMenuList>
          <SecondaryMenuItem>
            <a href="#">
              <IoSearch />
            </a>
          </SecondaryMenuItem>
          <SecondaryMenuItem>
            <a href="#">
              <IoNotificationsSharp />
            </a>
          </SecondaryMenuItem>
          <SecondaryMenuItem>
            <User>
              <UserIcon>
                <img
                  src="https://occ-0-1489-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41"
                  alt=""
                />
              </UserIcon>
            </User>
          </SecondaryMenuItem>
        </SecondaryMenuList>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
