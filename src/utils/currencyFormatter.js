const currencyFormatter = (amount) => {
    const currency = new Intl.NumberFormat("en-ng", {
        currency: "NGN",
        style: "currency",
        maximumSignificantDigits: 3
    })
    return currency.format(amount);
}

export default currencyFormatter;