import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      name: "abcd",
      cartData: [],
      sum: "",
      selectedItem: "",
      data: [
        {
          id: 1,
          title: "CAT Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis! ",
          price: 550.9,
          image_tag: require("../assets/5.jpg"),

          done: false,
        },
        {
          id: 2,
          title: "SEFANG Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
          price: 619.9,
          image_tag: require("../assets/cloud.jpeg"),

          done: false,
        },
        {
          id: 3,
          title: "MIKANO Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis! ",
          price: 650.9,
          image_tag: require("../assets/3.jpeg"),

          done: false,
        },
        {
          id: 4,
          title: "MATINE Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
          price: 600.9,
          image_tag: require("../assets/5.jpg"),

          done: false,
        },
        {
          id: 5,
          title: "SAFFRON Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
          price: 720.9,
          image_tag: require("../assets/about.jpg"),
          done: false,
        },
        {
          id: 6,
          title: "META Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
          price: 860.9,
          image_tag: require("../assets/about1.jpg"),

          done: false,
        },
        {
          id: 7,
          title: "CATONE Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
          price: 250.9,
          image_tag: require("../assets/4.jpeg"),

          done: false,
        },
      ],
    };
  },
  getters: {
    // getDataById: (state, id) => {
    //   const result = state.data.find((it) => {
    //     it.id === id;
    //   });
    //   return result;
    // },
    cartLength: (state) => state.cartData.length,

    // getCartData(state, id) {
    //   const result = state.cartData.find((it) => {
    //     return it.id === id;
    //   });
    totalAmount:(state) => {
    
      this.cartData.filter((e) => {
        console.log("e", e);
        if (e.price) {
          sum += e.price;
          console.log(sum);
          return sum;
        }
      });
    },
  },
  actions: {
    increment(data) {
      if (this.cartData.includes(data)) {
        alert("Already added!");
      } else {
        this.cartData.push(data);
      }
    },
    getItem(id) {
      this.data.find((it) => {
        if (it.id == id) {
          this.selectedItem = it;

          return it;
        }
      });
    },
    removeItem(id) {
      let index = this.cartData.findIndex((it) => it.id === id);
      this.cartData.splice(index, 1);
    },
    // totalAmount() {
    //   // let sum = 0;
    //   this.cartData.filter((e) => {
    //     console.log("e", e);
    //     if (e.price) {
    //       this.sum += e.price;
    //       console.log(this.sum);
    //       return this.sum;
    //     }
    //   });
    // },
  },
});
