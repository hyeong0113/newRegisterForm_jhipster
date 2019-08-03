import React from 'react';

import { AvGroup, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { Label } from 'reactstrap';

export const Birthday = () => (
    <AvGroup>
        <Label id="birthdayLabel" for="create-member-birthday">
            <Translate contentKey="newRegisterFormApp.createMember.birthday">Birthday</Translate>
        </Label>
        <AvField
            id="create-member-birthday"
            type="date"
            className="form-control"
            name="birthday"
            validate={{
                required: { value: true, errorMessage: translate('entity.validation.required') }
            }}
        />
    </AvGroup>
);
