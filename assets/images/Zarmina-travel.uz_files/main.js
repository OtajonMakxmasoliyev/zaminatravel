fetch("assets/database.json")
    .then(res => res.json())
    .then(json => {
        const htmlLang = document.querySelector("html")

        sessionStorage.setItem("lang", htmlLang.lang)









        const allTag = document.querySelectorAll("a,h6, h2, h4, em,p, span, input, textarea, button")


        document.forms["langForm"].addEventListener("change", (event) => {
            switch (event.target.value) {
                case "uz":
                    document.querySelector("#langBtn").innerHTML = `<img src="./assets/images/uzbekistan.png">O'zbek <i class="fa fa-chevron-right"></i>`
                    break;
                case "ru":
                    document.querySelector("#langBtn").innerHTML = `<img src="./assets/images/russia.png"> Русский<i class="fa fa-chevron-right"></i>`
                    break;
                case "en":
                    document.querySelector("#langBtn").innerHTML = `<img src="./assets/images/united-states-of-america.png"> English <i class="fa fa-chevron-right"></i>`
                    break;
                default:
                    break;
            }
            
            
            
            
            
            
            
            
            
            
            
            document.querySelector("html").lang = event.target.value
            const nowLang = event.target.value,
                oldLang = sessionStorage.getItem("lang");

            allTag.forEach(tag => {
                if (tag.textContent) {
                    for (let index = 0; index < json.length; index++) {
                        if (tag.innerHTML === json[index][oldLang]) {
                            tag.innerHTML = json[index][nowLang]
                            // console.log(tag);

                        }

                    }
                } else if (tag.tagName == "INPUT"|| tag.tagName=="TEXTAREA") {
                    
                        console.log(tag.tagName);
                    for (let index = 0; index < json.length; index++) {
                        if (tag.placeholder === json[index][oldLang]) {
                            tag.placeholder = json[index][nowLang]
                            // console.log(tag);

                        }

                    }
                }
            })
            sessionStorage.setItem("lang", event.target.value)
        })

    })


    document.getElementById("langBtn").addEventListener("click",()=>{
        document.querySelector(".langForm").classList.toggle("showForm")
    })















