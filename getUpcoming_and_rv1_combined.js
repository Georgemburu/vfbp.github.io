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
// window.ReactNativeWebView.postMessage(JSON.stringify(newObj));
// window.ReactNativeWebView.postMessage(JSON.stringify("FFIINALLXXX"));
// window.ReactNativeWebView.postMessage(JSON.stringify("final 2"));
  // document.write("SEASON_NUMBER:"+SEASON_NUMBER)
  window.obj = newObj;


  //@ts-check
//@ts-check
// import type { LongUppercase_DayNamesTypes_Interface,ShortTitleCase_DayNamesTypes_Interface } from '../../types_and_interfaces/data_objects'
//==========================
//@ts-check

// const {readAParticularFormatedSeasonResultsFile} = require('./readAParticularFormatedSeasonResultsFile');

// const {getIdToTeamsObject} = require('../../../filesystem/read/getIdToTeamsObject');
// const {getGameRoundPlayDateTimeDetails} = require('../../time/getGameRoundPlayDateTimeDetails');


/**
 * @typedef {{
*      [id:string]:{name:string,id:number}
* }} IdToTeamObject_Interface
*/

/**
* 
* @param {{
*      seasonNumber:number,
*      idToTeamsObject: IdToTeamObject_Interface ,
*      formatedRawSeasonresult: import("./types_and_interfaces/Format_LeaguesToGameRoundsToResultsObject_Interface").Format_LeaguesToGameRoundsToResultsObject_Interface
* }} param0 
* @returns {import("./types_and_interfaces/OneSeason_LeagueNameToGameroundMarketResultsStats_Interface").OneSeason_LeagueNameToGameroundMarketResultsStats_Interface} 
*/
function parseStatsFromAParticularFormatedRawSeasonResultAndReturn({
   formatedRawSeasonresult,idToTeamsObject,seasonNumber
}){

   // const fileToread = 'raw/xxx_3179.json';
   /**
    * INITIALIZE STATS OBJECTS VARIABLES 
    */
  
   /**
    * @type {import("./types_and_interfaces/OneSeason_LeagueNameToGameroundMarketResultsStats_Interface").OneSeason_LeagueNameToGameroundMarketResultsStats_Interface} 
    */
   const leagueNameToMatchdayToOverallMarketResultsStatsObject = {
       [seasonNumber]: {}
   }
   // const MASTER_StatsObject = {
   //     [seasonNumber]: {}
   // }
   console.log({formatedRawSeasonresult})
   if(!formatedRawSeasonresult) {
       throw new Error("formatedRawSeasonresult data not passed in");
   }else {
       /**
        * INITIALIZE STATS OBJECTS VARIABLES
        */
       // const leagueNameToMatchdayToOverallMarketResultsStatsObject = MASTER_StatsObject;

       // get the league names keys
       const leagueNamesArray = Object.keys(formatedRawSeasonresult);
       // loop throue the league names and parse the stats
       leagueNamesArray.forEach((leagueName)=>{
           // create stats league object
           leagueNameToMatchdayToOverallMarketResultsStatsObject[leagueName] = {};
           const formatedSeason = formatedRawSeasonresult[leagueName];
           const leagueObject = formatedSeason.league;
           const matchDaysAndResultsObject = formatedSeason.matchDaysAndResults;
           // NOTE matchdays == 38
           console.log("=====HERE====")
           console.log({formatedSeason,matchDaysAndResultsObject})
           const matchDaysAsKeysArray = Object.keys(matchDaysAndResultsObject);
           // SETUP: oneByOneTeamsStatsObject LEAGUE NAME
           // oneByOneTeamsStatsObject[leagueName]={};
           matchDaysAsKeysArray.forEach(matchdayKey =>{
               const matchesInThisMatchDay = matchDaysAndResultsObject[matchdayKey];
               

               // loop through the matches 
               matchesInThisMatchDay.forEach((match,index)=>{
                   // CHECK IF MATCH IS FINISHED OR NOT_STARTED
                   if(match.status!=='FINISHED'){
                       // not finished
                   }else {
                       // Only add for finished matches
                       // leagueNameToMatchdayToOverallMarketResultsStatsObject
                       leagueNameToMatchdayToOverallMarketResultsStatsObject[leagueName][matchdayKey] = {
                           full_time_no_goal_occurences: 0,
                           full_time_no_goal_occurences_indices:[],
                           half_time_no_goal_occurences:0,
                           half_time_no_goal_occurences_indices:[],
                           full_time_draw_occurences: 0,
                           full_time_draw_occurences_indices: [],
                           half_time_draw_occurences: 0,
                           half_time_draw_occurences_indices: [],
                           full_time_home_wins_occurences: 0,
                           full_time_home_wins_occurences_indices:[],
                           full_time_away_wins_occurences: 0,
                           full_time_away_wins_occurences_indices:[],
                           half_time_home_wins_occurences: 0,
                           half_time_home_wins_occurences_indices:[],
                           half_time_away_wins_occurences: 0,
                           half_time_away_wins_occurences_indices:[],
                           full_time_both_teams_score_occurences: 0,
                           full_time_both_teams_score_occurences_indices: [],
                           half_time_both_teams_score_occurences: 0,
                           half_time_both_teams_score_occurences_indices: [],
                      
                           match_day: matchdayKey, //== gameround name
                           season_number: seasonNumber,
                           one_random_match_play_date_time_details:{},
                           matches_data:[]
                       }


                       // TODO: add stats calculator methods
                       const thisMatchdayStatsObj = leagueNameToMatchdayToOverallMarketResultsStatsObject[leagueName][matchdayKey];
                       thisMatchdayStatsObj.one_random_match_play_date_time_details = match.play_date_time_details;
                       // x
                       calculateFullTime_And_HalfTime_Draw_OCCURENCE_StatsAndMutateASeasonStatsObj(match,thisMatchdayStatsObj);
                       calculteFullTime_And_HalfTime_Draw_OCCURENCE_INDICES_StatsAndMutateASeasonStatsObj(match,index,thisMatchdayStatsObj);
                       // BTS
                       calculateBothTeamsToScore_OCCURENCE_StatsAndMutateASeasonStatsObj(match,thisMatchdayStatsObj);
                       calculteBothTeamsToScore_OCCURENCE_INDICES_StatsAndMutateASeasonStatsObj(match,index,thisMatchdayStatsObj)
                       // console.log({thisMatchdayStatsObj})
                       
                       // added
                       // 12
                       calculateFullTime_And_HalfTime_HomeWin_OCCURENCE_StatsAndMutateASeasonStatsObj(match,thisMatchdayStatsObj)
                       calculateFullTime_And_HalfTime_HomeWin_OCCURENCE_INDICES_StatsAndMutateASeasonStatsObj(match,index,thisMatchdayStatsObj)
                       calculateFullTime_And_HalfTime_AwayWin_OCCURENCE_StatsAndMutateASeasonStatsObj(match,thisMatchdayStatsObj)
                       calculateFullTime_And_HalfTime_AwayWin_OCCURENCE_INDICES_StatsAndMutateASeasonStatsObj(match,index,thisMatchdayStatsObj)
                       // NO Goal
                       calculateFullTime_And_HalfTime_NoGoal_OCCURENCE_StatsAndMutateASeasonStatsObj(match,thisMatchdayStatsObj)
                       calculateFullTime_And_HalfTime_NoGoal_OCCURENCE_INDICES_StatsAndMutateASeasonStatsObj(match,index,thisMatchdayStatsObj)
           
                       // calculatePlayDateTimeDetails_AndMutateASeasonStateObj(match,index,thisMatchdayStatsObj)
                       // TODO: oneByOneTeamsStatsObject
                       // calculate_oneByOneTeamsStatsObjectData_andMutateoneByOneTeamsStatsObject(match,matchdayKey,seasonNumber,leagueName,index,oneByOneTeamsStatsObject)
                       // MATCH DATA
                       calculateMatchesInMatchdayData_AndMutateASeasonStatsObj(match,index,matchdayKey,idToTeamsObject,thisMatchdayStatsObj);

                   }

               })
           })

       })
       // return
       
       return leagueNameToMatchdayToOverallMarketResultsStatsObject;
   }

   // return MASTER_StatsObject;
   


}

// calculate play date time
// function calculatePlayDateTimeDetails_AndMutateASeasonStateObj(match:MatchUp_WithPlayTimeDetails_Interface,index:number,statsObj:Particular_Season_Particular_League_Particular_GameRound_Interface){
//     statsObj.matches_data
// }


/**
* 
* @param {import("./types_and_interfaces//MatchUp_Interface").MatchUp_WithPlayTimeDetails_Interface} match 
* @param {import("./types_and_interfaces/Particular_Season_Particular_League_Particular_GameRound_Interface").Particular_Season_Particular_League_Particular_GameRound_Interface} statsObj 
*/
function calculateFullTime_And_HalfTime_NoGoal_OCCURENCE_StatsAndMutateASeasonStatsObj(match,statsObj){
   // check for draw
   if(match.awayHT == match.homeHT && match.homeHT==0){ 
       statsObj.half_time_no_goal_occurences = statsObj.half_time_no_goal_occurences+=1;
   }
   if(match.awayScore == match.homeScore && match.homeScore==0){
       statsObj.full_time_no_goal_occurences = statsObj.full_time_no_goal_occurences +=1;
   }
}

/**
* 
* @param {import("./types_and_interfaces//MatchUp_Interface").MatchUp_WithPlayTimeDetails_Interface} match 
* @param {number} index 
* @param {import("./types_and_interfaces/Particular_Season_Particular_League_Particular_GameRound_Interface").Particular_Season_Particular_League_Particular_GameRound_Interface} statsObj 
*/
function calculateFullTime_And_HalfTime_NoGoal_OCCURENCE_INDICES_StatsAndMutateASeasonStatsObj(match,index,statsObj){
   if(match.awayHT == match.homeHT){
       statsObj.half_time_no_goal_occurences_indices = [...statsObj.half_time_no_goal_occurences_indices,index];
   }
   if(match.awayScore == match.homeScore){
       statsObj.full_time_no_goal_occurences_indices = [...statsObj.full_time_no_goal_occurences_indices,index];
   }
}


