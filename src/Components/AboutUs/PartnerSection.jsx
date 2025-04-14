import { Box, Grid2, Typography } from '@mui/material';
import React from 'react';

import PartnersBg from './Images/PartnersBg.png';
import aeroPlazaLogo from './Images/aeroPlazaLogo.png';
import floranceLogo from './Images/floranceEstateLogo.png';
import rajputLogo from './Images/rajputGroupLogo.png';
import westHighLogo from './Images/westHighlanderLogo.png';
import whiteRayLogo from './Images/whiterayLogo.png';
import aadiSoftLogo from './Images/AadiSoftLogo.jpg';
import aboardLogo from './Images/AbroadFliersLogo.png';
import aeboLogo from './Images/AebocodeLogo.png';
import AmCareLogo from './Images/AmCareLogo.jpeg';
import farlexLogo from './Images/FarlexLogo.jpg';
import IvsLogo from './Images/IvsLogo.jpg';
import JDevelopersLogo from './Images/JDevelopers.png';
import eventLogo from './Images/eventHolidaysLogo.png';
import futureITLogo from './Images/FutureITLogo.png';
import jungleWorksLogo from './Images/JungleworksLogo.png';
import RBLLogo from './Images/RBLLogo.png';
import RGLogo from './Images/RGGroupsLogo.png';
import CompanySwiper from './CompanySwiper';

const PartnerSection = () => {
  const companyItems = [
    { image: aeroPlazaLogo },
    { image: floranceLogo },
    { image: rajputLogo },
    { image: westHighLogo },
    { image: whiteRayLogo },
    { image: aadiSoftLogo },
    { image: aboardLogo },
    { image: aeboLogo },
    { image: AmCareLogo },
    { image: farlexLogo },
    { image: IvsLogo },
    { image: JDevelopersLogo },
    { image: eventLogo },
    { image: futureITLogo },
    // { image: jungleWorksLogo },
    { image: RBLLogo },
    { image: RGLogo },
  ];
  return (
    <>
      <Box sx={{ width: '100%', mx: 'auto' }}>
        <Grid2
          container
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: { xs: 8, md: 3 },
            pb: { xs: 5, md: 3 },
            backgroundImage: { xs: 'none', md: `url(${PartnersBg})` },
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
          }}
        >
          <Grid2 item xs={12}>
            <Typography
              data-aos='fade-up'
              variant='h3'
              component='h2'
              sx={{
                textAlign: 'center',
                pt: { xs: 0, md: 8 },
                fontSize: { xs: '35px', md: '45px' },
              }}
            >
              Our{' '}
              <span
                style={{
                  color: 'green',
                }}
              >
                Partners
              </span>
            </Typography>
          </Grid2>
        </Grid2>
        <CompanySwiper companyItems={companyItems} />
      </Box>
    </>
  );
};

export default PartnerSection;
