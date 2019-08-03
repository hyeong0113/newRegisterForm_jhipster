import React from 'react';

import { AvGroup, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { Label } from 'reactstrap';

export const Workplace = () => (
    <AvGroup>
        <Label id="professionLabel" for="create-member-profession">
            <Translate contentKey="newRegisterFormApp.createMember.profession">Profession</Translate>
        </Label>
        <AvField id="create-member-profession" type="text" name="profession" />

        <Label id="companyNameLabel" for="create-member-companyName">
            <Translate contentKey="newRegisterFormApp.createMember.companyName">Company Name</Translate>
        </Label>
        <AvField id="create-member-companyName" type="text" name="companyName" />
    </AvGroup>
);