/**
* 
* @param {import("./types_and_interfaces//MatchUp_Interface").MatchUp_WithPlayTimeDetails_Interface} match 
* @param {import("./types_and_interfaces/Particular_Season_Particular_League_Particular_GameRound_Interface").Particular_Season_Particular_League_Particular_GameRound_Interface} statsObj 
*/
function calculateFullTime_And_HalfTime_HomeWin_OCCURENCE_StatsAndMutateASeasonStatsObj(match,statsObj){
   // check for draw
   if(match.awayHT < match.homeHT){
       statsObj.half_time_home_wins_occurences = statsObj.half_time_home_wins_occurences+=1;
   }
   if(match.awayScore < match.homeScore){
       statsObj.full_time_home_wins_occurences = statsObj.full_time_home_wins_occurences +=1;
   }
}

/**
* 
* @param {import("./types_and_interfaces//MatchUp_Interface").MatchUp_WithPlayTimeDetails_Interface} match 
* @param {number} index 
* @param {import("./types_and_interfaces/Particular_Season_Particular_League_Particular_GameRound_Interface").Particular_Season_Particular_League_Particular_GameRound_Interface} statsObj 
*/
function calculateFullTime_And_HalfTime_HomeWin_OCCURENCE_INDICES_StatsAndMutateASeasonStatsObj(match,index,statsObj){
   if(match.awayHT == match.homeHT){
       statsObj.half_time_home_wins_occurences_indices = [...statsObj.half_time_home_wins_occurences_indices,index];
   }
   if(match.awayScore == match.homeScore){
       statsObj.full_time_home_wins_occurences_indices = [...statsObj.full_time_home_wins_occurences_indices,index];
   }
}



/**
* 
* @param {import("./types_and_interfaces//MatchUp_Interface").MatchUp_WithPlayTimeDetails_Interface} match 
* @param {import("./types_and_interfaces/Particular_Season_Particular_League_Particular_GameRound_Interface").Particular_Season_Particular_League_Particular_GameRound_Interface} statsObj 
*/
function calculateFullTime_And_HalfTime_AwayWin_OCCURENCE_StatsAndMutateASeasonStatsObj(match,statsObj){
   // check for draw
   if(match.awayHT > match.homeHT){
       statsObj.half_time_away_wins_occurences = statsObj.half_time_away_wins_occurences+=1;
   }
   if(match.awayScore > match.homeScore){
       statsObj.full_time_away_wins_occurences = statsObj.full_time_away_wins_occurences +=1;
   }
}

/**
* 
* @param {import("./types_and_interfaces//MatchUp_Interface").MatchUp_WithPlayTimeDetails_Interface} match 
* @param {number} index 
* @param {import("./types_and_interfaces/Particular_Season_Particular_League_Particular_GameRound_Interface").Particular_Season_Particular_League_Particular_GameRound_Interface} statsObj 
*/
function calculateFullTime_And_HalfTime_AwayWin_OCCURENCE_INDICES_StatsAndMutateASeasonStatsObj(match,index,statsObj){
   if(match.awayHT == match.homeHT){
       statsObj.half_time_away_wins_occurences_indices = [...statsObj.half_time_away_wins_occurences_indices,index];
   }
   if(match.awayScore == match.homeScore){
       statsObj.full_time_away_wins_occurences_indices = [...statsObj.full_time_away_wins_occurences_indices,index];
   }
}

/**
* 
* @param {import("./types_and_interfaces//MatchUp_Interface").MatchUp_WithPlayTimeDetails_Interface} match 
* @param {import("./types_and_interfaces/Particular_Season_Particular_League_Particular_GameRound_Interface").Particular_Season_Particular_League_Particular_GameRound_Interface} statsObj 
*/
function calculateFullTime_And_HalfTime_Draw_OCCURENCE_StatsAndMutateASeasonStatsObj(match,statsObj){
   // check for draw
   if(match.awayHT == match.homeHT){
       statsObj.half_time_draw_occurences = statsObj.half_time_draw_occurences+=1;
   }
   if(match.awayScore == match.homeScore){
       statsObj.full_time_draw_occurences = statsObj.full_time_draw_occurences +=1;
   }
}

/**
* 
* @param {import("./types_and_interfaces//MatchUp_Interface").MatchUp_WithPlayTimeDetails_Interface} match 
* @param {number} index 
* @param {import("./types_and_interfaces/Particular_Season_Particular_League_Particular_GameRound_Interface").Particular_Season_Particular_League_Particular_GameRound_Interface} statsObj 
*/
function calculteFullTime_And_HalfTime_Draw_OCCURENCE_INDICES_StatsAndMutateASeasonStatsObj(match,index,statsObj){
   if(match.awayHT == match.homeHT){
       statsObj.half_time_draw_occurences_indices = [...statsObj.half_time_draw_occurences_indices,index];
   }
   if(match.awayScore == match.homeScore){
       statsObj.full_time_draw_occurences_indices = [...statsObj.full_time_draw_occurences_indices,index];
   }
}

// BTS
/**
* 
* @param {import("./types_and_interfaces//MatchUp_Interface").MatchUp_WithPlayTimeDetails_Interface} match 
* @param {import("./types_and_interfaces/Particular_Season_Particular_League_Particular_GameRound_Interface").Particular_Season_Particular_League_Particular_GameRound_Interface} statsObj 
*/
function calculateBothTeamsToScore_OCCURENCE_StatsAndMutateASeasonStatsObj(match,statsObj){
   // check for draw
   if(match.awayHT>0 && match.homeHT>0){
       statsObj.half_time_both_teams_score_occurences = statsObj.half_time_both_teams_score_occurences+=1;
   }
   if(match.awayScore>0 && match.homeScore>0){
       statsObj.full_time_both_teams_score_occurences = statsObj.full_time_both_teams_score_occurences +=1;
   }
}

/**
* 
* @param {import("./types_and_interfaces//MatchUp_Interface").MatchUp_WithPlayTimeDetails_Interface} match 
* @param {number} index 
* @param {import("./types_and_interfaces/Particular_Season_Particular_League_Particular_GameRound_Interface").Particular_Season_Particular_League_Particular_GameRound_Interface} statsObj 
*/
function calculteBothTeamsToScore_OCCURENCE_INDICES_StatsAndMutateASeasonStatsObj(match,index,statsObj){
   if(match.awayHT>0 && match.homeHT>0){
       statsObj.half_time_both_teams_score_occurences_indices = [...statsObj.half_time_both_teams_score_occurences_indices,index];
   }
   if(match.awayScore>0 && match.homeScore>0){
       statsObj.full_time_both_teams_score_occurences_indices = [...statsObj.full_time_both_teams_score_occurences_indices,index];
   }
}
// function 


/**
* 
* @param {import("./types_and_interfaces//MatchUp_Interface").MatchUp_WithPlayTimeDetails_Interface} match 
* @param {number} index 
* @param {string} gameRoundName 
* @param {IdToTeamObject_Interface} idToTeamsObject 
* @param {import("./types_and_interfaces/Particular_Season_Particular_League_Particular_GameRound_Interface").Particular_Season_Particular_League_Particular_GameRound_Interface} statsObj 
*/
function calculateMatchesInMatchdayData_AndMutateASeasonStatsObj(match,index,gameRoundName,idToTeamsObject,statsObj){
   const {
       awayHT,
       awayId,
       awayScore,
       gameRoundId,
       homeHT,
       homeId,
       homeScore,
       id,
       status
   }  = match;
   // const idToTeamsObject = getIdToTeamsObject()


   if(!idToTeamsObject){
       throw new Error('No teams File found')
   }else {
   
       statsObj.matches_data.push({
           away_team: idToTeamsObject[awayId].name,
           away_team_id: awayId,
           home_team: idToTeamsObject[homeId].name,
           home_team_id: homeId,
           match_index: index,
           status: status,
           play_date_time_details: match.play_date_time_details,
           game_round_id: gameRoundId,
           game_round_name: gameRoundName,
           number_of_goals: {
               full_time: {
                   away_team: awayScore,
                   home_team: homeScore
               },
               half_time: {
                   away_team: awayHT,
                   home_team: homeHT
               }
           },
           over_under: {
               full_time: {
                   plus_one_point_five: (homeScore+awayScore)>2,// 2 goals and above
                   plus_two_point_five: (homeScore+awayScore)>3, // 3 goals and above
                   plus_three_point_five: (homeScore+awayScore)>4, //4 goals and above
                   minus_one_point_five: (homeScore+awayScore)<2,
                   minus_two_point_five: (homeScore+awayScore)<3,
                   minus_three_point_five: (homeScore+awayScore)<4,
               },
               half_time: {
                   plus_one_point_five: (homeHT+awayHT)>2,// 2 goals and above
                   plus_two_point_five: (homeHT+awayHT)>3, // 3 goals and above
                   plus_three_point_five: (homeHT+awayHT)>4, //4 goals and above
                   minus_one_point_five: (homeHT+awayHT)<2,
                   minus_two_point_five: (homeHT+awayHT)<3,
                   minus_three_point_five: (homeHT+awayHT)<4,
               }
           },
           one_x_two: {
               full_time: {
                   AD: awayScore==homeScore,
                   AL: awayScore< homeScore,
                   AW: awayScore>homeScore,
                   HD: homeScore == awayScore,
                   HL: homeScore< awayScore,
                   HW: homeScore> awayScore
               },
               half_time: {
                   AD: awayHT==homeHT,
                   AL: awayHT< homeHT,
                   AW: awayHT>homeHT,
                   HD: homeHT == awayHT,
                   HL: homeHT< awayHT,
                   HW: homeHT> awayHT
               }
           },
           both_teams_score: {
               full_time: awayScore>0 && homeScore>0,
               half_time: awayHT>0 && awayHT>0,
           },
           double_chance: {
               full_time: {
                   one_or_two: homeScore>awayScore|| awayScore>homeScore ? true: false,
                   one_or_x: homeScore>awayScore || homeScore==awayScore ? true : false,
                   x_or_two: homeScore==awayScore || awayScore>homeScore ? true: false
               },
               half_time: {
                   one_or_two: homeScore>awayScore|| awayScore>homeScore ? true: false,
                   one_or_x: homeScore>awayScore || homeScore==awayScore ? true : false,
                   x_or_two: homeScore==awayScore || awayScore>homeScore ? true: false
               }
           },
           
   
       })

   }
}



