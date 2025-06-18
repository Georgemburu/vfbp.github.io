<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VFBPredictor - Strategy Board</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts - Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* Base Body Styles (consistent with other dashboards) */
        body {
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            padding-bottom: 90px; /* Space for fixed bottom nav */
            margin: 0;
            min-height: 100vh;
            background: linear-gradient(135deg, #e0e7ff, #f3e8ff); /* Light gradient background */
        }
        html[data-theme='dark'] body {
            background: linear-gradient(135deg, #1f2937, #111827); /* Dark gradient background */
            color: #e5e7eb; /* Lighter text for overall body */
        }

        /* Main Content Wrapper (consistent with other dashboards) */
        .main-content {
            width: 100%;
            max-width: 768px; /* Adjusted max-width for the strategy board's content */
            background: white;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            padding: 32px 24px;
            margin-bottom: 20px;
            flex-grow: 1;
            border: 1px solid #e0e7ff; /* Subtle border for light mode */
        }
        html[data-theme='dark'] .main-content {
            background: #1f2937;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            border: 1px solid #374151; /* Darker border for dark mode */
        }

        /* Header Styling (consistent with other dashboards) */
        .page-header {
            text-align: center;
            margin-bottom: 24px;
            position: relative;
        }
        .page-header h1 {
            font-size: 2.5rem; /* Consistent large heading */
            color: #6a5acd; /* Consistent color */
            margin-bottom: 12px;
            font-weight: 900;
            letter-spacing: -0.025em;
        }
        html[data-theme='dark'] .page-header h1 {
            color: #a78bfa;
        }
        .page-header p {
            font-size: 1.1rem; /* Consistent paragraph size */
            color: #4b5563;
            margin-bottom: 25px;
            line-height: 1.6;
        }
        html[data-theme='dark'] .page-header p {
            color: #d1d5db;
        }

        /* Theme Toggle specific styles (consistent with other dashboards) */
        #themeToggle {
            background-color: #e5e7eb; /* Tailwind gray-200 */
            border-radius: 9999px; /* Full rounded */
            padding: 8px;
            transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1); /* Subtle shadow */
            width: 40px; /* Explicit width */
            height: 40px; /* Explicit height */
            display: flex; /* Use flex to center SVG */
            align-items: center; /* Center SVG vertically */
            justify-content: center; /* Center SVG horizontally */
            position: absolute; /* Position it relative to parent .page-header */
            top: 0;
            right: 0;
        }
        #themeToggle:hover {
            background-color: #d1d5db; /* Tailwind gray-300 */
            transform: scale(1.1);
        }
        html[data-theme='dark'] #themeToggle {
            background-color: #374151; /* Tailwind gray-700 */
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }
        html[data-theme='dark'] #themeToggle:hover {
            background-color: #4b5563; /* Tailwind gray-600 */
        }
        #themeToggle svg {
            color: #4b5563; /* Tailwind gray-700 */
            transition: color 0.2s ease-in-out;
        }
        html[data-theme='dark'] #themeToggle svg {
            color: #d1d5db; /* Tailwind gray-300 */
        }

        /* Bottom Navigation Styling (consistent across apps) */
        .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #ffffff;
            padding: 10px 0;
            box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            z-index: 1000;
        }
        html[data-theme='dark'] .bottom-nav {
            background-color: #333333;
            box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.3);
        }
        .bottom-nav a {
            flex: 1;
            text-align: center;
            padding: 8px 0;
            color: #6b7280;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.3s ease;
            border-radius: 8px;
            margin: 0 5px;
        }
        html[data-theme='dark'] .bottom-nav a {
            color: #cccccc;
        }
        .bottom-nav a:hover {
            background-color: #e0e7ff;
            color: #4f46e5;
        }
        html[data-theme='dark'] .bottom-nav a:hover {
            background-color: #444444;
            color: #a78bfa;
        }
        .bottom-nav a.active {
            background-color: #6366f1;
            color: white;
            box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
        }
        html[data-theme='dark'] .bottom-nav a.active {
            background-color: #4f46e5;
            color: white;
            box-shadow: 0 2px 8px rgba(79, 70, 229, 0.4);
        }
    </style>
