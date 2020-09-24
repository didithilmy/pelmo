import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import TimerIcon from "@material-ui/icons/Timer";
import LinkButton from "../@LinkButton/LinkButton";
import { Speaker, Link } from "../../types";

interface MyProps {
  startTime: string;
  endTime: string;
  duration: string;
  title: string;
  speakers: Speaker[];
  links: Link[];
}

const MeetingAgenda: React.FC = () => {
  return (
    <div className="my-2">
      <Row>
        <Col lg={2} md={3} xs={6}>
          <Badge variant="primary">12:00</Badge>
          <small className="text-primary">
            &nbsp;&rarr;&nbsp;
            <span>14:00</span>
          </small>
        </Col>
        <Col
          md={{ order: 3, span: 2 }}
          xs={6}
          className="text-right text-secondary"
        >
          <small>
            <TimerIcon fontSize="small" className="mr-1" />
            10 min
          </small>
        </Col>
        <Col lg={8} md={{ order: 2, span: 7 }} xs={12}>
          <div className="font-weight-bold">Pembukaan</div>
          <div className="text-secondary">
            <small>
              <b>Speaker: </b>
              Luthfi Eko Trinowo (HMIF)
            </small>
          </div>
          <div className="mt-1 mb-2">
            <LinkButton
              title="Dokumen Mini Town Hall #1"
              link="https://drive.google.com/abc-defg-hij"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MeetingAgenda;
