//@ts-check
/**A Learning Blockchain containing History Records */
function generateUniqueID() {
    // Generate the current timestamp in milliseconds
    const timestamp = Date.now();
    
    // Define the alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    // Generate a random letter from the alphabet
    const randomLetter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    
    // Combine timestamp and random letter to create a unique ID
    return `${timestamp}-${randomLetter}`;
}

// console.log(generateUniqueID());


/**
 * @typedef {"PINK"|"BLUE"|"PURPLE"|""} AviatorFlewAwayColor_Type
 * @typedef {"BLUE < 1.20"|"BLUE > 1.20"|"PURPLE"|"PINK"} BetOptions_Type
 * @typedef {"DONT BET"|"BET_NEXT_AS_2.50_or_3.0"|"BET_NEXT_AS_1.20"|"BET_HUGE"} AviatorBetSignals_Type
 */
// {
//  *  [condition:BetOptions_Types]:AviatorBetSignals_Type
//  * }
/**
 * @typedef {{[condition in BetOptions_Type]:AviatorBetSignals_Type}} BET_STRATEGY_OBJECT_Inteface
 * 
 */
// /**
//  * @type {BET_STRATEGY_OBJECT_Inteface}
//  */
// const BET_STRATEGY_OBJECT = {
//     "BLUE < 1.20": "BET_NEXT_AS_1.20",
//     "BLUE > 1.20": "DONT BET",
//     "PURPLE": "BET_NEXT_AS_2.50_or_3.0",
//     "PINK": "DONT BET"
// }

class FlewAway {
    ////////////////////////
    //Stats
    #stats = {
        //color
        "number_of_consecutive_color_blue":0,
        "number_of_consecutive_color_purple":0,
        "number_of_consecutive_color_pink":0,
        //  multiple segments
        "number_of_consecutive: BLUE < 1.20": 0,
        "number_of_consecutive: BLUE > 1.20": 0,

