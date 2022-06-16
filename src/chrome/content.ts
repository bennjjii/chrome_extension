import { ChromeMessage, Sender } from "../types";

const messagesFromExtensionListener = (message: ChromeMessage, sender: any, response: any) => {
    
    console.log('[content.js]. Message received', {
        message,
        sender,
    })



    if (
        sender.id === chrome.runtime.id &&
        message.from === Sender.Extension &&
        message.message === "userIsIdle") {

        console.log('user is idle')
    }
}

chrome.runtime.onMessage.addListener(messagesFromExtensionListener)