import { ScenarioStruct } from "../io/IO";
import { TileStruct } from "../io/Structures/TileStruct";
import { getMap2dArray } from "../helpers/Helpers";

export class Cursor {
  x: number;
  y: number;
  paint: boolean = false;
  fill: number;

  constructor(x: number, y: number, fill: number) {
    this.x = x;
    this.y = y;
    this.fill = fill;
  }

  goto(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Paint {
  private _tiles: TileStruct[][];

  cursor: Cursor;

  get rows() {
    return this._tiles.length;
  }

  get cols() {
    return this._tiles[0].length;
  }

  constructor(scenario: ScenarioStruct) {
    this._tiles = getMap2dArray(scenario);
    this.cursor = new Cursor(0, 0, 0);
  }

  private _checkBounds(x: number, y: number) {
    if (x < 0 || x >= this.cols) {
      throw new Error(`position 'x' is outside of bounds: ${x}`);
    }
    if (y < 0 || y >= this.rows) {
      throw new Error(`position 'y' is outside of bounds: ${y}`);
    }
  }

  goto(x: number, y: number) {
    try {
      this._checkBounds(x, y);
    } catch (e) {
      throw new Error(`cannot jump with cursor to position [${x}, ${y}] because is outside of bounds`);
    }
    this.cursor.goto(x, y);
  }

  point(x: number, y: number, fill?: number) {
    try {
      this._checkBounds(x, y);
    } catch (e) {
      throw new Error(`cannot point at position [${x}, ${y}] because is outside of bounds`);
    }
    this._tiles[y][x][0] = fill || this.cursor.fill;
  }

  /**
   * Get interpolation point between two points at magnitude
   */
  lerp(p1: number, p2: number, magnitude: number) {
    return (p2 - p1) * magnitude + p1;
  }

  /**
   * Get distance between two points
   */
  dist(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  /**
   * Draw line
   */
  line(x1: number, y1: number, x2: number, y2: number) {
    this._checkBounds(x1, y1);
    this._checkBounds(x2, y2);
    const d = this.dist(x1, y1, x2, y2) + 1;
    for (let i = 0; i < d; i++) {
      const m = 1 / d * i;
      const x = this.lerp(x1, x2, m);
      const y = this.lerp(y1, y2, m);
      this.point(x, y);
    }
  }

  /**
   * Draw box
   */
  box(x1: number, y1: number, w: number, h: number) {
    for (let y = y1; y < h; y++) {
      for (let x = x1; x < w; x++) {
        this.point(x, y);
      }
    }
  }

  /**
   * Draw circle
   */
  circ(x: number, y: number, m: number) {
    const res = m * Math.PI * 2;
    for (let i = 0; i < res; i++) {
      const loc = Math.PI * 2 / res * i;
      this.point(x + Math.sin(loc) * m, y + Math.cos(loc) * m / 2);
    }
  }
}
