import iconBanking from "./assets/icon-online.svg";
import iconBudgeting from "./assets/icon-budgeting.svg";
import iconOnboarding from "./assets/icon-onboarding.svg";
import iconAPI from "./assets/icon-api.svg";

import imgCurrency from "./assets/image-currency.jpg";
import imgRestaurant from "./assets/image-restaurant.jpg";
import imgPlane from "./assets/image-plane.jpg";
import imgConfetti from "./assets/image-confetti.jpg";

export const perks = [
  {
    icon: iconBanking,
    title: "Online Banking",
    desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: iconBudgeting,
    title: "Simple Budgeting",
    desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    icon: iconOnboarding,
    title: "Fast Onboarding",
    desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: iconAPI,
    title: "Open API",
    desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

export const articles = [
  {
    img: imgCurrency,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    desc: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    img: imgRestaurant,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    img: imgPlane,
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    img: imgConfetti,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    desc: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];
