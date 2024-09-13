import { list, Leates, offer } from "./data.js";

const hero = document.querySelector(".hero_block");

$(".hero_wrap").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
});

// hero.innerHTML = collection
//   .map(
//     (item) => `
// <p class="text-[16px] font-bold text-accent leading-[175%] mb-[12px]">${item.description}</p>
// <h1 class="text-[53px] font-bold text-black w-[644px] mb-[12px]">${item.title}</h1>
// <p class="text-[16px] text-subtextcolor font-bold w-[559px] mb-[27px]">${item.text}</p>
// <button class="py-[17px] px-[40px] bg-accent text-[17px] font-semibold text-white">${item.btn_text}</button>
// `
//   )
//   .join("");

const item_list = document.querySelector(".item_list_wrap");
item_list.innerHTML = list
  .map(
    (item) => `
            <li class="bg-special_text shadow-[0_0_25px_0_rgba(0,0,0,0.1)] w-[275px] pb-[17px]">
              <div class="pt-[46px] pr-[52px] pl-[40px] bg-item_bg mb-[12px]">
              <img src="${item.img}" alt="img">
              </div> 
              <div class="text-center">
                <h3 class="font-bold text-[18px] text-accent mb-[12px]">${
                  item.title
                }</h3>
                <div class="w-[52px] mx-auto mb-[12px]">
                <img src="${item.color}" alt="img">
                </div>
                <p class="text-[14px] font-normal text-special_text mb-[12px]">${
                  item.code
                }</p>
                <p class="text-[14px] font-normal text-special_text">${
                  "$" + item.cost
                }</p>
                <button class="text-white py-[14px] px-[20px] bg-lime-400 rounded-md">Buy</button>
                </div>
            </li>
`
  )
  .join("");

const Featured_block = document.querySelector(".Featured_block");

const loadState = (key) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return;
};

const saveState = (key, data) => {
  if (data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

Featured_block.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    const product = list.find((item) => {
      item.id === Number(id);
    });
  }
});

const Leates_list = document.querySelector(".Leates_list");

Leates_list.innerHTML = Leates.map(
  (item) => `
                        <li class="bg-special_text">
                            <div class="bg-item_bg2 mb-[16px] pt-[33px] pr-[64px] pb-[8px] pl-[73px]">
                                <img src="${item.img}" alt="">
                            </div>
                            <div class="flex justify-between items-center">
                                <h3 class=" text-special_text text-[16px] font-normal">${item.title}</h3>
                                <div class="flex gap-[10px] items-center">
                                    <p class="font-normal text-[14px]  text-special_text">${item.cost}</p>
                                    <p class="font-normal text-[12px] text-pricetagcolor line-through">${item.cost2}</p>
                                </div>
                            </div>
                        </li>
`
).join("");

const offer_list = document.querySelector(".offer_list");

offer_list.innerHTML = offer
  .map(
    (item) => `
                        <li
                            class="pt-[56px] px-[27px] pb-[45px] shadow-[0_8px_40px_0_rgba(49,32,138,0.05)] w-[270px] text-center bg-special_text">
                            <div class="mb-[27px] w-[65px] mx-auto">
                                <img src="${item.img}" alt="img">
                            </div>
                            <h3 class=" text-special_text text-[22px] font-semibold mb-[20px]">${item.title}</h3>
                            <p class=" text-special_text text-[16px] font-bold leading-[160%]">${item.text}</p>
                        </li>
`
  )
  .join("");

const mode_btn = document.querySelector(".mode_btn");

mode_btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
