import React from "react";
import URL from "url";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import GoogleMeetLogo from "./icons/googlemeet.png";
import ZoomLogo from "./icons/zoom.png";

const defaultIcon = (
  <InsertLinkIcon fontSize="inherit" className="text-primary" />
);
const domainIcons: { [domain: string]: React.ReactElement } = {
  "meet.google.com": (
    <img width="16" src={GoogleMeetLogo} style={{ verticalAlign: "middle" }} />
  ),
  "zoom.us": (
    <img width="16" src={ZoomLogo} style={{ verticalAlign: "middle" }} />
  ),
};

interface MyProps {
  link: string;
}

const LinkIcon: React.FC<MyProps> = ({ link }) => {
  const url = URL.parse(link);
  const hostname = url.hostname || "";
  console.log(hostname);

  const foundDomain: string | undefined = Object.keys(
    domainIcons
  ).find((domain) => hostname.includes(domain));
  const icon = foundDomain ? domainIcons[foundDomain] : defaultIcon;

  return icon;
};

export default LinkIcon;
