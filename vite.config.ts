import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import * as fs from "fs/promises";
import { placeWord } from "./src/element-decoder/word-placement";

async function getDefaultWordList(): Promise<string[]> {
  return JSON.parse(await fs.readFile("./src/word-list.json", "utf8"));
}

/**
 * Retrieves the wordList from DatoCMS and checks for errors in retrieval or content retrieved.
 * Pauses function while waiting for headers from fetch
 */
async function getWordList(): Promise<string[]> {
  /**
   * Fetch returns a promise
   * (an object that is expected to exist at some point but does not necessarily exist right now),
   * and once the promise value exists the json data (a promise)
   * is passed to state variable as data, once the json data exists.
   */
  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
          authorization: "Bearer 306d97cc36416136dec1925240ef29",
      "content-type": "application/json",
    },
    body: '{"query":"{\\n  wordList{\\n    words\\n  }\\n}","variables":null}',
    method: "POST",
    mode: "cors",
    credentials: "include",
  });
  const data = (await response.json()) as any; //await used for same reason here - can't get json data until response arrives
  if (!response.ok) {
    //If the fetch response is anything other "ok" (e.g. outside of 200-299 range)
    throw new Error(`Invalid response (${response.status}).`);
  } else {
    //if the response is "ok"
    if (!data.data.wordList.words) {
      //if the words field of the data retrieved is undefined
      return getDefaultWordList(); //use the default wordList from ./word-list.json
    } else {
      //if we found a valid wordList from the data retrieved
      return data.data.wordList.words.split("\n"); //split the data on newline character,
    }
  }
}

/**
 * This is a custom vite plugin that will create a "magic" module called "word-list".
 * When you `import wordList from "wordList"`,
 * this plugin will fetch the up-to-date word list from the CMS,
 * and return that data as a module.
 * This way, we don't require loading data from the CMS client-side, it is only loaded once at build time.
 * When the word list changes in the CMS, a rebuild can be triggered.
 */
const wordListPlugin = (): import("vite").Plugin => {
  const wordListId = "word-list";
  let cache = null;
  return {
    name: "word-list",
    resolveId(id) {
      if (id === wordListId) return wordListId;
    },
    async load(id) {
      if (id === wordListId) {
        if (cache) return cache;
        let wordList = (await getWordList()).filter(
          (word) => placeWord(word) !== false,
        );
        if (wordList.length === 0) {
          // If none of the CMS words fit (or there are no CMS words),
          // use the default word list from the file.
          wordList = (await getDefaultWordList()).filter(
            (word) => placeWord(word) !== false,
          );
        }
        if (wordList.length === 0) {
          // Worst-case (this should never happen) we know this word works.
          // Better than having nothing work.
          wordList = ["fill"];
        }
        cache = `export default ${JSON.stringify(wordList)}`;
        return cache;
      }
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  plugins: [preact(), wordListPlugin()],
  test: {
    includeSource: ["src/**/*.ts", "src/**/*.tsx"],
  },
  build: {
    rollupOptions: {
      input: [
            "element-decoder/index.html",
            "compound-decoder/index.html",
        "ionic-tetris/index.html",
        "index.html",
      ],
    },
  },
});
