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


export const createGetDonationsRequest = () => {
  return {
      url: "/donation",
      method: "GET",
  };
}