//=====================================
/**
 * @type {{
*  [dayNumber:string]: import("../../types_and_interfaces/data_objects/DayNamesTypes_Interface").LongUppercase_DayNamesTypes_Interface
* }}
*/
const dayNumberToLongUppercaseDayNameObject = {
   '0': 'SUNDAY',
   '1': 'MONDAY',
   '2':'TUESDAY',
   '3':'WEDNESDAY',
   '4':'THURDAY',
   '5':'FRIDAY',
   '6':'SATURDAY'
}

/**
* @type {{
*      [longUppercaseDayName in import("../../types_and_interfaces/data_objects/DayNamesTypes_Interface").LongUppercase_DayNamesTypes_Interface]:number
* }}
*/
const longUppercaseCaseDayNameToDayNumberObject = {
   'SUNDAY':0,
   'MONDAY':1,
   'TUESDAY':2,
   'WEDNESDAY':3,
   'THURDAY':4,
   'FRIDAY':5,
   'SATURDAY':6
}



/**
* @type {{
*  [dayNumber:string]:  import("../../types_and_interfaces/data_objects/DayNamesTypes_Interface").ShortTitleCase_DayNamesTypes_Interface
* }}
*/
const dayNumberToShortTitleCaseDayNameObject = {
   '0':'Sun',
   '1':'Mon',
   '2':'Tue',
   '3':'Wed',
   '4':'Thu',
   '5':'Fri',
   '6':'Sat'
}

/**
* @type {{
*      [shortTitleCaseDayName in import("../../types_and_interfaces/data_objects/DayNamesTypes_Interface").ShortTitleCase_DayNamesTypes_Interface]:number
*   }}
*/
const shortTitleCaseDayNameToDayNumberObject = {
   'Sun':0,
   'Mon':1,
   'Tue':2,
   'Wed':3,
   'Thu':4,
   'Fri':5,
   'Sat':6
}

/**
* @type {{
*  [ShortTitleCaseDayName in import("../../types_and_interfaces/data_objects/DayNamesTypes_Interface").ShortTitleCase_DayNamesTypes_Interface]:import("../../types_and_interfaces/data_objects/DayNamesTypes_Interface").LongUppercase_DayNamesTypes_Interface
*}}
*/
const shortTitleCaseDayNameToLongUppercaseDayNameObject = {
   'Sun':'SUNDAY',
   'Mon': 'MONDAY',
   'Tue':'TUESDAY',
   'Wed':'WEDNESDAY',
   'Thu':'THURDAY',
   'Fri':'FRIDAY',
   'Sat':'SATURDAY'
}

/**
* @type {{
*      [LongUppercaseDayName in import("../../types_and_interfaces/data_objects/DayNamesTypes_Interface").LongUppercase_DayNamesTypes_Interface]:import("../../types_and_interfaces/data_objects/DayNamesTypes_Interface").ShortTitleCase_DayNamesTypes_Interface
* }}
*/
const longUppercaseDayNameToShortTitleCaseDayNameObject = {
   'SUNDAY':'Sun',
    'MONDAY':'Mon',
   'TUESDAY':'Tue',
   'WEDNESDAY':'Wed',
   'THURDAY':'Thu',
   'FRIDAY':'Fri',
   'SATURDAY':'Sat'
}


/**
 * @type {{
*      [monthShortTitleCase in import("../../types_and_interfaces/data_objects/MonthNamesType_Interface").MonthShortTitleCaseNamesType_Interface]: import("../../types_and_interfaces/data_objects/MonthNamesType_Interface").MonthLongUppercaseNamesType_Interface
* }}
*/
const monthShortTitleCaseNameToMonthUpercaseNameObject = {
   Jan: 'JANUARY',
   Feb: 'FEBRUARY',
   Mar: 'MARCH',
   Apr: 'APRIL',
   May: 'MAY',
   Jun: 'JUNE',
   Jul: 'JULY',
   Aug: 'AUGUST',
   Sep: 'SEPTEMBER',
   Oct: 'OCTOBER',
   Nov: 'NOVEMBER',
   Dec: 'DECEMBER',
}

/**
* @type {{
*      [monthName in import("../../types_and_interfaces/data_objects/MonthNamesType_Interface").MonthShortTitleCaseNamesType_Interface]:number
* }}
*/
const monthShortTitleCaseNameToMonthNumberObject = {
   Jan: 0,
   Feb: 1,
   Mar: 2,
   Apr: 3,
   May: 4,
   Jun: 5,
   Jul: 6,
   Aug: 7,
   Sep: 8,
   Oct: 9,
   Nov: 10,
   Dec: 11
}
/**
* @type {{
*  [monthNumber:string]: import("../../types_and_interfaces/data_objects/MonthNamesType_Interface").MonthShortTitleCaseNamesType_Interface
* }}
*/
const monthNumberToMonthShortTitleCaseNameObject = {
   '0': 'Jan',
   '1': 'Feb',
   '2':'Mar',
   '3':'Apr',
   '4':'May',
   '5':'Jun',
   '6':'Jul',
   '7':'Aug',
   '8':'Sep',
   '9':'Oct',
   '10':'Nov',
   '12':'Dec'

}
/**
* @type {{
*      [monthNumber:string]: import("../../types_and_interfaces/data_objects/MonthNamesType_Interface").MonthLongUppercaseNamesType_Interface
* }}
*/
const monthNumberToMonthLongUppercaseNameObject = {
   '0': 'JANUARY',
   '1': 'FEBRUARY',
   '2':'MARCH',
   '3':'APRIL',
   '4':'MAY',
   '5':'JUNE',
   '6':'JULY',
   '7':'AUGUST',
   '8':'SEPTEMBER',
   '9':'OCTOBER',
   '10':'NOVEMBER',
   '12':'DECEMBER'

}

/**
* @type {{
*      [monthName in import("../../types_and_interfaces/data_objects/MonthNamesType_Interface").MonthLongUppercaseNamesType_Interface]:number
* }}
*/
const monthLongUppercaseNameToMonthNumberObject = {
   'JANUARY': 0,
   'FEBRUARY': 1,
   'MARCH': 2,
   'APRIL': 3,
   'MAY': 4,
   'JUNE': 5,
   'JULY': 6,
   'AUGUST': 7,
   'SEPTEMBER': 8,
   'OCTOBER': 9,
   'NOVEMBER': 10,
   'DECEMBER': 11
}


/**
 * CALCS
 */
/**
 * @typedef {'English League'|'Spanish League'|'Italian League'|'French League'|'German League'|'Dutch League'|'Portuguese League'} LeagueNames_Types
 */
/**
 * @typedef {{
*   match_index: number,  
*   home_team: string,
*   away_team: string,
*   home_team_id: number,
*   away_team_id: number,
*   status:'FINISHED'|'NOT_STARTED',
*   play_date_time_details: import("./data_objects/PlayDateTimeDetails_Interface").PlayDateTimeDetails_Interface,
*   game_round_id: number,
*   game_round_name: string,
*   one_x_two: {
*       full_time: {
*           AW: boolean,
*           AD: boolean,
*           AL: boolean,
*           HW: boolean,
*           HD: boolean,
*           HL: boolean
*       },
*       half_time: {
*           AW: boolean,
*           AD: boolean,
*           AL: boolean,
*           HW: boolean,
*           HD: boolean,
*           HL: boolean
*       } 
*   },
*   over_under: {
*       half_time: {
*           plus_one_point_five: boolean,
*           plus_two_point_five: boolean, 
*           plus_three_point_five: boolean, 
*           minus_one_point_five: boolean,
*           minus_two_point_five: boolean,
*           minus_three_point_five: boolean
*       },
*       full_time: {
*           plus_one_point_five: boolean,
*           plus_two_point_five: boolean,
*           plus_three_point_five: boolean, 
*           minus_one_point_five: boolean,
*           minus_two_point_five: boolean,
*           minus_three_point_five: boolean
*       }
*   },
*   both_teams_score: {
*       full_time: boolean,
*       half_time: boolean
*   },
*   double_chance: {
*       full_time: {
*           one_or_x: boolean,
*           x_or_two: boolean,
*           one_or_two: boolean
*       },
*       half_time: {
*           one_or_x: boolean,
*           x_or_two: boolean,
*           one_or_two: boolean
*       }   
*   },
*   number_of_goals: {
*       full_time: {
*           home_team: number,
*           away_team: number,
*       },
*       half_time: {
*           home_team: number,
*           away_team: number,
*       }
*   }
* }} GameRoundMatchDataObject_Interface
*/

 
/**
 * @typedef {{
*   full_time_no_goal_occurences: number,
*   full_time_no_goal_occurences_indices: number[],
*   half_time_no_goal_occurences: number,
*   half_time_no_goal_occurences_indices: number[],
*   full_time_draw_occurences: number,
*   full_time_draw_occurences_indices: number[],
*   half_time_draw_occurences: number,
*   half_time_draw_occurences_indices: number[],
*   full_time_home_wins_occurences: number,
*   full_time_home_wins_occurences_indices: number[],
*   full_time_away_wins_occurences: number,
*   full_time_away_wins_occurences_indices: number[],
*   half_time_home_wins_occurences: number,
*   half_time_home_wins_occurences_indices: number[]
*   half_time_away_wins_occurences: number,
*   half_time_away_wins_occurences_indices: number[],
*   full_time_both_teams_score_occurences: number,
*   full_time_both_teams_score_occurences_indices: number[],
*   half_time_both_teams_score_occurences: number,
*   half_time_both_teams_score_occurences_indices: number[],
*   match_day: string, 
*   season_number: number,
*   one_random_match_play_date_time_details: import("./data_objects/PlayDateTimeDetails_Interface").PlayDateTimeDetails_Interface,
*   matches_data: GameRoundMatchDataObject_Interface [],
* }} Particular_Season_Particular_League_Particular_GameRound_Interface
*/


/**
 * @typedef {{
*   [leagueName:string]:{
*       [gameRoundName:string]:Particular_Season_Particular_League_Particular_GameRound_Interface
*   }
* }} OneSeason_LeagueNameToGameroundMarketResultsStats_Interface
*/ 



// TODO: type the leagueNae correctly
/**
 * 
 * @param {number} seasonNumber 
 * @param {LeagueNames_Types} leagueName 
 * @param {string} teamName 
 * @param {import("./types_and_interfaces/OneSeason_LeagueNameToGameroundMarketResultsStats_Interface").OneSeason_LeagueNameToGameroundMarketResultsStats_Interface} seasonStats
 * @returns {import("./types_and_interfaces/OneSeason_OneTeamPerformance_Interface").OneSeason_OneTeamPerformance_Interface}
 */
