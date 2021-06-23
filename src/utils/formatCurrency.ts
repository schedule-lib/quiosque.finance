function formatCurrency(value: string) {
  const signal = Number(value) < 0 ? "-" : "";

  let valued = String(value).replace(/\D/g, "");

  const newValue = Number(value) / 100;

  valued = newValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return signal + valued;
}

export { formatCurrency };
