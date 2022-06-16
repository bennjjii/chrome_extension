import { ChromeMessage, Sender } from "../types";


const container = document.createElement('div');
container.style.position = "fixed";
container.style.left = `80vw`;
container.style.top = `68vh`;
container.style.zIndex = "1000";
container.style.backgroundColor = 'whitesmoke'
container.style.width = "15rem";
container.style.height = "10rem";
container.style.padding = "2rem";
container.style.borderRadius = "8px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "space-between";
container.style.alignItems = "center";
container.style.color = "black"
container.id = "lostContainer";

const jsFunctionNo = "const lostBox = document.getElementById('lostContainer'); lostBox.remove();"
const jsFunctionYes = "window.open('https://help.nickelled.com/','_blank');"

const messagesFromExtensionListener = (message: ChromeMessage, sender: any, response: any) => {
    if (
        sender.id === chrome.runtime.id &&
        message.from === Sender.Extension) {
            container.innerHTML = `Are you lost ${message.message}?<div style="display: flex; justify-content: space-around; flex-direction: row;"><button onclick="${jsFunctionYes}">Yes</button><button onclick="${jsFunctionNo}">No</button></div>`
            document.body.appendChild(container)
    }
}

chrome.runtime.onMessage.addListener(messagesFromExtensionListener)