function getOneTeamsPerformanceInASeason(seasonNumber, leagueName,teamName,seasonStats){
    const statsFileData = seasonStats;//read_StatsFileForASpecificSeason(seasonNumber);
    // INITIALIZE OBJ
    /**
     * @type {import("./types_and_interfaces/OneSeason_OneTeamPerformance_Interface").OneSeason_OneTeamPerformance_Interface}
     */
    const oneSeason_OneTeamPerformance = {
        season_number: seasonNumber,
        team_name: teamName,
        team_id: 0,
        number_of_goals_scored: {
            // half_time: 0,
            // full_time: 0
            full_time: {
                when_away: 0,
                when_home: 0,
                total: 0
            },
            half_time: {
                when_away: 0,
                when_home: 0,
                total: 0
            }
        },
        number_of_double_chance: {
            full_time: {
                one_or_x: 0,
                x_or_two: 0,
                one_or_two: 0
            },
            half_time: {
                one_or_x: 0,
                x_or_two: 0,
                one_or_two: 0
            }
            
        },
        number_of_both_teams_score: {
            full_time: {
                yes: 0,
                no: 0
            },
            half_time: {
                yes:0,
                no: 0
            }
        },
        number_of_one_x_two: {
            full_time: {
                HW:0,
                HL:0,
                HD: 0,
                AW: 0,
                AL: 0,
                AD: 0
            },
            half_time: {
                HW:0,
                HL:0,
                HD: 0,
                AW: 0,
                AL: 0,
                AD: 0
            }
        },    
        number_of_over_under: {
            full_time: {
                plus_one_point_five: 0,
                plus_two_point_five: 0,
                plus_three_point_five: 0,
                minus_one_point_five: 0,
                minus_two_point_five: 0,
                minus_three_point_five: 0,
            },
            half_time: {
                plus_one_point_five: 0,
                plus_two_point_five: 0,
                plus_three_point_five: 0,
                minus_one_point_five: 0,
                minus_two_point_five: 0,
                minus_three_point_five: 0
            }
        },
        game_round_name_to_indice_to_oponent_and_result_object: { }
    }
    Object.keys(statsFileData[leagueName]).forEach((gameRoundName_Key)=>{
        const matchDayMatches = statsFileData[leagueName][gameRoundName_Key];

        // loop thorugh the mathes played in this gameround
        matchDayMatches.matches_data.forEach((match,index)=>{
            // get the team
            // console.log({match})
            
            if(match.away_team === teamName){
                // when away
                // console.log('IS AWAY')
                // calculate_oneSeason_OneTeamPerformanceOBjectData_and_mutate_OneTeamPerformanceObject(match,index,false,gameRoundName_Key,oneSeason_OneTeamPerformance)
                calculate_oneSeason_OneTeamPerformanceOBjectData_and_mutate_OneTeamPerformanceObject({
                    match: match,
                    index: match.match_index,
                    isHome: false,
                    gameRoundName: gameRoundName_Key,
                    oneSeason_OneTeamPerformanceObject: oneSeason_OneTeamPerformance
                });

            }else if(match.home_team=== teamName){
                // when home
                // console.log('IS HOME')
                // calculate_oneSeason_OneTeamPerformanceOBjectData_and_mutate_OneTeamPerformanceObject(match,index,true,gameRoundName_Key,oneSeason_OneTeamPerformance)
                calculate_oneSeason_OneTeamPerformanceOBjectData_and_mutate_OneTeamPerformanceObject({
                    match: match,
                    index: match.match_index,
                    isHome: true,
                    gameRoundName: gameRoundName_Key,
                    oneSeason_OneTeamPerformanceObject: oneSeason_OneTeamPerformance
                })
            }

        })
    })
    // end of loop
    // console.log({
    //     oneSeason_OneTeamPerformance
    // })
    return oneSeason_OneTeamPerformance;

}


// /**
//  * @param {{
//  *    match: 
//  * }} param0
//  * @param {import("../../types_and_interfaces/statistics/data_objects/GameRoundMatchDataObject_Interface").GameRoundMatchDataObject_Interface} match 
//  * @param {number} index 
//  * @param {boolean} isHome 
//  * @param {string} gameRoundName 
//  * @param {import("./types_and_interfaces/OneSeason_OneTeamPerformance_Interface").OneSeason_OneTeamPerformance_Interface} oneSeason_OneTeamPerformanceObject 
//  */
/** 
 * @param {{
 *    match: import("./types_and_interfaces/GameRoundMatchDataObject_Interface").GameRoundMatchDataObject_Interface,
 *    index: number,
 *    isHome: boolean,
 *    gameRoundName: string, 
 *    oneSeason_OneTeamPerformanceObject: import("./types_and_interfaces/OneSeason_OneTeamPerformance_Interface").OneSeason_OneTeamPerformance_Interface
 * }} param0
 * */
