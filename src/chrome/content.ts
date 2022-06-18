import { ChromeMessage, Sender } from "../types";

const container = document.createElement('div');
container.style.position = "fixed";
container.style.left = `80vw`;
container.style.top = `75vh`;
container.style.zIndex = "1000";
container.style.backgroundColor = 'whitesmoke';
container.style.width = "10rem";
container.style.height = "7rem";
container.style.padding = "0.5rem";
container.style.borderRadius = "8px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "space-around";
container.style.alignItems = "center";
container.style.color = "black";
container.style.boxShadow = "0px 8px 17px 2px rgba(0,0,0,0.14) , 0px 3px 14px 2px rgba(0,0,0,0.12) , 0px 5px 5px -3px rgba(0,0,0,0.2) ";
container.id = "lostContainer";

const jsFunctionNo = "const lostBox = document.getElementById('lostContainer'); lostBox.remove();"
const jsFunctionYes = "window.open('https://help.nickelled.com/','_blank');"

const messagesFromExtensionListener = (message: ChromeMessage, sender: any, response: any) => {
    if (
        sender.id === chrome.runtime.id &&
        message.from === Sender.Extension) {
            container.innerHTML = `Are you lost ${message.message}?<div style="display: flex; width: 100%; justify-content: space-around; flex-direction: row;"><button onclick="${jsFunctionYes}">Yes</button><button onclick="${jsFunctionNo}">No</button></div>`
            document.body.appendChild(container)
    }
}

chrome.runtime.onMessage.addListener(messagesFromExtensionListener)
