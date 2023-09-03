import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";

type Props = {};

const SideBar = (props: Props) => {
  const theme = useTheme();
  const sideNav = [
    { id: 1, name: "Dashboard", icon: <InboxIcon />, url:"/admin/dashboard"},
    { id: 1, name: "Category", icon: <InboxIcon />, url:"/admin/category" },
    { id: 1, name: "Posts", icon: <InboxIcon />, url:"/admin/posts" },
  ];
  return (
    <div>
      <Toolbar
        sx={{
          bgcolor: theme.palette.layoutColor.main,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
          boxShadow: 1,
        }}
      >
        <Typography>MUI V5 DASHBOARD</Typography>
      </Toolbar>

      <List>
        {sideNav.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton LinkComponent={Link} href={text.url} >
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
