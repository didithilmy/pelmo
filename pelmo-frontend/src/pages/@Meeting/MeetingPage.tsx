import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import LockIcon from "@material-ui/icons/Lock";
import PublicIcon from "@material-ui/icons/Public";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import DateRangeIcon from "@material-ui/icons/DateRange";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import { useStyles } from "./styles";
import LinkButton from "../../components/@LinkButton/LinkButton";
import MeetingAgenda from "../../components/@MeetingAgenda/MeetingAgenda";

const ProtectedLevel = () => {
  const classes = useStyles();
  return (
    <>
      <LockIcon className={classes.inlineIcon} fontSize="inherit" /> Protected
    </>
  );
};

const PublicLevel = () => {
  const classes = useStyles();
  return (
    <>
      <PublicIcon className={classes.inlineIcon} fontSize="inherit" /> Public
    </>
  );
};

const UnlistedLevel = () => {
  const classes = useStyles();
  return (
    <>
      <VisibilityOffIcon className={classes.inlineIcon} fontSize="inherit" />{" "}
      Unlisted
    </>
  );
};

const MeetingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar>
        <Container className="px-2">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title={<ProtectedLevel />} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <PublicLevel />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <UnlistedLevel />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <ProtectedLevel />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="my-4">
        <h2 className="font-weight-bold">Mini Town Hall #1</h2>
        <div className="text-secondary mt-1">
          <DateRangeIcon fontSize="inherit" className={classes.inlineIcon} />
          <span className="ml-1">Wed, 17 Sep 2020, 12:00 &rarr; 14:00</span>
        </div>
        <div className="text-secondary mt-1">
          <RecordVoiceOverIcon
            fontSize="inherit"
            className={classes.inlineIcon}
          />
          <span className="mx-1">
            Luthfi Eko Trinowo <small>(HMIF)</small>
          </span>
          &bull;
          <span className="mx-1">
            Pandyaka Aptanagi <small>(HMIF)</small>
          </span>
        </div>
        <div className="mt-4">
          <b>Description</b>
          <p className="text-secondary mt-1">
            Mini Town Hall akan membahas seputar progress divisi-divisi untuk
            mengupdate divisi lain serta melakukan koordinasi untuk hal-hal yang
            mungkin saling bersinggungan.
          </p>
        </div>
        <div className="mt-2">
          <b>Links</b>
          <div className="mt-1">
            <LinkButton
              title="Google Meet"
              link="https://meet.google.com/abc-defg-hij"
            />
            <LinkButton
              title="Zoom"
              link="https://us04.web.zoom.us/join/12456765432"
            />
            <LinkButton
              title="Dokumen Mini Town Hall #1"
              link="https://drive.google.com/abc-defg-hij"
            />
          </div>
        </div>
        <div className="mt-5">
          <MeetingAgenda />
          <MeetingAgenda />
        </div>
      </Container>
    </>
  );
};

export default MeetingPage;
