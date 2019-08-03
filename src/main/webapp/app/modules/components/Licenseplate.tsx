import React from 'react';

import { AvGroup, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { Label } from 'reactstrap';

export const Licenseplate = () => (
    <AvGroup>
        <Label id="firstLicenseplateLabel" for="register-member-firstLicenseplate">
            <Translate contentKey="newRegisterFormApp.registerMember.firstLicenseplate">First Licenseplate</Translate>
        </Label>
        <AvField id="register-member-firstLicenseplate" type="text" name="firstLicenseplate" />

        <Label id="secondLicenseplateLabel" for="register-member-secondLicenseplate">
            <Translate contentKey="newRegisterFormApp.registerMember.secondLicenseplate">Second Licenseplate</Translate>
        </Label>
        <AvField id="register-member-secondLicenseplate" type="text" name="secondLicenseplate" />
    </AvGroup>
);
