import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './create-member.reducer';
import { IRegisterMember } from 'app/shared/model/register-member.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IRegisterMemberDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class RegisterMemberDetail extends React.Component<IRegisterMemberDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { registerMemberEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="newRegisterFormApp.registerMember.detail.title">RegisterMember</Translate> [
            <b>{registerMemberEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="previousRegister">
                <Translate contentKey="newRegisterFormApp.registerMember.previousRegister">Previous Register</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.previousRegister}</dd>
            <dt>
              <span id="korName">
                <Translate contentKey="newRegisterFormApp.registerMember.korName">Kor Name</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.korName}</dd>
            <dt>
              <span id="engName">
                <Translate contentKey="newRegisterFormApp.registerMember.engName">Eng Name</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.engName}</dd>
            <dt>
              <span id="birthday">
                <Translate contentKey="newRegisterFormApp.registerMember.birthday">Birthday</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={registerMemberEntity.birthday} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="gender">
                <Translate contentKey="newRegisterFormApp.registerMember.gender">Gender</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.gender}</dd>
            <dt>
              <span id="firstStreet">
                <Translate contentKey="newRegisterFormApp.registerMember.firstStreet">First Street</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.firstStreet}</dd>
            <dt>
              <span id="secondStreet">
                <Translate contentKey="newRegisterFormApp.registerMember.secondStreet">Second Street</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.secondStreet}</dd>
            <dt>
              <span id="city">
                <Translate contentKey="newRegisterFormApp.registerMember.city">City</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.city}</dd>
            <dt>
              <span id="province">
                <Translate contentKey="newRegisterFormApp.registerMember.province">Province</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.province}</dd>
            <dt>
              <span id="postalCode">
                <Translate contentKey="newRegisterFormApp.registerMember.postalCode">Postal Code</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.postalCode}</dd>
            <dt>
              <span id="cellPhone">
                <Translate contentKey="newRegisterFormApp.registerMember.cellPhone">Cell Phone</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.cellPhone}</dd>
            <dt>
              <span id="residentialPhone">
                <Translate contentKey="newRegisterFormApp.registerMember.residentialPhone">Residential Phone</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.residentialPhone}</dd>
            <dt>
              <span id="emailAddress">
                <Translate contentKey="newRegisterFormApp.registerMember.emailAddress">Email Address</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.emailAddress}</dd>
            <dt>
              <span id="profession">
                <Translate contentKey="newRegisterFormApp.registerMember.profession">Profession</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.profession}</dd>
            <dt>
              <span id="companyName">
                <Translate contentKey="newRegisterFormApp.registerMember.companyName">Company Name</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.companyName}</dd>
            <dt>
              <span id="firstLicenseplate">
                <Translate contentKey="newRegisterFormApp.registerMember.firstLicenseplate">First Licenseplate</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.firstLicenseplate}</dd>
            <dt>
              <span id="secondLicenseplate">
                <Translate contentKey="newRegisterFormApp.registerMember.secondLicenseplate">Second Licenseplate</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.secondLicenseplate}</dd>
            <dt>
              <span id="immigrationStatus">
                <Translate contentKey="newRegisterFormApp.registerMember.immigrationStatus">Immigration Status</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.immigrationStatus}</dd>
            <dt>
              <span id="baptismType">
                <Translate contentKey="newRegisterFormApp.registerMember.baptismType">Baptism Type</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.baptismType}</dd>
            <dt>
              <span id="baptismYear">
                <Translate contentKey="newRegisterFormApp.registerMember.baptismYear">Baptism Year</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.baptismYear}</dd>
            <dt>
              <span id="baptismChurch">
                <Translate contentKey="newRegisterFormApp.registerMember.baptismChurch">Baptism Church</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.baptismChurch}</dd>
            <dt>
              <span id="dutyStatus">
                <Translate contentKey="newRegisterFormApp.registerMember.dutyStatus">Duty Status</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.dutyStatus}</dd>
            <dt>
              <span id="prevChurch">
                <Translate contentKey="newRegisterFormApp.registerMember.prevChurch">Prev Church</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.prevChurch}</dd>
            <dt>
              <span id="instructor">
                <Translate contentKey="newRegisterFormApp.registerMember.instructor">Instructor</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.instructor}</dd>
            <dt>
              <span id="volunteer">
                <Translate contentKey="newRegisterFormApp.registerMember.volunteer">Volunteer</Translate>
              </span>
            </dt>
            <dd>{registerMemberEntity.volunteer}</dd>
          </dl>
          <Button tag={Link} to="/entity/register-member" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/register-member/${registerMemberEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ registerMember }: IRootState) => ({
  registerMemberEntity: registerMember.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterMemberDetail);
