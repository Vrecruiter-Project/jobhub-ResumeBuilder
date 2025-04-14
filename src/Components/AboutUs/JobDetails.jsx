// import { Box, Grid2, Typography } from '@mui/material'
// import React from 'react'

// const JobDetails = () => {
//   return (
//     <>
//       <Box sx={{
//         py: 5,
//         backgroundColor: "rgba(0, 0, 0, 0.8)",
//         color: "white",
//         width: "100%",
//         display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//       }}>
//         <Grid2 container spacing={5} sx={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}>
//           <Grid2 item xs={12} sx={{
//             margin: "auto"
//           }}>
//             <Box sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               mt: {xs: 4, md: 1},
//             }}>
//               <Typography variant="h5" gutterBottom component="div"
//               style={{
//                 fontWeight: "bold"
//               }}
//               >Live jobs: </Typography>
//               <Typography variant="h5" gutterBottom component="div"
//               style={{
//                 fontWeight: "bold"
//               }}
//               > 1,200</Typography>
//             </Box>
//           </Grid2>
//           <Grid2 item xs={12} sx={{
//             margin: "auto"
//           }}>
//             <Box sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               mt: {xs: 4, md: 1},
//             }}>
//               <Typography variant="h5" gutterBottom component="div" 
//               style={{
//                 fontWeight: "bold"
//               }}
//               >Companies: </Typography>
//               <Typography variant="h5" gutterBottom component="div" 
//               style={{
//                 fontWeight: "bold"
//               }}
//               >200</Typography>
//             </Box>
//           </Grid2>
//           <Grid2 item xs={12} sx={{
//             margin: "auto"
//           }}>
//             <Box sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               mt: {xs: 4, md: 1},
//             }}>
//               <Typography variant="h5" gutterBottom component="div" 
//               style={{
//                 fontWeight: "bold"
//               }}
//               >Process: </Typography>
//               <Typography variant="h5" gutterBottom component="div" 
//               style={{
//                 fontWeight: "bold"
//               }}
//               >550</Typography>
//             </Box>
//           </Grid2>
//         </Grid2>
//       </Box>
//     </>
//   )
// }

// export default JobDetails


import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";

const Statistic = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mt: { xs: 5, md: 1 },
      mx: 2
    }}
  >
    <Typography
      variant="h5"
      gutterBottom
      component="div"
      sx={{
        fontWeight: "bold",
        mr: 1,
      }}
    >
      {label}
    </Typography>
    <Typography
      variant="h5"
      gutterBottom
      component="div"
      sx={{ fontWeight: "bold" }}
    >
      <CountUp end={value} duration={15} separator="," />
    </Typography>
  </Box>
);

const JobDetails = () => {
  const stats = [
    { label: "Live jobs:", value: 1200 },
    { label: "Companies:", value: 200 },
    { label: "Process:", value: 550 },
  ];

  return (
    <Box
      sx={{
        py: 5,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid2
        container
        spacing={5}
        sx={{
          width: "100%",
          justifyContent: { xs: "center", md: "space-around", xl: "space-around" },
          alignItems: "center",
        }}
      >


        {stats.map((stat, index) => (
          <Grid2
            item
            xs={12}
            md={4}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Statistic label={stat.label} value={stat.value} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default JobDetails;
