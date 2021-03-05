export class Change {
  constructor(category) {
    this.category = category;
  }
}
export var ChangeCategory;
(function(ChangeCategory2) {
  ChangeCategory2["PLUS"] = "PLUS";
  ChangeCategory2["MINUS"] = "MINUS";
  ChangeCategory2["NEUTRAL"] = "NEUTRAL";
})(ChangeCategory || (ChangeCategory = {}));
export class Addition extends Change {
  constructor() {
    super(ChangeCategory.PLUS);
  }
}
export class Removal extends Change {
  constructor() {
    super(ChangeCategory.MINUS);
  }
}
export class ContentChange extends Change {
  constructor() {
    super(ChangeCategory.NEUTRAL);
  }
}
export var Direction;
(function(Direction2) {
  Direction2["UP"] = "UP";
  Direction2["DOWN"] = "DOWN";
})(Direction || (Direction = {}));
export class PositionChange extends Change {
  constructor(direction, amount) {
    super(direction === Direction.UP ? ChangeCategory.PLUS : ChangeCategory.MINUS);
    this.direction = direction;
    this.amount = amount;
  }
}
