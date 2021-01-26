export const formatMoney = (value) => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(value.toFixed(2)));
};
