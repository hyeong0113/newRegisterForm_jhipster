import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IRegisterMember } from 'app/shared/model/register-member.model';
import { getEntities as getRegisterMembers } from 'app/entities/register-member/register-member.reducer';
import { getEntity, updateEntity, createEntity, reset } from './family-member.reducer';
import { IFamilyMember } from 'app/shared/model/family-member.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFamilyMemberUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IFamilyMemberUpdateState {
  isNew: boolean;
  registerMemberId: string;
}

export class FamilyMemberUpdate extends React.Component<IFamilyMemberUpdateProps, IFamilyMemberUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      registerMemberId: '0',
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

    this.props.getRegisterMembers();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { familyMemberEntity } = this.props;
      const entity = {
        ...familyMemberEntity,
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
    this.props.history.push('/entity/family-member');
  };

  render() {
    const { familyMemberEntity, registerMembers, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="newRegisterFormApp.familyMember.home.createOrEditLabel">
              <Translate contentKey="newRegisterFormApp.familyMember.home.createOrEditLabel">Create or edit a FamilyMember</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : familyMemberEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="family-member-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="family-member-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="relationStatusLabel" for="family-member-relationStatus">
                    <Translate contentKey="newRegisterFormApp.familyMember.relationStatus">Relation Status</Translate>
                  </Label>
                  <AvField
                    id="family-member-relationStatus"
                    type="text"
                    name="relationStatus"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="previousRegisterLabel" for="family-member-previousRegister">
                    <Translate contentKey="newRegisterFormApp.familyMember.previousRegister">Previous Register</Translate>
                  </Label>
                  <AvField
                    id="family-member-previousRegister"
                    type="text"
                    name="previousRegister"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="korNameLabel" for="family-member-korName">
                    <Translate contentKey="newRegisterFormApp.familyMember.korName">Kor Name</Translate>
                  </Label>
                  <AvField
                    id="family-member-korName"
                    type="text"
                    name="korName"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="engNameLabel" for="family-member-engName">
                    <Translate contentKey="newRegisterFormApp.familyMember.engName">Eng Name</Translate>
                  </Label>
                  <AvField
                    id="family-member-engName"
                    type="text"
                    name="engName"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="birthdayLabel" for="family-member-birthday">
                    <Translate contentKey="newRegisterFormApp.familyMember.birthday">Birthday</Translate>
                  </Label>
                  <AvField
                    id="family-member-birthday"
                    type="date"
                    className="form-control"
                    name="birthday"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="genderLabel" for="family-member-gender">
                    <Translate contentKey="newRegisterFormApp.familyMember.gender">Gender</Translate>
                  </Label>
                  <AvInput
                    id="family-member-gender"
                    type="select"
                    className="form-control"
                    name="gender"
                    value={(!isNew && familyMemberEntity.gender) || 'Male'}
                  >
                    <option value="Male">{translate('newRegisterFormApp.Gender.Male')}</option>
                    <option value="Female">{translate('newRegisterFormApp.Gender.Female')}</option>
                    <option value="Other">{translate('newRegisterFormApp.Gender.Other')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="professionLabel" for="family-member-profession">
                    <Translate contentKey="newRegisterFormApp.familyMember.profession">Profession</Translate>
                  </Label>
                  <AvField id="family-member-profession" type="text" name="profession" />
                </AvGroup>
                <AvGroup>
                  <Label id="companyNameLabel" for="family-member-companyName">
                    <Translate contentKey="newRegisterFormApp.familyMember.companyName">Company Name</Translate>
                  </Label>
                  <AvField id="family-member-companyName" type="text" name="companyName" />
                </AvGroup>
                <AvGroup>
                  <Label id="cellPhoneLabel" for="family-member-cellPhone">
                    <Translate contentKey="newRegisterFormApp.familyMember.cellPhone">Cell Phone</Translate>
                  </Label>
                  <AvField
                    id="family-member-cellPhone"
                    type="text"
                    name="cellPhone"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="emailAddressLabel" for="family-member-emailAddress">
                    <Translate contentKey="newRegisterFormApp.familyMember.emailAddress">Email Address</Translate>
                  </Label>
                  <AvField
                    id="family-member-emailAddress"
                    type="text"
                    name="emailAddress"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="churchServedLabel" for="family-member-churchServed">
                    <Translate contentKey="newRegisterFormApp.familyMember.churchServed">Church Served</Translate>
                  </Label>
                  <AvField id="family-member-churchServed" type="text" name="churchServed" />
                </AvGroup>
                <AvGroup>
                  <Label id="yearServedLabel" for="family-member-yearServed">
                    <Translate contentKey="newRegisterFormApp.familyMember.yearServed">Year Served</Translate>
                  </Label>
                  <AvField id="family-member-yearServed" type="text" name="yearServed" />
                </AvGroup>
                <AvGroup>
                  <Label id="dutyStatusLabel" for="family-member-dutyStatus">
                    <Translate contentKey="newRegisterFormApp.familyMember.dutyStatus">Duty Status</Translate>
                  </Label>
                  <AvInput
                    id="family-member-dutyStatus"
                    type="select"
                    className="form-control"
                    name="dutyStatus"
                    value={(!isNew && familyMemberEntity.dutyStatus) || 'None'}
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
                  <Label id="prevChurchLabel" for="family-member-prevChurch">
                    <Translate contentKey="newRegisterFormApp.familyMember.prevChurch">Prev Church</Translate>
                  </Label>
                  <AvField id="family-member-prevChurch" type="text" name="prevChurch" />
                </AvGroup>
                <AvGroup>
                  <Label id="volunteerLabel" for="family-member-volunteer">
                    <Translate contentKey="newRegisterFormApp.familyMember.volunteer">Volunteer</Translate>
                  </Label>
                  <AvInput
                    id="family-member-volunteer"
                    type="select"
                    className="form-control"
                    name="volunteer"
                    value={(!isNew && familyMemberEntity.volunteer) || 'FrontDesk'}
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
                <AvGroup>
                  <Label for="family-member-registerMember">
                    <Translate contentKey="newRegisterFormApp.familyMember.registerMember">Register Member</Translate>
                  </Label>
                  <AvInput id="family-member-registerMember" type="select" className="form-control" name="registerMember.id">
                    <option value="" key="0" />
                    {registerMembers
                      ? registerMembers.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.korName}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/family-member" replace color="info">
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
  registerMembers: storeState.registerMember.entities,
  familyMemberEntity: storeState.familyMember.entity,
  loading: storeState.familyMember.loading,
  updating: storeState.familyMember.updating,
  updateSuccess: storeState.familyMember.updateSuccess
});

const mapDispatchToProps = {
  getRegisterMembers,
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
)(FamilyMemberUpdate);
