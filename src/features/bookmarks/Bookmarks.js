import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Home, ArrowUp, ArrowDown, Filter, RefreshCcw } from "react-feather";

import { BREAKPOINTS, HEADER_NAVIGATION } from "../../constants";
import LanguageForm from "../languageForm/LanguageForm";

const Container = styled.div`
  padding: 4rem 1rem;
  width: 100%;
  margin: 0 auto;
  max-width: ${BREAKPOINTS.LARGE_DEVICES};
`;

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.bookmarksTextColor};
  font-size: 15px;
  text-decoration: none;
  overflow-wrap: anywhere;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  margin-bottom: 2rem;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 50%;
  }
`;

function Bookmarks() {
  const { t } = useTranslation();

  return (
    <Container>
      <Nav>
        {HEADER_NAVIGATION.map(
          (item) =>
            !item.hidden && (
              <StyledNavLink key={item.value} to={item.value}>
                {item.icon === "1" ? (
                  <Home style={{ marginRight: "1rem" }} />
                ) : null}
                {item.icon === "2" ? (
                  <RefreshCcw style={{ marginRight: "1rem" }} />
                ) : null}
                {item.icon === "3" ? (
                  <ArrowUp style={{ marginRight: "1rem" }} />
                ) : null}
                {item.icon === "4" ? (
                  <ArrowDown style={{ marginRight: "1rem" }} />
                ) : null}
                {item.icon === "5" ? (
                  <Filter style={{ marginRight: "1rem" }} />
                ) : null}
                {t(item.label)}
              </StyledNavLink>
            )
        )}
      </Nav>
      <FormWrapper>
        <LanguageForm />
      </FormWrapper>
    </Container>
  );
}

export default Bookmarks;
