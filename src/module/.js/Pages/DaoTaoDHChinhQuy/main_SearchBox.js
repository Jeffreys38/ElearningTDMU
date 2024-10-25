import onchange_SearchBox from "./onchange_SearchBox.js";
import onclick_SearchBox from "./onclick_SearchBox.js";

const input = document.getElementById("js-search")

// Bắt sự kiện trên DOM input
onclick_SearchBox(input)
onchange_SearchBox(input)