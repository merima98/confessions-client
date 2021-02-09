import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { BREAKPOINTS } from "../../constants";

const PaginatorControls = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    flex-direction: row;
    justify-content: center;
  }
`;

const PaginatorControl = styled.button`
  width: 50%;
  margin: 0 1rem;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  cursor: pointer;
  font-size: 15px;
  color: ${(props) => props.theme.colors.borderColor};
  outline: none;
  background-color: ${(props) => props.theme.colors.body};
  &:hover {
    border-top: 1px solid ${(props) => props.theme.colors.borderColor};
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
    border-left: none;
    border-right: none;
    background-color: ${(props) => props.theme.colors.background};
  }
`;

function Paginator(props) {
  const { t } = useTranslation();
  const { currentPage, lastPage, onPrevious, onNext } = props;
  return (
    <div className="paginator">
      <PaginatorControls>
        {currentPage > 0 && (
          <PaginatorControl onClick={onPrevious}>
            {t("Previous")}
          </PaginatorControl>
        )}
        {currentPage < lastPage && (
          <PaginatorControl onClick={onNext}>{t("Next")}</PaginatorControl>
        )}
      </PaginatorControls>
    </div>
  );
}

export default Paginator;
