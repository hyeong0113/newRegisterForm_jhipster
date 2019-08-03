import React from 'react';

import { AvGroup, AvRadio, AvRadioGroup } from 'availity-reactstrap-validation';
import { Translate } from 'react-jhipster';
import { Label } from 'reactstrap';

export const PreviousRegister = () => (
    <AvGroup>
        <Label id="previousRegisterLabel" for="register-member-previousRegister">
            <Translate contentKey="newRegisterFormApp.createMember.previousRegister">Previous Register</Translate>
        </Label>
        <AvRadioGroup inline id="create-member-previousRegister" name="previousRegister" required>
            <AvRadio label="Yes" value="Yes" />
            <AvRadio label="No" value="No" />
        </AvRadioGroup>
    </AvGroup>
);
