import { G } from "https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.2.0/svg.esm.js"
import shapelist from "./shape-list.js"

export default function (key) {
    let keys = Object.keys(shapelist)
    let name = keys[key%keys.length]
    //console.log(name);
    let shape = shapelist[name]
    let path = shape.path
    let g = new G()
    g.path(path)
    return g
}