</head>
<body class="antialiased">
    <div class="main-content">
        <header class="page-header">
            <h1 class="text-4xl font-extrabold text-indigo-700 mb-1 dark:text-indigo-300">
                VFBPredictor - Strategy Board
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-400">
                Insights for Virtual Football Betting
            </p>
            <!-- Theme Toggle Button -->
            <button id="themeToggle">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path id="themeIconPath" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h1M4 12H3m15.325 5.924l-.707.707M6.382 6.382l-.707-.707M18.325 6.382l.707-.707M6.382 18.325l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </button> 
        </header>

        <strategy-board-app></strategy-board-app>
    </div>

    <!-- Bottom Navigation -->
    <div class="bottom-nav">
        <a href="./index.html" id="homeNav">Home</a>
        <a href="./betpawa.html" class="active" id="betpawaNav">Betpawa</a>
        <a href="./aviator.html" id="aviatorNav">Aviator</a>
        <a href="./forex.html" id="forexNav">Forex</a>
    </div>

    <script>
        // Placeholder for store.js, as no implementation was provided in the context
        window.store = {
            appStore: {
                listenForTableDataEventsDispatch: function(tableId, callback) {
                    console.log(`[Store] Listening for table data events on ${tableId}`);
                    // In a real app, this would set up a listener. For this demo, it's a no-op.
                }
            }
        };

        // Placeholder for loader_component, as no implementation was provided in the context
        class LoaderComponent extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
                this.shadowRoot.innerHTML = `
                    <style>
                        :host { display: block; text-align: center; padding: 20px; font-style: italic; color: #666; }
                        html[data-theme='dark'] :host { color: #aaa; } /* Dark mode for loader */
                    </style>
                    <p>Loading...</p>
                `;
            }
        }
        customElements.define('loader-component', LoaderComponent);

        // --- Start of utils.js content ---
        // This content is taken from your previously provided utils.js
        //@ts-check
        const SERVER_DOMAIN = "http://78.159.114.104:3008";
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
                }
            }
        }

        /**
         * @param {string} url 
         * @param {{method:"GET"|"POST",body:string}?} param1
         * @returns 
         */
        async function performJSONFetch(url,param1){
            let respClone;
            try{
                const headers = new Headers();
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
                console.error(`[performJSONFetch] Error fetching from ${url}:`, error, {responseText});
                throw error;
            }
        }

        /**
         * @param {string} url
         */
        async function fetchTemplateHTML(url) {
            const headers = new Headers();
            headers.append("Access-Control-Allow-Origin","*");
            
            const response = await fetch(url,{
                headers:headers,
            });
           
            /** @type {string} */
            const resp = await response.text();
            return resp;
        } 
            
        async function fetchBetpawaUpcomingMatches_Standings_JSON(){
            const API_VERSION_NAME = "1.1.1.3"
            try {
                /** @type {any} */
                const respJson = await performJSONFetch(`${SERVER_DOMAIN}/api/v${API_VERSION_NAME}/betpawa/upcoming-matches/standings/`,{
                    method:"POST",
                    body: JSON.stringify({
                        ACTIVATION_CODE: ACTIVATION_CODES.BETPAWA.ONE_X_TWO_ODDS_PREDICTOR.SUPPORTERS,
                        ACTIVATION_CODE_TYPE: "SUPPORTER",
                        APP_VERSION_NAME:API_VERSION_NAME, 
                    })
                });
                console.log("[API] Standings Response:", respJson);
                return respJson; 
            } catch (error) {
                console.error("[API Error] fetchBetpawaUpcomingMatches_Standings_JSON failed:", error);
                // Return a structured error object so the calling component can handle it gracefully
                return { success: false, message: "Failed to fetch standings data due to network or server issue." };
            }
        }
        async function fetchBetpawa1X20Predictor_PredictionsJSON(){
            const API_VERSION_NAME = "1.1.1.3"
            try {
                /** @type {any} */
                const respJson = await performJSONFetch(`${SERVER_DOMAIN}/api/v${API_VERSION_NAME}/betpawa/get-1x2oddspredictor-predictions/`,{
                    method:"POST",
                    body: JSON.stringify({
                        ACTIVATION_CODE: ACTIVATION_CODES.BETPAWA.ONE_X_TWO_ODDS_PREDICTOR.SUPPORTERS,
                        ACTIVATION_CODE_TYPE: "SUPPORTER",
                        APP_VERSION_NAME:API_VERSION_NAME, 
                    }) 
                });
                console.log("[API] 1X20 Predictions Response:", respJson);
                return respJson; 
            } catch (error) {
                console.error("[API Error] fetchBetpawa1X20Predictor_PredictionsJSON failed:", error);
                return { success: false, message: "Failed to fetch 1X20 predictions" };
            }
        } 
        async function fetchBetpawa1X20Predictor_AccuraciesJSON(){
            const API_VERSION_NAME = "1.1.1.3"
            try {
                /** @type {any} */
                const respJson = await performJSONFetch(`${SERVER_DOMAIN}/PREDICTOR_1X20_accuracies`,{
                    method:"GET"
                }); 
                console.log("[API] 1X20 Accuracies Response:", respJson);
                return respJson; 
            } catch (error) {
                console.error("[API Error] fetchBetpawa1X20Predictor_AccuraciesJSON failed:", error);
                return { success: false, message: "Failed to fetch 1X20 accuracies" };
            }
        }

        async function fetchBetpawaPrice1X2Predictor_PredictionsJSON(){
            const API_VERSION_NAME = "1.1.1.2"
            try {
                /** @type {any} */
                const respJson = await performJSONFetch(`${SERVER_DOMAIN}:3008/api/v${API_VERSION_NAME}/betpawa/get-price1x2-predictions/`,{
                    method:"POST",
                    body: JSON.stringify({
                        ACTIVATION_CODE: ACTIVATION_CODES.BETPAWA.PRICE_1X2_PREDICTOR.SUPPORTERS,
                        ACTIVATION_CODE_TYPE: "SUPPORTER",
                        APP_VERSION_NAME:API_VERSION_NAME, 
                    })
                });
                console.log("[API] Price1X2 Predictions Response:", respJson);
                return respJson;
            } catch (error) {
                console.error("[API Error] fetchBetpawaPrice1X2Predictor_PredictionsJSON failed:", error);
                return { success: false, message: "Failed to fetch Price1X2 predictions" };
            }
        }
        async function fetchBetpawaPODPredictor_PredictionsJSON(){
            const API_VERSION_NAME = "1.1.1.2"
            try {
                /** @type {any} */
                const respJson = await performJSONFetch(`${SERVER_DOMAIN}/api/v${API_VERSION_NAME}/betpawa/get-pod-predictions/`,{
                    method:"POST",
                    body: JSON.stringify({
                        ACTIVATION_CODE: ACTIVATION_CODES.BETPAWA.POD_PREDICTOR.SUPPORTERS,
                        ACTIVATION_CODE_TYPE: "SUPPORTER",
                        APP_VERSION_NAME:API_VERSION_NAME, 
                    })
                });
                console.log("[API] POD Predictions Response:", respJson);
                return respJson;
            } catch (error) {
                console.error("[API Error] fetchBetpawaPODPredictor_PredictionsJSON failed:", error);
                return { success: false, message: "Failed to fetch POD predictions" };
            }
        }

        /** @typedef {{ performJSONFetch: typeof performJSONFetch, fetchTemplateHTML: typeof fetchTemplateHTML, fetchBetpawa1X20Predictor_PredictionsJSON: typeof fetchBetpawa1X20Predictor_PredictionsJSON, fetchBetpawaPrice1X2Predictor_PredictionsJSON: typeof fetchBetpawaPrice1X2Predictor_PredictionsJSON, fetchBetpawaPODPredictor_PredictionsJSON: typeof fetchBetpawaPODPredictor_PredictionsJSON, fetchBetpawaUpcomingMatches_Standings_JSON: typeof fetchBetpawaUpcomingMatches_Standings_JSON, fetchBetpawa1X20Predictor_AccuraciesJSON: typeof fetchBetpawa1X20Predictor_AccuraciesJSON }} WindowWithUtils */

        /** @type {Window & WindowWithUtils} */
        const utils = window;
        // --- End of utils.js content ---

        // Helper function for populating whatsNextProb tables (common to both strategy boards)
        /**
         * Populates a whatsNextProb table.
         * @param {object} whatsNextProbabilityObject - The object containing whatsNext probabilities.
         * @param {string} keyToFilterBy - The key (e.g., "0_l") to filter the probabilities by.
         * @param {HTMLTableElement} tableElement - The table element to populate.
         */
        function populateWhatsNextProbsOnPage(whatsNextProbabilityObject, keyToFilterBy, tableElement) {
            // Remove existing dynamic rows
            const existingRows = tableElement.querySelectorAll(".whatsNextProb_InputDisplays");
            existingRows.forEach(row => row.remove());

            let whatsNextProb_trList = ``;
            const probabilitiesForGivenKey = whatsNextProbabilityObject?.[keyToFilterBy]; // Added optional chaining
            if (probabilitiesForGivenKey) {
                // Calculate the sum of probabilities for normalization
                let total = 0;
                for (const nextKey in probabilitiesForGivenKey) {
                    total += probabilitiesForGivenKey[nextKey];
                }

                // Normalize probabilities if the total is not 0 or 1 (floating point comparison)
                if (total > 0 && Math.abs(total - 1) > 0.000001) { // Check if total is significantly different from 1
                    for (const nextKey in probabilitiesForGivenKey) {
                        probabilitiesForGivenKey[nextKey] = probabilitiesForGivenKey[nextKey] / total;
                    }
                }

                for (const nextKey in probabilitiesForGivenKey) {
                    const trHTML = `
                        <tr class="whatsNextProb_InputDisplays">
                            <td class="dark:text-gray-300 px-6 py-4 whitespace-nowrap text-sm">${keyToFilterBy} &rarr; ${nextKey}</td>
                            <td class="dark:text-gray-300 px-6 py-4 whitespace-nowrap text-sm">${(probabilitiesForGivenKey[nextKey] * 100).toFixed(2)}%</td>
                        </tr>
                    `;
                    whatsNextProb_trList += trHTML;
                }
            } else {
                whatsNextProb_trList = `
                    <tr class="whatsNextProb_InputDisplays">
                        <td colspan="2" class="text-red-500 dark:text-red-400 text-center py-2">No data for this key.</td>
                    </tr>
                `;
            }

            if (tableElement) {
                // Ensure there's a tbody, or add it if missing
                let tbody = tableElement.querySelector('tbody');
                if (!tbody) {
                    tbody = document.createElement('tbody');
                    tableElement.appendChild(tbody);
                }
                // Clear existing content in tbody before adding new rows
                tbody.innerHTML = '';
                tbody.insertAdjacentHTML('beforeend', whatsNextProb_trList);
            } else {
                console.error("Table element not found for whatsNextProb.");
            }
        }


        /**
         * @typedef {{
         * conceded: number,
        * drew: number,
        * form:"W"|"L"|"D"[],
        * lost: number,
        * played: number,
        * points: number,
        * position: number,
        * scored: number,
        * teamId: number,
        * won: number
         * }}  Standings_Interface
         *
         * @typedef {{
        * [leagueName:string]:{
        * [teamName:string]:Standings_Interface
        * }
        * }} LeagueNameToTeamIdToStandings_Object_Interface
        */

        // Define the main custom element that encapsulates the provided HTML
        class StrategyBoardApp extends HTMLElement {
            constructor() {
                super();
                this.TABLE_ID = "StrategyBoardApp_Predictions"; // Define a unique ID for this component
                this.attachShadow({ mode: 'open' }); // Attach a shadow DOM

                // The HTML provided by the user for the strategy board
                const userProvidedHtmlTemplate = `
                    <section class="strategy_board_component">
                        <style>
                            /* Styles for the shadow DOM, adapted for light/dark theme and Tailwind */
                            :host {
                                display: block;
                                font-family: 'Inter', sans-serif;
                                color: #374151; /* Default text color */
                            }
                            html[data-theme='dark'] :host {
                                color: #e5e7eb; /* Dark mode text color */
                            }

                            .menubar {
                                height: 50px;
                                display: flex;
                                flex: 1;
                                background-color: #444444; /* Fallback for menubar */
                                align-items: center;
                                z-index: 1;
                                border-top-left-radius: 8px; /* Rounded corners */
                                border-top-right-radius: 8px;
                            }
                            html[data-theme='light'] .menubar {
                                background-color: #444444; /* Light mode menubar color */
                            }
                            html[data-theme='dark'] .menubar {
                                background-color: #1f2937; /* Dark mode menubar color */
                            }

                            .titleDiv {
                                color: white;
                                padding: 0px 2em;
                                font-weight: 600;
                            }

                            /* Base table styling for responsiveness */
                            table {
                                margin: 20px auto;
                                border-collapse: collapse;
                                width: 100%; /* Make tables full width within their containers */
                                border-radius: 8px; /* Rounded corners for tables */
                                overflow: hidden; /* Ensures rounded corners are applied */
                                /* Combined text properties for base table */
                                font-size: 0.875rem; /* text-sm */
                                text-align: left;
                                color: #6b7280; /* text-gray-500 */
                            }
                            html[data-theme='dark'] table {
                                color: #d1d5db; /* Dark mode table text */
                            }
                            
                            /* Table header and cell styling */
                            th, td {
                                border: 1px solid #ddd; /* Light mode border */
                                padding: 12px 16px; /* Increased padding px-4 py-3 */
                                text-align: left;
                                /* Removed white-space: nowrap; from here */
                            }
                            html[data-theme='dark'] th, html[data-theme='dark'] td {
                                border-color: #4b5563; /* Dark mode border */
                            }
                            
                            th {
                                background-color: #f2f2f2; /* Light mode header bg */
                                color: #374151; /* text-gray-700 */
                                text-transform: uppercase;
                                font-weight: 600; /* font-semibold */
                                font-size: 0.75rem; /* text-xs */
                                letter-spacing: 0.05em; /* tracking-wider */
                            }
                            html[data-theme='dark'] th {
                                background-color: #374151; /* Dark mode header bg */
                                color: #e5e7eb; /* Dark mode header text */
                            }

                            .match-predictions, .match-predictions_1X2 {
                                border: 1px solid #ccc; /* Light mode border */
                                padding: 20px; /* Increased padding */
                                margin-bottom: 20px;
                                border-radius: 12px; /* Consistent rounded corners */
                                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); /* Subtle shadow */
                                background-color: #ffffff; /* Light mode bg */
                            }
                            html[data-theme='dark'] .match-predictions, html[data-theme='dark'] .match-predictions_1X2 {
                                background-color: #2d3748; /* Dark mode bg */
                                border-color: #4b5563; /* Dark mode border */
                                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                            }
                            
                            /* Table body general styling */
                            table tbody tr {
                                background-color: #ffffff; /* Default for light mode rows */
                            }
                            html[data-theme='dark'] table tbody tr {
                                background-color: #2d3748; /* Dark mode base for all rows (matching container) */
                            }
                            /* Zebra stripping for light mode */
                            table tbody tr:nth-child(even) {
                                background-color: #f9fafb; /* Lighter background for even rows in light mode */
                            }
                            /* Zebra stripping for dark mode */
                            html[data-theme='dark'] table tbody tr:nth-child(even) {
                                background-color: #1f2937; /* Even darker shade for even rows in dark mode */
                            }


                            .team-title p {
                                font-weight: bold;
                                margin-bottom: 10px;
                                font-size: 1.5rem; /* text-2xl for more prominence */
                                text-align: center;
                                color: #1f2937; /* text-gray-900 */
                                font-weight: 700; /* font-bold */
                            }
                            html[data-theme='dark'] .team-title p {
                                color: #a78bfa; /* Dark mode team title */
                            }

                            input[type="text"] {
                                width: 90%; /* Keep width for input */
                                padding: 10px; /* Increased padding */
                                margin-bottom: 10px;
                                border: 1px solid #ccc;
                                border-radius: 8px; /* More rounded */
                                text-align: center;
                                background-color: #f9fafb; /* Light input background */
                                color: #374151;
                            }
                            html[data-theme='dark'] input[type="text"] {
                                background-color: #1f2937; /* Dark input background */
                                border-color: #4b5563;
                                color: #e5e7eb;
                            }

                            .league-title p {
                                font-size: 1.125rem; /* text-lg */
                                font-weight: 600; /* font-semibold */
                                margin-bottom: 12px; /* mb-3 to mb-4 for consistency */
                                color: #4b5563; /* text-gray-700 */
                                text-align: center;
                            }
                            html[data-theme='dark'] .league-title p {
                                color: #cbd5e1; /* Dark mode league title */
                            }

                            .badge {
                                display: inline-flex;
                                align-items: center;
                                justify-content: center;
                                padding: 4px 8px; /* px-2 py-1 for slightly larger badges */
                                border-radius: 9999px; /* rounded-full */
                                font-size: 0.75rem; /* text-xs */
                                font-weight: 500; /* font-medium */
                                margin-right: 6px; /* Increased space between badges */
                                margin-bottom: 6px; /* Increased space for wraps */
                            }
                            /* Tailwind for specific badge types */
                            .type-win { background-color: #d1fae5; color: #065f46; } /* Green-100, Green-800 */
                            .type-loss { background-color: #fee2e2; color: #991b1b; } /* Red-100, Red-800 */
                            .type-draw { background-color: #fffde7; color: #92400e; } /* Yellow-100, Yellow-800 */
                            .type-pending-dark { background-color: #4b5563; color: #f9fafb; } /* Gray-600, White */

                            html[data-theme='dark'] .type-win { background-color: #065f46; color: #a7f3d0; } /* Darker green, lighter text */
                            html[data-theme='dark'] .type-loss { background-color: #991b1b; color: #fca5a5; } /* Darker red, lighter text */
                            html[data-theme='dark'] .type-draw { background-color: #92400e; color: #fde68a; } /* Darker yellow, lighter text */
                            html[data-theme='dark'] .type-pending-dark { background-color: #1f2937; color: #9ca3af; } /* Even darker gray for pending in dark mode */

                            /* Styles for nested tables within the strategy board to handle responsiveness */
                            .nested-table-wrapper {
                                overflow-x: auto; /* Allows horizontal scrolling within this specific cell */
                                width: 100%; /* Ensures it takes full width of its parent td */
                                /* To remove border from parent td, if it wraps around the overflow-x-auto div */
                            }
                            .parent-td-no-padding {
                                padding: 0; /* Remove default padding for TDs containing these wrappers */
                            }

                            /* Smaller padding for cells within the nested tables for compactness */
                            .nested-table-wrapper table th,
                            .nested-table-wrapper table td {
                                padding: 6px 8px; /* Reduced padding */
                                font-size: 0.75rem; /* text-xs */
                            }

                            /* Responsive Table Styles (Card-like layout) */
                            @media screen and (max-width: 640px) { /* Tailwind's sm breakpoint is 640px */
                                .match-predictions table,
                                .match-predictions_1X2 table {
                                    border: 0;
                                }

                                .match-predictions thead,
                                .match-predictions_1X2 thead {
                                    display: none; /* Hide table headers on small screens */
                                }

                                .match-predictions tr,
                                .match-predictions_1X2 tr {
                                    display: block; /* Make rows behave like blocks */
                                    margin-bottom: 0.625em; /* Add space between "cards" */
                                    border: 1px solid #ddd; /* Add border to each "card" */
                                    border-radius: 8px;
                                    overflow: hidden;
                                }
                                html[data-theme='dark'] .match-predictions tr,
                                html[data-theme='dark'] .match-predictions_1X2 tr {
                                    border-color: #4b5563;
                                }

                                .match-predictions tr:nth-child(even),
                                .match-predictions_1X2 tr:nth-child(even) {
                                    background-color: #f9fafb; /* Lighter background for even rows */
                                }
                                html[data-theme='dark'] .match-predictions tr:nth-child(even),
                                html[data-theme='dark'] .match-predictions_1X2 tr:nth-child(even) {
                                    background-color: #2d3748; /* Darker background for even rows in dark mode */
                                }
                                
                                .match-predictions td,
                                .match-predictions_1X2 td {
                                    border-bottom: 1px solid #ddd; /* Add border between "cells" */
                                    display: flex; /* Use flexbox for label and content */
                                    align-items: center; /* Vertically align content */
                                    justify-content: space-between; /* Space out label and content */
                                    padding: 0.625em 1em; /* Adjust padding for stacked cells */
                                    font-size: 0.8em; /* Smaller font size for stacked cells */
                                    text-align: right; /* Align content to the right */
                                    white-space: normal; /* Allow text wrapping within cells */
                                }
                                html[data-theme='dark'] .match-predictions td,
                                html[data-theme='dark'] .match-predictions_1X2 td {
                                    border-color: #4b5563;
                                }

                                .match-predictions td::before,
                                .match-predictions_1X2 td::before {
                                    /* Use the data-label attribute to display the header text */
                                    content: attr(data-label);
                                    font-weight: bold;
                                    text-transform: uppercase;
                                    margin-right: 0.5em; /* Space between label and content */
                                    text-align: left; /* Align label to the left */
                                    flex-shrink: 0; /* Prevent label from shrinking */
                                    color: #4b5563; /* Darker grey for labels */
                                }
                                html[data-theme='dark'] .match-predictions td::before,
                                html[data-theme='dark'] .match-predictions_1X2 td::before {
                                    color: #cbd5e1; /* Lighter grey for labels in dark mode */
                                }

                                /* Specific adjustments for cells that span rows in desktop view */
                                .match-predictions td[rowspan="2"],
                                .match-predictions_1X2 td[rowspan="3"] {
                                    display: block; /* Ensure it behaves as a block in stacked view */
                                    text-align: center; /* Center the category text */
                                    font-weight: bold;
                                    border-bottom: 1px solid #ddd;
                                    padding: 10px; /* Adjust padding */
                                }
                                html[data-theme='dark'] .match-predictions td[rowspan="2"],
                                html[data-theme='dark'] .match-predictions_1X2 td[rowspan="3"] {
                                    border-color: #4b5563;
                                }

                                /* Hide the ::before for rowspan cells as their content is the label itself */
                                .match-predictions td[rowspan="2"]::before,
                                .match-predictions_1X2 td[rowspan="3"]::before {
                                    content: none;
                                }

                                /* Adjustments for accuracyPattern div inside a td */
                                .match-predictions td .flex.flex-wrap.gap-1,
                                .match-predictions_1X2 td .flex.flex-wrap.gap-1 {
                                    justify-content: flex-end; /* Align badges to the right */
                                    width: auto; /* Allow content to dictate width */
                                    flex-grow: 1; /* Allow badges to take available space */
                                }

                                /* Ensure nested tables within the card-like layout still scroll horizontally */
                                .nested-table-wrapper {
                                    overflow-x: auto;
                                    width: 100%;
                                    border-radius: 8px; /* Maintain rounded corners */
                                    margin-top: 5px; /* Add a small margin */
                                    box-shadow: none; /* Remove extra shadow */
                                    border: 1px solid #eee; /* Light border for nested table in card view */
                                }
                                html[data-theme='dark'] .nested-table-wrapper {
                                    border-color: #4b5563;
                                }
                                /* Adjust input field within table cell */
                                .parent-td-no-padding input[type="text"] {
                                    margin-bottom: 5px; /* Reduce margin */
                                    width: 100%; /* Ensure it takes full width */
                                    text-align: left; /* Align text left */
                                    padding-left: 8px; /* Add padding to the left */
                                }
                                .parent-td-no-padding {
                                    flex-direction: column; /* Stack input and table within this td */
                                    align-items: flex-start; /* Align contents to start */
                                }
                                .parent-td-no-padding::before {
                                    margin-bottom: 5px; /* Space between label and input */
                                }
                            }
                        </style>
                        <section class="menubar">
                            <div class="titleDiv">
                                <p>Virtual Football Strategy Board</p>
                            </div>
                        </section>
                        <div class="predictions-bar p-4">
                            <!-- Existing content starts here -->
                            <div>
                                <h2 class="text-xl font-semibold text-gray-800 border-l-4 border-indigo-500 pl-3 mb-4 mt-6
                                           dark:text-gray-200 dark:border-indigo-400">
                                    (Predictor_1X20)BTTS_EnglishLeague_RowIndex0_winsRecord
                                </h2>
                            </div>
                            <div class="league-section">
                                <div class="league-title">
                                    <p class="text-lg font-semibold mb-3 text-gray-700 text-center
                                              dark:text-gray-300">English League</p>
                                </div>
                                <div class="match-predictions">
                                    <div class="team-title">
                                        <p id="teamTitle_0" class="text-xl font-bold mb-4 text-center text-gray-900
                                                                   dark:text-indigo-300">Loading...</p>
                                    </div> 
                                    <div class="overflow-x-auto rounded-lg shadow-sm"> <!-- Added for horizontal scrolling on small screens, rounded and shadow -->
                                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600"> <!-- Added min-w-full and divide-y -->
                                            <thead class="bg-gray-50 dark:bg-gray-700"> <!-- Added header styling -->
                                                <tr>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Category</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Prediction</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Percentage</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Win/Loss History</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-600"> <!-- Added body styling -->
                                                <tr>
                                                    <td rowspan="2" class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100" data-label="Category">BTTS</td> <!-- Increased px, py -->
                                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Prediction">Yes</td>
                                                    <td id="yesPercentage_0" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Percentage">-%</td>
                                                    <td rowspan="2" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Win/Loss History">
                                                        <div id="accuracyPattern_0" class="flex flex-wrap gap-1"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Prediction">No</td>
                                                    <td id="noPercentage_0" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Percentage">-%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> <!-- Closing overflow-x-auto div -->

                                    <div class="overflow-x-auto mt-4 rounded-lg shadow-sm"> <!-- Added for horizontal scrolling and margin-top, rounded and shadow -->
                                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                            <thead class="bg-gray-50 dark:bg-gray-700">
                                                <tr>
                                                    
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Previous_whatsNextProb</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Current_whatsNextProb</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-600">
                                                <tr>
                                                    
                                                    <td class="parent-td-no-padding" data-label="Previous_whatsNextProb"> <!-- Applied class for no padding -->
                                                        <input type="text" id="previousWhatsNextProb_Input_0" readonly class="w-full p-2 border border-gray-300 rounded-md text-center mb-2 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"/>
                                                        <div class="nested-table-wrapper">
                                                            <table id="predictorStrategyAccuracyTable_previousWhatsNextProb_0" class="min-w-full">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">From &rarr; To</th>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">Probability</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody></tbody> <!-- Keep empty tbody for JS to fill -->
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td class="parent-td-no-padding" data-label="Current_whatsNextProb"> <!-- Applied class for no padding -->
                                                        <input type="text" id="currentWhatsNextProb_Input_0" readonly class="w-full p-2 border border-gray-300 rounded-md text-center mb-2 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"/>
                                                        <div class="nested-table-wrapper">
                                                            <table id="predictorStrategyAccuracyTable_currentWhatsNextProb_0" class="min-w-full">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">From &rarr; To</th>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">Probability</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody></tbody> <!-- Keep empty tbody for JS to fill -->
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> <!-- Closing overflow-x-auto div -->
                                </div>
                            </div>
                            
                            <div>
                                <h2 class="text-xl font-semibold text-gray-800 border-l-4 border-indigo-500 pl-3 mb-4 mt-6
                                           dark:text-gray-200 dark:border-indigo-400">
                                    (Predictor_1X20)1X2_EnglishLeague_RowIndex0_winsRecord
                                </h2>
                            </div>
                            <div class="league-section">
                                <div class="league-title">
                                    <p class="text-lg font-semibold mb-3 text-gray-700 text-center
                                              dark:text-gray-300">English League</p>
                                </div>
                                <div class="match-predictions_1X2">
                                    <div class="team-title">
                                        <p id="teamTitle_1X2_0" class="text-xl font-bold mb-4 text-center text-gray-900
                                                                   dark:text-indigo-300">Loading...</p>
                                    </div> 
                                    <div class="overflow-x-auto rounded-lg shadow-sm"> <!-- Added for horizontal scrolling, rounded and shadow -->
                                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                            <thead class="bg-gray-50 dark:bg-gray-700">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Category</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Prediction</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Percentage</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Occurrence Counts</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-600">
                                                <tr>
                                                    <td rowspan="3" class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100" data-label="Category">1X2</td>
                                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Prediction">Home</td>
                                                    <td id="onePercentage_1X2_0" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Percentage">-%</td>
                                                    <td rowspan="3" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Occurrence Counts">
                                                        <div id="accuracyPattern_1X2_0" class="flex flex-wrap gap-1"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Prediction">Draw</td>
                                                    <td id="xPercentage_1X2_0" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Percentage">-%</td>
                                                </tr>
                                                <tr>
                                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Prediction">Away</td>
                                                    <td id="twoPercentage_1X2_0" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Percentage">-%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> <!-- Closing overflow-x-auto div -->

                                    <div class="overflow-x-auto mt-4 rounded-lg shadow-sm"> <!-- Added for horizontal scrolling and margin-top, rounded and shadow -->
                                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                            <thead class="bg-gray-50 dark:bg-gray-700">
                                                <tr>
                                                    
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Previous_whatsNextProb</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Current_whatsNextProb</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-600">
                                                <tr>
                                                    
                                                    <td class="parent-td-no-padding" data-label="Previous_whatsNextProb"> <!-- Applied class for no padding -->
                                                        <input type="text" id="previousWhatsNextProb_Input_1X2_0" readonly class="w-full p-2 border border-gray-300 rounded-md text-center mb-2 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"/>
                                                        <div class="nested-table-wrapper">
                                                            <table id="predictorStrategyAccuracyTable_previousWhatsNextProb_1X2_0" class="min-w-full">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">From &rarr; To</th>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">Probability</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody></tbody> <!-- Keep empty tbody for JS to fill -->
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td class="parent-td-no-padding" data-label="Current_whatsNextProb"> <!-- Applied class for no padding -->
                                                        <input type="text" id="currentWhatsNextProb_Input_1X2_0" readonly class="w-full p-2 border border-gray-300 rounded-md text-center mb-2 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"/>
                                                        <div class="nested-table-wrapper">
                                                            <table id="predictorStrategyAccuracyTable_currentWhatsNextProb_1X2_0" class="min-w-full">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">From &rarr; To</th>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">Probability</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody></tbody> <!-- Keep empty tbody for JS to fill -->
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> <!-- Closing overflow-x-auto div -->
                                </div>
                            </div>

                            <!-- START of Row Index 1 sections - duplicate and apply similar styles -->
                            <div>
                                <h2 class="text-xl font-semibold text-gray-800 border-l-4 border-indigo-500 pl-3 mb-4 mt-6
                                           dark:text-gray-200 dark:border-indigo-400">
                                    (Predictor_1X20)BTTS_EnglishLeague_RowIndex1_winsRecord
                                </h2>
                            </div>
                            <div class="league-section">
                                <div class="league-title">
                                    <p class="text-lg font-semibold mb-3 text-gray-700 text-center
                                              dark:text-gray-300">English League</p>
                                </div>
                                <div class="match-predictions">
                                    <div class="team-title">
                                        <p id="teamTitle_1" class="text-xl font-bold mb-4 text-center text-gray-900
                                                                   dark:text-indigo-300">Loading...</p>
                                    </div> 
                                    <div class="overflow-x-auto rounded-lg shadow-sm"> <!-- Added for horizontal scrolling on small screens, rounded and shadow -->
                                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                            <thead class="bg-gray-50 dark:bg-gray-700">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Category</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Prediction</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Percentage</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Win/Loss History</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-600">
                                                <tr>
                                                    <td rowspan="2" class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100" data-label="Category">BTTS</td>
                                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Prediction">Yes</td>
                                                    <td id="yesPercentage_1" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Percentage">-%</td>
                                                    <td rowspan="2" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Win/Loss History">
                                                        <div id="accuracyPattern_1" class="flex flex-wrap gap-1"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Prediction">No</td>
                                                    <td id="noPercentage_1" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Percentage">-%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> <!-- Closing overflow-x-auto div -->

                                    <div class="overflow-x-auto mt-4 rounded-lg shadow-sm"> <!-- Added for horizontal scrolling and margin-top, rounded and shadow -->
                                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                            <thead class="bg-gray-50 dark:bg-gray-700">
                                                <tr>
                                                    
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Previous_whatsNextProb</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Current_whatsNextProb</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-600">
                                                <tr>
                                                    
                                                    <td class="parent-td-no-padding" data-label="Previous_whatsNextProb"> <!-- Applied class for no padding -->
                                                        <input type="text" id="previousWhatsNextProb_Input_1" readonly class="w-full p-2 border border-gray-300 rounded-md text-center mb-2 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"/>
                                                        <div class="nested-table-wrapper">
                                                            <table id="predictorStrategyAccuracyTable_previousWhatsNextProb_1" class="min-w-full">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">From &rarr; To</th>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">Probability</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody></tbody> <!-- Keep empty tbody for JS to fill -->
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td class="parent-td-no-padding" data-label="Current_whatsNextProb"> <!-- Applied class for no padding -->
                                                        <input type="text" id="currentWhatsNextProb_Input_1" readonly class="w-full p-2 border border-gray-300 rounded-md text-center mb-2 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"/>
                                                        <div class="nested-table-wrapper">
                                                            <table id="predictorStrategyAccuracyTable_currentWhatsNextProb_1" class="min-w-full">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">From &rarr; To</th>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">Probability</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody></tbody> <!-- Keep empty tbody for JS to fill -->
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> <!-- Closing overflow-x-auto div -->
                                </div>
                            </div>
                            
                            <div>
                                <h2 class="text-xl font-semibold text-gray-800 border-l-4 border-indigo-500 pl-3 mb-4 mt-6
                                           dark:text-gray-200 dark:border-indigo-400">
                                    (Predictor_1X20)1X2_EnglishLeague_RowIndex1_winsRecord
                                </h2>
                            </div>
                            <div class="league-section">
                                <div class="league-title">
                                    <p class="text-lg font-semibold mb-3 text-gray-700 text-center
                                              dark:text-gray-300">English League</p>
                                </div>
                                <div class="match-predictions_1X2">
                                    <div class="team-title">
                                        <p id="teamTitle_1X2_1" class="text-xl font-bold mb-4 text-center text-gray-900
                                                                   dark:text-indigo-300">Loading...</p>
                                    </div> 
                                    <div class="overflow-x-auto rounded-lg shadow-sm"> <!-- Added for horizontal scrolling, rounded and shadow -->
                                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                            <thead class="bg-gray-50 dark:bg-gray-700">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Category</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Prediction</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Percentage</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Occurrence Counts</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-600">
                                                <tr>
                                                    <td rowspan="3" class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100" data-label="Category">1X2</td>
                                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Prediction">Home</td>
                                                    <td id="onePercentage_1X2_1" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Percentage">-%</td>
                                                    <td rowspan="3" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Occurrence Counts">
                                                        <div id="accuracyPattern_1X2_1" class="flex flex-wrap gap-1"></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Prediction">Draw</td>
                                                    <td id="xPercentage_1X2_1" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Percentage">-%</td>
                                                </tr>
                                                <tr>
                                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Prediction">Away</td>
                                                    <td id="twoPercentage_1X2_1" class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300" data-label="Percentage">-%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> <!-- Closing overflow-x-auto div -->

                                    <div class="overflow-x-auto mt-4 rounded-lg shadow-sm"> <!-- Added for horizontal scrolling and margin-top, rounded and shadow -->
                                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                            <thead class="bg-gray-50 dark:bg-gray-700">
                                                <tr>
                                                    
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Previous_whatsNextProb</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Current_whatsNextProb</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-600">
                                                <tr>
                                                    
                                                    <td class="parent-td-no-padding" data-label="Previous_whatsNextProb"> <!-- Applied class for no padding -->
                                                        <input type="text" id="previousWhatsNextProb_Input_1X2_1" readonly class="w-full p-2 border border-gray-300 rounded-md text-center mb-2 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"/>
                                                        <div class="nested-table-wrapper">
                                                            <table id="predictorStrategyAccuracyTable_previousWhatsNextProb_1X2_1" class="min-w-full">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">From &rarr; To</th>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">Probability</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody></tbody> <!-- Keep empty tbody for JS to fill -->
                                                            </table>
                                                        </div>
                                                    </td>
                                                    <td class="parent-td-no-padding" data-label="Current_whatsNextProb"> <!-- Applied class for no padding -->
                                                        <input type="text" id="currentWhatsNextProb_Input_1X2_1" readonly class="w-full p-2 border border-gray-300 rounded-md text-center mb-2 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"/>
                                                        <div class="nested-table-wrapper">
                                                            <table id="predictorStrategyAccuracyTable_currentWhatsNextProb_1X2_1" class="min-w-full">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">From &rarr; To</th>
                                                                        <th class="px-2 py-1 bg-gray-100 dark:bg-gray-600 dark:text-gray-200">Probability</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody></tbody> <!-- Keep empty tbody for JS to fill -->
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> <!-- Closing overflow-x-auto div -->
                                </div>
                            </div>
                            <!-- END of Row Index 1 sections -->

                        </div>
                    </section>
                `;

                this.shadowRoot.innerHTML = `<loader-component id="loaderComponent"></loader-component>`;
                const loader = this.shadowRoot.getElementById("loaderComponent");
                if (loader) loader.remove();
                
                const templateContent = document.createElement('div');
                templateContent.innerHTML = userProvidedHtmlTemplate;
                this.shadowRoot.appendChild(templateContent.cloneNode(true));

                // Call the data fetching and display methods
                this.listPredictions(0); // For RowIndex0 (BTTS)
                this.list1X2StrategyPredictions(0); // For RowIndex0 (1X2)
                this.listPredictions(1); // For RowIndex1 (BTTS)
                this.list1X2StrategyPredictions(1); // For RowIndex1 (1X2)
                
                // Assuming `store` is globally available as per previous conversations
                if (window.store && window.store.appStore) {
                    window.store.appStore.listenForTableDataEventsDispatch(this.TABLE_ID, (predictionData) => {
                        console.log(`[Store] Table data event dispatched for ${this.TABLE_ID}:`, predictionData);
                    });
                }

                // Add mutation observer to apply theme changes to shadow DOM
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (mutation.attributeName === 'data-theme') {
                            const newTheme = document.documentElement.getAttribute('data-theme');
                            this.applyThemeToShadowDOM(newTheme);
                        }
                    });
                });
                observer.observe(document.documentElement, { attributes: true });
                // Apply initial theme
                this.applyThemeToShadowDOM(document.documentElement.getAttribute('data-theme'));
            }

            /**
             * Applies the current theme to elements within the shadow DOM.
             * @param {string} theme - 'light' or 'dark'
             */
            applyThemeToShadowDOM(theme) {
                // This function is correctly structured to apply theme based on the root html[data-theme] attribute.
                // The CSS rules within the shadow DOM's <style> tag handle the dark mode adjustments directly
                // through rules like `html[data-theme='dark'] .some-element { ... }`.
                // So, no direct element manipulation is needed here beyond setting up the MutationObserver.
            }


            /**
             * @param {{home_team_name:string,away_team_name:string,league_name:string,game_round_name:string,season_number:number}} param0
             */
            #constructIdForTeamPredictionsSection({away_team_name,home_team_name,league_name,game_round_name,season_number}){
                return `${league_name.replace(/\s+/g, '_')}_${home_team_name.replace(/\s+/g, '_')}_${away_team_name.replace(/\s+/g, '_')}_${game_round_name.replace(/\s+/g, '_')}_${season_number}`;
            }

            /**
             * Fetches and lists BTTS predictions and strategy data for a given row index.
             * @param {number} rowIndex - The index of the match to display (0 for first, 1 for second, etc.).
             */
            async listPredictions(rowIndex){
                console.log(`[StrategyBoardApp] Fetching BTTS predictions for RowIndex${rowIndex}`);
                let errorMessage = "Error loading BTTS data: Failed to fetch predictions.";
                try {
                    const predictionsResp = await utils.fetchBetpawa1X20Predictor_PredictionsJSON();
                    if (!predictionsResp.success || !predictionsResp.data || !predictionsResp.data.leagues_and_match_predictions) {
                        errorMessage = predictionsResp.message || "Invalid prediction data structure.";
                        console.error(`[StrategyBoardApp Error] Failed to fetch 1X20 predictions for RowIndex${rowIndex}:`, errorMessage);
                        this.updateDisplayWithNoData(rowIndex, 'BTTS', errorMessage); // Updated call
                        return;
                    }

                    const match_1X20_Predictions = predictionsResp.data.leagues_and_match_predictions["English League"]?.[rowIndex];
                    if (!match_1X20_Predictions || !match_1X20_Predictions.english_league_predictions?.[0]?.BTTS) {
                        errorMessage = `No BTTS data found for English League at RowIndex${rowIndex}.`;
                        console.warn(`[StrategyBoardApp Warning] ${errorMessage}`);
                        this.updateDisplayWithNoData(rowIndex, 'BTTS', errorMessage); // Updated call
                        return;
                    }

                    const { away_team_name, home_team_name, english_league_predictions } = match_1X20_Predictions;
                    const { Yes, No } = english_league_predictions[0].BTTS;

                    let formattedYes = "-%";
                    let formattedNo = "-%";

                    const numYes = parseFloat(Yes);
                    if (!isNaN(numYes)) {
                        formattedYes = `${numYes}%`;
                    }

                    const numNo = parseFloat(No);
                    if (!isNaN(numNo)) {
                        formattedNo = `${numNo}%`;
                    }

                    // Append rowIndex to the IDs for uniqueness
                    const teamTitle = this.shadowRoot.querySelector(`#teamTitle_${rowIndex}`);
                    const yesPercentage = this.shadowRoot.querySelector(`#yesPercentage_${rowIndex}`);
                    const noPercentage = this.shadowRoot.querySelector(`#noPercentage_${rowIndex}`);
                    
                    if (teamTitle) teamTitle.textContent = `${home_team_name} - ${away_team_name}`;
                    if (yesPercentage) yesPercentage.textContent = formattedYes;
                    if (noPercentage) noPercentage.textContent = formattedNo;

                    const accuraciesResp = await utils.fetchBetpawa1X20Predictor_AccuraciesJSON();
                    if (accuraciesResp.success && accuraciesResp.data) {
                        const accuracyDataKey = `BTTS_EnglishLeague_RowIndex${rowIndex}_winsRecord`;
                        const accuracyRecord = accuraciesResp.data[accuracyDataKey];

                        if (accuracyRecord) {
                            const {
                                pattern, fCountsToOcurrencesObject, wCountsToOcurrencesObject, whatsNextProbabilityObject,
                                currentCount_numberOfConsecutive_fs, currentCount_numberOfConsecutive_ws,
                                previousCount_numberOfConsecutive_fs, previousCount_numberOfConsecutive_ws,
                            } = accuracyRecord;

                            const CURRENT_OUTCOME_F_or_W = currentCount_numberOfConsecutive_ws >= currentCount_numberOfConsecutive_fs ? "w" : "l";
                            const CURRENT_OUTCOME_NUMBER = CURRENT_OUTCOME_F_or_W === "w" ? currentCount_numberOfConsecutive_ws : currentCount_numberOfConsecutive_fs;
                            const CURRENT_DEFAULT_TEXT_VALUE = `${CURRENT_OUTCOME_NUMBER}_${CURRENT_OUTCOME_F_or_W}`;

                            const PREVIOUS_OUTCOME_F_or_W = previousCount_numberOfConsecutive_ws >= previousCount_numberOfConsecutive_fs ? "w" : "l";
                            const PREVIOUS_OUTCOME_NUMBER = PREVIOUS_OUTCOME_F_or_W === "w" ? previousCount_numberOfConsecutive_ws : previousCount_numberOfConsecutive_fs;
                            const PREVIOUS_DEFAULT_TEXT_VALUE = `${PREVIOUS_OUTCOME_NUMBER}_${PREVIOUS_OUTCOME_F_or_W}`;
                           
                            const accuracyPatternDiv = this.shadowRoot.querySelector(`#accuracyPattern_${rowIndex}`);
                            if (accuracyPatternDiv) {
                                accuracyPatternDiv.innerHTML = ''; // Clear previous content
                                // Ensure pattern is a string before splitting
                                if (pattern) {
                                    pattern.forEach(char => {
                                        const span = document.createElement('span');
                                        span.textContent = char;
                                        span.classList.add('badge');
                                        if (char === 'W') span.classList.add('type-win');
                                        else if (char === 'L') span.classList.add('type-loss');
                                        else if (char === 'D') span.classList.add('type-draw');
                                        else span.classList.add('type-pending-dark'); // For any other characters
                                        accuracyPatternDiv.appendChild(span);
                                    });
                                } else {
                                    accuracyPatternDiv.innerHTML = `<span class="text-red-500 dark:text-red-400">N/A</span>`;
                                }
                            }

                            // Removed F Counts table population
                            // Removed W Counts table population

                            const previousWhatsNextProb_Input = /**@type {HTMLInputElement}**/(this.shadowRoot.querySelector(`#previousWhatsNextProb_Input_${rowIndex}`));
                            const predictorStrategyAccuracyTable_previousWhatsNextProb = /**@type {HTMLTableElement}**/(this.shadowRoot.querySelector(`#predictorStrategyAccuracyTable_previousWhatsNextProb_${rowIndex}`));
                            if (previousWhatsNextProb_Input) previousWhatsNextProb_Input.value = PREVIOUS_DEFAULT_TEXT_VALUE;
                            if (predictorStrategyAccuracyTable_previousWhatsNextProb) populateWhatsNextProbsOnPage(whatsNextProbabilityObject, PREVIOUS_DEFAULT_TEXT_VALUE, predictorStrategyAccuracyTable_previousWhatsNextProb);

                            const currentWhatsNextProb_Input = /**@type {HTMLInputElement}**/(this.shadowRoot.querySelector(`#currentWhatsNextProb_Input_${rowIndex}`));
                            const predictorStrategyAccuracyTable_currentWhatsNextProb = /**@type {HTMLTableElement}**/(this.shadowRoot.querySelector(`#predictorStrategyAccuracyTable_currentWhatsNextProb_${rowIndex}`));
                            if (currentWhatsNextProb_Input) currentWhatsNextProb_Input.value = CURRENT_DEFAULT_TEXT_VALUE;
                            if (predictorStrategyAccuracyTable_currentWhatsNextProb) populateWhatsNextProbsOnPage(whatsNextProbabilityObject, CURRENT_DEFAULT_TEXT_VALUE, predictorStrategyAccuracyTable_currentWhatsNextProb);
                        } else {
                            errorMessage = `No accuracy data for BTTS RowIndex${rowIndex}.`;
                             this.updateDisplayWithNoData(rowIndex, 'BTTS', errorMessage); // Updated call
                        }
                    } else {
                        errorMessage = `Error fetching accuracy data for BTTS RowIndex${rowIndex}.`;
                         this.updateDisplayWithNoData(rowIndex, 'BTTS', errorMessage); // Updated call
                    }
                } catch (error) {
                    errorMessage = `Error loading BTTS data: ${error.message}`;
                    console.error(`[StrategyBoardApp Error] Error fetching BTTS predictions for RowIndex${rowIndex}:`, error);
                    this.updateDisplayWithNoData(rowIndex, 'BTTS', errorMessage); // Updated call
                }
            }

            /**
             * Fetches and lists 1X2 strategy predictions and data for a given row index.
             * @param {number} rowIndex - The index of the match to display (0 for first, 1 for second, etc.).
             */
            async list1X2StrategyPredictions(rowIndex){
                console.log(`[StrategyBoardApp] Fetching 1X2 predictions for RowIndex${rowIndex}`);
                let errorMessage = "Error loading 1X2 data: Failed to fetch predictions.";
                try {
                    const predictionsResp = await utils.fetchBetpawa1X20Predictor_PredictionsJSON();
                    if (!predictionsResp.success || !predictionsResp.data || !predictionsResp.data.leagues_and_match_predictions) {
                        errorMessage = predictionsResp.message || "Invalid prediction data structure.";
                        console.error(`[StrategyBoardApp Error] Failed to fetch 1X20 predictions for 1X2 RowIndex${rowIndex}:`, errorMessage);
                        this.updateDisplayWithNoData(rowIndex, '1X2', errorMessage); // Updated call
                        return;
                    }

                    const match_1X20_Predictions = predictionsResp.data.leagues_and_match_predictions["English League"]?.[rowIndex];
                    if (!match_1X20_Predictions || !match_1X20_Predictions.english_league_predictions?.[0]?.["1X2"]) { // Changed from .OneXTwo to .["1X2"]
                        errorMessage = `No 1X2 data found for English League at RowIndex${rowIndex}.`;
                        console.warn(`[StrategyBoardApp Warning] ${errorMessage}`);
                        this.updateDisplayWithNoData(rowIndex, '1X2', errorMessage); // Updated call
                        return;
                    }

                    const { away_team_name, home_team_name, english_league_predictions } = match_1X20_Predictions;
                    const oneXTwoMarket = english_league_predictions[0]?.["1X2"]; // Changed from { OneXTwo } = ... to oneXTwoMarket = ...["1X2"]
                    const { one:One, x:X, two:Two } = oneXTwoMarket;

                    let formattedOne = "-%";
                    let formattedX = "-%";
                    let formattedTwo = "-%";

                    const numOne = parseFloat(One);
                    if (!isNaN(numOne)) {
                        formattedOne = `${numOne}%`;
                    }

                    const numX = parseFloat(X);
                    if (!isNaN(numX)) {
                        formattedX = `${numX}%`;
                    }

                    const numTwo = parseFloat(Two);
                    if (!isNaN(numTwo)) {
                        formattedTwo = `${numTwo}%`;
                    }

                    // Append rowIndex to the IDs for uniqueness
                    const teamTitle_1X2 = this.shadowRoot.querySelector(`#teamTitle_1X2_${rowIndex}`);
                    const onePercentage_1X2 = this.shadowRoot.querySelector(`#onePercentage_1X2_${rowIndex}`);
                    const xPercentage_1X2 = this.shadowRoot.querySelector(`#xPercentage_1X2_${rowIndex}`);
                    const twoPercentage_1X2 = this.shadowRoot.querySelector(`#twoPercentage_1X2_${rowIndex}`);

                    if (teamTitle_1X2) teamTitle_1X2.textContent = `${home_team_name} - ${away_team_name}`;
                    if (onePercentage_1X2) onePercentage_1X2.textContent = formattedOne;
                    if (xPercentage_1X2) xPercentage_1X2.textContent = formattedX;
                    if (twoPercentage_1X2) twoPercentage_1X2.textContent = formattedTwo;

                    const accuraciesResp = await utils.fetchBetpawa1X20Predictor_AccuraciesJSON();
                    if (accuraciesResp.success && accuraciesResp.data) {
                        const accuracyDataKey = `1X2_EnglishLeague_RowIndex${rowIndex}_winsRecord`;
                        const accuracyRecord = accuraciesResp.data[accuracyDataKey];

                        if (accuracyRecord) {
                            const {
                                pattern, fCountsToOcurrencesObject, wCountsToOcurrencesObject, whatsNextProbabilityObject,
                                currentCount_numberOfConsecutive_fs, currentCount_numberOfConsecutive_ws,
                                previousCount_numberOfConsecutive_fs, previousCount_numberOfConsecutive_ws,
                            } = accuracyRecord;

                            const CURRENT_OUTCOME_F_or_W_1X2 = currentCount_numberOfConsecutive_ws >= currentCount_numberOfConsecutive_fs ? "w" : "l";
                            const CURRENT_OUTCOME_NUMBER_1X2 = CURRENT_OUTCOME_F_or_W_1X2 === "w" ? currentCount_numberOfConsecutive_ws : currentCount_numberOfConsecutive_fs;
                            const CURRENT_DEFAULT_TEXT_VALUE_1X2 = `${CURRENT_OUTCOME_NUMBER_1X2}_${CURRENT_OUTCOME_F_or_W_1X2}`;

                            const PREVIOUS_OUTCOME_F_or_W_1X2 = previousCount_numberOfConsecutive_ws >= previousCount_numberOfConsecutive_fs ? "w" : "l";
                            const PREVIOUS_OUTCOME_NUMBER_1X2 = PREVIOUS_OUTCOME_F_or_W_1X2 === "w" ? previousCount_numberOfConsecutive_ws : previousCount_numberOfConsecutive_fs;
                            const PREVIOUS_DEFAULT_TEXT_VALUE_1X2 = `${PREVIOUS_OUTCOME_NUMBER_1X2}_${PREVIOUS_OUTCOME_F_or_W_1X2}`;

                            const accuracyPatternDiv = this.shadowRoot.querySelector(`#accuracyPattern_1X2_${rowIndex}`);
                            if (accuracyPatternDiv) {
                                accuracyPatternDiv.innerHTML = ''; // Clear previous content
                                // Ensure pattern is a string before splitting
                                if (pattern) {
                                    pattern.forEach(char => {
                                        const span = document.createElement('span');
                                        span.textContent = char;
                                        span.classList.add('badge');
                                        if (char === 'W') span.classList.add('type-win');
                                        else if (char === 'L') span.classList.add('type-loss');
                                        else if (char === 'D') span.classList.add('type-draw');
                                        else span.classList.add('type-pending-dark'); // For any other characters
                                        accuracyPatternDiv.appendChild(span);
                                    });
                                } else {
                                    accuracyPatternDiv.innerHTML = `<span class="text-red-500 dark:text-red-400">N/A</span>`;
                                }
                            }

                            // Removed F Counts table population
                            // Removed W Counts table population

                            const previousWhatsNextProb_Input_1X2 = /**@type {HTMLInputElement}**/(this.shadowRoot.querySelector(`#previousWhatsNextProb_Input_1X2_${rowIndex}`));
                            const predictorStrategyAccuracyTable_previousWhatsNextProb_1X2 = /**@type {HTMLTableElement}**/(this.shadowRoot.querySelector(`#predictorStrategyAccuracyTable_previousWhatsNextProb_1X2_${rowIndex}`));
                            if (previousWhatsNextProb_Input_1X2) previousWhatsNextProb_Input_1X2.value = PREVIOUS_DEFAULT_TEXT_VALUE_1X2;
                            if (predictorStrategyAccuracyTable_previousWhatsNextProb_1X2) populateWhatsNextProbsOnPage(whatsNextProbabilityObject, PREVIOUS_DEFAULT_TEXT_VALUE_1X2, predictorStrategyAccuracyTable_previousWhatsNextProb_1X2);

                            const currentWhatsNextProb_Input_1X2 = /**@type {HTMLInputElement}**/(this.shadowRoot.querySelector(`#currentWhatsNextProb_Input_1X2_${rowIndex}`));
                            const predictorStrategyAccuracyTable_currentWhatsNextProb_1X2 = /**@type {HTMLTableElement}**/(this.shadowRoot.querySelector(`#predictorStrategyAccuracyTable_currentWhatsNextProb_1X2_${rowIndex}`));
                            if (currentWhatsNextProb_Input_1X2) currentWhatsNextProb_Input_1X2.value = CURRENT_DEFAULT_TEXT_VALUE_1X2;
                            if (predictorStrategyAccuracyTable_currentWhatsNextProb_1X2) populateWhatsNextProbsOnPage(whatsNextProbabilityObject, CURRENT_DEFAULT_TEXT_VALUE_1X2, predictorStrategyAccuracyTable_currentWhatsNextProb_1X2);
                        } else {
                            errorMessage = `No accuracy data for 1X2 RowIndex${rowIndex}.`;
                            this.updateDisplayWithNoData(rowIndex, '1X2', errorMessage); // Updated call
                        }
                    } else {
                        errorMessage = `Error fetching accuracy data for 1X2 RowIndex${rowIndex}.`;
                        this.updateDisplayWithNoData(rowIndex, '1X2', errorMessage); // Updated call
                    }
                } catch (error) {
                    errorMessage = `Error loading 1X2 data: ${error.message}`;
                    console.error(`[StrategyBoardApp Error] Error fetching 1X2 predictions for RowIndex${rowIndex}:`, error);
                    this.updateDisplayWithNoData(rowIndex, '1X2', errorMessage); // Updated call
                }
            }

            /**
             * Helper function to update display elements when data is not available.
             * @param {number} rowIndex - The index of the row (0 or 1).
             * @param {'BTTS' | '1X2'} category - The prediction category.
             * @param {string} message - The message to display.
             */
            updateDisplayWithNoData(rowIndex, category, message) {
                const displayMessage = message; // Use the provided message

                let idSuffixesToUpdate = [];

                if (category === 'BTTS') {
                    idSuffixesToUpdate = [
                        'teamTitle', 'yesPercentage', 'noPercentage', 'accuracyPattern',
                        'previousWhatsNextProb_Input', 'predictorStrategyAccuracyTable_previousWhatsNextProb',
                        'currentWhatsNextProb_Input', 'predictorStrategyAccuracyTable_currentWhatsNextProb'
                    ];
                } else if (category === '1X2') {
                    idSuffixesToUpdate = [
                        'teamTitle_1X2', 'onePercentage_1X2', 'xPercentage_1X2', 'twoPercentage_1X2',
                        'accuracyPattern_1X2', 'previousWhatsNextProb_Input_1X2',
                        'predictorStrategyAccuracyTable_previousWhatsNextProb_1X2', 'currentWhatsNextProb_Input_1X2',
                        'predictorStrategyAccuracyTable_currentWhatsNextProb_1X2'
                    ];
                } else {
                    console.error(`[updateDisplayWithNoData] Unknown category: ${category}`);
                    return;
                }

                idSuffixesToUpdate.forEach(idSuffix => {
                    const fullId = `${idSuffix}_${rowIndex}`;
                    const element = this.shadowRoot.querySelector(`#${fullId}`);
                    
                    if (element) {
                        if (element.tagName === 'INPUT') {
                            element.value = displayMessage;
                        } else if (element.tagName === 'TABLE') {
                            let tbody = element.querySelector('tbody');
                            if (!tbody) { // Create tbody if it doesn't exist
                                tbody = document.createElement('tbody');
                                element.appendChild(tbody);
                            }
                            tbody.innerHTML = ''; // Clear previous content
                            tbody.insertAdjacentHTML('beforeend', `<tr><td colspan="2" class="text-red-500 dark:text-red-400 text-center py-2">${displayMessage}</td></tr>`);
                        } else if (element.tagName === 'DIV' && element.id && element.id.includes('accuracyPattern')) {
                            element.innerHTML = `<span class="text-red-500 dark:text-red-400">${displayMessage}</span>`;
                        } else if (element.tagName === 'TD' && element.id && (element.id.includes('Percentage') || element.id.includes('percentage'))) {
                             element.textContent = "-%";
                        } else if (element.tagName === 'P' && element.id && element.id.includes('teamTitle')) {
                            element.textContent = `Error: ${displayMessage}`;
                            element.classList.remove('dark:text-indigo-300'); // Remove potential indigo color
                            element.classList.add('text-red-500', 'dark:text-red-400'); // Add red for error
                        }
                    } else {
                        console.warn(`[StrategyBoardApp Warning] Could not find element with ID: #${fullId} for category ${category}, rowIndex ${rowIndex} to update with no data message.`);
                    }
                });
            }

            connectedCallback() {
                console.log("Custom element StrategyBoardApp added to page.");
            }
        }
        customElements.define("strategy-board-app", StrategyBoardApp);
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const themeToggle = document.getElementById('themeToggle');
            const htmlElement = document.documentElement;
            const themeIconPath = document.getElementById('themeIconPath');

            // Function to update the SVG path based on the theme
            function updateThemeIcon(theme) {
                if (theme === 'dark') {
                    // Moon icon for dark mode
                    themeIconPath.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
                } else {
                    // Sun icon for light mode
                    themeIconPath.setAttribute('d', 'M12 3v1m0 16v1m9-9h1M4 12H3m15.325 5.924l-.707.707M6.382 6.382l-.707-.707M18.325 6.382l.707-.707M6.382 18.325l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
                }
            }

            // Set initial theme based on localStorage or default to light
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                htmlElement.setAttribute('data-theme', storedTheme);
                updateThemeIcon(storedTheme);
            } else {
                // If no theme is stored, check system preference
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    htmlElement.setAttribute('data-theme', 'dark');
                    updateThemeIcon('dark');
                } else {
                    htmlElement.setAttribute('data-theme', 'light');
                    updateThemeIcon('light');
                }
            }

            themeToggle.addEventListener('click', () => {
                let currentTheme = htmlElement.getAttribute('data-theme');
                if (currentTheme === 'light') {
                    htmlElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                    updateThemeIcon('dark');
                } else {
                    htmlElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                    updateThemeIcon('light');
                }
            });
        });
    </script>
</body>
</html>
