---
sidebar_position: 1
---

# Validation Schemas
*backEnd/controllers/validation.js*

### username
```js
username = (id = "username") =>
  check(id)
    .notEmpty()
    .withMessage("must not be empty")
    .trim()
    .isLength({ min: 1, max: 32 })
    .withMessage("must be >1 and <32")
    .matches(/^[^"$\n@]+$/)
    .withMessage("dont use any sus characters");
```

### password
```js
password = (id = "password") =>
  check(id)
    .notEmpty()
    .withMessage("must not be empty")
    .trim()
    .isLength({ min: 8 })
    .withMessage("must be >8");
```

### email
```js
email = (id = "email") =>
  check(id)
    .notEmpty()
    .withMessage("must not be empty")
    .trim()
    .isEmail()
    .withMessage("Not a valid Email");
```

### userCategory
```js
userCategory = (id = "userCategory") =>
  check(id)
    .notEmpty()
    .withMessage("must not be empty")
    .trim();
```

### id
```js
id = (id = "id") =>
  check(id)
    .notEmpty()
    .withMessage("must not be empty")
    .trim()
    .custom((val) => ObjectId.isValid(val))
    .withMessage("not a valid ObjectId")
    .customSanitizer((val) => ObjectId(val));
```

### page
```js
page = (id = "page") =>
  check(id)
    .optional()
    .default(1)
    .isInt({ min: 0 })
    .withMessage("must be an int");
```

### search
```js
search = (id = "search") =>
  check(id)
    .optional()
    .default("")
    .isString()
    .withMessage("must be a string")
    .customSanitizer((val) => new RegExp(val, "i"));
```

### teamName
```js
teamName = (id = "teamName") =>
  check(id)
    .notEmpty()
    .withMessage("must not be empty")
    .trim()
    .isLength({ min: 1, max: 32 })
    .withMessage("must be >1 and <32")
    .matches(/^[^"$\n]+$/)
    .withMessage("dont use any sus characters");
```

### teamCode
```js
teamCode = (id = "teamCode") =>
  check(id)
    .notEmpty()
    .withMessage("must not be empty")
    .trim()
    .isUUID(4)
    .withMessage("must be a uuid");
```

### flag
```js
flag = (id = "flag") =>
  check(id)
    .notEmpty()
    .withMessage("must not be empty")
    .trim();
```

### emoji
```js
emoji = (id = "emoji") =>
  check(id)
    .notEmpty()
    .withMessage("must not be empty")
    .trim()
    .matches(/^[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]$/)
    .withMessage("must be an emoji!");
```