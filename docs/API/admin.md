---
sidebar_position: 3
---

# Admin Routes

_backEnd/routes/admin.js_

:::info
All of these endpoints require the user to be authenticated and be an Admin.
PS : These endpoints have still not implemented express-validator, which is why their is missing entries.
:::

## POST /getLogs

> Get all logs

| Key    | Required | Schema                         | Description                                    |
| ------ | -------- | ------------------------------ | ---------------------------------------------- |
| page   | true     | [page](utils/schemas#page)     | Current Page (to limit result by 100 per page) |
| search | true     | [search](utils/schemas#search) | Search to filter users                         |

## POST /getUsers

> Get all users

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |
| page   | true     | [page](utils/schemas#page)     | Current Page (to limit result by 100 per page) |
| search | true     | [search](utils/schemas#search) | Search to filter users                         |

## POST /getTeams

> Get all teams

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |
| page   | true     | [page](utils/schemas#page)     | Current Page (to limit result by 100 per page) |
| search | true     | [search](utils/schemas#search) | Search to filter users                         |

## POST /deleteUser

> Delete a user

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /deleteTeam

> Delete a team

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /addAdmin

> Promote User to Admin

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /removeAdmin

> Demote Admin to User

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /shadowBan

> Shadow ban user (unable to be seen by other's except people in his team and himself)

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /unShadowBan

> Remove shadow ban on user

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /setUserAdminPoints

> Set adminPoints for a certain user

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /changeUserPassword

> Change a user's password

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /getStats

> Get all CTF Stats

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## GET /getAssets

> Get all uploaded assets

## POST /saveConfigs

> Save CTF Configs

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /deleteAsset

> Delete an uploaded asset

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /uploadAsset

> Upload an asset

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /saveChallenge

> Update a challenge

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /createChallenge

> Create a new challenge

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /updateChallengeCategory

> Change challenge category

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /deleteChallenge

> Delete a challenge

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /saveTheme

> Update the CTF Theme

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /sendGlobalMessage

> Send a global message to all users

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /getDockers

> Get all of the launched dockers and their info

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /shutdownDocker

> Shutdown a specific challenge docker

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |

## POST /restartDocker

> Restart a specific challenge docker

| Key | Required | Schema | Description |
| --- | -------- | ------ | ----------- |
