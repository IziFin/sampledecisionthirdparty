        var showPopup = false;

        var popup = document.createElement('div');
        popup.id = "bnpl"
        var iframe = document.createElement("iframe");
        var result = document.getElementById("result");
        var x = document.getElementsByTagName("body")[0];
        x.style.position = "relative"
        var returned_data = {}  
        function closeIframe(){
            popup.style.display = "none"
            popup.removeChild(iframe);
        }
        
        window.addEventListener("message", function (event) {
        
        console.log(event.data)
        if(typeof event.data !== "undefined"
        && typeof event.data !== "object"
        ){
            var data = JSON.parse(event.data)
            console.log(event.data)
            if(data.type === "izifin"){
                if(data.close === true){
                    closeIframe()
                    let frameToRemove = document.getElementById("iframe");
                    if (frameToRemove) {
                        frameToRemove.parentNode.removeChild(frameToRemove);
                        document.body.style.overflow = "inherit";
                    }
                }
                if(typeof (data.data) !== "undefined" && data.data !== null){
                    returned_data = data.data
                    if(typeof onSuccessBNPL !== "undefined" && JSON.stringify(data.data) !== "{}"){
                        onSuccessBNPL(returned_data)
                    }
                }
            }
                
            }
        });

        
        popup.style.display = "none";
        popup.style.width = "100%"
        popup.style.height = "100vh"
        popup.style.overflow = "hidden"
        popup.style.position = "relative"
        popup.style.position = "absolute"
        popup.style.zIndex = "1111111111111111111111111111111"
        popup.style.top = "0"
        popup.style.right = "0"

        function openIziDecision(data) {
            // alert(amount)
            showPopup = true; 
            iframe.src = `https://main.d2r1xdqwb0n7e7.amplifyapp.com/creditdecision/${JSON.stringify(data)}`;
            iframe.frameBorder = "0";
            iframe.id = "iframe";
            iframe.ref = {}
            iframe.style.position = "absolute";
            iframe.style.zIndex = "999";
            iframe.style.height = "100%";
            iframe.style.width = "100%";
            iframe.style.top = "0";
            iframe.style.left = "0";
            iframe.style.backgroundColor = "white";
            iframe.style.border = "none";
            // document.body.prepend();
            document.body.style.overflow = "hidden";
            popup.style.display = "block"
            popup.appendChild(iframe)
            x.appendChild(popup)

        }