        // spaces color
        "number_of_spaces_since_color_blue": 0,
        "number_of_spaces_since_color_purple": 0,
        "number_of_spaces_since_color_pink": 0,
        // spaces multiple segments
        "number_of_spaces_since: BLUE < 1.20":0,
        "number_of_spaces_since: BLUE > 1.20":0,
    }

    ///////////////////


    /***
     * 
     * @typedef {string} UID_Type
     * 
     * @typedef {"< 1.20"|"> 1.20"|""} MultipleSegments_Type
     * 
     */
    
    /**
     * @type {MultipleSegments_Type}
     */
    #multiple_segment;
    /**
     * @type {number}
     */
    #multiple = 0;
    /**
     * @type {AviatorFlewAwayColor_Type}
     */
    #color = "";
    /**
     * @type {UID_Type}
     */
    #id;
    /**
     * @type {UID_Type}
     */
    #previousId;

    /**
     * 
     * @param {{
     *          color:AviatorFlewAwayColor_Type,
     *          multiple?:number,
     *          previousId?:UID_Type,
     *          multiple_segment:MultipleSegments_Type
     * }} param0 
     */
    constructor({
        color,multiple,previousId,multiple_segment
    }){
        
        // generate a uid
        this.#id = generateUniqueID();
        this.#color = color;
        this.#multiple = multiple||0;
        this.#previousId = previousId||"0";
        this.#multiple_segment = multiple_segment;
        if(this.#previousId==="0"){
            console.log("Genesis Block set: id:=>"+this.#id+" previousId:=>"+this.#previousId);
        }else {
            console.log("FlewAway initialized: id:=>"+this.#id+" previousId:=>"+this.#previousId);
        }

        

    }
   
    // construct summary
    summary(){
        return {
            //colour
            COLOR_IS_BLUE: this.#color==="BLUE",
            COLOR_IS_PURPLE: this.#color==="PURPLE",
            COLOR_IS_PINK: this.#color==="PINK",
            // multiple
            "MULTIPLE_IS: < 1.20": this.#multiple_segment==="< 1.20",
            "MULTIPLE_IS: > 1.20": this.#multiple_segment==="> 1.20",
        };
    }

    // Handle Stats Gathering by / from previous flewAway
    /**
     *  
     * @param {FlewAway} previousFlewAway 
     */
    attachPreviousFlewAwayStats(previousFlewAway){
        /**
         * NOTE:
         * -Reset consecutive color counter to zero when color changes for current flewAway
         * -Reset consecutive multiple segments counter to zero when segment changes for current flewAway
         */
        const CURRENT_FLEW_AWAY_SUMMARY = this.summary(); 
        const PREVIOUS_FLEW_AWAY_SUMMARY = previousFlewAway.summary();
        
        console.log("previousFlewAway.stats:",previousFlewAway.stats)
        // helper function
        function addOneIfTrue(condition){
            console.log("fn:addOneIfTrue");
            let total = 0
            if(condition===true){
                total+=1;
            }
            console.log("total:",total);
            return total;
        }
        function addValueIfTrue(condition,value){
            console.log("fn:addValueIfTrue");
            console.log(`condition:${condition},value: ${value}`);
            let total = 0;
            if(condition===true){
                total+=value;
            }
            console.log("total:",total);
            return total;
        }
        
        if(previousFlewAway){
            // // "number_of_consecutive: BLUE < 1.20"  current
            // if(CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE && CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: < 1.20"])
            this.#stats = {
                "number_of_consecutive: BLUE < 1.20": 
                        addOneIfTrue(CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE && CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: < 1.20"]) +
                        addValueIfTrue(
                            PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE && PREVIOUS_FLEW_AWAY_SUMMARY["MULTIPLE_IS: < 1.20"] && //both previous and current
                            CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE && CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: < 1.20"]
                        ,
                            previousFlewAway.stats["number_of_consecutive: BLUE < 1.20"]
                        ),
                       

                "number_of_consecutive: BLUE > 1.20":
                        addOneIfTrue(CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE && CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: > 1.20"]) +
                        addValueIfTrue(
                            PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE && PREVIOUS_FLEW_AWAY_SUMMARY["MULTIPLE_IS: > 1.20"] && //both previous and current
                            CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE && CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: > 1.20"],
                            previousFlewAway.stats["number_of_consecutive: BLUE > 1.20"]
                        ),


                "number_of_consecutive_color_blue": 
                        addOneIfTrue(CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE) +
                        addValueIfTrue(
                            PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE && //both previous and current
                            CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE,
                            previousFlewAway.stats["number_of_consecutive_color_blue"]
                        ),

                "number_of_consecutive_color_pink":
                        addOneIfTrue(CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_PINK) +
                        addValueIfTrue(
                            PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_PINK && //both previous and current
                            CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_PINK,
                            previousFlewAway.stats["number_of_consecutive_color_pink"]
                        ),

                "number_of_consecutive_color_purple":
                        addOneIfTrue(CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_PURPLE) +
                        addValueIfTrue(
                            PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_PURPLE && //both previous and current
                            CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_PURPLE,
                            previousFlewAway.stats["number_of_consecutive_color_purple"]
                        ),

                // Color Spaces
                "number_of_spaces_since_color_blue":
                        addOneIfTrue(CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false) +
                        addValueIfTrue(
                            PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false && //both previous and current
                            CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false,
                            previousFlewAway.stats["number_of_spaces_since_color_blue"]
                        ), 

                "number_of_spaces_since_color_pink":
                        addOneIfTrue(CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_PINK===false) +
                        addValueIfTrue(
                            PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_PINK===false && //both previous and current
                            CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_PINK===false,
                            previousFlewAway.stats["number_of_spaces_since_color_pink"]
                        ),

                "number_of_spaces_since_color_purple":
                        addOneIfTrue(CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_PURPLE===false) +
                        addValueIfTrue(
                            PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_PURPLE===false && //both previous and current
                            CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_PURPLE===false,
                            previousFlewAway.stats["number_of_spaces_since_color_purple"]
                        ),
                
                // Multiple Segments Spaces
                "number_of_spaces_since: BLUE < 1.20": 
                        addOneIfTrue(
                            ( CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: < 1.20"]===false && CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false ) ||
                            ( CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: < 1.20"] && CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false ) ||
                            ( CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: < 1.20"]===false && CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE ) 
                        ) +
                        addValueIfTrue(
                            (
                                PREVIOUS_FLEW_AWAY_SUMMARY["MULTIPLE_IS: < 1.20"]===false && PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false ||
                                PREVIOUS_FLEW_AWAY_SUMMARY["MULTIPLE_IS: < 1.20"] && PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false ||
                                PREVIOUS_FLEW_AWAY_SUMMARY["MULTIPLE_IS: < 1.20"]===false && PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE 
                            )
                            &&//both previous and current
                            (
                                ( CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: < 1.20"]===false && CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false ) ||
                                ( CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: < 1.20"] && CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false ) ||
                                ( CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: < 1.20"]===false && CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE ) 
                            ),
                            previousFlewAway.stats["number_of_spaces_since: BLUE < 1.20"]
                        ),

                "number_of_spaces_since: BLUE > 1.20": 
                        addOneIfTrue(
                            ( CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: > 1.20"]===false && CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false ) ||
                            ( CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: > 1.20"] && CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false ) ||
                            ( CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: > 1.20"]===false && CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE ) 
                        ) +
                        addValueIfTrue(
                            (
                                PREVIOUS_FLEW_AWAY_SUMMARY["MULTIPLE_IS: > 1.20"]===false && PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false ||
                                PREVIOUS_FLEW_AWAY_SUMMARY["MULTIPLE_IS: > 1.20"] && PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false ||
                                PREVIOUS_FLEW_AWAY_SUMMARY["MULTIPLE_IS: > 1.20"]===false && PREVIOUS_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE 
                            )
                            &&//both previous and current
                            (
                                ( CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: > 1.20"]===false && CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false ) ||
                                ( CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: > 1.20"] && CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE===false ) ||
                                ( CURRENT_FLEW_AWAY_SUMMARY["MULTIPLE_IS: > 1.20"]===false && CURRENT_FLEW_AWAY_SUMMARY.COLOR_IS_BLUE )
                            ),
                            previousFlewAway.stats["number_of_spaces_since: BLUE > 1.20"]
                        ),

            }
        }
    }


    // Get Bet Signal for neext bloc using this block
    getBetSignal(){
        const BET_STRATEGY_OBJECT = {
            "BLUE < 1.20": "Bet next as 1.20x",
            "BLUE > 1.20": "Don't Bet",
            "PURPLE": "Bet next rounds till u get 2.50x or 3.00x",
            "PINK": "Don't Bet"
        };
        // const summary = this.summary();
        const bet_strategy_key = `${this.#color} ${this.#multiple_segment}`.trim();
        const BASIC_SIGNAL = BET_STRATEGY_OBJECT[bet_strategy_key];
        
        // Adjust to learned data
        let signal = BASIC_SIGNAL;
        const stats = this.#stats;
        //1. If number of consecutive: BLUE < 1.20 >=2  Dont bet because it might be a losing streak of low x
        if(stats["number_of_consecutive: BLUE < 1.20"]>=2) signal = "Don't Bet";
        //2. If number of consecuive color purtle >=2  Dont bet because next might be very low x
        if(stats.number_of_consecutive_color_purple>=2) signal = "Don't Bet";
        //3. If number of spaces since: BLUE < 1.20 >=5 and this.#color === PURPLE bet forr smaller x
        if(stats.number_of_spaces_since_color_pink>=10) signal += " but Pink is close Bet 2.0x/ 1.20";
        if(stats["number_of_spaces_since: BLUE < 1.20"]>=5 && this.#color==="PURPLE") signal = "Bet next as 1.20x";
        if(signal=="Don't Bet" && stats["number_of_spaces_since: BLUE > 1.20"]>=5) signal = "Bet next as 1.50x"
        return signal;
    }

    /**
     * @return {AviatorFlewAwayColor_Type}  
     */
    get color(){
        return this.#color;
    }
    /**
     * @return {number} 
     */
    get multiple(){
        return this.#multiple;
    }
    /**
     * @return {MultipleSegments_Type} 
     */
    get multiple_segment(){
        return this.#multiple_segment;
    }

    /**
     * @return {UID_Type} 
     */
    get id(){
        // console.log("Getting ID: "+this.#id)
        return this.#id;
    }
    /**
     * @return {UID_Type} 
     */
    get previousId(){
        return this.#previousId;
    }

    get stats(){
        return this.#stats;
    }


}

class HistoryRecord {
    /**
     * @type {Map<string,FlewAway>}
     */
    #record = new Map();
    #previousBlockId = "0";//Genesis Block Id;
    #isLearning = false;
    #onRecordingStartedListeners = []
    constructor(){
        console.log("HistoryRecord initialized");
    }

    startLearning(){
        this.#isLearning = true;
        console.log("startLearning");
    }
    stopLearning(){
        this.#isLearning = false;
        console.log("stopLearning");
    }

    clear(){
        this.#record.clear();
    }

    get isLearning (){
        return this.#isLearning;
    }
    // event
    onStartRecording(cb){
        this.#onRecordingStartedListeners.push(cb);
    }
    /**
     * @param {FlewAway} flewAway
     */
    addFlewAway(flewAway){
        
        
        //get thee previous flewAway
        const previousFlewAway = this.#record.get(this.#previousBlockId) || new FlewAway({
            color:"",
            multiple_segment:"",
            multiple:-1,
            previousId:"-1"
        });// if not previousBlock create  an empty block to use
        // console.log("blockID:",flewAway.id)
        // console.log("previousFlewAway: ",previousFlewAway);
        // link stats
        flewAway.attachPreviousFlewAwayStats(previousFlewAway);

        this.#record.set(flewAway.id,flewAway);
        this.#previousBlockId = flewAway.id;
        
        console.log(`this.#previousBlockId (set to) ${this.#previousBlockId}`)

        if(this.#record.size==1){
            
            this.#onRecordingStartedListeners.forEach((cb) => cb())
        }
    }

    get previousBlockId(){
        return this.#previousBlockId;
    }

    get previousBlock(){
        return this.#record.get(this.#previousBlockId);
        
    }
    
}

const historyRecord = new HistoryRecord();
// historyRecord.addFlewAway(new FlewAway({
//     color:"BLUE",
//     multiple: 1.0,
//     previousId:historyRecord.previousBlockId,
//     multiple_segment:"< 1.20"
// }));
// historyRecord.addFlewAway(new FlewAway({
//     color:"BLUE",
//     multiple: 1.0,
//     previousId:historyRecord.previousBlockId,
//     multiple_segment: "< 1.20"
// }));
// historyRecord.addFlewAway(new FlewAway({
//     color:"PINK",
//     multiple: 1.0,
//     previousId:historyRecord.previousBlockId,
//     multiple_segment:"< 1.20"
// }));
// console.log({"historyRecord.previousBlockId":historyRecord.previousBlockId})
// console.log({"historyRecord.stats":historyRecord.previousBlock.stats})

