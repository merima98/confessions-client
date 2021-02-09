import React from "react";
import { format } from "date-fns";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { ThumbsDown, ThumbsUp } from "react-feather";
import { BREAKPOINTS } from "../../constants";

const StyledPost = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

const Time = styled.span`
  color: #65676b;
  font-size: 13px;
  font-family: Segoe UI Historic;
  background-color: ${(props) => props.theme.colors.background};
`;

const Body = styled.p`
  overflow-wrap: anywhere;
  color: ${(props) => props.theme.colors.color};
  font-size: 20px;
  font-family: Segoe UI Historic;
  background-color: ${(props) => props.theme.colors.background};
  margin: 0;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font-size: 24px;
  }
`;

const Likes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 6px;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: 10px 0px;
`;
const Like = styled.span`
  color: #65676b;
  text-align: center;
  font-size: 15px;
  font-family: Segoe UI Historic;
`;

function Post(props) {
  const { body, date, totalDownvotes, totalUpvotes } = props;
  const { t } = useTranslation();

  let time = `${format(Date.parse(date), "dd.MM.yyyy")}. ${t("at")} ${format(
    Date.parse(date),
    "kk:mm"
  )}`;

  if (
    format(Date.now(), "yyyy/MM/dd") === format(Date.parse(date), "yyyy/MM/dd")
  ) {
    if (
      Number(format(Date.parse(date), "kk")) < Number(format(Date.now(), "kk"))
    ) {
      time = `${Number(
        format(Date.now(), "kk") - Number(format(Date.parse(date), "kk"))
      )}h`;
    }
    if (
      Number(format(Date.parse(date), "kk")) ===
      Number(format(Date.now(), "kk"))
    ) {
      if (
        Number(format(Date.parse(date), "mm")) >
        Number(format(Date.now(), "mm"))
      ) {
        time = `${
          Number(format(Date.now(), "mm")) +
          (60 - Number(format(Date.parse(date), "mm")))
        } min`;
      } else if (
        Number(format(Date.now(), "mm")) -
          Number(format(Date.parse(date), "mm")) <
        1
      ) {
        time = `${t("Just now")}`;
      } else {
        time = `${
          Number(format(Date.now(), "mm")) -
          Number(format(Date.parse(date), "mm"))
        } min`;
      }
    }
  }
  return (
    <StyledPost>
      <Time>{time}</Time>
      <Body>{body}</Body>
      <Likes>
        <Like>
          <ThumbsUp style={{ width: "15px", height: "15px" }} /> {totalUpvotes}
        </Like>
        <Like>
          <ThumbsDown style={{ width: "15px", height: "15px" }} />{" "}
          {totalDownvotes}
        </Like>
      </Likes>
    </StyledPost>
  );
}

export default Post;
