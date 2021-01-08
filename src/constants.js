const BREAKPOINTS = {
  SMALL_DEVICES: "576px",
  MEDIUM_DEVICES: "768px",
  LARGE_DEVICES: "992px",
  EXTRA_LARGE_DEVICES: "1200px",
};

const HEADER_NAVIGATION = [
  {
    value: "/",
    label: "Home",
    exact: true,
    hidden: false,
    icon: "1",
  },
  {
    value: "/sort/random",
    label: "Random",
    exact: true,
    hidden: false,
    icon: "2",
  },
  {
    value: "/sort/upvoted",
    label: "Upvoted",
    exact: true,
    hidden: false,
    icon: "3",
  },
  {
    value: "/sort/downvoted",
    label: "Downvoted",
    exact: true,
    hidden: false,
    icon: "4",
  },
  {
    value: "/sort/lastadded",
    label: "Last added",
    exact: true,
    hidden: false,
    icon: "5",
  },
];

export { BREAKPOINTS, HEADER_NAVIGATION };
