<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Betpawa</title>
    <link rel="stylesheet" href="./theme.css"/>
    <link rel="stylesheet" href="./nav.css"/>
    <script type="text/javascript" src="./navigation.js"> </script>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
        .iframe-container {
            display: flex;
            flex-direction: column; /* Stack items vertically */
            width: 100%;
            height: 100%;
        }
        .iframe-container iframe {
            flex: 1; /* Each iframe takes equal vertical space */
            border: none;
        }
    </style>
</head>
<body>
    <div class="iframe-container">
        <iframe src="./virtualfootball.html?league=english" title="Iframe 1"></iframe>
        <iframe src="./virtualfootball.html?league=spanish" title="Iframe 2"></iframe>
    </div>

    <!-- <div class="iframe-container">
        <iframe src="./virtualfootball.html"></iframe>
    </div>
    <div class="iframe-container">
        <iframe src="./virtualfootball.html"></iframe>
    </div> -->
     <!-- BOTTOM NAV -->
     <div class="bottom-nav">
        <a href="./index.html" id="homeNav">Home</a>
        <a href="./virtualfootball.html" class="active"  id="aviatorNav">Betpawa</a>
        <a href="./aviator.html" id="aviatorNav">Aviator</a>
        <a href="./forex.html" id="forexNav">Forex</a>
    </div>
    <script>
        function objectToHtml(obj) {
            // Start with an empty HTML string
            let html = "<div>";

            // Iterate over each property in the object
            for (const key in obj) {
                if(typeof obj[key]==="object"){
                    html+= objectToHtml(obj[key])
                }else{

                    if (obj.hasOwnProperty(key)) {
                        html += `
                            <p>
                                <strong>${key}:</strong> ${obj[key]}
                            </p>
                        `;
                    }
                }
            }

            // Close the root div
            html += "</div>";

            // Return the HTML string
            return html;
        }

        // // Example usage
        // const exampleObject = {
        //     "Min Stake": "KSH 1",
        //     "Stake After Tax": "KSH 0.88",
        //     "Odds": "1.71",
        //     "Potential Winnings": "KSH 0.71",
        //     "WHT 20%": "- KSH 0.14",
        //     "Payout": "KSH 1.45"
        // };

        // const generatedHtml = objectToHtml(exampleObject);
        // console.log(generatedHtml);

    </script>

    <!-- Auth -->
    <script>
        // Auth Scripting
    class CreateIframeForAuthForm{
        iframe = "";
        constructor(){
            
            

        }
        create(){
            // Create elements
            const container = document.createElement('div');
            container.className = 'container';
            this.iframe.style.position = "absolute";  
            this.iframe.style.margin = "auto";

            const heading = document.createElement('h2');
            heading.textContent = 'Enter Activation Code';

            const form = document.createElement('form');
            form.id = 'activationForm';

            const inputGroup = document.createElement('div');
            inputGroup.className = 'input-group';

            const input = document.createElement('input');
            input.type = 'text';
            input.id = 'activationCode';
            input.placeholder = 'Activation Code';
            input.required = true;

            const button = document.createElement('button');
            button.type = 'submit';
            button.className = 'btn';
            button.textContent = 'Activate';

            const errorDiv = document.createElement('div');
            errorDiv.className = 'error';
            errorDiv.id = 'error';
            errorDiv.textContent = 'Please enter a valid activation code.';

            // Append elements
            inputGroup.appendChild(input);
            form.appendChild(inputGroup);
            form.appendChild(button);
            form.appendChild(errorDiv);
            container.appendChild(heading);
            container.appendChild(form);

            // Append the container to the body or another element in your document
            document.body.appendChild(container);

            // Optional: Add event listener to the form if needed
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                if (input.value.trim() === '' || input.value.length < 6) {
                    errorDiv.style.display = 'block';
                } else {
                    errorDiv.style.display = 'none';
                    alert('Activation successful!');
                }
            });
            return container
        }
        show(){ 
            const iframe4Auth = document.getElementById("iframe4Auth");
            // if(iframe4Auth) iframe4Auth.remove();
            this.iframe = document.createElement("iframe");
            this.iframe.setAttribute("src","./authform.html");
            this.iframe.setAttribute("id","iframe4Auth");
            this.iframe.setAttribute("width","100%");
            this.iframe.setAttribute("height","100%");

            // iframe.setAttribute("src","www.example.com");
            // document.body.appendChild(iframe)
            this.iframe.style.position = "absolute";  
            this.iframe.style.margin = "auto";  
            document.body.appendChild(this.iframe)

            // this.iframe.contentWindow.postMessage({value:"valuezzz",type:"ACTIVATION_CODE_PLACEHOLDER"})
            // console.log("this.iframe.contentWindow.postMessage:",this.iframe.contentWindow.postMessage)
            if(window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.CloudStorage ){
                window.Telegram.WebApp.CloudStorage.getItem("VIRTUAL-BTTS-ACTIVATION-CODE",(error,value)=>{
                    if(!error){
                        // send value to IFRAME
                        // this.iframe.postMessage(JSON.stringify(({value:value,type:"ACTIVATION_CODE_PLACEHOLDER"})))
                        this.iframe.setAttribute("src","./authform.html?code="+value);
                    }       
                })

            }
        };
        hide(){this.iframe.remove()};
        
        
    }
    const iframeForAuth = new CreateIframeForAuthForm();

    
    // iframeForAuth.show();
    window.addEventListener('message', function(event) {
        // Check the origin of the message (for security)
        console.log(event.origin)
        if (event.origin !== window.location.origin) {
            return;
        }

        // work with the received message
        try {
            
            const obj = event.data; //JSON.parse(event.data||"{}");
            
            if(obj.login){
                // save value to cloud
                const obj_value = obj.value.trim()
                
                // hide iframe
                iframeForAuth.hide()
                alert("Bet Professionally")
                if(window.Telegram){
                    window.Telegram.CloudStorage.setItem("VIRTUAL-BTTS-ACTIVATION-CODE",obj_value,(error,stored)=>{

                    });

                }
            }
            // document.getElementById('message').innerText = "Received: " + message;
        }catch(e){
            console.log(e);
        }
    });
    iframeForAuth.show();
    // if(activationCodeStore.isLoggedIn()){
    //     iframeForAuth.hide();
    //     console.log("activationCodeStore.isLoggedIn():",activationCodeStore.isLoggedIn())
    // }else {
    //     // show a place to type in the code
    //     iframeForAuth.show();
    //     console.log("activationCodeStore.isLoggedIn():",activationCodeStore.isLoggedIn())
    // }
</script>
</body>
</html>
