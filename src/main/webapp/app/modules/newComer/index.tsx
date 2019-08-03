import React from 'react';
import { Switch } from 'react-router-dom';

// tslint:disable-next-line:no-unused-variable
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CreateMember from './create-member';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      <ErrorBoundaryRoute path={`${match.url}/create-member`} component={CreateMember} />
    </Switch>
  </div>
);

export default Routes;
