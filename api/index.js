//@ts-check
const SERVER_DOMAIN = "https://3a81-78-159-114-104.ngrok-free.app";//"http://78.159.114.104:3008";
const ACTIVATION_CODES = {
    BETPAWA: {
        ONE_X_TWO_ODDS_PREDICTOR: {
            SUPPORTERS: "1x2_AZZC102",
            FREE:""
        },
        POD_PREDICTOR: {
            SUPPORTERS: "POD_AABXYC102",
            FREE: ""
        },
        PRICE_1X2_PREDICTOR: {
            SUPPORTERS: "HGTTXXTYJSYJDYG",
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
        
        const response = await fetch(url,{
            headers: headers,
            body:param1 && param1.body?param1.body:undefined,
            method:param1 && param1.method?param1.method:undefined,
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



// const headers = new Headers();
// headers.append("")
/**
 * @param {string} url
 */
async function fetchTemplateHTML(url) {//url:"/components/user_content_component/index.html"
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*");
    
    const response = await fetch(url,{
        headers:headers,
        // mode:"cors"

    });
   
    /**
      * @type {string}
      */
    const resp = await response.text();
     
    return resp;
} 
    

async function fetchBetpawaUpcomingMatches_Standings_JSON(){
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*");
    
    const API_VERSION_NAME = "1.1.1.3"
    /**
     * @type {import("../../../../API_SERVER/API_Betpawa_Server/routes/standings/upcoming_matches/api_v1.1.1.3/index").API_Get_UpcomingMatches_Standings_JSON_Response_Interface}
    */
    const respJson = await performJSONFetch(`${SERVER_DOMAIN}/api/v${API_VERSION_NAME}/betpawa/upcoming-matches/standings/`,{
        method:"POST",
        body: JSON.stringify({
            ACTIVATION_CODE: ACTIVATION_CODES.BETPAWA.ONE_X_TWO_ODDS_PREDICTOR.SUPPORTERS,
            ACTIVATION_CODE_TYPE: "SUPPORTER",
            APP_VERSION_NAME:API_VERSION_NAME, 
        })
    });
    // console.log({respJson})
    return respJson; 
}
async function fetchBetpawa1X20Predictor_PredictionsJSON(){
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*");
    
    const API_VERSION_NAME = "1.1.1.3"
    /**
     * @type {import("../../../../API_SERVER/API_Betpawa_Server/routes/predictors/one_x_two_odds_predictor_routes/api_v1.1.1.3/index").API_Get_OneXTwoPredictorPredictions_JSON_Response_Interface}
    */
    const respJson = await performJSONFetch(`${SERVER_DOMAIN}/api/v${API_VERSION_NAME}/betpawa/get-1x2oddspredictor-predictions/`,{
        method:"POST",
        body: JSON.stringify({
            ACTIVATION_CODE: ACTIVATION_CODES.BETPAWA.ONE_X_TWO_ODDS_PREDICTOR.SUPPORTERS,//"HYTKKTFBHSZWZ",
            ACTIVATION_CODE_TYPE: "SUPPORTER",
            APP_VERSION_NAME:API_VERSION_NAME, 
        }) 
    });
    // console.log({respJson})
    return respJson; 
} 
async function fetchBetpawa1X20Predictor_AccuraciesJSON_WithPostReq(){
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*");
     
    const API_VERSION_NAME = "1.1.1.3"
    /**
     * @type {import("../../../../API_SERVER/API_Betpawa_Server/routes/predictors/one_x_two_odds_predictor_routes/api_v1.1.1.3/index").API_Get_OneXTwoPredictorStrategyAccuracies_JSON_Response_Interface}
    */
    const respJson = await performJSONFetch(`${SERVER_DOMAIN}/PREDICTOR_1X20_accuracies`,{
        method:"POST"
    }); 
    // console.log({respJson})
    return respJson; 
}

async function fetchBetpawa1X20Predictor_AccuraciesJSON(){
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*");
     
    const API_VERSION_NAME = "1.1.1.3"
    /**
     * @type {import("../../../../API_SERVER/API_Betpawa_Server/routes/predictors/one_x_two_odds_predictor_routes/api_v1.1.1.3/index").API_Get_OneXTwoPredictorStrategyAccuracies_JSON_Response_Interface}
    */
    const respJson = await performJSONFetch(`${SERVER_DOMAIN}/PREDICTOR_1X20_accuracies`,{
        method:"GET"
    }); 
    // console.log({respJson})
    return respJson; 
}

async function fetchBetpawaPrice1X2Predictor_PredictionsJSON(){
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*");
    
    const API_VERSION_NAME = "1.1.1.2"
    /**
     * @type {import("../../../../API_SERVER/API_Betpawa_Server/routes/predictors/price1x2_predictor_routes/api_v1.1.1.2/index").API_Get_Price1X2PredictorPredictions_JSON_Response_Interface}
    */
    const respJson = await performJSONFetch(`${SERVER_DOMAIN}:3008/api/v${API_VERSION_NAME}/betpawa/get-price1x2-predictions/`,{
        method:"POST",
        body: JSON.stringify({
            ACTIVATION_CODE: ACTIVATION_CODES.BETPAWA.PRICE_1X2_PREDICTOR.SUPPORTERS,
            ACTIVATION_CODE_TYPE: "SUPPORTER",
            APP_VERSION_NAME:API_VERSION_NAME, 
        })
    });
    // console.log({respJson})
    return respJson;
}
async function fetchBetpawaPODPredictor_PredictionsJSON(){
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin","*");
    
    const API_VERSION_NAME = "1.1.1.2"
    /** 
     * @type {import("../../../../API_SERVER/API_Betpawa_Server/routes/predictors/pod_predictor_routes/api_v1.1.1.2/index").API_Get_PODPredictorPredictions_JSON_Response_Interface}
    */
    const respJson = await performJSONFetch(`${SERVER_DOMAIN}/api/v${API_VERSION_NAME}/betpawa/get-pod-predictions/`,{
        method:"POST",
        body: JSON.stringify({
            ACTIVATION_CODE: ACTIVATION_CODES.BETPAWA.POD_PREDICTOR.SUPPORTERS,
            ACTIVATION_CODE_TYPE: "SUPPORTER",
            APP_VERSION_NAME:API_VERSION_NAME, 
        })
    });
    // console.log({respJson})
    return respJson;
}

// async function fetchUsersJSON() {
//     const headers = new Headers();
//     headers.append("Access-Control-Allow-Origin","*");
//     /**
//      * @type {import("../../../../API_AdminDashboard/routes/users/types").Users_Routes_Payload_Interface}
//     */
//     const respJson = await performJSONFetch("http://localhost:30003/users");
//     // const resp = {
//     //    data:{
//     //     users:[
//     //         {
//     //         _id:"",
//     //         tg_user_id:"101",
//     //         username:"Speeet",
//     //         },
//     //         {
//     //         _id:"",
//     //         tg_user_id:"101",
//     //         username:"Speeet",
//     //         },
//     //         {
//     //         _id:"",
//     //         tg_user_id:"101",
//     //         username:"Speeet",
//     //         },
//     //         {
//     //         _id:"",
//     //         tg_user_id:"101",
//     //         username:"Speeet",
//     //         },
//     //         {
//     //         _id:"",
//     //         tg_user_id:"101",
//     //         username:"Speeet",
//     //         },
//     //         {
//     //         _id:"",
//     //         tg_user_id:"101",
//     //         username:"Speeet",
//     //         },
//     //         {
//     //         _id:"",
//     //         tg_user_id:"101",
//     //         username:"Speeet",
//     //         },
//     //         {
//     //         _id:"",
//     //         tg_user_id:"101",
//     //         username:"Speeet",
//     //         },
//     //         {
//     //         _id:"",
//     //         tg_user_id:"101",
//     //         username:"Speeet",
//     //         },
//     //         {
//     //         _id:"",
//     //         tg_user_id:"101",
//     //         username:"Speeet",
//     //         },
//     //         {
//     //         _id:"",
//     //         tg_user_id:"101",
//     //         username:"Speeet",
//     //         },
//     //         {
//     //         _id:"",
//     //         tg_user_id:"101",
//     //         username:"Speeet",
//     //         },
//     //    ]
//     //    },
//     //    message:"",
//     //    success:true
//     // };
  
//     return respJson.data.users;
// }

// /***
// * Fetch sub accounts
// */
// // fetch the sub accounts
// /**
//  * 
//  * @param {{tg_user_id:number}} param0 
//  */
// async function fetchSubAccounts({
//     tg_user_id
// }) {
//     const headers = new Headers();
//     headers.append("Access-Control-Allow-Origin","*");
//     // const response = await fetch("http://localhost:30003/subaccounts?tg_user_id=101",{
//     //     headers:headers,
//     //     mode:"no-cors"
//     // });
//     /**
//      * @type {import("../../../../API_AdminDashboard/routes/subaccounts/types").SubAccounts_Routes_Payload_Interface}
//     */
//     const respJson = await performJSONFetch("http://localhost:30003/subaccounts?tg_user_id="+tg_user_id);
//     // const resp = {
//     //     data:{
//     //         sub_accounts:[{
//     //             _id:"asas",
//     //             document_created_at_datetime:"",
//     //             sub_link_name:"sub 1",
//     //             sub_account_uid:"121212",
//     //             trader_uid:"101"
//     //         }]
//     //     },
//     //     message:"",
//     //     success:true
//     // };
//     // const resp = await response.json();
//     console.log({respJson});
//     return respJson.data.sub_accounts;//.data.users;
// }


// /**
//  * 
//  * @param {{
//  *      sub_account_uid:number
//  * }} param0
//  */
// async function fetchSubAccountOpenPositionsJSON({sub_account_uid}){
//     const headers = new Headers();
//     headers.append("Access-Control-Allow-Origin","*");

//     /**
//      * @type {import("../../../../API_AdminDashboard/routes/open_positions/types").GetOpenPositions_ResponsePayload_Interface}
//     */
//     const respJson = await performJSONFetch("http://localhost:30003/open-positions?sub_account_uid="+sub_account_uid);

//     console.log({respJson});
//     return respJson.data.orders;//.data.users;
// }



// async function fetchTopTradersJSON({limit,skip}){
//     const headers = new Headers();
//     headers.append("Access-Control-Allow-Origin","*");
 
//     /**
//      * @type {import("../../../../API_AdminDashboard/routes/top_traders/types").GetAllTopTraders_Routes_Payload_Interface}
//     */
//     const respJson = await performJSONFetch(`http://localhost:30003/top-traders?limit=${limit}&skip=${skip}`);

//     console.log({respJson});
//     return respJson.data.top_traders;//.data.users;
// }

  
// async function fetchTopTradersOpenPositionsJSON({limit,skip,trader_uid}){
//     const headers = new Headers();
//     headers.append("Access-Control-Allow-Origin","*");
 
//     /**
//      * @type {import("../../../../API_AdminDashboard/routes/top_traders/types").GetTraderOpenPositions_Routes_Payload_Interface}
//     */
//     const respJson = await performJSONFetch(`http://localhost:30003/trader-open-positions?limit=${limit}&skip=${skip}&trader_uid=${trader_uid}`);

//     console.log({respJson});
//     return respJson.data.trader_open_positions;
// }






/**
 * @typedef {{
 *  performJSONFetch: performJSONFetch,
 *  fetchTemplateHTML: fetchTemplateHTML,
 *  fetchBetpawa1X20Predictor_PredictionsJSON: fetchBetpawa1X20Predictor_PredictionsJSON,
 *  fetchBetpawaPrice1X2Predictor_PredictionsJSON: fetchBetpawaPrice1X2Predictor_PredictionsJSON,
 *  fetchBetpawaPODPredictor_PredictionsJSON:fetchBetpawaPODPredictor_PredictionsJSON,
 *  fetchBetpawaUpcomingMatches_Standings_JSON: fetchBetpawaUpcomingMatches_Standings_JSON,
 *  fetchBetpawa1X20Predictor_AccuraciesJSON: fetchBetpawa1X20Predictor_AccuraciesJSON
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
