//@ts-check
// const SERVER_DOMAIN = "http://78.159.114.104:3008";
//curl -H "ngrok-skip-browser-warning: true" https://mint-golden-toad.ngrok-free.app

// const SERVER_DOMAIN = "http://rnbty-78-159-114-104.a.free.pinggy.link";
const SERVER_DOMAIN = "https://simple-distinctly-eft.ngrok-free.app";//"http://78.159.114.104:3008";
const BETPAWA_HTFT_BETTOR_SERVER_DOMAIN = SERVER_DOMAIN;//"http://78.159.114.104:3019";
const ACTIVATION_CODES = {
    BETPAWA: {
        ONE_X_TWO_ODDS_PREDICTOR: {
            SUPPORTERS: "",
            FREE:""
        },
        POD_PREDICTOR: {
            SUPPORTERS: "",
            FREE: ""
        },
        PRICE_1X2_PREDICTOR: {
            SUPPORTERS: "",
            FREE: ""
        },
        RV1_PREDICTOR: {
            SUPPORTERS: "",
            FREE: ""
        }
    }
}

/** 
 * 
 * @param {string} url 
 * @param {{method:"GET"|"POST",body:string}?} param1
 * @returns 
 */
async function performJSONFetch(url,param1){
    let respClone;
    try{
        const headers = new Headers();
        // headers.append("Access-Control-Allow-Origin","*");
        headers.append("Content-Type","application/json");
        headers.append("ngrok-skip-browser-warning","true");

        const response = await fetch(url,{
            headers: headers,
            body:param1 && param1.body?param1.body:undefined,
            method:param1 && param1.method?param1.method:undefined
        });
        respClone = response.clone();
        return await response.json();
    }catch(error){
        const responseText = await respClone?.text();
        console.log({responseText});
        console.log({error});
        throw error;
    }
}





async function fetchBetpawaPickedBetsJSON_WithPostReq(){
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*");
     
    // const API_VERSION_NAME = "1.1.1.3"
    // /**
    //  * @type {import("../../../../API_SERVER/API_Betpawa_Server/routes/predictors/one_x_two_odds_predictor_routes/api_v1.1.1.3/index").API_Get_OneXTwoPredictorStrategyAccuracies_JSON_Response_Interface}
    // */
    const respJson = await performJSONFetch(`${SERVER_DOMAIN}/BTTS_Bettor/api/get_bets_data`,{
        method:"POST",
        body: ""
    }); 
    // console.log({respJson})
    return respJson; 
}

async function fetchBetpawa_HTFT_PickedBetsJSON_WithPostReq(){
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*");
     
    // const API_VERSION_NAME = "1.1.1.3"
    // /**
    //  * @type {import("../../../../API_SERVER/API_Betpawa_Server/routes/predictors/one_x_two_odds_predictor_routes/api_v1.1.1.3/index").API_Get_OneXTwoPredictorStrategyAccuracies_JSON_Response_Interface}
    // */
    const respJson = await performJSONFetch(`${BETPAWA_HTFT_BETTOR_SERVER_DOMAIN}/HTFT_Bettor/api/get_bets_data`,{
        method:"POST",
        body: ""
    }); 
    // console.log({respJson})
    return respJson; 
}



/**
 * @typedef {{
 *  performJSONFetch: performJSONFetch,
 *  fetchBetpawaPickedBetsJSON_WithPostReq: fetchBetpawaPickedBetsJSON_WithPostReq,
 *  fetchBetpawa_HTFT_PickedBetsJSON_WithPostReq: fetchBetpawa_HTFT_PickedBetsJSON_WithPostReq
 * }} WindowWithUtils
*/
//  *  fetchUsersJSON: fetchUsersJSON,
//  *  fetchSubAccounts:fetchSubAccounts,
//  *  fetchSubAccountOpenPositionsJSON: fetchSubAccountOpenPositionsJSON,
//  *  fetchTopTradersJSON:fetchTopTradersJSON,
//  *  fetchTopTradersOpenPositionsJSON:fetchTopTradersOpenPositionsJSON

/**
 * @type {Window & WindowWithUtils}
 */
const utils = window;
// window = window;