function calculate_oneSeason_OneTeamPerformanceOBjectData_and_mutate_OneTeamPerformanceObject({match,index,isHome,gameRoundName,oneSeason_OneTeamPerformanceObject}){
    // console.log(JSON.stringify(oneSeason_OneTeamPerformanceObject,null,2))
    const  {away_team,away_team_id,both_teams_score:match_both_teams_score,double_chance:match_double_chance,home_team,home_team_id, match_index,number_of_goals:match_number_of_goals,one_x_two:match_one_x_two,over_under:match_over_under, status } = match;
    const {full_time:match_full_time_over_under, half_time: match_half_time_over_under} = match_over_under;
    const {
        minus_one_point_five: match_full_time_minus_one_point_five,
        minus_three_point_five: match_full_time_minus_three_point_five,
        minus_two_point_five:match_full_time_minus_two_point_five,
        plus_one_point_five:match_full_time_plus_one_point_five,
        plus_three_point_five:match_full_time_plus_three_point_five,
        plus_two_point_five:match_full_time_plus_two_point_five,
    } = match_full_time_over_under;
    const {
        minus_one_point_five: match_half_time_minus_one_point_five,
        minus_three_point_five: match_half_time_minus_three_point_five,
        minus_two_point_five:match_half_time_minus_two_point_five,
        plus_one_point_five:match_half_time_plus_one_point_five,
        plus_three_point_five:match_half_time_plus_three_point_five,
        plus_two_point_five:match_half_time_plus_two_point_five,
    } = match_half_time_over_under;
    const {
        number_of_over_under, 
        number_of_both_teams_score,
        number_of_double_chance: old_number_of_double_chance,
        number_of_goals_scored: old_number_of_goals_scored,
        number_of_one_x_two: old_number_of_one_x_two,
        game_round_name_to_indice_to_oponent_and_result_object: old_game_round_name_to_indice_to_oponent_and_result_object
    } = oneSeason_OneTeamPerformanceObject;
    const {
        full_time: old_full_time,
        half_time: old_half_time
    } = number_of_over_under;
    // TEAM ID
    oneSeason_OneTeamPerformanceObject.team_id = isHome?home_team_id:away_team_id;
    // TEAM NAME
    oneSeason_OneTeamPerformanceObject.team_name = isHome?home_team:away_team;
    // OVER UNDER
    oneSeason_OneTeamPerformanceObject.number_of_over_under = {
        full_time: {
            // plus
            plus_one_point_five: old_full_time.plus_one_point_five+ (match_full_time_plus_one_point_five?1:0),// 2 goals and above
            plus_two_point_five: old_full_time.plus_two_point_five + (match_full_time_plus_two_point_five?1:0),
            plus_three_point_five: old_full_time.plus_three_point_five + (match_full_time_plus_three_point_five?1:0),
            // minus
            minus_one_point_five: old_full_time.minus_one_point_five + (match_full_time_minus_one_point_five?1:0),
            minus_two_point_five: old_full_time.minus_two_point_five + (match_full_time_minus_two_point_five?1:0),
            minus_three_point_five: old_full_time.minus_three_point_five + (match_full_time_minus_three_point_five?1:0)
        },
        half_time: {
            // plus
            plus_one_point_five: old_half_time.plus_one_point_five+ (match_half_time_plus_one_point_five?1:0),// 2 goals and above
            plus_two_point_five: old_half_time.plus_two_point_five + (match_half_time_plus_two_point_five?1:0),
            plus_three_point_five: old_half_time.plus_three_point_five + (match_half_time_plus_three_point_five?1:0),
            // minus
            minus_one_point_five: old_half_time.minus_one_point_five + (match_half_time_minus_one_point_five?1:0),
            minus_two_point_five: old_half_time.minus_two_point_five + (match_half_time_minus_two_point_five?1:0),
            minus_three_point_five: old_half_time.minus_three_point_five + (match_half_time_minus_three_point_five?1:0)
        }
    }
    // BOTH TEAMS SCORE
    // note: add the word number_of to old data
    const {full_time:old_full_time_both_teams_score, half_time: old_half_time_both_teams_score } = number_of_both_teams_score;
    const {full_time: match_full_time_both_teams_score, half_time: match_half_time_both_teams_score } = match_both_teams_score;
    oneSeason_OneTeamPerformanceObject.number_of_both_teams_score = {
        full_time: {
            no: old_full_time_both_teams_score.no + (match_full_time_both_teams_score==false?1:0) ,
            yes:old_full_time_both_teams_score.yes + (match_full_time_both_teams_score==true?1:0)
        },
        half_time: {
            no: old_half_time_both_teams_score.no + (match_half_time_both_teams_score==false?1:0),
            yes:old_half_time_both_teams_score.yes + (match_half_time_both_teams_score==true?1:0)
        }
    }
    // DOUBLE CHANCE
    const {full_time:old_full_time_number_of_double_chance, half_time: old_half_time_number_of_double_chance} = old_number_of_double_chance;
    const {
        one_or_two: old_full_time_number_of_one_or_two,
        one_or_x: old_full_time_number_of_one_or_x,
        x_or_two: old_full_time_number_of_x_or_two
    } = old_full_time_number_of_double_chance;
    const {
        one_or_two: old_half_time_number_of_one_or_two,
        one_or_x: old_half_time_number_of_one_or_x,
        x_or_two: old_half_time_number_of_x_or_two
    } = old_half_time_number_of_double_chance;
    const {full_time: match_full_time_double_chance, half_time: match_half_time_double_chance} = match_double_chance;
    const {
        one_or_two: match_full_time_one_or_two,
        one_or_x: match_full_time_one_or_x,
        x_or_two: match_full_time_x_or_two
    } = match_full_time_double_chance;
    const {
        one_or_two: match_half_time_one_or_two,
        one_or_x: match_half_time_one_or_x,
        x_or_two: match_half_time_x_or_two
    } = match_half_time_double_chance;
    oneSeason_OneTeamPerformanceObject.number_of_double_chance = {
        full_time: {
            one_or_two:old_full_time_number_of_one_or_two + (match_full_time_one_or_two?1:0) ,
            one_or_x:old_full_time_number_of_one_or_x +(match_full_time_one_or_x?1:0),
            x_or_two:old_full_time_number_of_x_or_two + (match_full_time_x_or_two ? 1:0)
        },
        half_time: {
            one_or_two:old_half_time_number_of_one_or_two + (match_half_time_one_or_two?1:0) ,
            one_or_x:old_half_time_number_of_one_or_x +(match_half_time_one_or_x?1:0),
            x_or_two:old_half_time_number_of_x_or_two + (match_half_time_x_or_two ? 1:0)
        }
    }
    // NUMBER OF GOALS SCORED
    oneSeason_OneTeamPerformanceObject.number_of_goals_scored = {
        ...oneSeason_OneTeamPerformanceObject.number_of_goals_scored ,
        full_time: {
            when_away: old_number_of_goals_scored.full_time.when_away + (isHome?0:match_number_of_goals.full_time.away_team),
            when_home: old_number_of_goals_scored.full_time.when_home + (isHome?match_number_of_goals.full_time.home_team:0),
            total: old_number_of_goals_scored.full_time.total + (isHome?match_number_of_goals.full_time.home_team: match_number_of_goals.full_time.away_team)
        },
        half_time: {
            when_away: old_number_of_goals_scored.half_time.when_away + (isHome?0:match_number_of_goals.half_time.away_team),
            when_home: old_number_of_goals_scored.half_time.when_home + (isHome?match_number_of_goals.half_time.home_team:0),
            total:  old_number_of_goals_scored.half_time.total + (isHome? match_number_of_goals.half_time.home_team : match_number_of_goals.half_time.away_team)
        }
    }
    // NUMBER OF ONE X TWO
    const { full_time:old_full_time_number_of_one_x_two, half_time: old_half_time_number_of_one_x_two} = old_number_of_one_x_two;
    
    const {full_time:match_full_time_number_of_goals ,half_time:match_half_time_number_of_goals} = match_number_of_goals;
    const {away_team: match_full_time_away_team_number_of_goals, home_team: match_full_time_home_team_number_of_goals } = match_full_time_number_of_goals;
    const {away_team: match_half_time_away_team_number_of_goals, home_team: match_half_time_home_team_number_of_goals } = match_half_time_number_of_goals;
    oneSeason_OneTeamPerformanceObject.number_of_one_x_two = {
        full_time: {
            // away
            AD: old_full_time_number_of_one_x_two.AD + (isHome?0:(match_full_time_away_team_number_of_goals == match_full_time_home_team_number_of_goals? 1:0 )),
            AL: old_full_time_number_of_one_x_two.AL + (isHome?0: (match_full_time_away_team_number_of_goals<match_full_time_home_team_number_of_goals? 1: 0)),
            AW: old_full_time_number_of_one_x_two.AW + (isHome?0: (match_full_time_away_team_number_of_goals>match_full_time_home_team_number_of_goals? 1:0)),
            // home
            HD: old_full_time_number_of_one_x_two.HD + (isHome==false?0: (match_full_time_away_team_number_of_goals == match_full_time_home_team_number_of_goals? 1:0)),
            HL: old_full_time_number_of_one_x_two.HL + (isHome==false?0: (match_full_time_away_team_number_of_goals>match_full_time_home_team_number_of_goals? 1: 0)),
            HW: old_full_time_number_of_one_x_two.HW + (isHome==false?0: (match_full_time_away_team_number_of_goals<match_full_time_home_team_number_of_goals? 1:0))
        },
        half_time: {
            // away
            AD: old_half_time_number_of_one_x_two.AD + (isHome?0:(match_half_time_away_team_number_of_goals == match_half_time_home_team_number_of_goals? 1:0 )),
            AL: old_half_time_number_of_one_x_two.AL + (isHome?0: (match_half_time_away_team_number_of_goals<match_half_time_home_team_number_of_goals? 1: 0)),
            AW: old_half_time_number_of_one_x_two.AW + (isHome?0: (match_half_time_away_team_number_of_goals>match_half_time_home_team_number_of_goals? 1:0)),
            // home
            HD: old_half_time_number_of_one_x_two.HD + (isHome==false?0: (match_half_time_away_team_number_of_goals == match_half_time_home_team_number_of_goals? 1:0)),
            HL: old_half_time_number_of_one_x_two.HL + (isHome==false?0: (match_half_time_away_team_number_of_goals>match_half_time_home_team_number_of_goals? 1: 0)),
            HW: old_half_time_number_of_one_x_two.HW + (isHome==false?0: (match_half_time_away_team_number_of_goals<match_half_time_home_team_number_of_goals? 1:0)),
        }
    }

    // GAME ROUND NAME TO INDICE TO OPONENT AND RESULT OBJECT
    oneSeason_OneTeamPerformanceObject.game_round_name_to_indice_to_oponent_and_result_object = {
        ...old_game_round_name_to_indice_to_oponent_and_result_object,
        [gameRoundName]: {
            game_round_name: gameRoundName,
            play_date_time_details: match.play_date_time_details,
            indice: index,
            is_home: isHome,
            opponent_team_name: away_team,
            results: match
        }
        
    }

    // end

}



/**
 * END CALS
 */
// type V1PredictorArgs_Type = {
//     seasonNumber: number,
//     leagueName: LeagueNames_Types,
//     homeTeamName: string,
//     awayTeamName: string,
//     gameRoundName: string
// }

/**
 * @typedef {{
 *   seasonNumber: number,
 *   leagueName: import("../../POD_Predictor/feature_engineering/types_and_interfaces/LeagueNames_Types").LeagueNames_Types,
 *   homeTeamName: string,
 *   awayTeamName: string,
 *   gameRoundName: string,
 *   seasonStats: import("../../POD_Predictor/feature_engineering/types_and_interfaces/OneSeason_LeagueNameToGameroundMarketResultsStats_Interface").OneSeason_LeagueNameToGameroundMarketResultsStats_Interface
 * }} V1PredictorArgs_Type
 */

/**
 * @typedef {{
 *   home_team_name: string,
 *   away_team_name: string,
 *   league_name: import("../../POD_Predictor/feature_engineering/types_and_interfaces/LeagueNames_Types").LeagueNames_Types,
 *   season_number: number,
 *   game_round_name: string,
 *   predictions:string[]
 * }} PredictionsObject_Interface
 */


/**
 * 
 * @param {{
*   seasonNumber: number,
*   leagueName: import("../../POD_Predictor/feature_engineering/types_and_interfaces/LeagueNames_Types").LeagueNames_Types,
*   homeTeamName: string,
*   awayTeamName: string,
*   gameRoundName: string,
*   seasonStats: import("../../POD_Predictor/feature_engineering/types_and_interfaces/OneSeason_LeagueNameToGameroundMarketResultsStats_Interface").OneSeason_LeagueNameToGameroundMarketResultsStats_Interface
* }} param0
 * @returns {PredictionsObject_Interface}
 */
