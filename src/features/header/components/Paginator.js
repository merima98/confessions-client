import React from "react";
import styled from "styled-components";

const PaginatorControls = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginatorControl = styled.button`
  width: 5rem;
  padding: 0.2rem 0;
  margin: 0 1rem;
  border: 1px solid #999999;
  background: transparent;
  font: inherit;
  cursor: pointer;
  font-size: 0.5rem;
  color: #999999;

  &.active {
    color: #4d4d4d;
    border-color: #4d4d4d;
  }

  &:hover {
    color: #4d4d4d;
    border-color: #4d4d4d;
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
