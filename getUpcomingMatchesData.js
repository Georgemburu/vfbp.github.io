alert("HERE")
function checkIfASelectorIsPresentInPage(page,selector){
    if(document.querySelector(selector_))return true;
    return false;
}


// eg 20:45

setTimeout(function() { 
  const obj = {}
  const gameRoundNameSelector = '#app > div > div.sub-content > div.section.grow-6 > div > div > div > div.main-content-2 > div > div:nth-child(1) > div.virtual-tabs.tabs.square > ul > li.tabs-selector.active > div > span.tab-text';
// const gameRoundNameSelector = '#app > div > div.sub-content > div.section.grow-6 > div > div > div > div.main-content-2 > div > div:nth-child(1) > div.virtual-tabs.tabs.square > ul > li.tabs-selector.active > div > span.tab-text';
// eg 11

const gameRoundTag = document.querySelector(gameRoundNameSelector);
// alert("gameRoundTag:::"+gameRoundTag)
obj["game_round"] = gameRoundTag.textContent.trim();

const playTimeNameSelector = '#app > div > div.sub-content > div.section.grow-6 > div > div > div > div.main-content-2 > div > div:nth-child(1) > div.virtual-tabs.tabs.square > ul > li.tabs-selector.active > div > span.tab-badge'
const playTimeTag = document.querySelector(playTimeNameSelector);
// alert("playTimeTag:::"+playTimeTag.textContent.trim())
  obj["play_time_name"] = playTimeTag.textContent.trim();

  const season_Tag = document.querySelector(".season-title-text");
  const SEASON_NUMBER = Number(season_Tag.textContent.trim().split("#")[1]);
  // alert("DOM Content Loaded "+ SEASON_NUMBER)
  document.body.style.backgroundColor = 'red';
  obj["season_number"] = SEASON_NUMBER;
  // alert(JSON.stringify(obj))

  // Get the teams and odds

  // HOW TO KNOW IF A MARKET IS SELECTED IS BY CHECKING FOR AN 'active' CLASS IN THE CLASSLIST;
/////////////////////
function moveTo_HalftimeFulltime_MarketTab(){
    const FUNCTION_NAME = "(fn:moveTo_HalftimeFulltime_MarketTab)";
    console.log(FUNCTION_NAME)
    // check if url is upcoming virtuals urls if not navigate to it
    // const SELECTOR_FOR_HTFT_MARKET_TAB = '#view-wrapper > div.view-wrapper-content > div > div > div.router-view > div > div.tabs > div > section > div > ul > li:nth-child(5)'
    // const SELECTOR_FOR_HTFT_MARKET_TAB = '#view-wrapper > div.view-wrapper-content > div > div.center-view > div.router-view > div:nth-child(1) > div.virtual-tabs.tabs.square > section > div > ul > li.tabs-selector.last'
    const SELECTOR_FOR_HTFT_MARKET_TAB = '#app > div > div.sub-content > div.section.grow-6 > div > div > div > div.main-content-2 > div > div:nth-child(1) > div.virtual-tabs.tabs.square > section > div > ul > li.tabs-selector.last'
    const marketTag = document.querySelector(SELECTOR_FOR_HTFT_MARKET_TAB);
    if(!marketTag){
        throw new Error('No market tag found by selector on page')
    }

    // good to proceed
    marketTag.click();
    //return true;

}

///////////////////////////
function moveTo_DoubleChance_MarketTab(){
    const FUNCTION_NAME = "(fn:moveTo_DoubleChance_MarketTab)";
    console.log(FUNCTION_NAME)
    // check if url is upcoming virtuals urls if not navigate to it
    // const SELECTOR_FOR_DC_MARKET_TAB = '#view-wrapper > div.view-wrapper-content > div > div > div.router-view > div > div.tabs > div > section > div > ul > li:nth-child(4)';
    // const SELECTOR_FOR_DC_MARKET_TAB = '#view-wrapper > div.view-wrapper-content > div > div.center-view > div.router-view > div:nth-child(1) > div.virtual-tabs.tabs.square > section > div > ul > li:nth-child(4)';
    const SELECTOR_FOR_DC_MARKET_TAB = '#app > div > div.sub-content > div.section.grow-6 > div > div > div > div.main-content-2 > div > div:nth-child(1) > div.virtual-tabs.tabs.square > section > div > ul > li:nth-child(4)';
    /**
     * @type {HTMLButtonElement|null}
     */
    const marketTag = document.querySelector(SELECTOR_FOR_DC_MARKET_TAB);
    if(!marketTag){
        throw new Error('No market tag found by selector on page')
    }

    // good to proceed
    marketTag.click();

}

///////////////////////////
function moveTo_BothTeamsToScore_MarketTab(){
    const FUNCTION_NAME = "(fn:moveTo_BothTeamsToScore_MarketTab)";
    console.log(FUNCTION_NAME)
    // check if url is upcoming virtuals urls if not navigate to it
    // const SELECTOR_FOR_BTTS_MARKET_TAB = '#view-wrapper > div.view-wrapper-content > div > div > div.router-view > div > div.tabs > div > section > div > ul > li:nth-child(3)';
    // const SELECTOR_FOR_BTTS_MARKET_TAB = '#view-wrapper > div.view-wrapper-content > div > div.center-view > div.router-view > div:nth-child(1) > div.virtual-tabs.tabs.square > section > div > ul > li:nth-child(3)';
    const SELECTOR_FOR_BTTS_MARKET_TAB = '#app > div > div.sub-content > div.section.grow-6 > div > div > div > div.main-content-2 > div > div:nth-child(1) > div.virtual-tabs.tabs.square > section > div > ul > li:nth-child(3)';
    // const SELECTOR_FOR_BTTS_MARKET_TAB = '#app > div > div.sub-content > div.section.grow-6 > div > div > div > div.main-content-2 > div > div:nth-child(1) > div.virtual-tabs.tabs.square > section > div > ul > li:nth-child(3) > div > span';
    /**
     * @type {HTMLButtonElement|null}
     */
    const marketTag = document.querySelector(SELECTOR_FOR_BTTS_MARKET_TAB);
    if(!marketTag){
        throw new Error('No market tag found by selector on page')
    }

    // good to proceed
    marketTag.click();

    // TODO: Confirm that the market matches/data is available if not refresh the page and navigate again here
    //return true;


}


///////////////////////////
function moveTo_OverUnder_MarketTab(){
    const FUNCTION_NAME = "(fn:moveTo_OverUnder_MarketTab)";
    console.log(FUNCTION_NAME)
    // check if url is upcoming virtuals urls if not navigate to it
    // const SELECTOR_FOR_OU_MARKET_TAB = '#view-wrapper > div.view-wrapper-content > div > div > div.router-view > div > div.tabs > div > section > div > ul > li:nth-child(2)';
    // const SELECTOR_FOR_OU_MARKET_TAB = '#view-wrapper > div.view-wrapper-content > div > div.center-view > div.router-view > div:nth-child(1) > div.virtual-tabs.tabs.square > section > div > ul > li:nth-child(2)';
    const SELECTOR_FOR_OU_MARKET_TAB = '#app > div > div.sub-content > div.section.grow-6 > div > div > div > div.main-content-2 > div > div:nth-child(1) > div.virtual-tabs.tabs.square > section > div > ul > li:nth-child(2)';
    /**
     * @type {HTMLButtonElement|null}
     */
    const marketTag = document.querySelector(SELECTOR_FOR_OU_MARKET_TAB);
    if(!marketTag){
        throw new Error('No market tag found by selector on page')
    }

    // good to proceed
    marketTag.click();

    // TODO: Confirm that the market matches/data is available if not refresh the page and navigate again here
    //return true;

}





///////////////////////
function moveTo_1X2_MarketTab(){
    const FUNCTION_NAME = "(fn:moveTo_1X2_MarketTab)";
    console.log(FUNCTION_NAME)
    // check if url is upcoming virtuals urls if not navigate to it
    // const SELECTOR_FOR_1X2_MARKET_TAB = '#view-wrapper > div.view-wrapper-content > div > div > div.router-view > div > div.tabs > div > section > div > ul > li:nth-child(1)';
    // const SELECTOR_FOR_1X2_MARKET_TAB = '#view-wrapper > div.view-wrapper-content > div > div.center-view > div.router-view > div:nth-child(1) > div.virtual-tabs.tabs.square > section > div > ul > li.tabs-selector.first';
    const SELECTOR_FOR_1X2_MARKET_TAB = '#app > div > div.sub-content > div.section.grow-6 > div > div > div > div.main-content-2 > div > div:nth-child(1) > div.virtual-tabs.tabs.square > section > div > ul > li.tabs-selector.first';
    /**
     * @type {HTMLButtonElement|null}
     */
    const marketTag = document.querySelector(SELECTOR_FOR_1X2_MARKET_TAB);
    // console.log({marketTag:marketTag})
    if(!marketTag){
        throw new Error('No market tag found by selector on page')
    }

    // good to proceed
    marketTag.click();

    // TODO: Confirm that the market matches/data is available if not refresh the page and navigate again here
    // return true;


}


//////////
/**
 * @typedef {{
*      [leagueName in import("../types_and_interfaces/LeagueName_Types").LeagueName_Types]:{
    *          [homeTeam_awayTeam:string]:{
    *              home_team_name:string,
    *              away_team_name: string,
    *              row_index: number,
    *              one_x_two: {
    *                  [marketType in import("../types_and_interfaces/OneXTwo_Types").OneXTwo_Types]: {
    *                      selector: string,
    *                      odds: number
    *                  }
    *              }
    *          }
    *      }
    * }}   LeaguesToMatchesToOneXTwoMarketSelectors_Interface
    */


    
/**
    * 
    * @param {import("puppeteer").Page} page 
    * @returns {Promise<LeaguesToMatchesToOneXTwoMarketSelectors_Interface>}
    */
function getUpcomingVirtualSports_1X2MarketDataAndSelectors_OnScreen(){
    try {
            // get selectors to click on  for all the matches
            /**
             * util function
             */
            /**
             * Get a CSS selector for a DOM element.
             *
             * @param {Element} element - The DOM element for which to generate a CSS selector.
             * @returns {string} The CSS selector for the element.
             */
            function getSelectorForElement(element) {
                if (!(element instanceof Element)) {
                    throw new Error('Invalid input. Please provide a valid DOM element.');
                }

                const path = [];
                while (element !== document.documentElement) {
                    const id = element.id ? "#"+element.id : '';
                    const className = element.className ? "."+element.className.replace(/\s+/g, '.') : '';
                    path.unshift(element.tagName.toLowerCase()+id+className);
                    if(element.parentElement){
                        element = element.parentElement;
                    }
                }

                return path.join(' > ');
            }
            // END OF UTIL FUNCTION
        

            // return new Promise((resolve,reject)=>{
            
                // const tagEnclosingAllLeaguesSelector = '#view-wrapper > div.view-wrapper-content > div > div.center-view > div.router-view > div > div.tabs > div > section > div > div';
            // const tagEnclosingAllLeaguesSelector = '.tabs-content .tabs-content';
            const tagEnclosingAllLeaguesSelector = '.tab-section';
            const tagEnclosingAllLeagues = document.querySelector(tagEnclosingAllLeaguesSelector);
            // GET THE LEAGUE MATCHES AND THEIR SELECTORS FOR MARKET CHOICES
            
            // Class to store data
            class DataStore{
                /**
                 * @type {LeaguesToMatchesToOneXTwoMarketSelectors_Interface}
                 */
                leaguesToMatchesToOneXTwoMarketSelectors = {
                    "English League":{},
                    "Spanish League":{},
                    "Italian League":{},
                    "French League":{},
                    "German League":{},
                    "Dutch League":{},
                    "Portuguese League":{}
                    
                }
                row_index = 0;
                /**
                 * @param {{
                 *      market_name: import("../types_and_interfaces/MarketNames_Types").MarketNames_Types,
                 *      home_team_name: string,
                 *      away_team_name: string,
                 *      sub_market_name: import("../types_and_interfaces/OneXTwo_Types").OneXTwo_Types,
                 *      odds: number,
                 *      home_team_away_team_key: string,
                 *      selector_for_sub_market: string,
                 *      league_name: import("../types_and_interfaces/LeagueName_Types").LeagueName_Types
                 * }} param0
                 */
                addData({
                    away_team_name,home_team_away_team_key,home_team_name,
                    market_name,odds,selector_for_sub_market,sub_market_name,league_name
                    }){
                        if(!this.leaguesToMatchesToOneXTwoMarketSelectors[league_name])this.leaguesToMatchesToOneXTwoMarketSelectors[league_name]={};
                        if(!this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key]){
                            console.log('Creating new teams object')
                            this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key] = {
                                away_team_name,
                                home_team_name,
                                row_index:this.row_index,
                                one_x_two: {
                                    one: {
                                        odds:0,
                                        selector:''
                                    },
                                    x:{
                                        odds:0,
                                        selector:''
                                    },
                                    two:{
                                        odds:0,
                                        selector:''
                                    },
                                    [sub_market_name]: {
                                        odds:odds,
                                        selector:selector_for_sub_market
                                    }

                                }

                            }
                            // INCREMENT
                            this.row_index+=1;
                        }else {
                        console.log('Mutating old teams object')
                        try {
                            this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key].one_x_two[sub_market_name] = {
                                odds:odds,
                                selector:selector_for_sub_market
                            }
                        
                        }catch(err){
                            console.log({err})
                        }
                        

                    }
                }
            }
            const dataStore = new DataStore();
            if(!tagEnclosingAllLeagues)throw new Error("tagEnclosingAllLeagues is null");

            /**
             * NOTE THAT THERE ARE separator-wrapper each containing the different leagues 
             */
            const anArrayContainingAllLeaguesWrapper = tagEnclosingAllLeagues.querySelectorAll(".separator-wrapper");
            for(const leagueWrapper of anArrayContainingAllLeaguesWrapper){
                const leagueName_tag = leagueWrapper.querySelector(".league-name")
                if(!leagueName_tag || !leagueName_tag.textContent) throw new Error("leagueName_tag not found");
                const leagueName = /**@type {import("../types_and_interfaces/LeagueName_Types").LeagueName_Types}*/(leagueName_tag.textContent.trim());
                console.log({leagueName})

                const match_eventContainerTags = leagueWrapper.querySelectorAll(".events-container");
                // console.log(match_eventContainerTags)
                for(const matchEventContainer of match_eventContainerTags){
                    const matchName_Tag = matchEventContainer.querySelector(".events-list .title");
                    // parse home team and awa team
                    if(!matchName_Tag|| !matchName_Tag.textContent) throw new Error("matchName_Tag not found");
                    const matchName = matchName_Tag.textContent.trim();
                    const homeTeamName = matchName.split("-")[0].trim();
                    const awayTeamName = matchName.split("-")[1].trim();
                    console.log({homeTeamName,awayTeamName})
                    
                    const eventBetsWrapper = matchEventContainer.querySelectorAll(".event-bet-wrapper");
                    for(const eventBetsTag of eventBetsWrapper){
                        const eventSelection = eventBetsTag.querySelector(".event-selection");
                        const eventOdds_Tag = eventBetsTag.querySelector(".event-odds");
                        if(!eventSelection ||!eventSelection.textContent )throw new Error("eventSelection not found")
                        if(!eventOdds_Tag ||!eventOdds_Tag.textContent )throw new Error("eventOdds_Tag not found")

                        const subMarketNameTitle = eventSelection.textContent.trim()
                        const subMarketOdds = Number(eventOdds_Tag.textContent.trim())

                        var selectorForSubMarket = getSelectorForElement(/**@type {HTMLElement}*/(eventOdds_Tag));

                        /**
                         * @type {import("../types_and_interfaces/OneXTwo_Types").OneXTwo_Types}
                         */
                        let marketNameTitle_typed = subMarketNameTitle=='1'?'one':(subMarketNameTitle=='2'?'two':'x');
                    
                        const homeTeamAwayTeamKey = homeTeamName+"_"+awayTeamName;
                        
                        // Get the selctors for each of the sub market
                        // console.log(selectorForSubMarket)
                        console.log({
                            subMarketNameTitle,marketNameTitle_typed,subMarketOdds,selectorForSubMarket
                        })
                        dataStore.addData({
                            away_team_name: awayTeamName,
                            home_team_away_team_key: homeTeamAwayTeamKey,
                            home_team_name: homeTeamName,
                            market_name: "1X2",
                            odds: subMarketOdds,
                            selector_for_sub_market: selectorForSubMarket,
                            sub_market_name: marketNameTitle_typed,
                            league_name: leagueName
                        });
                    }
                }

            }

            return dataStore.leaguesToMatchesToOneXTwoMarketSelectors;
        
    }catch(error){
        throw error;
    }
}





