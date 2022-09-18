# Crossmint Challenge
<br />

This challenge uses Typescript to solve the two phases of the challenge. All the code is written in the `src` directory.

## Overview
- `/phases`: This is where the logic for solving each challenge is written. `phase1.ts` and `phase2.ts` correspond to the respective challenge's solution. 

    `phase2Patterns.ts` contains a set of functions that *attempt* to find a pattern in how the Megaverse is structured in the second phase.

- `/utils` A set of utility modules that help with calling the API. Though not the best practice, I put the Typescript custom types in the `/utils/types.ts` for simplicity of the filesystem.

    The main goal of the utils directory is to minimize repeated code in the main logic and instead result in a more readable solution.

## Run locally

Clone this repo and cd into it. I've added austin@paella.dev as a collaborator to the repo, if you need access, send me an email: qazal.saamani@gmail.com

```
git clone git@github.com:Qazalin/crossmint-challenge.git 
```

run `yarn` or `npm install` to install typescript and node-fetch.

```
yarn
```

Run the `src/index.ts` using ts-node
```
yarn ts-node src/index.ts
```
