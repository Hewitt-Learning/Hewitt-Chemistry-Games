# Hewitt Learning

[Trello board](https://trello.com/b/cKhbgr5G/soft-eng-project) (you will need access to view it)

When commits are pushed/merged to the main branch, it is automatically deployed to https://hewitt-chemistry-games.netlify.app/

## Installation/Setup

You should have installed:

- [Node.js](https://nodejs.org/en/) 16.0 or newer
- [Git](https://git-scm.com/)

Then, using the [npm package manager (which comes preinstalled with Node.js)](https://www.npmjs.com/package/npm), you will need to install the [pnpm package manager](https://pnpm.io/), which we are using for this project. You can install pnpm by running `npm install -g pnpm`

Then, you can install the dependencies for this project by running `pnpm install` in the project folder.

## Running the project

After everything is installed, you can run the development server using:

```
pnpm dev
```

You can run the production build (creates a static site in the `dist` folder) using:

```
pnpm build
```

You can run the tests using:

```
pnpm test
```

## Architecture

This project is a static site, where all of the interactive behavior is implemented client-side. The UI framework is [Preact](https://preactjs.com/tutorial/) (if you are familiar with [React](https://reactjs.org/), all applicable knowledge will carry over). We are using [TypeScript](https://www.typescriptlang.org/) for type safety.

All the source code lives in the `src` folder. Since we have worked on Element Decoder, Ionic Tetris, and Compound Decoder the projects are in separate directories: `src/element-decoder`, `src/ionic-tetris`, and `src/compound-decoder`. 

In the top-level `src` directory, `theme.tsx` is an important file which, along with `theme-toggle.css`, dictates the theme of both of the games by integrating the current system's dark or light mode setting when set to "auto", or helps toggle between dark and light mode.

### Element Decoder

Element Decoder is the game we have made the most progress on. Its folder structure is:

- `components`: Holds Preact components for the UI, including current game board, info box, and the individual element info from the periodic table.
- `word-placement`: Holds logic related to the placement/fitting of words onto the periodic table grid. Used primarily with `vite.config.ts` to filter the wordList and `game-state.ts` to place the current word on the periodic table.
- `app.tsx`: The top-level rendered component. Helps with displaying different screens the user might see (e.g. introductory screen or level selector screen). Also contains components that play sound on correct or incorrect matches.
- `game-state.ts`: Keeps track of all of the game state. Most of the game logic is in here. This file exports a `useGameState` [hook](https://preactjs.com/guide/v10/hooks) that allow it to be pulled into components (in our case, specifically the `PeriodicTable` component). The `useGameState` hook returns properties for all the externally-visible state values, as well as functions to modify the state.
- `main.tsx`: The entrypoint file, it renders the top-level component into the page.
- `periodic-table-data.ts`: Contains the raw data for the elements of the periodic table.
- `random-element-sequence-from-placement.ts`: Given a "placed" word, shuffles the "elements to find" into a random sequence of elements to be found.
- `score-calc.ts`: Given the current score and streak, and the amount of time it took to find the element, returns the new score and streak. The score is calculated as the sum of three parts: The base score for correctly finding an element, an increasing "streak bonus" for getting multiple elements in a row correctly without mistakes, and a "time bonus" for answering correctly quickly. The comments in that file more specifically describe the calculations for each of those bonuses.
- `index.css`: Contains global CSS styles, it is imported by the `main.tsx` component.
- `vite-env.d.ts`: Sets up globals for TypeScript.
- `vite.config.ts` retrieves the wordList for Element Decoder from DatoCMS, if the wordList on DatoCMS has been rebuilt. This file also checks for errors in the wordList retrieved from DatoCMS and updates the wordList to remove words from the list if they do not fit in the periodic table, based on our letter definitions. It is important to note that any word filtering done here does _not_ filter out inappropriate words. That responsibility lies on those who manage the DatoCMS wordList to not enter in inappropriate words.

Below is a graph of the high-level architecture of this project. We used rounded boxes with links to subgraphs to represent the different folders inside of `src`, unrounded boxes for specific files or components, and arrow cardinality to represent interaction between files and components (e.g. one-way arrows mean that the source of the arrow is not affected by the destination). Certain file names have been condensed for brevity, specifically within the `/src/components/` subfolder. This graph was made with the [Mermaid](https://mermaid.js.org/) diagramming and charting tool for GitHub/GitLab, and tested on Mermaid's [live testing website](https://mermaid.live/).

```mermaid
graph TD
    SubGraph1 <---> components
    Node3 <---> components
    subgraph "component-items"
    components(periodic-table)
    components <--> CompNode2[periodic-table-element]
    components <--> CompNode3[info-box]
    components <--> CompNode4[element-to-find]
    end

    SubGraph2 ---> word-placement
    subgraph "word-placement-items"
    word-placement(word-placement/)
    word-placement --> |Testing| WordNode1[index.test.ts]
    word-placement --> |Manually defined letters| WordNode2[letter-definitions]
    word-placement --> |Placement logic| WordNode3[index.ts]
    end

    subgraph "Main Graph"
    Node1[main.tsx] --> Node2[app.tsx]
    Node2 <--> SubGraph1(components/)
    Node6[periodic-table-data] --> |data used as base for game| SubGraph1

    Node3[game-state.tsx]
    Node3 <--> Node4[score-calc.tsx]
    Node5[random-element-sequence] -->|once per word change| Node3
    SubGraph2(vite.config.ts) --> |word placement data| Node3
    end
```

The following graph shows how each of the different states in our game-state logic file interact with each other. The graph begins at the `start` box, and runs until `element-sequence` is empty.

```mermaid
graph TD
    %% define word & place on periodic table
    State0(Error)
    Start --> WordList
    WordList -- Choose random word --> Word
    Word --> Placement
    Placement -- Could not place word --> State0

    %% word has been placed on table, begin game setup
    Placement --> element-sequence("Element sequence")
    element-sequence --> active-element("Active element")
    Click2  ---> reset("Reset start time")

    %% Game has been setup, handle if a click is good or bad
    Click --> BadClick("Incorrect click") -- "Mark element as incorrect" --> element-states("Element states")
    BadClick --"Reset streak" --> Streak
    Click --> Click2("Correct click")
    active-element --> Click
    Click2 -- "Reset board; Set correct match" --> element-states
    Click2 --> time-bonus("Time bonus")
    element-states -- Change game phase --> game-phase("Display game feedback")

    %% Determine scoring
    %% Score is added to if match attempt is good, and is broken into
    %% Base points per correct match, streak bonus, and time bonus
    Click2 -- "Increment streak" --> Streak
    Streak --> Score
    time-bonus --> Score
    default-bonus("Default bonus") --> Score

    Click2 -- "Start next turn; Advance element sequence" --> element-sequence
```

### Ionic Tetris

The second game we have begun work on, but have not completed, is Ionic Tetris. The premise of this game is to teach ways to combine ions to create ionic compounds. Ionic compounds are made up of cations (negative charge, metal) and anions (positive charge, nonmetal), and the sum of charges is always 0. It is also important for the cations to be on the lefthand side of the compound, and anions be on the right.

The game of ionic tetris will work in a similar way to tetris, with falling blocks. However, all blocks are the same size. The key variation is that the falling blocks are different ions. Another key difference will be that we have different "buckets" that the player has to work with, meaning that there are multiple compounds being built at once. In this game, a player will lose when their ions stack up to the top of the playable space, similar to tetris. In discussions with the client, this seemed a bit too harsh especially since it involves a lot of quick thinking and problem solving, so we planned on having an occasional "eraser" element drop instead of a new ion. We were not firm on the functionality of the eraser, but talked about having it either erase a row in a bucket, a single ion, or an entire row across multiple buckets. In terms of scoring, we were very loose on this, but considered a scoring method similar to tetris: if a block is placed, you get a certain number of points, and if a row is cleared by creating an ionic compound, you earn points.

What is currently in place is a bare-bones setup of the Ionic Tetris game. Basic details of this game can be seen below.

- `main.tsx`: top-level file that handles light/dark mode.
- `app.tsx`: another top-level file, where components are brought together. Contains default gameboard setup and the "flying" ion (the ion currently in action or to be placed).
- `ion-list.tsx`: contains the list of all ions that have been requested to be used for this game from our client (specifically Colleen Kelley).
- `components/`: contains all the required components for this game, including components for the individual buckets and ions.
- `components/bucket.tsx`: details the bucket components and how they are displayed. A bucket is a group of two to five columns where an ionic compound can be formed.
- `components/ion.tsx`: gives details on how the ions on the gameboard are displayed, particularly based on their charge and their symbol.

### Compound Decoder

This is the third 'game' that is being made for the website. This is essentially a feature update to the element decoder to handle the additional complexity of asking the users to identify the elements used in specific compounds.

Current additional files are as follows:

`compound-data.ts`: data file that contains the raw compound data that will be used for questions.
