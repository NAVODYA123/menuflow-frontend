/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    localStorage.setItem("token", data.token);
  };

  return (
    <div className="p-4">
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Dialog,
//   TextField,
//   Box,
// } from "@mui/material";

// export default function Home() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* NAVBAR */}
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             MenuFlow
//           </Typography>

//           <Button color="inherit" onClick={() => setOpen(true)}>
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* HERO */}
//       <Container sx={{ textAlign: "center", py: 10 }}>
//         <Typography variant="h3" gutterBottom>
//           Turn Your Restaurant Digital
//         </Typography>

//         <Typography variant="h6" color="text.secondary" gutterBottom>
//           QR menus, instant ordering, no app required
//         </Typography>

//         <Box mt={4}>
//           <Button variant="contained" size="large" sx={{ mr: 2 }}>
//             Get Started
//           </Button>

//           <Button variant="outlined" size="large" onClick={() => setOpen(true)}>
//             Admin Login
//           </Button>
//         </Box>
//       </Container>

//       {/* FEATURES */}
//       <Container sx={{ py: 8 }}>
//         <Grid container spacing={4}>
//           <Feature title="QR Menu" desc="Scan & order instantly" />
//           <Feature title="Live Orders" desc="Real-time updates" />
//           <Feature title="Dashboard" desc="Manage your restaurant easily" />
//         </Grid>
//       </Container>

//       {/* LOGIN DIALOG */}
//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <Box p={4} width={300}>
//           <Typography variant="h6" gutterBottom>
//             Admin Login
//           </Typography>

//           <TextField fullWidth label="Email" margin="normal" />

//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             margin="normal"
//           />

//           <Button fullWidth variant="contained" sx={{ mt: 2 }}>
//             Login
//           </Button>
//         </Box>
//       </Dialog>
//     </>
//   );
// }

// function Feature({ title, desc }: any) {
//   return (
//     <Grid item xs={12} md={4}>
//       <Card>
//         <CardContent>
//           <Typography variant="h6">{title}</Typography>
//           <Typography color="text.secondary">{desc}</Typography>
//         </CardContent>
//       </Card>
//     </Grid>
//   );
// }
