import type { RequestHandler } from './$types';

// For ES6
import { SendMailClient } from "zeptomail";

export const GET: RequestHandler = async () => {

	// https://www.npmjs.com/package/zeptomail


// For CommonJS
// var { SendMailClient } = require("zeptomail");

const url = "api.zeptomail.com/";
const token = "Zoho-enczapikey wSsVR611/BOhCvt5zT2pJLg+nw5dBlzxQB8piVL1vXKtH/2W98c+lBLIDALyFKNKRTNvEDNDp7x/mR4GgDMNjowunF9UXCiF9mqRe1U4J3x17qnvhDzKWmpekROMLIsNxw1rmWBnGskl+g==";

let client = new SendMailClient({url, token});

client.sendMail({
    "from": 
    {
        "address": "noreply@aureusmind.com",
        "name": "noreply"
    },
    "to": 
    [
        {
        "email_address": 
            {
                "address": "info@peopleartfactory.com",
                "name": "Info"
            }
        }
    ],
    "subject": "Test Email",
    "htmlbody": "<div><b> Test email sent successfully.</b></div>",
}).then((resp) => console.log("success")).catch((error) => console.log("error"));
	return new Response();
};
