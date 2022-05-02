import React from "react"
import {screen, render} from "@testing-library/react"

import {CustomWidgetTradingViewSymbolInfo} from "./custom-widget-tradingview-symbolinfo";

describe("CustomWidgetTradingViewSymbolInfo", () => {
    it("should render the component", () => {
        render(<CustomWidgetTradingViewSymbolInfo contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
