import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 9,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis tristique sollicitudin. Dignissim convallis aenean et tortor at risus.",
  },
  {
    id: 2,
    rating: 9,
    text: "Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Dignissim diam quis enim lobortis scelerisque. Nisl pretium fusce id velit. Magnis dis parturient montes nascetur ridiculus mus. Mauris rhoncus aenean vel elit. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. ",
  },
  {
    id: 3,
    rating: 7.5,
    text: "Magna fringilla urna porttitor rhoncus dolor purus non. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Varius vel pharetra vel turpis nunc eget lorem. Rhoncus dolor purus non enim praesent elementum. Enim blandit volutpat maecenas volutpat blandit aliquam.",
  },
]);
