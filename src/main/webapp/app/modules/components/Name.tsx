import React from 'react';

import { AvGroup, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { Label } from 'reactstrap';

export const Name = () => (
    <AvGroup>
        <Label id="korNameLabel" for="create-member-korName">
            <Translate contentKey="newRegisterFormApp.createMember.korName">Kor Name</Translate>
        </Label>
        <AvField
            id="create-member-korName"
            type="text"
            name="korName"
            validate={{
                required: { value: true, errorMessage: translate('entity.validation.required') }
            }}
        />

        <Label id="engNameLabel" for="create-member-engName">
            <Translate contentKey="newRegisterFormApp.createMember.engName">Eng Name</Translate>
        </Label>
        <AvField
            id="create-member-engName"
            type="text"
            name="engName"
            validate={{
                required: { value: true, errorMessage: translate('entity.validation.required') }
            }}
        />
    </AvGroup>
);
