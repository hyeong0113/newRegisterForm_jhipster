import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';

// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './create-member.reducer';
import { ICreateMember } from 'app/shared/model/create-member.model';

// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

import { PreviousRegister } from 'app/modules/components/PreviousRegister';
import { Name } from 'app/modules/components/Name';
import { Birthday } from 'app/modules/components/Birthday';
import { Gender } from 'app/modules/components/Gender';
import { Address } from 'app/modules/components/Address';
import { Phone, Email } from 'app/modules/components/Contact';
import { Workplace } from 'app/modules/components/Workplace';
import { Licenseplate } from 'app/modules/components/Licenseplate';
import { ImmigrationStatus } from 'app/modules/components/ImmigrationStatus';
import { Baptism } from 'app/modules/components/Baptism';

export interface ICreateMemberUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> { }

export interface ICreateMemberUpdateState {
  isNew: boolean;
}

export class CreateMemberUpdate extends React.Component<ICreateMemberUpdateProps, ICreateMemberUpdateState> {
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
      const { createMemberEntity } = this.props;
      const entity = {
        ...createMemberEntity,
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
    this.props.history.push('/newComer/create-member');
  };

  render() {
    const { createMemberEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="newRegisterFormApp.createMember.home.createOrEditLabel">
              <Translate contentKey="newRegisterFormApp.createMember.home.createOrEditLabel">Create or edit a RegisterMember</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
                <AvForm model={isNew ? {} : createMemberEntity} onSubmit={this.saveEntity}>
                  {!isNew ? (
                    <AvGroup>
                      <Label for="create-member-id">
                        <Translate contentKey="global.field.id">ID</Translate>
                      </Label>
                      <AvInput id="create-member-id" type="text" className="form-control" name="id" required readOnly />
                    </AvGroup>
                  ) : null}

                  <PreviousRegister />

                  <Name />

                  <Birthday />

                  <Gender
                    isNew = {this.state.isNew}
                    gender = {this.props.createMemberEntity.gender}
                  />

                  <Address
                    isNew = {this.state.isNew}
                    province = {this.props.createMemberEntity.province}
                  />

                  <Phone />

                  <Email />

                  <Workplace />

                  <Licenseplate />

                  <ImmigrationStatus
                    isNew = {this.state.isNew}
                    immigrationStatus = {this.props.createMemberEntity.immigrationStatus}
                  />

                  <Baptism
                    isNew = {this.state.isNew}
                    baptismType = {this.props.createMemberEntity.baptismType}
                  />

                  <AvGroup>
                    <Label id="dutyStatusLabel" for="register-member-dutyStatus">
                      <Translate contentKey="newRegisterFormApp.registerMember.dutyStatus">Duty Status</Translate>
                    </Label>
                    <AvInput
                      id="register-member-dutyStatus"
                      type="select"
                      className="form-control"
                      name="dutyStatus"
                      value={(!isNew && createMemberEntity.dutyStatus) || 'None'}
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
                      value={(!isNew && createMemberEntity.volunteer) || 'FrontDesk'}
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
                  <Button tag={Link} id="cancel-save" to="/newComer/create-member" replace color="info">
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
  createMemberEntity: storeState.createMember.entity,
  loading: storeState.createMember.loading,
  updating: storeState.createMember.updating,
  updateSuccess: storeState.createMember.updateSuccess
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
)(CreateMemberUpdate);
