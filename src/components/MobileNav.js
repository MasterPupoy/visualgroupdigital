import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import logo from '../images/vgd.svg';
import '../styles/mobilenav.css';

export default function MobileNav({ page, main }) {
  const [key, setKey] = useState();

  useEffect(() => {
    let mounted = true;
    
    if(mounted) {
      setKey(page)
    }

    return () => {
      mounted = false;
    }
  }, [page])

  return (
    <Flex
      justifyContent="space-between"
      px="5px"
      pt="10px"
    >
      <Box>
          <img src={logo} alt="visual_group_logo" className="logo" />
      </Box>
      <Menu
        id="menu"
      >
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList
          id="menu"
        >
          <MenuItem>
            <a 
              href={`/`}
              className={
              (key === '/') 
              ? "active"
              : null
            }
            >
              HOME
            </a>
          </MenuItem>
          <MenuItem>
            <a 
              href={`/about`}
              className={
              (key === '/about') 
              ? "active"
              : null
            }
            >
              ABOUT
            </a>
          </MenuItem>
          <MenuItem>
            <a 
              href={`/digital_marketing`}
              className={
              (main === '/marketing') 
              ? "active"
              : null
            }
            >
              MARKETING
            </a>
          </MenuItem>
          <MenuItem>
             <a 
              href={`/digital_branding`}
              className={
                (main === '/branding') 
                ? "active"
                : null
              }
            >
              BRANDING
            </a>
          </MenuItem>
          <MenuItem>
            <a 
              href={`/case_studies`}
              className={
              (key === '/case_studies') 
              ? "active"
              : null
            }
            >
              CASE STUDIES
            </a>
          </MenuItem>
          <MenuItem>
             <a 
              href={`/our_portfolio`}
              className={
              (key === '/our_portfolio') 
              ? "active"
              : null
            }
            >
              OUR PORTFOLIO
            </a>
          </MenuItem>
          <MenuItem>
            <a 
              href={`/contact`}
              className={
              (key === '/contact') 
              ? "active"
              : null
            }
            >
              CONTACT
            </a>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}
