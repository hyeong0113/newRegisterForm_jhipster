import React from 'react';

import { AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { Label } from 'reactstrap';

interface IImmigrationStatus {
    isNew: boolean;
    immigrationStatus: string;
}

export class ImmigrationStatus extends React.Component<IImmigrationStatus, {}> {
    render() {
        return (
            <AvGroup>
            <Label id="immigrationStatusLabel" for="create-member-immigrationStatus">
              <Translate contentKey="newRegisterFormApp.createMember.immigrationStatus">Immigration Status</Translate>
            </Label>
            <AvInput
              id="create-member-immigrationStatus"
              type="select"
              className="form-control"
              name="immigrationStatus"
              value={(!this.props.isNew && this.props.immigrationStatus) || 'Citizen'}
            >
              <option value="Citizen">{translate('newRegisterFormApp.ImmigrationStatus.Citizen')}</option>
              <option value="PermanentResidence">{translate('newRegisterFormApp.ImmigrationStatus.PermanentResidence')}</option>
              <option value="Visitor">{translate('newRegisterFormApp.ImmigrationStatus.Visitor')}</option>
              <option value="StudyPermit">{translate('newRegisterFormApp.ImmigrationStatus.StudyPermit')}</option>
              <option value="WorkPermit">{translate('newRegisterFormApp.ImmigrationStatus.WorkPermit')}</option>
              <option value="WorkingHoliday">{translate('newRegisterFormApp.ImmigrationStatus.WorkingHoliday')}</option>
            </AvInput>
          </AvGroup>
        );
    }
}
