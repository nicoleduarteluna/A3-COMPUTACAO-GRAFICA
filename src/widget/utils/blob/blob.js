import utils from "./utils.js"
import { G } from "https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.2.0/svg.esm.js"

export default function (key) {
    let path = utils.getPath(key).path
    let g = new G()
    g.path(path)
    return g
}