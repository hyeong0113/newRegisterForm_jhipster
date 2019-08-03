import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CreateMember from './create-member';
import RegisterMemberDetail from './create-member-detail';
import CreateMemberUpdate from './create-member-update';
import RegisterMemberDeleteDialog from './create-member-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CreateMemberUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CreateMemberUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={RegisterMemberDetail} />
      <ErrorBoundaryRoute path={match.url} component={CreateMember} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={RegisterMemberDeleteDialog} />
  </>
);

export default Routes;
