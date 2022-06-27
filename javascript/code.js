let array=[{
    img:'../images/H1.jpg',
    button:'For rent',
    title:"new apartment view",
    month:'$11,000',

},
//object 2
{
  img:'../images/H2.jpg',
  button:'For rent',
  title:"light modern apartment",
  month:'$12,000',
},
//object3
{
  img:'../images/H3.jpg',
  button:'For rent',
  title:"light modern apartment",
  month:'$1,000',
},
//object 4
{
  img:'../images/H4.jpg',
  button:'For rent',
  title:"light modern apartment",
  month:'$5,000',
},
//object 5
{
  img:'../images/H5.jpg',
  button:'For rent',
  title:"light modern apartment",
  month:'$6,000',
},
//object 6
{
  img:'../images/H6.jpg',
  button:'For rent',
  title:"light modern apartment",
  month:'$8,000',
},
//object 7
{
  img:'../images/H7.jpg',
  button:'For rent',
  title:"light modern apartment",
  month:'$19,000',
},
//object 8
{
  img:'../images/H8.jpg',
  button:'For rent',
  title:"light modern apartment",
  month:'$5,000',
},
//object 9
{
  img:'../images/H9.jpg',
  button:'For rent',
  title:"light modern apartment",
  month:'$7,000',
},
//object 10
{
  img:'../images/H10.jpg',
  button:'For rent',
  title:"light modern apartment",
  month:'$110,000',
},
];
let properties = document.getElementById('Properties');
array.forEach((item, index) => {
    properties.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${item.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.button}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary">${item.button}</button>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <div class="myDIV"><i class="fas fa-bed"></i></i></div>
  </div>
</div>
`});
