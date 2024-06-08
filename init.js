// gaetansg26@gmail.com
//
const services = [
  { name: "Coupe de griffes pour Chat", price: 23 },
  { name: "Coupe de griffes pour Lapin & Cochon d'inde", price: 25 },
  { name: "Coupe de griffes pour Chien", price: 30 },
  { name: "Coupe de griffes pour Petits Oiseaux", price: 35 },
  { name: "Supplément nettoyage d'oreilles", price: 20 },
  { name: "Tonde des pattes & des fesses", price: 25 },
];

function create_card(service, price) {
  let card = document.createElement("div");
  card.innerHTML = `<div class="uk-card uk-card-default uk-card-body"><h3 class="uk-card-title uk-text-large uk-text-normal">${service}</h3><p class="uk-heading-large uk-text-bold uk-text-primary uk-margin-small-top">$ ${price}</p><a href="mailto:batutalatrinite@gmail.com?subject=${service}" class="uk-button uk-button-default uk-width-1-1 uk-margin-small-top">Buy</a></div>`;
  return card;
}

const service_container = document.querySelector("#services");
for (let i = 0; i < services.length; i++) {
  const service = services[i].name;
  const price = services[i].price;
  const card = create_card(service, price);
  service_container.append(card);
}
