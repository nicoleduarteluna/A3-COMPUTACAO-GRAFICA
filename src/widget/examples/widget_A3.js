import { getColorIterator } from "../utils/colors/color.js";
import blob from "../utils/blob/blob.js";
import shape from "../utils/shape/shape.js";

export default function (key, draw) {
  let nextColor = getColorIterator(key);
  let newkey = key.next256();

  // Deslocamentos predefinidos para posicionar as pétalas
  const offsets = [
    { x: 100, y: 0 },
    { x: 80, y: 80 },
    { x: 0, y: 100 },
    { x: -80, y: 80 },
    { x: -100, y: 0 },
    { x: -80, y: -80 },
    { x: 0, y: -100 },
    { x: 80, y: -80 },
  ];

  // Criar pétalas com formas diferentes
  for (let i = 0; i < 10; i++) {
    let b = blob(key.next256());
    b.fill(nextColor()).opacity(0.8);
    b.stroke({ color: "black", width: 2 }).opacity(0.7);
    // Usar deslocamentos predefinidos para posicionar as pétalas
    let offset = offsets[i % offsets.length];
    b.move(350 + offset.x, 350 + offset.y).size(300);
    b.addTo(draw);
  }

  // Criar o caule
  let stem = draw
    .rect(20, 500)
    .move(475, 525)
    .fill(nextColor())
    .stroke({ color: "black", width: 2 })
    .opacity(0.6);

  // Adicionar formas randômicas ao redor da flor
  const positions = [
    { x: 100, y: 125 },
    { x: 150, y: 125 },
    { x: 50, y: 125 },
    { x: 100, y: 175 },
    { x: 100, y: 750 },
    { x: 100, y: 850 },
    { x: 50, y: 800 },
    { x: 150, y: 800 },
    { x: 100, y: 800 },
    { x: 100, y: 75 },
    { x: 850, y: 125 },
    { x: 900, y: 125 },
    { x: 800, y: 125 },
    { x: 850, y: 175 },
    { x: 850, y: 75 },
    { x: 850, y: 800 },
    { x: 850, y: 750 },
    { x: 850, y: 850 },
    { x: 800, y: 800 },
    { x: 900, y: 800 },
  ];

  // Tamanhos fixos para as formas
  const sizes = [15];

  // Adicionar formas nas posições fixas com tamanhos predefinidos
  positions.forEach((pos, index) => {
    let t1 = shape(newkey);

    t1.fill(nextColor());
    t1.opacity(0.7);
    t1.stroke({ color: "black", width: 1.5 }).opacity(0.9);
    t1.move(pos.x, pos.y).size(55);
    t1.addTo(draw);
  });

  let t2 = draw
    .circle()
    .move(487, 525)
    .size(100)
    .fill(nextColor())
    .stroke({ color: "black", width: 1 });
  t2.addTo(draw);
}
