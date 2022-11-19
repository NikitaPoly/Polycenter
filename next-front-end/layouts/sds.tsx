import BottomNavigation from "@mui/material/BottomNavigation/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { useState } from "react";
import styles from "./sds.module.css";

export default function sds(props: any) {
  const [value, setValue] = useState("");
  return (
    <>
      {props.children}
      <BottomNavigation
        className={styles.Nav}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ width: "100%" }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Order" icon={<FoodBankIcon />} />
        <BottomNavigationAction label="Deliver" icon={<ReceiptIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsApplicationsIcon />} />
      </BottomNavigation>
    </>
  );
}