function V1_Predictor({awayTeamName,homeTeamName,leagueName,seasonNumber,gameRoundName,seasonStats}){
    const teamStatsINTheSeason = getOneTeamsPerformanceInASeason(seasonNumber,leagueName,homeTeamName,seasonStats);

    // console.log({
    //     // teamStatsINTheSeason,
    //     TEAM: teamStatsINTheSeason.team_name,
    //     NO_OF_GOALS_SCORED:teamStatsINTheSeason.number_of_goals_scored,
    //     number_of_one_x_two: teamStatsINTheSeason.number_of_one_x_two,
    //     BTS: teamStatsINTheSeason.number_of_both_teams_score
    //     // game_round_name_to_indice_to_oponent_and_result_object: teamStatsINTheSeason.game_round_name_to_indice_to_oponent_and_result_object
    // })
    const team2StatsINTheSeason = getOneTeamsPerformanceInASeason(seasonNumber,leagueName,awayTeamName,seasonStats);
    // console.log({
    //     // teamStatsINTheSeason,
    //     TEAM: team2StatsINTheSeason.team_name,
    //     NO_OF_GOALS_SCORED:team2StatsINTheSeason.number_of_goals_scored,
    //     number_of_one_x_two: team2StatsINTheSeason.number_of_one_x_two,
    //     BTS: team2StatsINTheSeason.number_of_both_teams_score
    //     // game_round_name_to_indice_to_oponent_and_result_object: teamStatsINTheSeason.game_round_name_to_indice_to_oponent_and_result_object
    // })

    const {number_of_one_x_two:homeTeamNumberOfOne_X_Two, number_of_both_teams_score:homeTeamNumberOfBts, number_of_goals_scored:homeTeamNumberOfGoalsScored} = teamStatsINTheSeason;
    const {full_time:homeTeamFullTimeNumberOfOne_X_Two,half_time:homeTeamHalfTimeNumberOfOne_X_Two} = homeTeamNumberOfOne_X_Two;
    const {number_of_one_x_two:awayTeamNumberOfOne_X_Two,number_of_both_teams_score:awayTeamNumberOfBts, number_of_goals_scored:awayTeamNumberOfGoalsScored} = team2StatsINTheSeason;
    const { full_time:awayTeamFullTimeNumberOfOne_X_Two,half_time:awayTeamHalfTimeNumberOfOne_X_Two } = awayTeamNumberOfOne_X_Two;
    /***
        * PREDICTION RULES END
        */
    const drawPoints = Math.abs(homeTeamFullTimeNumberOfOne_X_Two.HD - awayTeamFullTimeNumberOfOne_X_Two.AD);
    const loosePoints = Math.abs(homeTeamFullTimeNumberOfOne_X_Two.HL - awayTeamFullTimeNumberOfOne_X_Two.AL);
    const winPoints = Math.abs(homeTeamFullTimeNumberOfOne_X_Two.HW - awayTeamFullTimeNumberOfOne_X_Two.AW);
    const btsYES_Points = Math.abs(homeTeamNumberOfBts.full_time.yes - awayTeamNumberOfBts.full_time.yes);
    const btsNO_Points = Math.abs(homeTeamNumberOfBts.full_time.no - awayTeamNumberOfBts.full_time.no);
    console.log({
        drawPoints,
        loosePoints,
        winPoints,
        btsYES_Points,
        btsNO_Points
    })
    /**
     * @type {PredictionsObject_Interface}
     */
    const predictionsObject = {
        away_team_name: awayTeamName,
        home_team_name: homeTeamName,
        game_round_name: gameRoundName,
        season_number: seasonNumber,
        league_name: leagueName,
        predictions: []
    }
    /**
     * START OF RULES
     */
    if(btsNO_Points==btsYES_Points && btsYES_Points==winPoints && winPoints>loosePoints && loosePoints>drawPoints){
        const ptext = '[1X2] 1/2 100%';
        // console.log(ptext)
        predictionsObject.predictions.push(ptext)
    }
    if(drawPoints==0 && drawPoints<loosePoints && (loosePoints==winPoints) && btsNO_Points==btsYES_Points){
        console.log('[1X2] draw 50%')
        predictionsObject.predictions.push('[1X2] draw 50%')
        console.log('[O/U] +1.5 100%')
        predictionsObject.predictions.push('[O/U] +1.5 100%')
    }else if(drawPoints==0 && loosePoints==1 && winPoints==1){
        console.log('[1X2] 1 100%')
        predictionsObject.predictions.push('[1X2] 1 100%')
    }
    
    if(Math.abs(homeTeamNumberOfGoalsScored.full_time.total-awayTeamNumberOfGoalsScored.full_time.total)>6){
        console.log('[O/U] +1.5 90%')
        predictionsObject.predictions.push('[O/U] +1.5 90%')
    }
    if(winPoints==1 && drawPoints==0 && loosePoints==0){
        console.log('[DC] 1/2 100%')
        predictionsObject.predictions.push('[DC] 1/2 100%')
        console.log('[O/U] +1.5 100%')
        predictionsObject.predictions.push('[O/U] +1.5 100%')
    }
    if(btsYES_Points==0 && btsYES_Points==0 && (drawPoints==loosePoints && loosePoints==winPoints)){
        console.log('[BTS] yes 100%')
        predictionsObject.predictions.push('[BTS] yes 100%')
    }
    else if(btsYES_Points==0 && btsYES_Points==0){
        if(winPoints>loosePoints && winPoints>drawPoints && loosePoints>drawPoints){
            console.log('[DC] 1/2 70%')
            predictionsObject.predictions.push('[DC] 1/2 70%')
        }else {
            console.log('PLACED: [BTS] yes 60%')
            predictionsObject.predictions.push('PLACED: [BTS] yes 60%')
            console.log('PLACED: [O/U] +1.5 80%')
            predictionsObject.predictions.push('PLACED: [O/U] +1.5 80%')
            console.log('DRAW 50%')
            predictionsObject.predictions.push('DRAW 50%')
    
        }
    }
    if(btsYES_Points==0 && btsYES_Points==0 && winPoints==1 && drawPoints==0 && loosePoints ==0 ){
        console.log('DRAW 100%')
        predictionsObject.predictions.push('DRAW 100%')
        console.log('HF/FT 0,0(0,0)')
        predictionsObject.predictions.push('HF/FT 0,0(0,0)')
    }
    if(drawPoints==winPoints && loosePoints< drawPoints && loosePoints==0){
        console.log('[DC] 1/2 100%')
        predictionsObject.predictions.push('[DC] 1/2 100%')
    }else if(drawPoints==loosePoints && winPoints>loosePoints && winPoints ==btsYES_Points && btsYES_Points == btsNO_Points){
        console.log('[DC] 1/2 100%')
        predictionsObject.predictions.push('[DC] 1/2 100%')
    }
    // else {
    //     // console.log('PUT : [H/F] X/1 100%')
    //     // console.log('[DC] X/2 70%')
    //     console.log('PUT: [O/U +1.5 100%]')
    // }
    
    // add more parameters for bts
    if((btsNO_Points ==2 && btsYES_Points==2 ) && (loosePoints==winPoints) && drawPoints>loosePoints){
        console.log('[BTS] no 100%')
        predictionsObject.predictions.push('[BTS] no 100%')
    }else
    if((btsNO_Points ==2 && btsYES_Points==2 ) || (btsNO_Points ==5 && btsYES_Points==5 ) ){
        console.log('[BTS] yes 50%')
        predictionsObject.predictions.push('[BTS] yes 50%')
    }
    // test out the code below on BTS no 100%
    else
    if(btsNO_Points ==1 && btsYES_Points==1 ){
        if(winPoints>loosePoints && loosePoints> drawPoints && drawPoints>0){
            console.log('[BTS] yes 50%')
            predictionsObject.predictions.push('[BTS] yes 50%')
        }else if(winPoints<loosePoints && loosePoints> drawPoints){
            console.log('[BTS] no 100%')
            predictionsObject.predictions.push('[BTS] no 100%')
        }
        else {
            console.log('[BTS] no 100%')
            predictionsObject.predictions.push('[BTS] no 100%')
        }
    }
    
    // added
    if(loosePoints>winPoints && winPoints>drawPoints && btsNO_Points==btsYES_Points){
        console.log('ADDED : [DC] 1/2 100%')
        predictionsObject.predictions.push('ADDED : [DC] 1/2 100%')
        console.log('ADDED: [O/U] +1.5 80%')
        predictionsObject.predictions.push('ADDED: [O/U] +1.5 80%')
    }
    // ADDED 2
    if(winPoints>drawPoints && drawPoints>loosePoints && winPoints> btsNO_Points && btsNO_Points == btsYES_Points){
        console.log('ADDED TWO: [DC] 1/2 98%')
        predictionsObject.predictions.push('ADDED TWO: [DC] 1/2 98%')
        console.log('O/U +1.5 90%')
        predictionsObject.predictions.push('O/U +1.5 90%')
    }

    /**
     * END OF RULES
     */
    return predictionsObject;

}

// const {getStandingMatchUpsForOneSeason} = require("../standing_matchups/getStandingMatchUpsForOneSeason");

/**
 * 
 * @param {number} seasonNumber 
 * @returns {Promise<import("../types_and_interfaces/API_AllStandingAndMatchUpsForAParticularSeason_Response_Interface").API_AllStandingAndMatchUpsForAParticularSeason_Response_Interface>}
 */
async function getStandingMatchUpsForOneSeason(seasonNumber){
    const FUNCTION_NAME = "(fn:getStandingMatchUpsForOneSeason)";
    try {
        console.log(FUNCTION_NAME)
        // if(page.url().includes('betpawa')==false){
        //     await page.goto('https://www.betpawa.co.ke')
        // }
        console.log('Start evaluate')
        // /**
        //  * @type {import("../../../types_and_interfaces/betpawa_api_responses/AllStandingAndMatchUpsForAParticularSeason_Response_Interface").AllStandingAndMatchUpsForAParticularSeason_Response_Interface}
        //  */
        const url = "/api/virtuals/standing/matchUps/"+seasonNumber;
        console.log({URL: url})
        /**
         * @type {import("../types_and_interfaces/API_AllStandingAndMatchUpsForAParticularSeason_Response_Interface").API_AllStandingAndMatchUpsForAParticularSeason_Response_Interface}
         */
        
        return new Promise((resolve,reject)=>{ //Promise<AllStandingAndMatchUpsForAParticularSeason>
            console.log('Called fetch')
            fetch(url,{
                method: 'GET',
                headers: {
                    origin: "null",
                    "Access-Control-Allow-Credentials": "true",
                    "Content-Type":'application/json',
                    "X-Pawa-Brand":"betpawa-kenya",
                    "X-Pawa-Language":"en",
                    "Vuejs":"true",
                },
                credentials: "include"
            })
            .then((res)=>{
              return  res.json()
            })
            .then((data)=>{
                // console.log({data})
                
                resolve(data);
            })
            .catch((err)=>{
                // console.log('err',err)
                reject(err)
            })

        })
        // console.log('Evaluation completed')


        /**
         * Save the standings results in file
         */

        // await saveJSON("standingsMatchUp_"+seasonNumber+".json",JSON.stringify(responseData,null,2));
        // console.log("responseData:\n",JSON.stringify(responseData,null,2));
        // return responseData;
        

    }catch(error){
        error.message = FUNCTION_NAME+" "+error.message;
        console.log('THROW ERROR:',{error})
        throw error;
    }

}
// const {formatARawSeasonResultDataAndReturn} = require("../formating/formatARawSeasonResultDataAndReturn");
//@ts-check
// const {readAParticularRawSeasonResultsFile} =  require('./readAParticularRawSeasonResultsFile')
// const {saveJSON} = require('../../../filesystem/save')
// const {getGameRoundPlayDateTimeDetails} =  require('../../utils/time/getGameRoundPlayDateTimeDetails');
/**
 * 
 * @param {{gameRoundId:number,gameRoundName: string,seasonNumber:number}} param0 
 * @returns {import("./types_and_interfaces/data_objects/PlayDateTimeDetails_Interface").PlayDateTimeDetails_Interface}
 */
