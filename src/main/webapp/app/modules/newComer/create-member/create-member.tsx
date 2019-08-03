import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction, TextFormat, getSortState, IPaginationBaseState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities, reset } from './create-member.reducer';
import { ICreateMember } from 'app/shared/model/create-member.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface ICreateMemberProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type ICreateMemberState = IPaginationBaseState;

export class CreateMember extends React.Component<ICreateMemberProps, ICreateMemberState> {
  state: ICreateMemberState = {
    ...getSortState(this.props.location, ITEMS_PER_PAGE)
  };

  componentDidMount() {
    this.reset();
  }

  componentDidUpdate() {
    if (this.props.updateSuccess) {
      this.reset();
    }
  }

  reset = () => {
    this.props.reset();
    this.setState({ activePage: 1 }, () => {
      this.getEntities();
    });
  };

  handleLoadMore = () => {
    if (window.pageYOffset > 0) {
      this.setState({ activePage: this.state.activePage + 1 }, () => this.getEntities());
    }
  };

  sort = prop => () => {
    this.setState(
      {
        order: this.state.order === 'asc' ? 'desc' : 'asc',
        sort: prop
      },
      () => {
        this.reset();
      }
    );
  };

  getEntities = () => {
    const { activePage, itemsPerPage, sort, order } = this.state;
    this.props.getEntities(activePage - 1, itemsPerPage, `${sort},${order}`);
  };

  render() {
    const { createMemberList, match } = this.props;
    return (
      <div>
        <h2 id="create-member-heading">
          <Translate contentKey="newRegisterFormApp.createMember.home.title">Listed Members</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="newRegisterFormApp.createMember.home.createLabel">Create new Member</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          <InfiniteScroll
            pageStart={this.state.activePage}
            loadMore={this.handleLoadMore}
            hasMore={this.state.activePage - 1 < this.props.links.next}
            loader={<div className="loader">Loading ...</div>}
            threshold={0}
            initialLoad={false}
          >
            {createMemberList && createMemberList.length > 0 ? (
              <Table responsive>
                <thead>
                  <tr>
                    <th className="hand" onClick={this.sort('id')}>
                      <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('korName')}>
                      <Translate contentKey="newRegisterFormApp.createMember.korName">Kor Name</Translate> <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('engName')}>
                      <Translate contentKey="newRegisterFormApp.createMember.engName">Eng Name</Translate> <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('birthday')}>
                      <Translate contentKey="newRegisterFormApp.createMember.birthday">Birthday</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('gender')}>
                      <Translate contentKey="newRegisterFormApp.createMember.gender">Gender</Translate> <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('city')}>
                      <Translate contentKey="newRegisterFormApp.createMember.city">City</Translate> <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('province')}>
                      <Translate contentKey="newRegisterFormApp.createMember.province">Province</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('postalCode')}>
                      <Translate contentKey="newRegisterFormApp.createMember.postalCode">Postal Code</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('cellPhone')}>
                      <Translate contentKey="newRegisterFormApp.createMember.cellPhone">Cell Phone</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('emailAddress')}>
                      <Translate contentKey="newRegisterFormApp.createMember.emailAddress">Email Address</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {createMemberList.map((createMember, i) => (
                    <tr key={`entity-${i}`}>
                      <td>
                        <Button tag={Link} to={`${match.url}/${createMember.id}`} color="link" size="sm">
                          {createMember.id}
                        </Button>
                      </td>
                      <td>{createMember.korName}</td>
                      <td>{createMember.engName}</td>
                      <td>
                        <TextFormat type="date" value={createMember.birthday} format={APP_LOCAL_DATE_FORMAT} />
                      </td>
                      <td>
                        <Translate contentKey={`newRegisterFormApp.Gender.${createMember.gender}`} />
                      </td>
                      <td>{createMember.city}</td>
                      <td>
                        <Translate contentKey={`newRegisterFormApp.Province.${createMember.province}`} />
                      </td>
                      <td>{createMember.postalCode}</td>
                      <td>{createMember.cellPhone}</td>
                      <td>{createMember.emailAddress}</td>
                      <td className="text-right">
                        <div className="btn-group flex-btn-group-container">
                          <Button tag={Link} to={`${match.url}/${createMember.id}`} color="info" size="sm">
                            <FontAwesomeIcon icon="eye" />{' '}
                            <span className="d-none d-md-inline">
                              <Translate contentKey="entity.action.view">View</Translate>
                            </span>
                          </Button>
                          <Button tag={Link} to={`${match.url}/${createMember.id}/edit`} color="primary" size="sm">
                            <FontAwesomeIcon icon="pencil-alt" />{' '}
                            <span className="d-none d-md-inline">
                              <Translate contentKey="entity.action.edit">Edit</Translate>
                            </span>
                          </Button>
                          <Button tag={Link} to={`${match.url}/${createMember.id}/delete`} color="danger" size="sm">
                            <FontAwesomeIcon icon="trash" />{' '}
                            <span className="d-none d-md-inline">
                              <Translate contentKey="entity.action.delete">Delete</Translate>
                            </span>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <div className="alert alert-warning">
                <Translate contentKey="newRegisterFormApp.registerMember.home.notFound">No Register Members found</Translate>
              </div>
            )}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ createMember }: IRootState) => ({
  createMemberList: createMember.entities,
  totalItems: createMember.totalItems,
  links: createMember.links,
  entity: createMember.entity,
  updateSuccess: createMember.updateSuccess
});

const mapDispatchToProps = {
  getEntities,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMember);
