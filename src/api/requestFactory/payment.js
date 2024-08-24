export const createPaymentRequest = (amount, redirect_url) => {
  return {
      url: "/payment",
      method: "POST",
      data: {
        amount,
        redirect_url
      },
  };
}

export const createVerifyPaymentRequest = (status, tx_ref, transaction_id) => {
  return {
    url: "/payment/verify",
    method: "GET",
    params: {
      status,
      tx_ref,
      transaction_id
    },
  };
}


export const createBankAccountRequest = (account_number, account_bank, account_name) => {
  return {
    url: "/payment/banks",
    method: "POST",
    data: {
      account_number,
      account_bank,
      account_name
    },
  };
}


export const createGetBanksRequest = () => {
  return {
      url: "/payment/banks",
      method: "GET",
  };
}


export const createVerifyRequest = (account_number, account_bank) => {
  return {
    url: "/payment/verify/bank",
    method: "GET",
    params: {
      account_number,
      account_bank,
    },
  };
}


export const createGetDonationsRequest = () => {
  return {
    url: "/donation",
    method: "GET",
  };
}

