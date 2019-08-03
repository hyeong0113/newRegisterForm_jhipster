import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './register-member.reducer';
import { IRegisterMember } from 'app/shared/model/register-member.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IRegisterMemberUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IRegisterMemberUpdateState {
  isNew: boolean;
}

export class RegisterMemberUpdate extends React.Component<IRegisterMemberUpdateProps, IRegisterMemberUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentDidMount() {
    if (!this.state.isNew) {
      this.props.getEntity(this.props.match.params.id);
    }
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { registerMemberEntity } = this.props;
      const entity = {
        ...registerMemberEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/register-member');
  };

  render() {
    const { registerMemberEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="newRegisterFormApp.registerMember.home.createOrEditLabel">
              <Translate contentKey="newRegisterFormApp.registerMember.home.createOrEditLabel">Create or edit a RegisterMember</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : registerMemberEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="register-member-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="register-member-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="previousRegisterLabel" for="register-member-previousRegister">
                    <Translate contentKey="newRegisterFormApp.registerMember.previousRegister">Previous Register</Translate>
                  </Label>
                  <AvField
                    id="register-member-previousRegister"
                    type="text"
                    name="previousRegister"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="korNameLabel" for="register-member-korName">
                    <Translate contentKey="newRegisterFormApp.registerMember.korName">Kor Name</Translate>
                  </Label>
                  <AvField
                    id="register-member-korName"
                    type="text"
                    name="korName"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="engNameLabel" for="register-member-engName">
                    <Translate contentKey="newRegisterFormApp.registerMember.engName">Eng Name</Translate>
                  </Label>
                  <AvField
                    id="register-member-engName"
                    type="text"
                    name="engName"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="birthdayLabel" for="register-member-birthday">
                    <Translate contentKey="newRegisterFormApp.registerMember.birthday">Birthday</Translate>
                  </Label>
                  <AvField
                    id="register-member-birthday"
                    type="date"
                    className="form-control"
                    name="birthday"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="genderLabel" for="register-member-gender">
                    <Translate contentKey="newRegisterFormApp.registerMember.gender">Gender</Translate>
                  </Label>
                  <AvInput
                    id="register-member-gender"
                    type="select"
                    className="form-control"
                    name="gender"
                    value={(!isNew && registerMemberEntity.gender) || 'Male'}
                  >
                    <option value="Male">{translate('newRegisterFormApp.Gender.Male')}</option>
                    <option value="Female">{translate('newRegisterFormApp.Gender.Female')}</option>
                    <option value="Other">{translate('newRegisterFormApp.Gender.Other')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="firstStreetLabel" for="register-member-firstStreet">
                    <Translate contentKey="newRegisterFormApp.registerMember.firstStreet">First Street</Translate>
                  </Label>
                  <AvField
                    id="register-member-firstStreet"
                    type="text"
                    name="firstStreet"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="secondStreetLabel" for="register-member-secondStreet">
                    <Translate contentKey="newRegisterFormApp.registerMember.secondStreet">Second Street</Translate>
                  </Label>
                  <AvField id="register-member-secondStreet" type="text" name="secondStreet" />
                </AvGroup>
                <AvGroup>
                  <Label id="cityLabel" for="register-member-city">
                    <Translate contentKey="newRegisterFormApp.registerMember.city">City</Translate>
                  </Label>
                  <AvField
                    id="register-member-city"
                    type="text"
                    name="city"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="provinceLabel" for="register-member-province">
                    <Translate contentKey="newRegisterFormApp.registerMember.province">Province</Translate>
                  </Label>
                  <AvInput
                    id="register-member-province"
                    type="select"
                    className="form-control"
                    name="province"
                    value={(!isNew && registerMemberEntity.province) || 'Alberta'}
                  >
                    <option value="Alberta">{translate('newRegisterFormApp.Province.Alberta')}</option>
                    <option value="BritishColumbia">{translate('newRegisterFormApp.Province.BritishColumbia')}</option>
                    <option value="Manitoba">{translate('newRegisterFormApp.Province.Manitoba')}</option>
                    <option value="NewBrunswick">{translate('newRegisterFormApp.Province.NewBrunswick')}</option>
                    <option value="NewfoundlandAndLabrador">{translate('newRegisterFormApp.Province.NewfoundlandAndLabrador')}</option>
                    <option value="NovaScotia">{translate('newRegisterFormApp.Province.NovaScotia')}</option>
                    <option value="NorthwestTerritories">{translate('newRegisterFormApp.Province.NorthwestTerritories')}</option>
                    <option value="Nunavut">{translate('newRegisterFormApp.Province.Nunavut')}</option>
                    <option value="Ontario">{translate('newRegisterFormApp.Province.Ontario')}</option>
                    <option value="PrinceEdwardIsland">{translate('newRegisterFormApp.Province.PrinceEdwardIsland')}</option>
                    <option value="Quebec">{translate('newRegisterFormApp.Province.Quebec')}</option>
                    <option value="Saskatchewan">{translate('newRegisterFormApp.Province.Saskatchewan')}</option>
                    <option value="Yukon">{translate('newRegisterFormApp.Province.Yukon')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="postalCodeLabel" for="register-member-postalCode">
                    <Translate contentKey="newRegisterFormApp.registerMember.postalCode">Postal Code</Translate>
                  </Label>
                  <AvField
                    id="register-member-postalCode"
                    type="text"
                    name="postalCode"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="cellPhoneLabel" for="register-member-cellPhone">
                    <Translate contentKey="newRegisterFormApp.registerMember.cellPhone">Cell Phone</Translate>
                  </Label>
                  <AvField
                    id="register-member-cellPhone"
                    type="text"
                    name="cellPhone"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="residentialPhoneLabel" for="register-member-residentialPhone">
                    <Translate contentKey="newRegisterFormApp.registerMember.residentialPhone">Residential Phone</Translate>
                  </Label>
                  <AvField id="register-member-residentialPhone" type="text" name="residentialPhone" />
                </AvGroup>
                <AvGroup>
                  <Label id="emailAddressLabel" for="register-member-emailAddress">
                    <Translate contentKey="newRegisterFormApp.registerMember.emailAddress">Email Address</Translate>
                  </Label>
                  <AvField
                    id="register-member-emailAddress"
                    type="text"
                    name="emailAddress"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="professionLabel" for="register-member-profession">
                    <Translate contentKey="newRegisterFormApp.registerMember.profession">Profession</Translate>
                  </Label>
                  <AvField id="register-member-profession" type="text" name="profession" />
                </AvGroup>
                <AvGroup>
                  <Label id="companyNameLabel" for="register-member-companyName">
                    <Translate contentKey="newRegisterFormApp.registerMember.companyName">Company Name</Translate>
                  </Label>
                  <AvField id="register-member-companyName" type="text" name="companyName" />
                </AvGroup>
                <AvGroup>
                  <Label id="firstLicenseplateLabel" for="register-member-firstLicenseplate">
                    <Translate contentKey="newRegisterFormApp.registerMember.firstLicenseplate">First Licenseplate</Translate>
                  </Label>
                  <AvField id="register-member-firstLicenseplate" type="text" name="firstLicenseplate" />
                </AvGroup>
                <AvGroup>
                  <Label id="secondLicenseplateLabel" for="register-member-secondLicenseplate">
                    <Translate contentKey="newRegisterFormApp.registerMember.secondLicenseplate">Second Licenseplate</Translate>
                  </Label>
                  <AvField id="register-member-secondLicenseplate" type="text" name="secondLicenseplate" />
                </AvGroup>
                <AvGroup>
                  <Label id="immigrationStatusLabel" for="register-member-immigrationStatus">
                    <Translate contentKey="newRegisterFormApp.registerMember.immigrationStatus">Immigration Status</Translate>
                  </Label>
                  <AvInput
                    id="register-member-immigrationStatus"
                    type="select"
                    className="form-control"
                    name="immigrationStatus"
                    value={(!isNew && registerMemberEntity.immigrationStatus) || 'Citizen'}
                  >
                    <option value="Citizen">{translate('newRegisterFormApp.ImmigrationStatus.Citizen')}</option>
                    <option value="PermanentResidence">{translate('newRegisterFormApp.ImmigrationStatus.PermanentResidence')}</option>
                    <option value="Visitor">{translate('newRegisterFormApp.ImmigrationStatus.Visitor')}</option>
                    <option value="StudyPermit">{translate('newRegisterFormApp.ImmigrationStatus.StudyPermit')}</option>
                    <option value="WorkPermit">{translate('newRegisterFormApp.ImmigrationStatus.WorkPermit')}</option>
                    <option value="WorkingHoliday">{translate('newRegisterFormApp.ImmigrationStatus.WorkingHoliday')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="baptismTypeLabel" for="register-member-baptismType">
                    <Translate contentKey="newRegisterFormApp.registerMember.baptismType">Baptism Type</Translate>
                  </Label>
                  <AvInput
                    id="register-member-baptismType"
                    type="select"
                    className="form-control"
                    name="baptismType"
                    value={(!isNew && registerMemberEntity.baptismType) || 'None'}
                  >
                    <option value="None">{translate('newRegisterFormApp.Baptism.None')}</option>
                    <option value="InfantBaptism">{translate('newRegisterFormApp.Baptism.InfantBaptism')}</option>
                    <option value="Baptism">{translate('newRegisterFormApp.Baptism.Baptism')}</option>
                    <option value="Confirmation">{translate('newRegisterFormApp.Baptism.Confirmation')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="baptismYearLabel" for="register-member-baptismYear">
                    <Translate contentKey="newRegisterFormApp.registerMember.baptismYear">Baptism Year</Translate>
                  </Label>
                  <AvField id="register-member-baptismYear" type="text" name="baptismYear" />
                </AvGroup>
                <AvGroup>
                  <Label id="baptismChurchLabel" for="register-member-baptismChurch">
                    <Translate contentKey="newRegisterFormApp.registerMember.baptismChurch">Baptism Church</Translate>
                  </Label>
                  <AvField id="register-member-baptismChurch" type="text" name="baptismChurch" />
                </AvGroup>
                <AvGroup>
                  <Label id="dutyStatusLabel" for="register-member-dutyStatus">
                    <Translate contentKey="newRegisterFormApp.registerMember.dutyStatus">Duty Status</Translate>
                  </Label>
                  <AvInput
                    id="register-member-dutyStatus"
                    type="select"
                    className="form-control"
                    name="dutyStatus"
                    value={(!isNew && registerMemberEntity.dutyStatus) || 'None'}
                  >
                    <option value="None">{translate('newRegisterFormApp.DutyStatus.None')}</option>
                    <option value="GeneralServant">{translate('newRegisterFormApp.DutyStatus.GeneralServant')}</option>
                    <option value="Deacon">{translate('newRegisterFormApp.DutyStatus.Deacon')}</option>
                    <option value="OrdainedDeacon">{translate('newRegisterFormApp.DutyStatus.OrdainedDeacon')}</option>
                    <option value="Elder">{translate('newRegisterFormApp.DutyStatus.Elder')}</option>
                    <option value="InternPastor">{translate('newRegisterFormApp.DutyStatus.InternPastor')}</option>
                    <option value="Missionary">{translate('newRegisterFormApp.DutyStatus.Missionary')}</option>
                    <option value="Paster">{translate('newRegisterFormApp.DutyStatus.Paster')}</option>
                    <option value="PasterWife">{translate('newRegisterFormApp.DutyStatus.PasterWife')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="prevChurchLabel" for="register-member-prevChurch">
                    <Translate contentKey="newRegisterFormApp.registerMember.prevChurch">Prev Church</Translate>
                  </Label>
                  <AvField id="register-member-prevChurch" type="text" name="prevChurch" />
                </AvGroup>
                <AvGroup>
                  <Label id="instructorLabel" for="register-member-instructor">
                    <Translate contentKey="newRegisterFormApp.registerMember.instructor">Instructor</Translate>
                  </Label>
                  <AvField id="register-member-instructor" type="text" name="instructor" />
                </AvGroup>
                <AvGroup>
                  <Label id="volunteerLabel" for="register-member-volunteer">
                    <Translate contentKey="newRegisterFormApp.registerMember.volunteer">Volunteer</Translate>
                  </Label>
                  <AvInput
                    id="register-member-volunteer"
                    type="select"
                    className="form-control"
                    name="volunteer"
                    value={(!isNew && registerMemberEntity.volunteer) || 'FrontDesk'}
                  >
                    <option value="FrontDesk">{translate('newRegisterFormApp.Volunteer.FrontDesk')}</option>
                    <option value="Choir">{translate('newRegisterFormApp.Volunteer.Choir')}</option>
                    <option value="Kitchen">{translate('newRegisterFormApp.Volunteer.Kitchen')}</option>
                    <option value="EnglishMissionaryTeacher">{translate('newRegisterFormApp.Volunteer.EnglishMissionaryTeacher')}</option>
                    <option value="KoreanMissionaryTeacher">{translate('newRegisterFormApp.Volunteer.KoreanMissionaryTeacher')}</option>
                    <option value="Intercession">{translate('newRegisterFormApp.Volunteer.Intercession')}</option>
                    <option value="Propagation">{translate('newRegisterFormApp.Volunteer.Propagation')}</option>
                    <option value="IT">{translate('newRegisterFormApp.Volunteer.IT')}</option>
                    <option value="Broadcast">{translate('newRegisterFormApp.Volunteer.Broadcast')}</option>
                    <option value="SeniorMinistry">{translate('newRegisterFormApp.Volunteer.SeniorMinistry')}</option>
                    <option value="Administration">{translate('newRegisterFormApp.Volunteer.Administration')}</option>
                    <option value="Praise">{translate('newRegisterFormApp.Volunteer.Praise')}</option>
                    <option value="Parking">{translate('newRegisterFormApp.Volunteer.Parking')}</option>
                    <option value="FinancialManagement">{translate('newRegisterFormApp.Volunteer.FinancialManagement')}</option>
                    <option value="FacilityManeger">{translate('newRegisterFormApp.Volunteer.FacilityManeger')}</option>
                    <option value="Gardening">{translate('newRegisterFormApp.Volunteer.Gardening')}</option>
                    <option value="Design">{translate('newRegisterFormApp.Volunteer.Design')}</option>
                    <option value="ETC">{translate('newRegisterFormApp.Volunteer.ETC')}</option>
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/register-member" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />
                  &nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />
                  &nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  registerMemberEntity: storeState.registerMember.entity,
  loading: storeState.registerMember.loading,
  updating: storeState.registerMember.updating,
  updateSuccess: storeState.registerMember.updateSuccess
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterMemberUpdate);
