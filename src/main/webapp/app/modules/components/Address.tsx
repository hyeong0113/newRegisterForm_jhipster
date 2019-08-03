import React from 'react';

import { AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { Label } from 'reactstrap';

interface IAddressProps {
    isNew: boolean;
    province: string;
}

export class Address extends React.Component<IAddressProps, {}> {
    render() {
        return (
            <AvGroup>
                <Label id="firstStreetLabel" for="create-member-firstStreet">
                    <Translate contentKey="newRegisterFormApp.createMember.firstStreet">First Street</Translate>
                </Label>
                <AvField
                    id="register-member-firstStreet"
                    type="text"
                    name="firstStreet"
                    validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                />

                <Label id="secondStreetLabel" for="create-member-secondStreet">
                    <Translate contentKey="newRegisterFormApp.createMember.secondStreet">Second Street</Translate>
                </Label>
                <AvField id="register-member-secondStreet" type="text" name="secondStreet" />

                <Label id="cityLabel" for="create-member-city">
                    <Translate contentKey="newRegisterFormApp.createMember.city">City</Translate>
                </Label>
                <AvField
                    id="register-member-city"
                    type="text"
                    name="city"
                    validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                />

                <Label id="provinceLabel" for="create-member-province">
                    <Translate contentKey="newRegisterFormApp.createMember.province">Province</Translate>
                </Label>
                <AvInput
                    id="create-member-province"
                    type="select"
                    className="form-control"
                    name="province"
                    value={(!this.props.isNew && this.props.province) || 'Alberta'}
                >
                    <option value="Alberta">{translate('newRegisterFormApp.Province.Alberta')}</option>
                    <option value="BritishColumbia">{translate('newRegisterFormApp.Province.BritishColumbia')}</option>
                    <option value="Manitoba">{translate('newRegisterFormApp.Province.Manitoba')}</option>
                    <option value="NewBrunswick">{translate('newRegisterFormApp.Province.NewBrunswick')}</option>
                    <option value="NewfoundlandAndLabrador">{translate('newRegisterFormApp.Province.NewfoundlandAndLabrador')}</option>
                    <option value="NovaScotia">{translate('newRegisterFormApp.Province.NovaScotia')}</option>
                    <option value="NorthwestTerritories">{translate('newRegisterFormApp.Province.NorthwestTerritories')}</option>
                    <option value="Nunavut">{translate('newRegisterFormApp.Province.Nunavut')}</option>
                    <option value="Ontario">{translate('newRegisterFormApp.Province.Ontario')}</option>
                    <option value="PrinceEdwardIsland">{translate('newRegisterFormApp.Province.PrinceEdwardIsland')}</option>
                    <option value="Quebec">{translate('newRegisterFormApp.Province.Quebec')}</option>
                    <option value="Saskatchewan">{translate('newRegisterFormApp.Province.Saskatchewan')}</option>
                    <option value="Yukon">{translate('newRegisterFormApp.Province.Yukon')}</option>
                </AvInput>

                <Label id="postalCodeLabel" for="create-member-postalCode">
                    <Translate contentKey="newRegisterFormApp.createMember.postalCode">Postal Code</Translate>
                </Label>
                <AvField
                    id="create-member-postalCode"
                    type="text"
                    name="postalCode"
                    validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                />
            </AvGroup>
        );
    }
}
