const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
const options = wrapper.querySelector(".options");

let countries = [
  {
    id: 1,
    name: "Afghanistan",
    code: "+93",
    iso: "AF",
    img: "/content/countries/afghanistan.svg",
    mask: "##-###-####",
  },
  {
    id: 2,
    name: "Aland Islands",
    code: "+358",
    iso: "AX",
    img: "/content/countries/alandIslands.svg",
    mask: "(###)###-##-##",
  },
  {
    id: 3,
    name: "Albania",
    code: "+355",
    iso: "AL",
    img: "/content/countries/albania.svg",
    mask: "(###)###-###",
  },
  {
    id: 4,
    name: "Algeria",
    code: "+213",
    iso: "DZ",
    img: "/content/countries/algeria.svg",
    mask: "##-###-####",
  },
  {
    id: 5,
    name: "American Samoa",
    code: "+1",
    iso: "AS",
    img: "/content/countries/americanSamoa.svg",
    mask: "(684)###-####",
  },
  {
    id: 6,
    name: "Andorra",
    code: "+376",
    iso: "AD",
    img: "/content/countries/andorra.svg",
    mask: "###-###",
  },
  {
    id: 7,
    name: "Angola",
    code: "+244",
    iso: "AO",
    img: "/content/countries/angola.svg",
    mask: "(###)###-###",
  },
  {
    id: 8,
    name: "Anguilla",
    code: "+1",
    iso: "AI",
    img: "/content/countries/anguilla.svg",
    mask: "(264)###-####",
  },
  {
    id: 9,
    name: "Antigua and Barbuda",
    code: "+1",
    iso: "AG",
    img: "/content/countries/antiguaAndBarbuda.svg",
    mask: "(268)###-####",
  },
  {
    id: 10,
    name: "Argentina",
    code: "+54",
    iso: "AR",
    img: "/content/countries/argentina.svg",
    mask: "##-###-###"
  },
];

function addCountry() {
  countries.forEach(country => {
    let li = `<li onclick="updateName(this)"><span class="option-left"><img class="option-img" src=${country.img}> ${country.name}</span><span>${country.code}</span></li>`;
    options.insertAdjacentHTML("beforeend", li);
  })
}

addCountry();

function updateName(selectedLi) {
  console.log(this)
  wrapper.classList.remove('active');
  selectBtn.firstElementChild.innerHTML = selectedLi.innerHTML.slice(0, -17);
}

selectBtn.addEventListener("click" , () => {
  wrapper.classList.toggle("active");
})
