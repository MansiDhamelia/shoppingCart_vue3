import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      name: "abcd",
      cartData: [],
      counter: 1,
      discount: "",
      total: "",
      sum: "",
      selectedItem: "",
      data: [
        {
          id: 1,
          title: "CAT Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis! ",
          price: 550.0,
          image_tag: require("../assets/5.jpg"),
          quantity: 1,
          done: false,
        },
        {
          id: 2,
          title: "SEFANG Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
          price: 619.5,
          image_tag: require("../assets/cloud.jpeg"),
          quantity: 1,
          done: false,
        },
        {
          id: 3,
          title: "MIKANO Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis! ",
          price: 650.0,
          image_tag: require("../assets/3.jpeg"),
          quantity: 1,
          done: false,
        },
        {
          id: 4,
          title: "MATINE Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
          price: 600.5,
          image_tag: require("../assets/5.jpg"),
          quantity: 1,
          done: false,
        },
        {
          id: 5,
          title: "SAFFRON Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
          price: 720.0,
          image_tag: require("../assets/about.jpg"),
          quantity: 1,
          done: false,
        },
        {
          id: 6,
          title: "META Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
          price: 860.5,
          image_tag: require("../assets/about1.jpg"),
          quantity: 1,
          done: false,
        },
        {
          id: 7,
          title: "CATONE Engine",
          description:
            "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
          price: 250.2,
          image_tag: require("../assets/4.jpeg"),
          quantity: 1,
          done: false,
        },
      ],
    };
  },
  getters: {
    cartLength: (state) => state.cartData.length,
    totalAmount: (state) => {
      let sum = 0;
      state.cartData.filter((e) => {
        if (e.price) {
          sum += e.price * e.quantity;

          state.total = sum;
        }
      });
      return sum;
    },
    discountValue: (state) => {
      let result = (state.total * state.discount) / 100;
      return result;
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
    quantity() {
      this.counter++;
    },
    buy(id) {
      this.cartData.find((it) => {
        if (it.id === id) {
          it.done = true;
        }
      });

      alert("buy succesfully");
    },
  },
});
