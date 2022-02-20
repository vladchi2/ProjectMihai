import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 5rem;
  background: #23344D;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledLogo = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30%;
`;

const Pool = styled.h1`

  font-family: 'Roboto', sans-serif;  
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #FFFFFF;
`;

const Party = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  color: #FFFFFF;
`;

const LogoSvg = styled.img`
  margin: 0px 8px;
`;

const JoinButton = styled.button`
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;
  background-color: transparent;

  color: #CA715E;

  width: 5.875rem;
  height:2.063rem;
  margin-right:3rem;
  

  border: 1px solid #CA715E;
  box-sizing: border-box;
  border-radius: 30px;
  

  &:hover,
  &:focus {
    background-color: #CA715E;
    color: #3d3d3d;
  }
  &:active {
    background-color: #b82c0f;
    color: #d6d6d6;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <StyledLogo>
            <LogoSvg src='/logo.svg' alt='PP'></LogoSvg>
            <Pool>Pool</Pool>
            <Party>Party</Party>
          </StyledLogo>
        </Link>
      </div>
      <div>
        <Link href='/join' passHref>
          <JoinButton>Join Now</JoinButton>
        </Link>
        {/* <Link href='/about' passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href='/contact' passHref>
          <StyledLink>Contact</StyledLink>
        </Link> */}
      </div>
    </Nav>
  );
};

export default Navbar;