function getUpcomingVirtualSports_OverUnderMarketDataAndSelectors_OnScreen(){
    try {
        /**
             * util function
             */
            /**
             * Get a CSS selector for a DOM element.
             *
             * @param {Element} element - The DOM element for which to generate a CSS selector.
             * @returns {string} The CSS selector for the element.
             */
            function getSelectorForElement(element) {
                if (!(element instanceof Element)) {
                    throw new Error('Invalid input. Please provide a valid DOM element.');
                }

                const path = [];
                while (element !== document.documentElement) {
                    const id = element.id ? "#"+element.id : '';
                    const className = element.className ? "."+element.className.replace(/\s+/g, '.') : '';
                    path.unshift(element.tagName.toLowerCase()+id+className);
                    if(element.parentElement){
                        element = element.parentElement;
                    }
                }

                return path.join(' > ');
            }
            // END OF UTIL FUNCTION
        
    

        // return new Promise((resolve,reject)=>{
            // const tagEnclosingAllLeaguesSelector = '#view-wrapper > div.view-wrapper-content > div > div.center-view > div.router-view > div > div.tabs > div > section > div > div';
        // const tagEnclosingAllLeaguesSelector = '.tabs-content .tabs-content';
        const tagEnclosingAllLeaguesSelector = '.tab-section';
        const tagEnclosingAllLeagues = document.querySelector(tagEnclosingAllLeaguesSelector);
        // GET THE LEAGUE MATCHES AND THEIR SELECTORS FOR MARKET CHOICES
        
        // Class to store data
        class DataStore{
            /**
             * @type {LeaguesToMatchesToOverUnderMarketSelectors_Interface}
             */
            leaguesToMatchesToOneXTwoMarketSelectors = {
                "English League":{},
                "Spanish League":{},
                "Italian League":{},
                "French League":{},
                "German League":{},
                "Dutch League":{},
                "Portuguese League":{}
                
            }
            row_index = 0;
            /**
             * @param {{
             *      market_name: import("../types_and_interfaces/MarketNames_Types").MarketNames_Types,
             *      home_team_name: string,
             *      away_team_name: string,
             *      sub_market_name: import("../types_and_interfaces/OverUnder_Types").OverUnder_Types,
             *      odds: number,
             *      home_team_away_team_key: string,
             *      selector_for_sub_market: string,
             *      league_name: import("../types_and_interfaces/LeagueName_Types").LeagueName_Types
             * }} param0
             */
            addData({
                away_team_name,home_team_away_team_key,home_team_name,
                market_name,odds,selector_for_sub_market,sub_market_name,league_name
                }){
                    if(!this.leaguesToMatchesToOneXTwoMarketSelectors[league_name])this.leaguesToMatchesToOneXTwoMarketSelectors[league_name]={};
                    if(!this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key]){
                        console.log('Creating new teams object')
                        this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key] = {
                            away_team_name,
                            home_team_name,
                            row_index:this.row_index,
                            over_under: {
                                "over (1.5)": {
                                    odds:0,
                                    selector:''
                                },
                                "over (2.5)":{
                                    odds:0,
                                    selector:''
                                },
                                "over (3.5)":{
                                    odds:0,
                                    selector:''
                                },
                                "under (1.5)": {
                                    odds:0,
                                    selector:''
                                },
                                "under (2.5)":{
                                    odds:0,
                                    selector:''
                                },
                                "under (3.5)":{
                                    odds:0,
                                    selector:''
                                },
                                [sub_market_name]: {
                                    odds:odds,
                                    selector:selector_for_sub_market
                                }

                            }

                        }
                        // INCREMENT
                        this.row_index+=1;
                    }else {
                    console.log('Mutating old teams object')
                    try {
                        this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key].over_under[sub_market_name] = {
                            odds:odds,
                            selector:selector_for_sub_market
                        }
                    
                    }catch(err){
                        console.log({err})
                    }
                    

                }
            }
        }
        const dataStore = new DataStore();
        if(!tagEnclosingAllLeagues)throw new Error("tagEnclosingAllLeagues is null");

        /**
         * NOTE THAT THERE ARE separator-wrapper each containing the different leagues 
         */
        const anArrayContainingAllLeaguesWrapper = tagEnclosingAllLeagues.querySelectorAll(".separator-wrapper");
        for(const leagueWrapper of anArrayContainingAllLeaguesWrapper){
            const leagueName_tag = leagueWrapper.querySelector(".league-name")
            if(!leagueName_tag || !leagueName_tag.textContent) throw new Error("leagueName_tag not found");
            const leagueName = /**@type {import("../types_and_interfaces/LeagueName_Types").LeagueName_Types}*/(leagueName_tag.textContent.trim());
            console.log({leagueName})

            const match_eventContainerTags = leagueWrapper.querySelectorAll(".events-container");
            // console.log(match_eventContainerTags)
            for(const matchEventContainer of match_eventContainerTags){
                const matchName_Tag = matchEventContainer.querySelector(".events-list .title");
                // parse home team and awa team
                if(!matchName_Tag|| !matchName_Tag.textContent) throw new Error("matchName_Tag not found");
                const matchName = matchName_Tag.textContent.trim();
                const homeTeamName = matchName.split("-")[0].trim();
                const awayTeamName = matchName.split("-")[1].trim();
                console.log({homeTeamName,awayTeamName})
                
                const eventBetsWrapper = matchEventContainer.querySelectorAll(".event-bet-wrapper");
                // const eventBetsWrapper = matchEventContainer.querySelectorAll(".betline-list .betline-list-data > div");
                for(const eventBetsTag of eventBetsWrapper){
                    const eventSelection = eventBetsTag.querySelector(".event-selection");
                    const eventOdds_Tag = eventBetsTag.querySelector(".event-odds");
                    if(!eventSelection ||!eventSelection.textContent )throw new Error("eventSelection not found")
                    if(!eventOdds_Tag ||!eventOdds_Tag.textContent )throw new Error("eventOdds_Tag not found")

                    const subMarketNameTitle = eventSelection.textContent.trim()
                    const subMarketOdds = Number(eventOdds_Tag.textContent.trim())

                    var selectorForSubMarket = getSelectorForElement(/**@type {HTMLElement}*/(eventOdds_Tag));

                    /**
                     * @type {import("../types_and_interfaces/OverUnder_Types").OverUnder_Types}
                     */
                    let marketNameTitle_typed = /**@type {import("../types_and_interfaces/OverUnder_Types").OverUnder_Types}*/(subMarketNameTitle.toLowerCase().trim());
                
                    const homeTeamAwayTeamKey = homeTeamName+"_"+awayTeamName;
                    
                    // Get the selctors for each of the sub market
                    // console.log(selectorForSubMarket)
                    console.log({
                        subMarketNameTitle,marketNameTitle_typed,subMarketOdds,selectorForSubMarket
                    })
                    dataStore.addData({
                        away_team_name: awayTeamName,
                        home_team_away_team_key: homeTeamAwayTeamKey,
                        home_team_name: homeTeamName,
                        market_name: "O/U",
                        odds: subMarketOdds,
                        selector_for_sub_market: selectorForSubMarket,
                        sub_market_name: marketNameTitle_typed,
                        league_name: leagueName
                    });
                }
            }

        }

        return dataStore.leaguesToMatchesToOneXTwoMarketSelectors;
        
    }catch(error){
        throw error;
    }
}

