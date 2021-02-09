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
    label: "Voted",
    exact: true,
    hidden: false,
    icon: "3",
  },
  {
    value: "/sort/downvoted",
    label: "Voted",
    exact: true,
    hidden: false,
    icon: "4",
  },
  {
    value: "/sort/lastadded",
    label: "New",
    exact: true,
    hidden: false,
    icon: "5",
  },
];
const LANGUAGES = [
  {
    label: "English (US)",
    value: "en-US",
  },
  {
    label: "Bosanski",
    value: "ba",
  },
];
export { BREAKPOINTS, HEADER_NAVIGATION, LANGUAGES };
