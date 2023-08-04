import React from "react";
import ReactDOM from "react-dom/client";
import JSX from "./01-JSX";
import FunctionalComponent from "./02-FunctionComponent";
import ClassComponent from "./03-ClassComponent";
import Props from "./04-Props";
import StateHook from "./05-StateHooks";
import EffectHook from "./06-EffectHook";
import RefHook from "./07-RefHook";
import ListAndKeys from "./08-ListAndKeys";
import ConditionalRendering from "./09-ConditionalRendering";
import FetchData from "./10-FetchData";
import "./index.css";

const heroName = "Superman";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <JSX />
        <FunctionalComponent />
        <ClassComponent />
        <Props heroName="Superman">
            <span>is a superhero</span>
        </Props>
        <Props heroName="Superman">is a superhero</Props>
        <Props heroName={heroName}>is a superhero</Props>
        <StateHook heroName="Superman">is a superhero</StateHook>
        <EffectHook heroName="Superman">is a superhero</EffectHook>
        <RefHook heroName="Superman">is a superhero</RefHook>
        <ListAndKeys friends={["Batman", "Wonder Women"]} heroName="Superman">
            Is a superhero
        </ListAndKeys>
        <ConditionalRendering friends={["Batman", "Wonder Women"]} heroName="Superman">
            Is a superhero
        </ConditionalRendering>
        <FetchData friends={["Batman", "Wonder Women"]} heroName="Superman">
            Is a superhero
        </FetchData>
    </React.StrictMode>,
);
