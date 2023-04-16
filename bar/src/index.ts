
class Point {
    x: number;
    y: number;
}

const getPoint = (): Point => {
    let point = new Point();
    point.x = -1;
    point.y = -1;
    return point;
}

export default getPoint();
