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

import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";

//https://www.npmjs.com/package/react-tradingview-embed
import { SymbolInfo } from "react-tradingview-embed";

import { Error } from "./components/Error";

/**
 * React Component
 */
 export interface CustomWidgetTradingViewSymbolInfoProps extends BlockAttributes {
  symbol: string,
  width: number,
  colorTheme: string,
  locale: string,
  theme:string,
}

export const CustomWidgetTradingViewSymbolInfo = ({ symbol, width, locale, theme }: CustomWidgetTradingViewSymbolInfoProps): ReactElement => {

  const defaultWidth = 1000;

  return <div>
    <div><SymbolInfo widgetProps={{colorTheme:theme, symbol:symbol, locale:locale,width:width ? width : defaultWidth}} /></div>
  </div>
};

