import { Currency } from "../@types/types";

const currenciesClasses: Record<Currency, string> = {
    'NIS': 'fa fa-shekel',
    'USD': 'fa fa-dollar',
}

const getCurrencyIconClass = (currency: Currency) => currenciesClasses[currency];

export { getCurrencyIconClass };
