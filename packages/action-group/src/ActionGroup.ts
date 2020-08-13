/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import {
    html,
    SpectrumElement,
    CSSResultArray,
    TemplateResult,
    property,
} from '@spectrum-web-components/base';

import styles from './action-group.css.js';

/**
 * @element sp-action-group
 */
export class ActionGroup extends SpectrumElement {
    public static get styles(): CSSResultArray {
        return [styles];
    }

    @property({ type: Boolean, reflect: true })
    public compact = false;

    @property({ type: Boolean, reflect: true })
    public justified = false;

    @property({ type: Boolean, reflect: true })
    public vertical = false;

    @property({ type: Boolean, reflect: true })
    public quiet = false;

    protected render(): TemplateResult {
        return html`
            <slot></slot>
        `;
    }
}