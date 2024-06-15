import {
  SVG,
  Container,
  extend,
} from "https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.2.0/svg.esm.js";
import widget from "../widget/widget.js";
import keygen from "../keygen.js";
import svgjsblob from "../blob.js";
import { getColorIterator } from "../widget/utils/colors/color.js";

export default {
  template: `
        <div class="mt-3 flex justify-center">
            <svg width="450" height="450"
                 viewBox="0 0 400 400" version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect ref="background" x="0" y="0" width="400" height="400" style="stroke: grey;" />
                <g v-html="innercode"></g>
            </svg>    
        </div>    
    `,
  data() {
    return {
      innercode: "",
      key: null,
      SVG: null,
    };
  },
  mounted() {
    if (!this.key) {
      this.refresh(keygen.getKeyParams(""));
    }
  },
  methods: {
    refresh(key) {
      this.key = key;
      extend(Container, svgjsblob);
      let draw = SVG().viewbox(0, 0, 1000, 1000);
      widget(key, draw);
      this.innercode = draw.svg();

      let nextColor = getColorIterator(key);
      this.$refs.background.style.fill = nextColor();
    },

    codeChange(code) {
      this.innercode = code;
    },
  },
};