function getGameRoundPlayDateTimeDetails({gameRoundId,gameRoundName,seasonNumber}){
    
    // get the base know gameRoundAndItsPlayTime details


    const playTimeAnchorDetails  = {
        "game_round_id": 126411,
        "game_round_name": "23",
        "play_year_name": "2021",
        "play_year_number": 2021,
        "play_day_number": 1,
        "play_day_long_uppercase_name": "MONDAY",
        "play_day_short_title_case_name": "Mon",
        "play_month_long_uppercase_name": "AUGUST",
        "play_month_short_title_case_name": "Aug",
        "play_month_number": 7,
        "play_time_name_two": "9:45",
        "play_time_name": "09:45",
        "play_timestamp": 1627886700000,
        "season_number": "3327"
      };//read_AnchorGameRoundAndItsPlayTimeDetails()
    
    /* KEY POINTS: 
    *===============
    * Each gameRound happens after every five minutes
    * 
    * STRATEGY:
    * =========
    * *Calculate the difference between the supplied gameRoundid from the anchor;
    * * Multiply the difference by 5 to get the totla number of minutes passed
    * * Calculate the time from that
    */

    const delta = playTimeAnchorDetails.game_round_id - gameRoundId;
    // note delta might be a negative or positive number
    const deltaMinutes = (delta *5);
    const deltaMs = (deltaMinutes*60000);
    // console.log({deltaMs,deltaMinutes})

    // calculate the play time details
    const anchorPlayTimeStamp = playTimeAnchorDetails.play_timestamp;
    const playTimeStampForTheSuppliedGameRound = anchorPlayTimeStamp-deltaMs;

    // get 
    // console.log({playTimeStampForTheSuppliedGameRound})
    const UTC_DateString = new Date(playTimeStampForTheSuppliedGameRound).toString();
    const ISON_DateString = new Date(playTimeStampForTheSuppliedGameRound).toISOString()
    // console.log({UTC_DateString,ISON_DateString})
    //"Thu, 29 Jul 2021 15:00:00 GMT" // example
    let UTC_DateStringArray = UTC_DateString.replace(',','').split(' ');
    // UTC_DateStringArray = UTC_DateStringArray.filter(val => {console.log({val}); return val!=='';)
    // console.log({UTC_DateStringArray, length:UTC_DateStringArray.length })
    /**
     * @type {import("./types_and_interfaces/data_objects/DayNamesTypes_Interface").ShortTitleCase_DayNamesTypes_Interface}
     */
    const day_name_short_title_case_name = UTC_DateStringArray[0];
    const dateNumber = Number(UTC_DateStringArray[2])
    /**
     * @type {import("./types_and_interfaces/data_objects/MonthNamesType_Interface").MonthShortTitleCaseNamesType_Interface}
     */
    const monthShortTitleCaseName = UTC_DateStringArray[1];
    const yearNumber = Number(UTC_DateStringArray[3])
    const time_name = UTC_DateStringArray[4].split(':').slice(0,2).join(':')
    // console.log({day_name_short_title_case_name,dateNumber, monthShortTitleCaseName,yearNumber,time_name})
    return {
        play_time_name: time_name, 
        play_timestamp: playTimeStampForTheSuppliedGameRound,
        play_month_long_uppercase_name: monthShortTitleCaseNameToMonthUpercaseNameObject[monthShortTitleCaseName],
        play_month_short_title_case_name: monthShortTitleCaseName,
        play_month_number: monthShortTitleCaseNameToMonthNumberObject[monthShortTitleCaseName],
        play_date_number: dateNumber,
        play_day_name_long_uppercase: shortTitleCaseDayNameToLongUppercaseDayNameObject[day_name_short_title_case_name],
        play_day_name_short_title_case: day_name_short_title_case_name,
        play_day_number: shortTitleCaseDayNameToDayNumberObject[day_name_short_title_case_name],
        play_year_name: String(yearNumber),
        play_year_number: yearNumber,
        game_round_id: gameRoundId,
        game_round_name: gameRoundName,
        season_number: seasonNumber,
    }
}

/**
 * 
 * @param {number} seasonNumber 
 * @param {import("../types_and_interfaces/API_AllStandingAndMatchUpsForAParticularSeason_Response_Interface").API_AllStandingAndMatchUpsForAParticularSeason_Response_Interface} seasonResultsData 
 */
function formatARawSeasonResultDataAndReturn(seasonNumber,seasonResultsData ){
    // console.log({seasonResultsData})
    const GAME_ROUNDS_DATA_OBJECT = seasonResultsData.rounds;

    const leaguesArray = seasonResultsData.leagues;
  
    /**
     * @type {import("./types_and_interfaces/Format_LeaguesToGameRoundsToResultsObject_Interface").Format_LeaguesToGameRoundsToResultsObject_Interface}
     */

    const PARSED_LEAGUES_TO_GAME_ROUNDS_TO_RESULTS_OBJECT = {
        "English League":{
            league: {
                id: 0,
                name:''
            },
            matchDaysAndResults:{}
        },
        "Italian League":{
            league: {
                id: 0,
                name:''
            },
            matchDaysAndResults:{}
        },
        "Spanish League":{
            league: {
                id: 0,
                name:''
            },
            matchDaysAndResults:{}
        },
        "Dutch League":{
            league: {
                id: 0,
                name:''
            },
            matchDaysAndResults:{}
        },
        "French League":{
            league: {
                id: 0,
                name:''
            },
            matchDaysAndResults:{}
        },
        "German League":{
            league: {
                id: 0,
                name:''
            },
            matchDaysAndResults:{}
        },
        "Portuguese League":{
            league: {
                id: 0,
                name:''
            },
            matchDaysAndResults:{}
        }
    };
    let leagueConter = 0

    for(const leagueToParse of leaguesArray){
        // const leagueToParse = leaguesArray[leagueConter]
        // console.log({leagueToParse})
        // get the league name
        /**
         * @type {import("../types_and_interfaces/LeagueNames_Type").LeagueNames_Type}
         */
        const LEAGUE_NAME = /**@type {import("../types_and_interfaces/LeagueNames_Type").LeagueNames_Type}*/(leagueToParse.league.name);
        // loop through the matchups
        const matchUps = leagueToParse.matchUps;
        /**
         * @type {{[gameRoundName:string]:import("../types_and_interfaces/MatchUp_Interface").MatchUp_Interface[]}}
         */
        const GROUPED_MATCHES_OBJECT_BY_GAME_ROUND  = {}

        
        matchUps.forEach((obj)=>{
            const gameRoundName_ = GAME_ROUNDS_DATA_OBJECT[obj.gameRoundId].gameRoundName;

            // console.log(obj)
            const play_date_time_details = getGameRoundPlayDateTimeDetails({
                gameRoundId: obj.gameRoundId,
                gameRoundName: gameRoundName_,
                seasonNumber:seasonNumber 
            })
            const newObj = {
                ...obj,
                play_date_time_details
            }
            // group the matches in groups of gameRoundId -> matches[]
            GROUPED_MATCHES_OBJECT_BY_GAME_ROUND[gameRoundName_]?null:GROUPED_MATCHES_OBJECT_BY_GAME_ROUND[gameRoundName_] = [];
            GROUPED_MATCHES_OBJECT_BY_GAME_ROUND[gameRoundName_].push(newObj)
            const match_indice_ = GROUPED_MATCHES_OBJECT_BY_GAME_ROUND[gameRoundName_].length-1;
           
            

 
        })
        // console.log({GROUPED_MATCHES_OBJECT_BY_GAME_ROUND})
        PARSED_LEAGUES_TO_GAME_ROUNDS_TO_RESULTS_OBJECT[LEAGUE_NAME] = {
            league: leagueToParse.league,
            //@ts-ignore
            matchDaysAndResults: GROUPED_MATCHES_OBJECT_BY_GAME_ROUND,
        }
        
        // 
        leagueConter=leagueConter+1;
        // break;
    }

    // end
    return PARSED_LEAGUES_TO_GAME_ROUNDS_TO_RESULTS_OBJECT;

}

/**
 * @param {number} seasonNumber
 */
async function getFormatedRawResultsForOneSeason(seasonNumber){
    const seasonResults = await getStandingMatchUpsForOneSeason(seasonNumber);
    // note that the season might not be complete
    // format the season
    /**
     * @type {{
     *      [id:number]:{
     *          id:number,
     *          name:string
     *      }
     * }}
     */
    const idToTeamObject = {};
    for (const ky in seasonResults.teams){
        idToTeamObject[seasonResults.teams[ky].id] = seasonResults.teams[ky];
    }
    const formatedRawResults = await formatARawSeasonResultDataAndReturn(seasonNumber,seasonResults);
    // formatedRawResults["Dutch League"].matchDaysAndResults[""][0]
    return {formatedRawResults,idToTeamObject};
}

// APP.JS
async function getRV1_Predictions(fullDocument){
    
        // CALCULATE THE PREDICTIONS 
        const NUM_OF_PREVIOUS_DOCS_TO_CALCULATE_ON = 0;//10 
        const currentSeasonNumber = fullDocument.season_number;
        /**
        * @type {number[]}
        */
    const sesonNumbersArray = [currentSeasonNumber]// season numbeer of seasons to include in the calculations
    // let i = currentSeasonNumber;
    // const lastPreviousSeasonNumberToInclude = currentSeasonNumber-NUM_OF_PREVIOUS_DOCS_TO_CALCULATE_ON;
    // for(i;i>lastPreviousSeasonNumberToInclude;i--){
    //     sesonNumbersArray.unshift(i)
    // };
    const getCertainSeasonNumbersRawResultsAndFormatAndGetStatsFromTheResults = async ()=>{
        return await Promise.all(sesonNumbersArray.map(async (seasonNumberToPerfomStats)=>{
            const {formatedRawResults,idToTeamObject} = await getFormatedRawResultsForOneSeason(seasonNumberToPerfomStats);
            // get stats on the parsed raw results
            const seasonStats = await parseStatsFromAParticularFormatedRawSeasonResultAndReturn({
                formatedRawSeasonresult:formatedRawResults,
                idToTeamsObject: idToTeamObject,
                seasonNumber: seasonNumberToPerfomStats 
            })
            
            return seasonStats;
    
        }))
    }
    
    const ArrayOf_seasonStatsForOneSeasonAtATime = await getCertainSeasonNumbersRawResultsAndFormatAndGetStatsFromTheResults();
    /**
        * @type {import("./types_and_interfaces/RV1_Predictor_DB_Results_Interface").RV1_Predictor_DB_Results_Interface};
        */
    const RV1_Predictions = {
        game_round_name: fullDocument.game_round_name,
        play_time_name: fullDocument.play_time_name,
        season_number: fullDocument.season_number,
        timestamp: fullDocument.play_time_timestamp,
        leagues_and_match_predictions: {
            "English League":[],
            "French League":[],
            "German League":[],
            "Italian League":[],
            "Spanish League":[],
            "Dutch League":[],
            "Portuguese League":[],
        }
    }
    
    // const newLeguesAndMatchesWithPredictionsArrayObject = {
    //     "English League": [],
    //     "Spanish League":[],
    //     "French League":[],
    //     "Italian League":[],
    //     "German League":[],
        
    // }
    for(const leagueName in fullDocument.leagues_and_teams){
        const teams = fullDocument.leagues_and_teams[leagueName];
        for(const team of teams){
            const {away_team_name,home_team_name} = team;
            let v1Predictions = V1_Predictor({
                awayTeamName: away_team_name,
                homeTeamName: home_team_name,
                gameRoundName: fullDocument.game_round_name,
                leagueName: leagueName,
                seasonNumber: fullDocument.season_number,
                seasonStats: ArrayOf_seasonStatsForOneSeasonAtATime[0]
    
            });
            RV1_Predictions.leagues_and_match_predictions[leagueName].push(v1Predictions)
        }
    }
    
    
    
    
        // SAVE UPDATE DOC ON DB
    console.log(JSON.stringify(RV1_Predictions))

}

