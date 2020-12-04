import React from "react";
import styled from "styled-components";

const PaginatorControls = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginatorControl = styled.button`
  width: 5rem;
  padding: 0.25rem 0;
  margin: 0 1rem;
  border: 1px solid #3b0062;
  background: transparent;
  font: inherit;
  cursor: pointer;
  font-size: 1rem;
  color: #3b0062;

  &.active {
    color: #fab83f;
    border-color: #fab83f;
  }

  &:hover {
    color: #fab83f;
    border-color: #fab83f;
  }

  &:hover {
    outline: none;
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
