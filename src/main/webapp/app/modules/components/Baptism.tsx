import React from 'react';

import { AvGroup, AvInput, AvField, Row, Col, AvCheckbox } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { Label, FormGroup } from 'reactstrap';

interface IBaptism {
  isNew: boolean;
  baptismType: string;
}

export class Baptism extends React.Component<IBaptism, {}> {
  render() {
    return (
      <FormGroup>
        <AvGroup check>
          {/* <Label id="baptism" for="create-member-baptism">
          <Translate contentKey="newRegisterFormApp.createMember.baptism">Baptism Information</Translate>
        </Label> */}
          {/* <Label id="baptismTypeLabel" for="create-member-baptismType">
          <Translate contentKey="newRegisterFormApp.createMember.baptismType">Baptism Type</Translate>
        </Label>
        <br /> */}
          <Label>
            <AvField
              id="create-member-baptismType"
              type="checkbox"
              name="infantBaptism"
              trueValue="Infant Baptism"
              label = "Infant Baptism"
              value={(!this.props.isNew && this.props.baptismType)}
            />
          </Label>
          {/* {translate('newRegisterFormApp.Baptism.InfantBaptism')} */}
          {/* <AvInput
          id="create-member-baptismType"
          type="select"
          className="form-control"
          name="baptismType"
          value={(!this.props.isNew && this.props.baptismType) || 'None'}
        >
          <option value="None">{translate('newRegisterFormApp.Baptism.None')}</option>
          <option value="InfantBaptism">{translate('newRegisterFormApp.Baptism.InfantBaptism')}</option>
          <option value="Baptism">{translate('newRegisterFormApp.Baptism.Baptism')}</option>
          <option value="Confirmation">{translate('newRegisterFormApp.Baptism.Confirmation')}</option>
        </AvInput>

        <Label id="baptismYearLabel" for="create-member-baptismYear">
          <Translate contentKey="newRegisterFormApp.createMember.baptismYear">Baptism Year</Translate>
        </Label>
        <AvField id="register-member-baptismYear" type="text" name="baptismYear" />

        <Label id="baptismChurchLabel" for="create-member-baptismChurch">
          <Translate contentKey="newRegisterFormApp.createMember.baptismChurch">Baptism Church</Translate>
        </Label>
        <AvField id="create-member-baptismChurch" type="text" name="baptismChurch" /> */}
        </AvGroup>
      </FormGroup>

    );
  }
}
