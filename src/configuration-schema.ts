/*!
 * Copyright 2020, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  required: [
    "symbol"
  ],
  properties: {
    symbol: {
      type: "string",
      title: "Symbol",
      default: "NASDAQ:AAPL",
    },
    width: {
      type: "integer",
      title: "Widget Width",
      default: 1000,
      minimum: 400,    
    },
    theme:{
      type: "string",
      title: "Color Theme",
      default:"light",
    },
    locale: {
      type: "string",
      title: "Locale",
      default: "en"
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  symbol: {
    "ui:help": "Please enter symbol name. (For correct syntax of your desired symbol please refer to  widget URL: https://www.tradingview.com/widget/symbol-info/) ",
  },
  width: {
    "ui:help": "Please enter width of widget",
  },
  theme: {
    "ui:help": "Enter in 'light' or 'dark'",
  },
  locale:{
    "ui:help": "Enter in locale.",
  },
};
