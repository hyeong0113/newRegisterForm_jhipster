import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction, TextFormat, getSortState, IPaginationBaseState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities, reset } from './register-member.reducer';
import { IRegisterMember } from 'app/shared/model/register-member.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface IRegisterMemberProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type IRegisterMemberState = IPaginationBaseState;

export class RegisterMember extends React.Component<IRegisterMemberProps, IRegisterMemberState> {
  state: IRegisterMemberState = {
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
    const { registerMemberList, match } = this.props;
    return (
      <div>
        <h2 id="register-member-heading">
          <Translate contentKey="newRegisterFormApp.registerMember.home.title">Register Members</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="newRegisterFormApp.registerMember.home.createLabel">Create new Register Member</Translate>
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
            {registerMemberList && registerMemberList.length > 0 ? (
              <Table responsive>
                <thead>
                  <tr>
                    <th className="hand" onClick={this.sort('id')}>
                      <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('previousRegister')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.previousRegister">Previous Register</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('korName')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.korName">Kor Name</Translate> <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('engName')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.engName">Eng Name</Translate> <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('birthday')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.birthday">Birthday</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('gender')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.gender">Gender</Translate> <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('firstStreet')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.firstStreet">First Street</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('secondStreet')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.secondStreet">Second Street</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('city')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.city">City</Translate> <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('province')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.province">Province</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('postalCode')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.postalCode">Postal Code</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('cellPhone')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.cellPhone">Cell Phone</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('residentialPhone')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.residentialPhone">Residential Phone</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('emailAddress')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.emailAddress">Email Address</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('profession')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.profession">Profession</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('companyName')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.companyName">Company Name</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('firstLicenseplate')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.firstLicenseplate">First Licenseplate</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('secondLicenseplate')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.secondLicenseplate">Second Licenseplate</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('immigrationStatus')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.immigrationStatus">Immigration Status</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('baptismType')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.baptismType">Baptism Type</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('baptismYear')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.baptismYear">Baptism Year</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('baptismChurch')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.baptismChurch">Baptism Church</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('dutyStatus')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.dutyStatus">Duty Status</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('prevChurch')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.prevChurch">Prev Church</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('instructor')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.instructor">Instructor</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('volunteer')}>
                      <Translate contentKey="newRegisterFormApp.registerMember.volunteer">Volunteer</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {registerMemberList.map((registerMember, i) => (
                    <tr key={`entity-${i}`}>
                      <td>
                        <Button tag={Link} to={`${match.url}/${registerMember.id}`} color="link" size="sm">
                          {registerMember.id}
                        </Button>
                      </td>
                      <td>{registerMember.previousRegister}</td>
                      <td>{registerMember.korName}</td>
                      <td>{registerMember.engName}</td>
                      <td>
                        <TextFormat type="date" value={registerMember.birthday} format={APP_LOCAL_DATE_FORMAT} />
                      </td>
                      <td>
                        <Translate contentKey={`newRegisterFormApp.Gender.${registerMember.gender}`} />
                      </td>
                      <td>{registerMember.firstStreet}</td>
                      <td>{registerMember.secondStreet}</td>
                      <td>{registerMember.city}</td>
                      <td>
                        <Translate contentKey={`newRegisterFormApp.Province.${registerMember.province}`} />
                      </td>
                      <td>{registerMember.postalCode}</td>
                      <td>{registerMember.cellPhone}</td>
                      <td>{registerMember.residentialPhone}</td>
                      <td>{registerMember.emailAddress}</td>
                      <td>{registerMember.profession}</td>
                      <td>{registerMember.companyName}</td>
                      <td>{registerMember.firstLicenseplate}</td>
                      <td>{registerMember.secondLicenseplate}</td>
                      <td>
                        <Translate contentKey={`newRegisterFormApp.ImmigrationStatus.${registerMember.immigrationStatus}`} />
                      </td>
                      <td>
                        <Translate contentKey={`newRegisterFormApp.Baptism.${registerMember.baptismType}`} />
                      </td>
                      <td>{registerMember.baptismYear}</td>
                      <td>{registerMember.baptismChurch}</td>
                      <td>
                        <Translate contentKey={`newRegisterFormApp.DutyStatus.${registerMember.dutyStatus}`} />
                      </td>
                      <td>{registerMember.prevChurch}</td>
                      <td>{registerMember.instructor}</td>
                      <td>
                        <Translate contentKey={`newRegisterFormApp.Volunteer.${registerMember.volunteer}`} />
                      </td>
                      <td className="text-right">
                        <div className="btn-group flex-btn-group-container">
                          <Button tag={Link} to={`${match.url}/${registerMember.id}`} color="info" size="sm">
                            <FontAwesomeIcon icon="eye" />{' '}
                            <span className="d-none d-md-inline">
                              <Translate contentKey="entity.action.view">View</Translate>
                            </span>
                          </Button>
                          <Button tag={Link} to={`${match.url}/${registerMember.id}/edit`} color="primary" size="sm">
                            <FontAwesomeIcon icon="pencil-alt" />{' '}
                            <span className="d-none d-md-inline">
                              <Translate contentKey="entity.action.edit">Edit</Translate>
                            </span>
                          </Button>
                          <Button tag={Link} to={`${match.url}/${registerMember.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ registerMember }: IRootState) => ({
  registerMemberList: registerMember.entities,
  totalItems: registerMember.totalItems,
  links: registerMember.links,
  entity: registerMember.entity,
  updateSuccess: registerMember.updateSuccess
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
)(RegisterMember);
