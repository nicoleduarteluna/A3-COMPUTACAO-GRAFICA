import { getColorIterator } from "./utils/colors/color.js";
import sample from "./examples/widget_A3.js";
import shape from "./utils/shape/shape.js";

function widget(key, draw) {
  let nextColor = getColorIterator(key);

  sample(key, draw);
}

export default widget;
