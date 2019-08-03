import React from 'react';

import { AvGroup, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { Label } from 'reactstrap';

export const Phone = () => (
    <AvGroup>
        <Label id="cellPhoneLabel" for="create-member-cellPhone">
            <Translate contentKey="newRegisterFormApp.createMember.cellPhone">Cell Phone</Translate>
        </Label>
        <AvField
            id="create-member-cellPhone"
            type="text"
            name="cellPhone"
            validate={{
                required: { value: true, errorMessage: translate('entity.validation.required') }
            }}
        />
        <Label id="residentialPhoneLabel" for="create-member-residentialPhone">
            <Translate contentKey="newRegisterFormApp.createMember.residentialPhone">Residential Phone</Translate>
        </Label>
        <AvField id="create-member-residentialPhone" type="text" name="residentialPhone" />
    </AvGroup>
);

export const Email = () => (
    <AvGroup>
        <Label id="emailAddressLabel" for="create-member-emailAddress">
            <Translate contentKey="newRegisterFormApp.createMember.emailAddress">Email Address</Translate>
        </Label>
        <AvField
            id="create-member-emailAddress"
            type="text"
            name="emailAddress"
            validate={{
                required: { value: true, errorMessage: translate('entity.validation.required') }
            }}
        />
    </AvGroup>
);
