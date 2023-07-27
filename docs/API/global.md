---
sidebar_position: 1
---

# Global Routes

_backEnd/routes/global.js_

## POST /login

> User Login

| Key      | Required | Schema                             | Description   |
| -------- | -------- | ---------------------------------- | ------------- |
| username | true     | [username](utils/schemas#username) | User username |
| password | true     | [password](utils/schemas#username) | User password |

## GET /logout

> User Logout

## POST /register

> Create a new account

| Key          | Required | Schema                                     | Description                            |
| ------------ | -------- | ------------------------------------------ | -------------------------------------- |
| username     | true     | [username](utils/schemas#username)         | User username                          |
| email        | true     | [email](utils/schemas#email)               | User email                             |
| password     | true     | [password](utils/schemas#username)         | User password                          |
| userCategory | true     | [userCategory](utils/schemas#userCategory) | User Category i.e ["Student", "Other"] |

## GET /verify/:id/:token

> Verify user account (if email verification is on)

| Key | Required | Schema                 | Description |
| --- | -------- | ---------------------- | ----------- |
| id  | true     | [id](utils/schemas#id) | User Id     |

## POST /getUsers

> Get Users and their info

| Key    | Required | Schema                         | Description                                    |
| ------ | -------- | ------------------------------ | ---------------------------------------------- |
| page   | true     | [page](utils/schemas#page)     | Current Page (to limit result by 100 per page) |
| search | true     | [search](utils/schemas#search) | Search to filter users                         |

## POST /getUser

> Get User and his info

| Key      | Required | Schema                             | Description            |
| -------- | -------- | ---------------------------------- | ---------------------- |
| username | true     | [username](utils/schemas#username) | Targeted user username |

## POST /getTeam

> Get a Team and its info

| Key      | Required | Schema                             | Description        |
| -------- | -------- | ---------------------------------- | ------------------ |
| teamName | true     | [teamName](utils/schemas#teamName) | Targeted team name |

## POST /getTeams

> Get Teams and their info

| Key    | Required | Schema                         | Description                                    |
| ------ | -------- | ------------------------------ | ---------------------------------------------- |
| page   | true     | [page](utils/schemas#page)     | Current Page (to limit result by 100 per page) |
| search | true     | [search](utils/schemas#search) | Search to filter users                         |

## GET /getScoreboard

> Get Scoreboard in CTFTime format

## GET /getEndTime

> Get CTF End Time

## GET /getConfigs

> Get CTF Configs (startTime, rules, categories, colors...)

## GET /checkSession

> Check that user session is still valid

## GET /getTheme

> Get CTF Theme
