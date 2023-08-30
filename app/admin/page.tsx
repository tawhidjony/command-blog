"use client";

import { Box, Button, Divider, Paper } from "@mui/material";
import Link from "next/link";

type Props = {};

const AdminDashboard = (props: Props) => {
  return (
    <>
      <Paper sx={{ padding: "1rem" }}>
        <Box>Basic Button</Box>
        <Divider sx={{ mb: 2 }} />

        <Box flexDirection={"row"} gap={2}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Divider />
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="text" color="primary">
            Text
          </Button>
          <Button
            LinkComponent={Link}
            href="/admin"
            variant="text"
            color="primary"
          >
            Link Next JS
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default AdminDashboard;
