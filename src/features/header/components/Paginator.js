import React from "react";
import styled from "styled-components";

const PaginatorControls = styled.div`
  display: flex;
  justify-content: center;
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
  const { currentPage, lastPage, onPrevious, onNext } = props;
  return (
    <div className="paginator">
      <PaginatorControls>
        {currentPage > 0 && (
          <PaginatorControl onClick={onPrevious}>Previous</PaginatorControl>
        )}
        {currentPage < lastPage - 1 && (
          <PaginatorControl onClick={onNext}>Next</PaginatorControl>
        )}
      </PaginatorControls>
    </div>
  );
}

export default Paginator;
