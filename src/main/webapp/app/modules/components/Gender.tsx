import React from 'react';

import { AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { Label } from 'reactstrap';

interface IGenderProps {
    isNew: boolean;
    gender: string;
}

export class Gender extends React.Component<IGenderProps, {}> {
    render() {
        return (
            <AvGroup>
                <Label id="genderLabel" for="create-member-gender">
                    <Translate contentKey="newRegisterFormApp.createMember.gender">Gender</Translate>
                </Label>
                <AvInput
                    id="create-member-gender"
                    type="select"
                    className="form-control"
                    name="gender"
                    value={(!this.props.isNew && this.props.gender) || 'Male'}
                >
                    <option value="Male">{translate('newRegisterFormApp.Gender.Male')}</option>
                    <option value="Female">{translate('newRegisterFormApp.Gender.Female')}</option>
                    <option value="Other">{translate('newRegisterFormApp.Gender.Other')}</option>
                </AvInput>
            </AvGroup>
        );
    }
}