function getUpcomingVirtualSports_BothTeamsToScoreMarketDataAndSelectors_OnScreen(){
    try {
        
            /**
     * util function
     */
    /**
     * Get a CSS selector for a DOM element.
     *
     * @param {Element} element - The DOM element for which to generate a CSS selector.
     * @returns {string} The CSS selector for the element.
     */
    function getSelectorForElement(element) {
        if (!(element instanceof Element)) {
            throw new Error('Invalid input. Please provide a valid DOM element.');
        }

        const path = [];
        while (element !== document.documentElement) {
            const id = element.id ? "#"+element.id : '';
            const className = element.className ? "."+element.className.replace(/\s+/g, '.') : '';
            path.unshift(element.tagName.toLowerCase()+id+className);
            if(element.parentElement){
                element = element.parentElement;
            }
        }

        return path.join(' > ');
    }
    // END OF UTIL FUNCTION
        

    // return new Promise((resolve,reject)=>{
        
        // const tagEnclosingAllLeaguesSelector = '#view-wrapper > div.view-wrapper-content > div > div.center-view > div.router-view > div > div.tabs > div > section > div > div';
    // const tagEnclosingAllLeaguesSelector = '.tabs-content .tabs-content';
    const tagEnclosingAllLeaguesSelector = '.tab-section';
    const tagEnclosingAllLeagues = document.querySelector(tagEnclosingAllLeaguesSelector);
    // GET THE LEAGUE MATCHES AND THEIR SELECTORS FOR MARKET CHOICES
    
    // Class to store data
    class DataStore{
        /**
         * @type {LeaguesToMatchesToOverUnderMarketSelectors_Interface}
         */
        leaguesToMatchesToOneXTwoMarketSelectors = {
            "English League":{},
            "Spanish League":{},
            "Italian League":{},
            "French League":{},
            "German League":{},
            "Dutch League":{},
            "Portuguese League":{}
            
        }
        row_index = 0;
        /**
         * @param {{
         *      market_name: import("../types_and_interfaces/MarketNames_Types").MarketNames_Types,
         *      home_team_name: string,
         *      away_team_name: string,
         *      sub_market_name: import("../types_and_interfaces/BothTeamsToScore_Types").BothTeamsToScore_Types,
         *      odds: number,
         *      home_team_away_team_key: string,
         *      selector_for_sub_market: string,
         *      league_name: import("../types_and_interfaces/LeagueName_Types").LeagueName_Types
         * }} param0
         */
        addData({
            away_team_name,home_team_away_team_key,home_team_name,
            market_name,odds,selector_for_sub_market,sub_market_name,league_name
            }){
                if(!this.leaguesToMatchesToOneXTwoMarketSelectors[league_name])this.leaguesToMatchesToOneXTwoMarketSelectors[league_name]={};
                if(!this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key]){
                    console.log('Creating new teams object')
                    this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key] = {
                        away_team_name,
                        home_team_name,
                        row_index:this.row_index,
                        both_teams_to_score: {
                            No: {
                                odds:0,
                                selector:''
                            },
                            Yes:{
                                odds:0,
                                selector:''
                            },
                            [sub_market_name]: {
                                odds:odds,
                                selector:selector_for_sub_market
                            }

                        }

                    }
                    // INCREMENT
                    this.row_index+=1;
                }else {
                console.log('Mutating old teams object')
                try {
                    this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key].both_teams_to_score[sub_market_name] = {
                        odds:odds,
                        selector:selector_for_sub_market
                    }
                
                }catch(err){
                    console.log({err})
                }
                

            }
        }
    }
    const dataStore = new DataStore();
    if(!tagEnclosingAllLeagues)throw new Error("tagEnclosingAllLeagues is null");

    /**
     * NOTE THAT THERE ARE separator-wrapper each containing the different leagues 
     */
    const anArrayContainingAllLeaguesWrapper = tagEnclosingAllLeagues.querySelectorAll(".separator-wrapper");
    for(const leagueWrapper of anArrayContainingAllLeaguesWrapper){
        const leagueName_tag = leagueWrapper.querySelector(".league-name")
        if(!leagueName_tag || !leagueName_tag.textContent) throw new Error("leagueName_tag not found");
        const leagueName = /**@type {import("../types_and_interfaces/LeagueName_Types").LeagueName_Types}*/(leagueName_tag.textContent.trim());
        console.log({leagueName})

        const match_eventContainerTags = leagueWrapper.querySelectorAll(".events-container");
        // console.log(match_eventContainerTags)
        for(const matchEventContainer of match_eventContainerTags){
            const matchName_Tag = matchEventContainer.querySelector(".events-list .title");
            // parse home team and awa team
            if(!matchName_Tag|| !matchName_Tag.textContent) throw new Error("matchName_Tag not found");
            const matchName = matchName_Tag.textContent.trim();
            const homeTeamName = matchName.split("-")[0].trim();
            const awayTeamName = matchName.split("-")[1].trim();
            console.log({homeTeamName,awayTeamName})
            
            const eventBetsWrapper = matchEventContainer.querySelectorAll(".event-bet-wrapper");
            for(const eventBetsTag of eventBetsWrapper){
                const eventSelection = eventBetsTag.querySelector(".event-selection");
                const eventOdds_Tag = eventBetsTag.querySelector(".event-odds");
                if(!eventSelection ||!eventSelection.textContent )throw new Error("eventSelection not found")
                if(!eventOdds_Tag ||!eventOdds_Tag.textContent )throw new Error("eventOdds_Tag not found")

                const subMarketNameTitle = eventSelection.textContent.trim()
                const subMarketOdds = Number(eventOdds_Tag.textContent.trim())

                var selectorForSubMarket = getSelectorForElement(/**@type {HTMLElement}*/(eventOdds_Tag));

                function capitalizeFirstLetter(str) {
                    if (typeof str !== 'string' || str.length === 0) {
                        return str; // Return the input unchanged if it's not a string or an empty string.
                    }
                    
                    return str.charAt(0).toUpperCase() + str.slice(1);
                    }
                /**
                 * @type {import("../types_and_interfaces/BothTeamsToScore_Types").BothTeamsToScore_Types}
                 */
                let marketNameTitle_typed = /**@type {import("../types_and_interfaces/BothTeamsToScore_Types").BothTeamsToScore_Types}*/(capitalizeFirstLetter(subMarketNameTitle.trim()));
            
                const homeTeamAwayTeamKey = homeTeamName+"_"+awayTeamName;
                
                // Get the selctors for each of the sub market
                // console.log(selectorForSubMarket)
                console.log({
                    subMarketNameTitle,marketNameTitle_typed,subMarketOdds,selectorForSubMarket
                })
                dataStore.addData({
                    away_team_name: awayTeamName,
                    home_team_away_team_key: homeTeamAwayTeamKey,
                    home_team_name: homeTeamName,
                    market_name: "BTTS",
                    odds: subMarketOdds,
                    selector_for_sub_market: selectorForSubMarket,
                    sub_market_name: marketNameTitle_typed,
                    league_name: leagueName
                });
            }
        }

    }

