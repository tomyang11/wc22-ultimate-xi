import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import playerData from "./assets/playerData.json";
import Team from './components/Team/Team';
import PlayerShop from './components/Shop/PlayerShop';
import Alert from "./components/Alert/Alert";

import EmojiConvert from './components/Share/EmojiConvert';

import './App.css';

function App() {

  const [budget, setBudget] = useState(80);
  const [forwards, setForwards] = useState([]);
  const [midfielders, setMidfielders] = useState([]);
  const [defenders, setDefenders] = useState([]);
  const [keepers, setKeepers] = useState([]);
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);
  const [teamDone, setTeamDone] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState({text: "", type: ""});

  useEffect(() => {
    if (forwards.length + midfielders.length + defenders.length + keepers.length === 11) {
      setTeamDone(true);
      let copyVal = "🏆My WC 2022 Ultimate XI⚽\n";
      copyVal += "\n"
      forwards.forEach((forward) => {
        copyVal = copyVal + EmojiConvert(forward.nationality) + " " + forward.name + "\n";
      });
      copyVal += "\n";
      midfielders.forEach((midfielder) => {
        copyVal = copyVal + EmojiConvert(midfielder.nationality) + " " + midfielder.name + "\n"
      });
      copyVal += "\n";
      defenders.forEach((defender) => {
        copyVal = copyVal + EmojiConvert(defender.nationality) + " " + defender.name + "\n"
      });
      copyVal += "\n";
      copyVal = copyVal + EmojiConvert(keepers[0].nationality) + " " + keepers[0].name + "\n";
      copyVal = copyVal + "\nFormation: " + defenders.length + "-" + midfielders.length + "-" + forwards.length;
      copyVal = copyVal + "\nLeftover Budget: $" + budget;
      copyVal += "\nhttps://tomyang11.github.io/wc22-ultimate-xi/\n";
      setValue(copyVal);
    }
  }, [forwards, midfielders, defenders, keepers]);

  const addPlayerHandler = (playerToAdd) => {
    if (forwards.length + midfielders.length + defenders.length + keepers.length === 11) {
      alertHandler("Your team is full", "error");
    } else if (forwards.length + midfielders.length + defenders.length === 10 && playerToAdd.position !== "G") {
      alertHandler("You need at least 1 keeper", "error");
    } else if (playerToAdd.price > budget) {
      alertHandler(`You don't have enough money for ${playerToAdd.name}`, "error");
    } else {
      switch (playerToAdd.position) {
        case "F":
          if (forwards.find(e => e.name === playerToAdd.name)) {
            alertHandler(`${playerToAdd.name} is already on your team`, "error");
          } else if (forwards.length === 4) {
            alertHandler("You can't have more than 4 forwards", "error");
          } else if (defenders.length + forwards.length === 8) {
            alertHandler("You need at least 2 midfielders", "error");
          } else if (midfielders.length + forwards.length === 7) {
            alertHandler("You need at least 3 defenders", "error");
          } else {
            setBudget(budget - playerToAdd.price);
            setForwards(prevForwards => {
              return [...prevForwards, playerToAdd]
            });
            alertHandler(`Successfully added ${playerToAdd.name}`, "success");
          }
          break;
        case "M":
          if (midfielders.find(e => e.name === playerToAdd.name)) {
            alertHandler(`${playerToAdd.name} is already on your team`, "error");
          } else if (midfielders.length === 5) {
            alertHandler("You can't have more than 5 midfielders", "error");
          } else if (defenders.length + midfielders.length === 9) {
            alertHandler("You must at least 1 forward");
          } else if (forwards.length + midfielders.length === 7) {
            alertHandler("You need at least 3 defenders", "error");
          } else {
            setBudget(budget - playerToAdd.price);
            setMidfielders(prevMidfieders => {
              return [...prevMidfieders, playerToAdd]
            });
            alertHandler(`Succesfully added ${playerToAdd.name}`, "success");
          }
          break;
        case "D":
          if (defenders.find(e => e.name === playerToAdd.name)) {
            alertHandler(`${playerToAdd.name} is already on your team`, "error");
          } else if (defenders.length === 5) {
            alertHandler("You can't have more than 5 defenders", "error");
          } else if (forwards.length + defenders.length === 8) {
            alertHandler("You need at least 2 midfielders", "error");
          } else if (midfielders.length + defenders.length === 9) {
            alertHandler("You need at least 1 forward", "error");
          } else {
            setBudget(budget - playerToAdd.price);
            setDefenders(prevDefenders => {
              return [...prevDefenders, playerToAdd]
            });
            alertHandler(`Successfully added ${playerToAdd.name}`, "success");
          }
          break;
        case "G":
          if (keepers.find(e => e.name === playerToAdd.name)) {
            alertHandler(`${playerToAdd.name} is already on your team`, "error");
          } else if (keepers.length >= 1) {
            alertHandler("You can't have more than 1 goalkeeper", "error");
          } else {
            setBudget(budget - playerToAdd.price);
            setKeepers(prevKeepers => {
              return [...prevKeepers, playerToAdd]
            });
            alertHandler(`Successfully added ${playerToAdd.name}`, "success");
          }
      }
    }
  }

  const removePlayerHandler = (playerToRemove) => {
    switch(playerToRemove.position) {
      case "F":
        console.log(playerToRemove.name);
        setForwards(forwards.filter(player => {
          return player.name !== playerToRemove.name;
        }))
        setBudget(budget + playerToRemove.price);
        break;
      case "M":
        setMidfielders(midfielders.filter(player => {
          return player.name !== playerToRemove.name;
        }))
        setBudget(budget + playerToRemove.price);
        break;
      case "D":
        setDefenders(defenders.filter(player => {
          return player.name !== playerToRemove.name;
        }))
        setBudget(budget + playerToRemove.price);
        break;
      case "G":
        setKeepers(keepers.filter(player => {
          return player.name !== playerToRemove.name;
        }))
        setBudget(budget + playerToRemove.price);
    }
    setTeamDone(false);
  }

  const alertHandler = (text, type) => {
    setShowAlert(true);
    setMessage({text, type});
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }

  const copyAlertHandler = () => {
    alertHandler("Copied to Clipboard", "success");
  }

  const clearTeamHandler = () => {
    setBudget(80);
    setForwards([]);
    setMidfielders([]);
    setDefenders([]);
    setKeepers([]);
    alertHandler("Team Cleared", "success");
    setTeamDone(false);
  }

  return (
    <div className='flex flex-col'>
      {showAlert && <Alert text={message.text} type={message.type} />}
      <div className='lg:w-full p-3'>
        <Team forwards={forwards} midfielders={midfielders} defenders={defenders} keepers={keepers} removePlayer={removePlayerHandler} />
        <div className='flex flex-row justify-between items-center w-full rounded-md my-3 p-5 text-white bg-[#891638]'>
          <div className='flex flex-row'>
            <label className='text-xl font-bold mr-2'>Budget:</label>
            <p className='text-xl font-bold'>${budget}</p>
          </div>
            <button onClick={clearTeamHandler} className={`rounded-md py-2 px-4 font-bold text-lg text-black ${forwards.length + midfielders.length + defenders.length + keepers.length === 0 ? 'cursor-not-allowed bg-slate-300 text-slate-400' : 'bg-white hover:bg-slate-300 hover:text-white'}`}>Clear <span className='hidden md:inline'>Team</span></button>
            <CopyToClipboard text={value}
              onCopy={() => setCopied(true)}>
              <button disabled={!teamDone} onClick={copyAlertHandler} className={`${teamDone ? `bg-emerald-500 hover:bg-emerald-300` : 'cursor-not-allowed bg-slate-300 text-slate-400'} text-lg rounded-md py-2 px-4 font-bold`}>Share</button>
            </CopyToClipboard>
        </div>
      </div>
      <PlayerShop addPlayer={addPlayerHandler} players={playerData} />
    </div>
  );
}

export default App;
