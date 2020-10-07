<template>
  <div>
    <h1 v-text="title"></h1>

    <b-jumbotron class="w-50 m-auto px-4 jb-container" text-variant="white">
      <b-row
        class="mx-auto d-flex justify-content-center mb-4 bg-light button-container align-items-center"
      >
        <button
          v-for="(price, frequency) in plans[0].pricing"
          :key="frequency"
          @click="currentFrequency = frequency"
          class="btn mx-2"
          :class="currentFrequency == frequency ? 'bg-primary text-white' : ''"
        >
          {{ frequency }}
        </button>
      </b-row>

      <div class="d-flex justify-content-around w-100 m-auto">
        <div v-for="(plan, index) in plans" :key="index">
          <h4 class="font-weight-bold">{{ plan.name }}</h4>

          <ul class="pt-3">
            <li
              v-for="(benefit, index) in plan.benefits[currentFrequency]"
              :key="index"
            >
              {{ benefit }}
            </li>
          </ul>

          <div class="d-flex pt-4">
            <h3>{{ getPrice(plan.pricing[currentFrequency].price) }}</h3>
            <h6>{{ plan.pricing[currentFrequency].label }}</h6>
          </div>
        </div>
      </div>

      <div class="pt-2">
        <a href="#" @click.prevent="currency = 'usd'">USD</a> |
        <a href="#" @click.prevent="currency = 'eur'">€</a>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "Pricing",
  data() {
    return {
      title: "Pricing",
      currentFrequency: "monthly",
      currency: "usd",
      plans: [
        {
          name: "Started",
          benefits: {
            monthly: ["Benefice 1", "Benefice 2", "Benefice 3"],
            yearly: ["Benefice 1", "Benefice 2", "Benefice 3", "Benefice 4"],
            lifetime: [
              "Benefice 1",
              "Benefice 2",
              "Benefice 3",
              "Benefice 4",
              "Benefice 5",
            ],
          },
          pricing: {
            monthly: { price: 99, label: "/mo" },
            yearly: { price: 499, label: "/yr" },
            lifetime: { price: 1200, label: "" },
          },
        },
        {
          name: "Pro",
          benefits: {
            monthly: ["Benefice 1", "Benefice 2", "Benefice 3"],
            yearly: ["Benefice 1", "Benefice 2", "Benefice 3", "Benefice 4"],
            lifetime: [
              "Benefice 1",
              "Benefice 2",
              "Benefice 3",
              "Benefice 4",
              "Benefice 5",
            ],
          },
          pricing: {
            monthly: { price: 199, label: "/mo" },
            yearly: { price: 999, label: "/yr" },
            lifetime: { price: 2200, label: "" },
          },
        },
      ],
    };
  },
  methods: {
    getPrice(price) {
      return this["currency" + this.currency.toUpperCase()](price);
    },

    currencyUSD(price) {
      return "$" + price;
    },
    currencyEUR(price) {
      return Math.ceil(price * 0.8) + "€";
    },
  },
};
</script>

<style scoped></style>
