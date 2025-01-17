import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Images } from "@Assets";

export const API_URL = "https://dummyjson.com";

export const HEADER_NAV_ITEMS = [
  { label: "Categories", link: "", icon: ChevronDownIcon },
  { label: "Bestsellers", link: "/products/bestsellers" },
  { label: "New Arrivals", link: "/products/new-arrivals" },
  { label: "On Sale", link: "/products/on-sale" },
];

export const FOOTER_NAV_ITEMS = [
  {
    section: "About Us",
    items: ["About Viora", "Privacy Policy", "Terms of Use"],
  },
  {
    section: "Customer Care",
    items: [
      "Delivery and Shipping",
      "Payment Options",
      "Returns",
      "Order Status",
      "Contact Us",
    ],
  },
];

export const CATEGORIES = [
  { label: "Beauty", image_url: Images.img_beauty },
  { label: "Fragrance", image_url: Images.img_fragrance },
  { label: "Bags", image_url: Images.img_bags },
  { label: "Dresses", image_url: Images.img_dresses },
  { label: "Shoes", image_url: Images.img_shoes },
  { label: "Watches", image_url: Images.img_watches },
];
