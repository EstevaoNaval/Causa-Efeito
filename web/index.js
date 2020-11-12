const Pessoa = [
    {Nome: "Alessandra Kassandra Paiva", Endereco: "Rua Benjamin Constant - lado par", Cidade: "Santos", Estado: "SP", pais: "Brasil", Telefone: "+55 (021) 98778-0544", DtNascimento: "05/08/1975"},
    
    {Nome: "Thiago Labareda dos Santos", Endereco: "Rua Salvador Antônio Blotta", Cidade: "São José do Rio Preto", Estado: "RJ", pais: "Brasil", Telefone: "+55 (021) 97522-4414", DtNascimento: "03/03/1988"},

    {Nome: "Kawan Vandaz de Cindrar Marlon", Endereco: "Travessa Aurelino Chaves", Cidade: "Duque de Caxias", Estado: "RJ", pais: "Brasil", Telefone: "+55 (014) 98844-0455", DtNascimento: "29/02/1997"},

    {Nome: "Daiana Vanguarda Parlê del Toro", Endereco: "Rua Valdemar Corazza", Cidade: "Presidente Prudente", Estado: "SP", pais: "Brasil", Telefone: "+55 (017) 9445-4455", DtNascimento: "05/07/1975"},

    {Nome: "Waldemir da Costa Malone", Endereco: "Rua Antônio Argento Sobrinho", Cidade: "Sorocaba", Estado: "SP", pais: "Brasil", Telefone: "+55 (022) 96552-7445", DtNascimento: "18/02/1990"}
]


var outputListaPessoa = document.querySelector("#outputListaPessoa");

for (let index = 0; index < Pessoa.length; index++) {
    outputListaPessoa.insertAdjacentHTML('beforeend', `<a data-target='#listaPessoa${index}' aria-controls="listaPessoa${index}" data-toggle='collapse' aria-expanded='false' class='list-group-item list-group-item-action'><h6>${Pessoa[index].Nome}</h6></a>`);
    outputListaPessoa.insertAdjacentHTML('beforeend', `<ul class='list-group' id='listaPessoa${index}'><li class='list-group-item list-group-item-action'><strong>Endereço:</strong> ${Pessoa[index].Endereco}</li><li class='list-group-item list-group-item-action'><strong>Cidade:</strong> ${Pessoa[index].Cidade}</li><li class='list-group-item list-group-item-action'><strong>Estado:</strong> ${Pessoa[index].Estado}</li><li class='list-group-item list-group-item-action'><strong>País:</strong> ${Pessoa[index].pais}</li><li class='list-group-item list-group-item-action'><strong>Telefone:</strong> ${Pessoa[index].Telefone}</li><li class='list-group-item list-group-item-action'><strong>Data de nascimento:</strong> ${Pessoa[index].DtNascimento}</li></ul>`);
}