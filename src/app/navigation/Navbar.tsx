import React from 'react';
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import routes from './routes';
import useLayout from '../hooks/useLayout';
import { useNavbarContext } from './NavbarContext';
import './Navbar.scss';
import useTheme from '../hooks/useTheme';

const navLinks = [
  {
    ...routes.home,
  },
  {
    ...routes.example,
  },
  {
    ...routes.products,
  },
  // ... other nav links
];

const NavigationBar: React.FC = () => {
  const { isLg } = useLayout();
  const { isDark, setTheme } = useTheme();
  const { isExpanded, toggleExpanded } = useNavbarContext(); // Use the hook

  return (
    <>
      <Navbar
        className={clsx(isLg && 'mt-2', 'bg-body-none mb-2')}
        expand="lg"
        collapseOnSelect
        // OVERRIDING DEFAULT BEHAVIOUR
        onToggle={toggleExpanded}
        expanded={isExpanded}
      >
        <Container>
          <Navbar.Brand
            href={routes.home.to}
            className="secondary-heading"
            style={{ zIndex: 5 }}
          >
            BRAND NAME
          </Navbar.Brand>
          <Stack direction="horizontal" gap={3}>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className={clsx(
                  isLg
                    ? 'fs-5'
                    : 'fs-1 position-fixed top-0 start-0 w-100 h-100',
                  isDark ? 'bg-dark' : 'bg-white',
                  'ms-auto'
                )}
                style={{ zIndex: 4 }}
              >
                {navLinks.map((link, index) => (
                  <Nav.Link
                    key={index}
                    eventKey={link.eventKey}
                    as={NavLink}
                    to={link.to}
                  >
                    {link.label}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
            <Button
              variant={isDark ? 'outline-light ' : 'outline-dark'}
              onClick={() => {
                setTheme(isDark);
              }}
              className="theme-switch border border-opacity-50"
              aria-label="Toggle Theme"
            >
              <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
            </Button>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="hamburger"
              style={{ zIndex: 5 }}
            >
              <span
                className={clsx('line line-1', isDark ? 'bg-light' : 'bg-dark')}
              ></span>
              <span
                className={clsx('line line-2', isDark ? 'bg-light' : 'bg-dark')}
              ></span>
              <span
                className={clsx('line line-3', isDark ? 'bg-light' : 'bg-dark')}
              ></span>
            </Navbar.Toggle>
          </Stack>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