return dataStore.leaguesToMatchesToOneXTwoMarketSelectors;
    
    
}catch(error){
    throw error;
}
}

// DC 
function getUpcomingVirtualSports_DoubleChanceMarketDataAndSelectors_OnScreen(){
    try {

           
                /**
         * util function
         */
        /**
         * Get a CSS selector for a DOM element.
         *
         * @param {Element} element - The DOM element for which to generate a CSS selector.
         * @returns {string} The CSS selector for the element.
         */
        function getSelectorForElement(element) {
            if (!(element instanceof Element)) {
                throw new Error('Invalid input. Please provide a valid DOM element.');
            }

            const path = [];
            while (element !== document.documentElement) {
                const id = element.id ? "#"+element.id : '';
                const className = element.className ? "."+element.className.replace(/\s+/g, '.') : '';
                path.unshift(element.tagName.toLowerCase()+id+className);
                if(element.parentElement){
                    element = element.parentElement;
                }
            }

            return path.join(' > ');
        }
        // END OF UTIL FUNCTION
    

        // return new Promise((resolve,reject)=>{
            // const tagEnclosingAllLeaguesSelector = '#view-wrapper > div.view-wrapper-content > div > div.center-view > div.router-view > div > div.tabs > div > section > div > div';
        // const tagEnclosingAllLeaguesSelector = '.tabs-content .tabs-content';
        const tagEnclosingAllLeaguesSelector = '.tab-section';
        const tagEnclosingAllLeagues = document.querySelector(tagEnclosingAllLeaguesSelector);
        // GET THE LEAGUE MATCHES AND THEIR SELECTORS FOR MARKET CHOICES
        
        // Class to store data
        class DataStore{
            /**
             * @type {LeaguesToMatchesToOverUnderMarketSelectors_Interface}
             */
            leaguesToMatchesToOneXTwoMarketSelectors = {
                "English League":{},
                "Spanish League":{},
                "Italian League":{},
                "French League":{},
                "German League":{},
                "Dutch League":{},
                "Portuguese League":{}
                
            }
            row_index = 0;
            /**
             * @param {{
             *      market_name: import("../types_and_interfaces/MarketNames_Types").MarketNames_Types,
             *      home_team_name: string,
             *      away_team_name: string,
             *      sub_market_name: import("../types_and_interfaces/DoubleChance_Types").DoubleChance_Types,
             *      odds: number,
             *      home_team_away_team_key: string,
             *      selector_for_sub_market: string,
             *      league_name: import("../types_and_interfaces/LeagueName_Types").LeagueName_Types
             * }} param0
             */
            addData({
                away_team_name,home_team_away_team_key,home_team_name,
                market_name,odds,selector_for_sub_market,sub_market_name,league_name
                }){
                    if(!this.leaguesToMatchesToOneXTwoMarketSelectors[league_name])this.leaguesToMatchesToOneXTwoMarketSelectors[league_name]={};
                    if(!this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key]){
                        console.log('Creating new teams object')
                        this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key] = {
                            away_team_name,
                            home_team_name,
                            row_index:this.row_index,
                            double_chance: {
                                "12": {
                                    odds:0,
                                    selector:''
                                },
                                "1X":{
                                    odds:0,
                                    selector:''
                                },
                                "X2":{
                                    odds:0,
                                    selector:''
                                },
                                [sub_market_name]: {
                                    odds:odds,
                                    selector:selector_for_sub_market
                                }

                            }

                        }
                        // INCREMENT
                        this.row_index+=1;
                    }else {
                    console.log('Mutating old teams object')
                    try {
                        this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key].double_chance[sub_market_name] = {
                            odds:odds,
                            selector:selector_for_sub_market
                        }
                    
                    }catch(err){
                        console.log({err})
                    }
                    

                }
            }
        }
        const dataStore = new DataStore();
        if(!tagEnclosingAllLeagues)throw new Error("tagEnclosingAllLeagues is null");

        /**
         * NOTE THAT THERE ARE separator-wrapper each containing the different leagues 
         */
        const anArrayContainingAllLeaguesWrapper = tagEnclosingAllLeagues.querySelectorAll(".separator-wrapper");
        for(const leagueWrapper of anArrayContainingAllLeaguesWrapper){
            const leagueName_tag = leagueWrapper.querySelector(".league-name")
            if(!leagueName_tag || !leagueName_tag.textContent) throw new Error("leagueName_tag not found");
            const leagueName = /**@type {import("../types_and_interfaces/LeagueName_Types").LeagueName_Types}*/(leagueName_tag.textContent.trim());
            console.log({leagueName})

            const match_eventContainerTags = leagueWrapper.querySelectorAll(".events-container");
            // console.log(match_eventContainerTags)
            for(const matchEventContainer of match_eventContainerTags){
                const matchName_Tag = matchEventContainer.querySelector(".events-list .title");
                // parse home team and awa team
                if(!matchName_Tag|| !matchName_Tag.textContent) throw new Error("matchName_Tag not found");
                const matchName = matchName_Tag.textContent.trim();
                const homeTeamName = matchName.split("-")[0].trim();
                const awayTeamName = matchName.split("-")[1].trim();
                console.log({homeTeamName,awayTeamName})
                
                const eventBetsWrapper = matchEventContainer.querySelectorAll(".event-bet-wrapper");
                for(const eventBetsTag of eventBetsWrapper){
                    const eventSelection = eventBetsTag.querySelector(".event-selection");
                    const eventOdds_Tag = eventBetsTag.querySelector(".event-odds");
                    if(!eventSelection ||!eventSelection.textContent )throw new Error("eventSelection not found")
                    if(!eventOdds_Tag ||!eventOdds_Tag.textContent )throw new Error("eventOdds_Tag not found")

                    const subMarketNameTitle = eventSelection.textContent.trim()
                    const subMarketOdds = Number(eventOdds_Tag.textContent.trim())

                    var selectorForSubMarket = getSelectorForElement(/**@type {HTMLElement}*/(eventOdds_Tag));

                    /**
                     * @type {import("../types_and_interfaces/DoubleChance_Types").DoubleChance_Types}
                     */
                    let marketNameTitle_typed = /**@type {import("../types_and_interfaces/DoubleChance_Types").DoubleChance_Types}*/(subMarketNameTitle.toUpperCase().trim());
                
                    const homeTeamAwayTeamKey = homeTeamName+"_"+awayTeamName;
                    
                    // Get the selctors for each of the sub market
                    // console.log(selectorForSubMarket)
                    console.log({
                        subMarketNameTitle,marketNameTitle_typed,subMarketOdds,selectorForSubMarket
                    })
                    dataStore.addData({
                        away_team_name: awayTeamName,
                        home_team_away_team_key: homeTeamAwayTeamKey,
                        home_team_name: homeTeamName,
                        market_name: "DC",
                        odds: subMarketOdds,
                        selector_for_sub_market: selectorForSubMarket,
                        sub_market_name: marketNameTitle_typed,
                        league_name: leagueName
                    });
                }
            }

        }

        return dataStore.leaguesToMatchesToOneXTwoMarketSelectors;
        
    }catch(error){
        throw error;
    }
}

