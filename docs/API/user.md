---
sidebar_position: 2
---

# User Routes

_backEnd/routes/user.js_

:::info
All of these endpoints require the user to be authenticated
:::

## POST /registerTeam

> Create a new team

| Key      | Required | Schema                             | Description |
| -------- | -------- | ---------------------------------- | ----------- |
| teamName | true     | [teamName](utils/schemas#teamName) | Team name   |

## GET /getTeamCount

> Get Total Team Count

| Key      | Required | Schema                             | Description |
| -------- | -------- | ---------------------------------- | ----------- |
| teamName | true     | [teamName](utils/schemas#teamName) | Team name   |

## POST /joinTeam

> Join a team using an invite code

| Key      | Required | Schema                             | Description     |
| -------- | -------- | ---------------------------------- | --------------- |
| teamCode | true     | [teamCode](utils/schemas#teamCode) | Team inviteCode |

## GET /leaveTeam

> Leave current team

## POST /kickUser

> Kick user from team (if you are captain)

| Key        | Required | Schema                             | Description                        |
| ---------- | -------- | ---------------------------------- | ---------------------------------- |
| userToKick | true     | [username](utils/schemas#username) | username of user to kick from team |

_This should be changed to a userId_

## POST /updateUsername

> Update your own username

| Key         | Required | Schema                             | Description  |
| ----------- | -------- | ---------------------------------- | ------------ |
| newUsername | true     | [username](utils/schemas#username) | new Username |

## POST /updatePassword

> Update your own password

| Key         | Required | Schema                             | Description  |
| ----------- | -------- | ---------------------------------- | ------------ |
| oldPassword | true     | [password](utils/schemas#password) | old Password |
| newPassword | true     | [password](utils/schemas#password) | new Password |

## POST /getTeamCode

> Get team inviteCode (if you are captain)

| Key      | Required | Schema                             | Description |
| -------- | -------- | ---------------------------------- | ----------- |
| teamName | true     | [teamName](utils/schemas#teamName) | Team Name   |

_This should be changed to a teamId_

## GET /getUserTeam

> Get the current user's team

## POST /saveTeamCountry

> Update team's country (if you are captain)

| Key     | Required | Schema                       | Description   |
| ------- | -------- | ---------------------------- | ------------- |
| country | true     | [emoji](utils/schemas#emoji) | Country Emoji |

## POST /deployDocker

> Deploy a docker challenge

| Key         | Required | Schema                 | Description                      |
| ----------- | -------- | ---------------------- | -------------------------------- |
| challengeId | true     | [id](utils/schemas#id) | ID of challenge to deploy docker |

## POST /shutdownDocker

> Shutdown a docker challenge

| Key         | Required | Schema                 | Description                        |
| ----------- | -------- | ---------------------- | ---------------------------------- |
| challengeId | true     | [id](utils/schemas#id) | ID of challenge to shutdown docker |

## POST /submitFlag

> Submit a flag for a challenge

| Key         | Required | Schema                     | Description               |
| ----------- | -------- | -------------------------- | ------------------------- |
| challengeId | true     | [id](utils/schemas#id)     | ID of challenge to submit |
| flag        | true     | [flag](utils/schemas#flag) | Flag to check             |

## POST /buyHint

> Buy a chellenge hint

| Key         | Required | Schema                 | Description                      |
| ----------- | -------- | ---------------------- | -------------------------------- |
| challengeId | true     | [id](utils/schemas#id) | ID of challenge to buy hint from |

## GET /getChallenges

> Get all challenges and their info

## GET /getNotifications

> Get all notifications
