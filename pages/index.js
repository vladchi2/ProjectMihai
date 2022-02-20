import Head from 'next/head';
import styled from 'styled-components';
{/* <style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=swap');
</style> */}

const MainColumn = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // align-items: space-between;
  // align-content: space-between;
  // margin-top: 8%;
  // margin-bottom: 8%;

`;
const MainRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // align-items: stretch;

  height:41rem;


`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 3rem;
  // margin-top: 5.5%;


`;

const FirstRowLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const SecondRowLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: flex-end;
  // align-items: center;
  margin-left: 10rem;
`;


const CenterSide = styled.div`
display: flex;
flex-direction: column;
margin-top: 9rem;

`;

const RightSide = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
// margin-top: 5.5%;
// height:35rem;
margin-right: 3rem;
margin-top: 6rem;
margin-bottom: 6rem;



`;

const FirstRowRightSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const SecondRowRightSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  // align-items: center;
  margin-right: 10rem;
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-top: 11%;
  // width: 32.625rem;
`;
const SecondaryMessage = styled.h2`
  // width: 330px;
  // height: 17px;
  

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  
  color: #CA715E;
`;

const MainMessage = styled.h1`
width: 32.625rem;
// height: 132px;
// left: 0px;
// top: 45px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  text-align: center;


  color: #FFFFFF;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // align-items: center;

  width: 338px;
  // height: 48px;
  // left: 92px;
  // top: 205px;

  //margin: 28px 0px;

`;

const ButtonOrange = styled.button`
  width: 10.375rem;
  height: 3rem;

  background: #E0644A;
  box-shadow: 0px 4px 40px rgba(127, 73, 183, 0.25);
  border: 1px solid #E0644A;
  // box-sizing: border-box;
  border-radius: 36px;

  // margin: 0px 28px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  // line-height: 16px;

  color: #FFFFFF;

`;

const ButtonWhite = styled.button`
  width: 9rem;
  height: 3rem;

  background: #FFFFFF;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 21px;


  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  // line-height: 16px;

  color: #23344D;

`;
const PersonRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 5rem;
  margin-right: 3rem;
`;

const PersonCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 12.875rem;
  height: 4rem;

  background: #FFFFFF;
  box-shadow: 0px 8px 16px rgba(35, 52, 77, 0.1);
  border-radius: 28px;
`;

const CardThumbnail = styled.img`
  margin: 0rem 0.5rem;
`;
const NamePrizeText = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  // line-height: 15px;

  color: #23344D;
`;

const FooterText = styled.p`


font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 13px;
// line-height: 20px;

color: #8997AB;

margin: 0rem 0rem;



`;

const FooterHeading = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  // line-height: 16px;

  color: #23344D;

  margin: 0rem 0rem;

`;

export default function Home() {
  return (
    <>
      <Head>
        <title>PoolParty</title>
      </Head>
      <MainColumn>
        <MainRow>

          <LeftSide>
            <FirstRowLeftSide>
              <PersonCard>
                <CardThumbnail src='/thumbnail4.svg' alt='TN'></CardThumbnail>
                <NamePrizeText>
                  <FooterHeading>Jason Keller</FooterHeading>
                  <FooterText>
                   Won $10,000 
                  </FooterText>
                </NamePrizeText>
              </PersonCard>
            </FirstRowLeftSide>
            <SecondRowLeftSide>
              <PersonCard>
                <CardThumbnail src='/thumbnail3.svg' alt='TN'></CardThumbnail>
                <NamePrizeText>
                  <FooterHeading>Sarah Perkins</FooterHeading>
                  <FooterText>
                   Won $80,000 
                  </FooterText>
                </NamePrizeText>
              </PersonCard>
            </SecondRowLeftSide>
          </LeftSide>

          <CenterSide>
            <CenterContent>
              <SecondaryMessage>A DECENTRALIZED BINANCE LOTTERY GAME</SecondaryMessage>
              <MainMessage>Small pools, huge payouts. The Binance lottery making crypto holders wealthy.</MainMessage>
              <ButtonsRow>
                <ButtonOrange>Enter A Lottery</ButtonOrange>
                <ButtonWhite>Learn More</ButtonWhite>
              </ButtonsRow>
            </CenterContent>
          </CenterSide>

          <RightSide>
            <FirstRowRightSide>
              <PersonCard>
                <CardThumbnail src='/thumbnail1.svg' alt='TN'></CardThumbnail>
                <NamePrizeText>
                  <FooterHeading>Patricia Thompson</FooterHeading>
                  <FooterText>
                   Won $50,000 
                  </FooterText>
                </NamePrizeText>
              </PersonCard>
            </FirstRowRightSide>

            <SecondRowRightSide>
              <PersonCard>
                <CardThumbnail src='/thumbnail2.svg' alt='TN'></CardThumbnail>
                <NamePrizeText>
                  <FooterHeading>David Meddow</FooterHeading>
                  <FooterText>
                   Won $120,000 
                  </FooterText>
                </NamePrizeText>
              </PersonCard>
            </SecondRowRightSide>
          </RightSide>
            
          
            
        </MainRow>
      </MainColumn>
    </>
  );
}

