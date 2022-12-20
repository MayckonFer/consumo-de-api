async function getAdress(cep) {
  let messageError = document.getElementById("error");
  try {
    let api = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let data = await api.json();

    if (data.error) {
      throw Error("Esse CEP não existe!");
    }

    let city = document.getElementById("cidade");
    let logradouro = document.getElementById("endereco");
    let state = document.getElementById("estado");

    city.value = data.localidade;
    logradouro.value = data.logradouro;
    state.value = data.uf;

    return data;
  } catch (error) {
    messageError.textContent = "CEP inválido!";
  }
}

let cep = document.getElementById("cep");
cep.addEventListener("focusout", () => getAdress(cep.value));
