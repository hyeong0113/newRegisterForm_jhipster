import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const NewComerMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="th-list" name={translate('global.menu.newComer.main')} id="newComer-menu">
    <MenuItem icon="asterisk" to="/newComer/create-member">
      <Translate contentKey="global.menu.newComer.createMember" />
    </MenuItem>
  </NavDropdown>
);