// GEET FULL DOC

/**
 * @param {number} seasonNumber 
 * @returns {Promise<import("../types_and_interfaces/API_VirtualStandingSeasonResponse_Interface").API_VirtualStandingSeasonResponse_Interface>}
 */
async function getStandingsForOneSeason(seasonNumber){
    try {
        // if(page.url().includes('betpawa')==false){
        //     await page.goto('https://www.betpawa.co.ke')
        // }
        console.log('Start evaluate')
        // /**
        //  * @type {import("../../../types_and_interfaces/betpawa_api_responses/AllStandingAndMatchUpsForAParticularSeason_Response_Interface").AllStandingAndMatchUpsForAParticularSeason_Response_Interface}
        //  */
        /**
         * @type {import("../types_and_interfaces/API_VirtualStandingSeasonResponse_Interface").API_VirtualStandingSeasonResponse_Interface}
        */
        console.log('Inside evaluate')
        console.log('args:',{seasonNumber})
        const url = "/api/virtuals/standing/"+seasonNumber;
      

        // console.log({url})
        // perform fetch
        
        return new Promise((resolve,reject)=>{ //Promise<AllStandingAndMatchUpsForAParticularSeason>
            console.log('Called fetch')
            fetch(url,{
                method: 'GET',
                headers: {
                    origin: "null",
                    "Access-Control-Allow-Credentials": "true",
                    "Content-Type":'application/json',
                    "X-Pawa-Brand":"betpawa-kenya",
                    "X-Pawa-Language":"en",
                    "Vuejs":"true",
                },
                credentials: "include"
            })
            .then((res)=>{
              return  res.json()
            })
            .then((data)=>{
                // console.log({data})
                
                resolve(data);
            })
            .catch((err)=>{
                // console.log('err',err)
                reject(err)
            })

        })
        // return {}
        // // get all the matches ever played results
  
        // console.log('Evaluation completed')


        // /**
        //  * Save the standings results in file
        //  */

        
        // return standingsResponseData;
        

    }catch(error){
        console.log('THROW ERROR:',{error})
        throw error;
    }

}


/***
 * @param {number} seasonNumber
 */
async function getLeagueNamesToTeamsNameToTeamObject(seasonNumber){
    const standingsResp = await getStandingsForOneSeason(seasonNumber)
    /** 
     * @type {{
     *      [leagueName in import("../types_and_interfaces/LeagueNames_Type").LeagueNames_Type] : {
     *         [name:string]:import("../types_and_interfaces/TeamNameToIdObject_Interface").TeamNameToIdObject_Interface
     *      }
     * }}
     */
    const leagueNameToTeamNameToTeamObject = {};
    // /**
    //  * @type {import("../types_and_interfaces/TeamNameToIdObject_Interface").TeamNameToIdObject_Interface}
    //  */
    // const TeamNameToIdObject = {}; 
    for(const standingLeague of standingsResp.standings){
        if(!leagueNameToTeamNameToTeamObject[standingLeague.league.name])leagueNameToTeamNameToTeamObject[standingLeague.league.name] = {};
        for(const teamKey in standingLeague.teams){
            const team = standingLeague.teams[teamKey]
            leagueNameToTeamNameToTeamObject[standingLeague.league.name][team.name] = team;
        } 
    }
    return leagueNameToTeamNameToTeamObject;
}


function createLeaguesToEmptyArray_Object(){
    return {
        "English League":[],
        "Dutch League":[],
        "French League":[],
        "German League":[],
        "Italian League":[],
        "Portuguese League":[],
        "Spanish League":[]
    }
}

async function getFullDocument({
    season_number,
    game_round_name,
    play_time_name,
    marketDataAndSectorsFor_1X2,
    marketDataAndSectorsFor_OverUnder,
    marketDataAndSectorsFor_BTTS,
    marketDataAndSectorsFor_DC,
    marketDataAndSectorsFor_HTFT
}){
    // const marketDataAndSectorsFor_1X2 = {};
    // const marketDataAndSectorsFor_OverUnder = {};
    // const marketDataAndSectorsFor_BTTS = {};
    // const marketDataAndSectorsFor_DC = {};
    // const marketDataAndSectorsFor_HTFT = {};

    // const upcomingMatchesTimeTrackingObject = getTimeTrackingObject({
    //     gamePlayTimeName: play_time_name,
    //     gameRoundName: game_round_name,
    //     seasonNumber: season_number
    // })
    let legueToTeamsObject = createLeaguesToEmptyArray_Object() 
    const leagueNamesArray = Object.keys(marketDataAndSectorsFor_1X2)
    const leagueNamesToTeamsNameToTeamObject = await getLeagueNamesToTeamsNameToTeamObject(season_number);
    console.log({leagueNamesToTeamsNameToTeamObject})
    for( const leagueName of leagueNamesArray){
        const leagueName_ = leagueName
        // loop through each team
        for(const team in marketDataAndSectorsFor_1X2[leagueName_] ){
            const teamObjFor1X2 = marketDataAndSectorsFor_1X2[leagueName_][team]  
            const homeTeamId = leagueNamesToTeamsNameToTeamObject[leagueName_][teamObjFor1X2.home_team_name].id;
            const awayTeamId = leagueNamesToTeamsNameToTeamObject[leagueName_][teamObjFor1X2.away_team_name].id;
            const teamObjFor_OverUnder = marketDataAndSectorsFor_OverUnder[leagueName_][team]
            const teamObjFor_BTTS = marketDataAndSectorsFor_BTTS[leagueName_][team]
            const teamObjFor_DC = marketDataAndSectorsFor_DC[leagueName_][team]
            const teamObjFor_HTFT = marketDataAndSectorsFor_HTFT[leagueName_][team]
                console.log({leagueName_,team,season_number,game_round_name});
            legueToTeamsObject[leagueName_].push({
                away_team_name: teamObjFor1X2.away_team_name,
                home_team_name: teamObjFor1X2.home_team_name,
                home_team_id: homeTeamId,
                away_team_id: awayTeamId,
                market_and_odds: {
                    "1X2":{
                        one: teamObjFor1X2.one_x_two.one.odds,
                        two: teamObjFor1X2.one_x_two.two.odds,
                        x: teamObjFor1X2.one_x_two.x.odds
                    },
                    "HT/FT": {
                        "1/1": teamObjFor_HTFT.halftime_fulltime["1/1"].odds,
                        "1/2": teamObjFor_HTFT.halftime_fulltime["1/2"].odds,
                        "1/X": teamObjFor_HTFT.halftime_fulltime["1/X"].odds,
                        "2/1": teamObjFor_HTFT.halftime_fulltime["2/1"].odds,
                        "2/2": teamObjFor_HTFT.halftime_fulltime["2/2"].odds,
                        "2/X": teamObjFor_HTFT.halftime_fulltime["2/X"].odds,
                        "X/1": teamObjFor_HTFT.halftime_fulltime["X/1"].odds,
                        "X/2": teamObjFor_HTFT.halftime_fulltime["X/2"].odds,
                        "X/X": teamObjFor_HTFT.halftime_fulltime["X/X"].odds
                    },
                    "O/U":{
                        "over (1.5)": teamObjFor_OverUnder.over_under["over (1.5)"].odds,
                        "over (2.5)": teamObjFor_OverUnder.over_under["over (2.5)"].odds,
                        "over (3.5)": teamObjFor_OverUnder.over_under["over (3.5)"].odds,
                        "under (1.5)": teamObjFor_OverUnder.over_under["under (1.5)"].odds,
                        "under (2.5)": teamObjFor_OverUnder.over_under["under (2.5)"].odds,
                        "under (3.5)": teamObjFor_OverUnder.over_under["under (3.5)"].odds
                    },
                    "BTTS":{
                        No: teamObjFor_BTTS.both_teams_to_score.No.odds,
                        Yes: teamObjFor_BTTS.both_teams_to_score.Yes.odds
                    },
                    "DC":{
                        "12": teamObjFor_DC.double_chance["12"].odds,
                        "1X": teamObjFor_DC.double_chance["1X"].odds,
                        "X2": teamObjFor_DC.double_chance["X2"].odds
                    }
                },
                row_index: teamObjFor1X2.row_index
            })
    
        }
    }


    const fullDocument = {
        game_round_name: game_round_name,
        play_time_name: play_time_name,
        play_time_timestamp: 0,
        play_time_day_fullname: "",//upcomingMatchesTimeTrackingObject.upcoming_matches_datetime_object.day_name_long_uppercase,
        play_time_year: "",//upcomingMatchesTimeTrackingObject.upcoming_matches_datetime_object.year_number,
        season_number,
        play_time_month_fullname: "",//upcomingMatchesTimeTrackingObject.upcoming_matches_datetime_object.month_name_long_uppercase,
        leagues_and_teams:legueToTeamsObject,
        // results:null,
        // standings: standings

    }

    return fullDocument; 

}


const OBJ = newObj;//window.obj;

getFullDocument({
    season_number: OBJ.season_number,
    game_round_name: OBJ.game_round_name,
    play_time_name: OBJ.play_time_name,
    marketDataAndSectorsFor_1X2: OBJ.oneXtwo_dds_Obj,
    marketDataAndSectorsFor_OverUnder: OBJ.overUnder_Odds_Obj,
    marketDataAndSectorsFor_BTTS: OBJ.btts_Odds_Obj,
    marketDataAndSectorsFor_DC: OBJ.dc_Odds_Obj,
    marketDataAndSectorsFor_HTFT: OBJ.htft_Odds_Obj
}).then(fullDoc =>{
    console.log({fullDoc})
    window.ReactNativeWebView.postMessage(fullDoc)

    getRV1_Predictions(fullDoc)
}).catch(e =>{
    console.log({e})
})


}, 2000);