// HTFT
function getUpcomingVirtualSports_HalftimeFulltimeMarketDataAndSelectors_OnScreen(){
    try {

           
                /**
         * util function
         */
        /**
         * Get a CSS selector for a DOM element.
         *
         * @param {Element} element - The DOM element for which to generate a CSS selector.
         * @returns {string} The CSS selector for the element.
         */
        function getSelectorForElement(element) {
            if (!(element instanceof Element)) {
                throw new Error('Invalid input. Please provide a valid DOM element.');
            }

            const path = [];
            while (element !== document.documentElement) {
                const id = element.id ? "#"+element.id : '';
                const className = element.className ? "."+element.className.replace(/\s+/g, '.') : '';
                path.unshift(element.tagName.toLowerCase()+id+className);
                if(element.parentElement){
                    element = element.parentElement;
                }
            }

            return path.join(' > ');
        }
        // END OF UTIL FUNCTION

        // return new Promise((resolve,reject)=>{
            // const tagEnclosingAllLeaguesSelector = '#view-wrapper > div.view-wrapper-content > div > div.center-view > div.router-view > div > div.tabs > div > section > div > div';
        // const tagEnclosingAllLeaguesSelector = '.tabs-content .tabs-content';
        const tagEnclosingAllLeaguesSelector = '.tab-section';
        const tagEnclosingAllLeagues = document.querySelector(tagEnclosingAllLeaguesSelector);
        // GET THE LEAGUE MATCHES AND THEIR SELECTORS FOR MARKET CHOICES
        
        // Class to store data
        class DataStore{
            /**
             * @type {LeaguesToMatchesToOverUnderMarketSelectors_Interface}
             */
            leaguesToMatchesToOneXTwoMarketSelectors = {
                "English League":{},
                "Spanish League":{},
                "Italian League":{},
                "French League":{},
                "German League":{},
                "Dutch League":{},
                "Portuguese League":{}
                
            }
            row_index = 0;
            /**
             * @param {{
             *      market_name: import("../types_and_interfaces/MarketNames_Types").MarketNames_Types,
             *      home_team_name: string,
             *      away_team_name: string,
             *      sub_market_name: import("../types_and_interfaces/HalftimeFulltime_Types").HalftimeFulltime_Types,
             *      odds: number,
             *      home_team_away_team_key: string,
             *      selector_for_sub_market: string,
             *      league_name: import("../types_and_interfaces/LeagueName_Types").LeagueName_Types
             * }} param0
             */
            addData({
                away_team_name,home_team_away_team_key,home_team_name,
                market_name,odds,selector_for_sub_market,sub_market_name,league_name
                }){
                    if(!this.leaguesToMatchesToOneXTwoMarketSelectors[league_name])this.leaguesToMatchesToOneXTwoMarketSelectors[league_name]={};
                    if(!this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key]){
                        console.log('Creating new teams object')
                        this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key] = {
                            away_team_name,
                            home_team_name,
                            row_index:this.row_index,
                            halftime_fulltime: {
                                "1/1": {
                                    odds:0,
                                    selector:''
                                },
                                "1/2":{
                                    odds:0,
                                    selector:''
                                },
                                "1/X":{
                                    odds:0,
                                    selector:''
                                },
                                "2/1": {
                                    odds:0,
                                    selector:''
                                },
                                "2/2":{
                                    odds:0,
                                    selector:''
                                },
                                "2/X":{
                                    odds:0,
                                    selector:''
                                },
                                "X/1": {
                                    odds:0,
                                    selector:''
                                },
                                "X/2":{
                                    odds:0,
                                    selector:''
                                },
                                "X/X":{
                                    odds:0,
                                    selector:''
                                },
                                [sub_market_name]: {
                                    odds:odds,
                                    selector:selector_for_sub_market
                                }

                            }

                        }
                        // INCREMENT
                        this.row_index+=1;
                    }else {
                    console.log('Mutating old teams object')
                    try {
                        this.leaguesToMatchesToOneXTwoMarketSelectors[league_name][home_team_away_team_key].halftime_fulltime[sub_market_name] = {
                            odds:odds,
                            selector:selector_for_sub_market
                        }
                    
                    }catch(err){
                        console.log({err})
                    }
                    

                }
            }
        }
        const dataStore = new DataStore();
        if(!tagEnclosingAllLeagues)throw new Error("tagEnclosingAllLeagues is null");

        /**
         * NOTE THAT THERE ARE separator-wrapper each containing the different leagues 
         */
        const anArrayContainingAllLeaguesWrapper = tagEnclosingAllLeagues.querySelectorAll(".separator-wrapper");
        for(const leagueWrapper of anArrayContainingAllLeaguesWrapper){
            const leagueName_tag = leagueWrapper.querySelector(".league-name")
            if(!leagueName_tag || !leagueName_tag.textContent) throw new Error("leagueName_tag not found");
            const leagueName = /**@type {import("../types_and_interfaces/LeagueName_Types").LeagueName_Types}*/(leagueName_tag.textContent.trim());
            console.log({leagueName})

            const match_eventContainerTags = leagueWrapper.querySelectorAll(".events-container");
            // console.log(match_eventContainerTags)
            for(const matchEventContainer of match_eventContainerTags){
                const matchName_Tag = matchEventContainer.querySelector(".events-list .title");
                // parse home team and awa team
                if(!matchName_Tag|| !matchName_Tag.textContent) throw new Error("matchName_Tag not found");
                const matchName = matchName_Tag.textContent.trim();
                const homeTeamName = matchName.split("-")[0].trim();
                const awayTeamName = matchName.split("-")[1].trim();
                console.log({homeTeamName,awayTeamName})
                
                const eventBetsWrapper = matchEventContainer.querySelectorAll(".event-bet-wrapper");
                for(const eventBetsTag of eventBetsWrapper){
                    const eventSelection = eventBetsTag.querySelector(".event-selection");
                    const eventOdds_Tag = eventBetsTag.querySelector(".event-odds");
                    if(!eventSelection ||!eventSelection.textContent )throw new Error("eventSelection not found")
                    if(!eventOdds_Tag ||!eventOdds_Tag.textContent )throw new Error("eventOdds_Tag not found")

                    const subMarketNameTitle = eventSelection.textContent.trim()
                    const subMarketOdds = Number(eventOdds_Tag.textContent.trim())

                    var selectorForSubMarket = getSelectorForElement(/**@type {HTMLElement}*/(eventOdds_Tag));

                    /**
                     * @type {import("../types_and_interfaces/HalftimeFulltime_Types").HalftimeFulltime_Types}
                     */
                    let marketNameTitle_typed = /**@type {import("../types_and_interfaces/HalftimeFulltime_Types").HalftimeFulltime_Types}*/(subMarketNameTitle.toUpperCase().trim())
                
                    const homeTeamAwayTeamKey = homeTeamName+"_"+awayTeamName;
                    
                    // Get the selctors for each of the sub market
                    // console.log(selectorForSubMarket)
                    console.log({
                        subMarketNameTitle,marketNameTitle_typed,subMarketOdds,selectorForSubMarket
                    })
                    dataStore.addData({
                        away_team_name: awayTeamName,
                        home_team_away_team_key: homeTeamAwayTeamKey,
                        home_team_name: homeTeamName,
                        market_name: "HT/FT",
                        odds: subMarketOdds,
                        selector_for_sub_market: selectorForSubMarket,
                        sub_market_name: marketNameTitle_typed,
                        league_name: leagueName
                    });
                }
            }

        }

        return dataStore.leaguesToMatchesToOneXTwoMarketSelectors;
    }catch(error){
        throw error;
    }
}

