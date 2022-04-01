import styled from "styled-components";
import React, { useState, useEffect } from "react";

function Pagination({ total, limit, page, setPage }) {
  const [currentPages, setCurrentPages] = useState(null)
  const pageDivide = [];
  const numPages = Math.ceil(total / limit);
  const numArray = Array(numPages).fill().map(function (_, i) {
    return i + 1
  })
  for (let i = 0; i < numArray.length; i += 10) {
    pageDivide.push(numArray.slice(i, i + 10));
  }

  const pagesHandler = function (e) {
    e.preventDefault();
    if (e.target.id === "prev") {
      let prev = currentPages[0] - 10
      let value = String(prev)[0]
      setCurrentPages(pageDivide[Number(value)])
      if (value === "1") {
        setCurrentPages(pageDivide[0])
      }
    } else {
      let next = currentPages[0] + 10
      let value = String(next)[0]
      setCurrentPages(pageDivide[Number(value)])
    }
  }


  useEffect(function () {
    setCurrentPages(pageDivide && pageDivide[0])
  }, [total])
  return total === 0 ? "검색결과가 없습니다" : currentPages ?
    (
      <>
        <Nav>
          <Button onClick={pagesHandler} disabled={currentPages[0] === 1} id="prev">
            &lt;
          </Button>
          {currentPages && currentPages.map((i) => {
            return <Button
              key={i + 1}
              onClick={() => {
                window.scrollTo(0, 0)
                setPage(i)
              }}
              aria-current={page === i ? "page" : null}>
              {i}
            </Button>
          }
          )}
          <Button onClick={pagesHandler} disabled={currentPages[currentPages.length - 1] === numPages} id="next">
            &gt;
          </Button>
        </Nav>
      </>
    ) : null
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`;

const Button = styled.button`
  border: none;
  background: none;
  padding: 10px;
  margin: 0;
  font-size: medium;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  @media only screen and (max-width:768px){
    padding: 5px;
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    font-weight: bold;
    color: tomato;
    cursor: revert;
    transform: revert;
  }`;

export default Pagination;