//moveTo_1X2_MarketTab
moveTo_1X2_MarketTab()
const oneXtwo_dds_Obj = getUpcomingVirtualSports_1X2MarketDataAndSelectors_OnScreen()

//moveTo_OverUnder_MarketTab
moveTo_OverUnder_MarketTab();
const overUnder_Odds_Obj = getUpcomingVirtualSports_OverUnderMarketDataAndSelectors_OnScreen()


// moveTo_BothTeamsToScore_MarketTab
moveTo_BothTeamsToScore_MarketTab()
const btts_Odds_Obj = getUpcomingVirtualSports_BothTeamsToScoreMarketDataAndSelectors_OnScreen()


//moveTo_DoubleChance_MarketTab
moveTo_DoubleChance_MarketTab()
const dc_Odds_Obj = getUpcomingVirtualSports_DoubleChanceMarketDataAndSelectors_OnScreen();


// moveTo_HalftimeFulltime_MarketTab
moveTo_HalftimeFulltime_MarketTab()
const htft_Odds_Obj = getUpcomingVirtualSports_HalftimeFulltimeMarketDataAndSelectors_OnScreen();


// const newObj = Object.assign({},obj,{
//     1x2:oneXtwo_dds_Obj,
//     over_under: overUnder_Odds_Obj
// });
const newObj = Object.assign({},obj,{
    oneXtwo_dds_Obj: oneXtwo_dds_Obj,
    overUnder_Odds_Obj: overUnder_Odds_Obj,
    btts_Odds_Obj:btts_Odds_Obj,
    dc_Odds_Obj: dc_Odds_Obj,
    htft_Odds_Obj: htft_Odds_Obj
});
// alert(JSON.stringify(newObj))
window.ReactNativeWebView.postMessage(JSON.stringify(newObj));
// window.ReactNativeWebView.postMessage(JSON.stringify("FFIINALLXXX"));
// window.ReactNativeWebView.postMessage(JSON.stringify("final 2"));
  // document.write("SEASON_NUMBER:"+SEASON_NUMBER)
  window.obj = newObj;
}, 2000);
