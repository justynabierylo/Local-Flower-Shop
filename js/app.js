document.addEventListener("DOMContentLoaded", function (e) {

    //submenu element

    var menu = document.querySelector(".page-nav-list").childNodes[1];
    var submenu = document.querySelector(".page-nav-sublist");

    menu.addEventListener("mouseover", function (e) {

            submenu.style.visibility = "visible";
            submenu.style.opacity = "1";
    });

    menu.addEventListener("mouseleave", function (e) {

        submenu.style.visibility = "hidden";
        submenu.style.opacity = "0";

    });


    // hide the text bar on the article image

    var articleBox = document.querySelectorAll(".article-box");

    articleBox.forEach(function (element) {

        element.addEventListener("mouseover", function (e) {

            this.querySelector(".article-box-bar").style.visibility = "hidden";
            this.querySelector(".article-box-bar").style.opacity = "0";
        });

        element.addEventListener("mouseleave", function (e) {

            this.querySelector(".article-box-bar").style.visibility = "visible";
            this.querySelector(".article-box-bar").style.opacity = "1";
        });
    });


    // slider

    var slides = document.querySelectorAll(".banner-slide");
    var nextSlide = document.querySelector(".banner-next");
    var prevSlide = document.querySelector(".banner-prev");
    var index = 0;

    slides[index].classList.add("banner-slide-active");

    nextSlide.addEventListener("click", function (e) {

        slides[index].classList.remove("banner-slide-active");

        if(index === slides.length-1){
            index = 0;
        } else {
            index++;
        }

        slides[index].classList.add("banner-slide-active");
    });

    prevSlide.addEventListener("click", function (e) {

        slides[index].classList.remove("banner-slide-active");

        if(index === 0){
            index = slides.length-1;
        } else {
            index--;
        }

        slides[index].classList.add("banner-slide-active");
    });





// form - additional task

var dropDown = document.querySelectorAll(".drop_down_list");
var sumPriceBox = document.querySelector(".sum");

// dropdown action

    dropDown.forEach(function (element) {

        var listArrow = element.querySelector(".list_arrow");
        var isOk = true;

        listArrow.addEventListener("click", function (e) {
            e.stopImmediatePropagation();

            var listPanel = this.parentElement.querySelector(".list_panel");

            if(isOk === true) {
                listPanel.style.display = "block";
                isOk = false;

            } else if (isOk === false){
                listPanel.style.display = "none";
                isOk = true;
            }


            var listPanelLi = element.querySelectorAll(".list_panel li");
            console.log(listPanelLi);


            listPanelLi.forEach(function (element) {
                element.addEventListener("click", function (e) {
                    e.stopImmediatePropagation();

                    var listLabel = this.parentElement.parentElement.querySelector(".list_label");
                    listLabel.innerText = this.innerText;
                    listLabel.style.color = "black";
                    this.parentElement.style.display = 'none';



                    var panelLeft = document.querySelector(".panel_left");
                    var panelRight = document.querySelector(".panel_right");



                    if(dropDown[0].innerText.includes(this.innerText) === true) {
                        panelLeft.querySelector(".title").innerText = this.innerText;
                        panelRight.querySelector(".title.value").innerText = this.value;
                        calculatePrice();

                    } else if(dropDown[1].innerText.includes(this.innerText) === true){
                        panelLeft.querySelector(".color").innerText = this.innerText;
                        panelRight.querySelector(".color.value").innerText = this.value;
                        calculatePrice();

                    } else if(dropDown[2].innerText.includes(this.innerText) === true){
                        panelLeft.querySelector(".pattern").innerText = this.innerText;
                        panelRight.querySelector(".pattern.value").innerText = this.value;
                        calculatePrice();
                    }
                });
            });


        });

    });

    // transport checked

    var transport = document.querySelector("#transport");
    var panelLeft = document.querySelector(".panel_left");
    var panelRight = document.querySelector(".panel_right");

    transport.addEventListener("change", function (e) {
        e.stopImmediatePropagation();

        if (transport.checked){
            panelLeft.querySelector(".transport").innerText = "delivery";
            panelRight.querySelector(".transport.value").innerText = transport.dataset.transportPrice;

        } else {
            panelLeft.querySelector(".transport").innerText = "";
            panelRight.querySelector(".transport.value").innerText = "";
        }
        calculatePrice();

    });

//calculate sum

function calculatePrice() {
    var sum = 0;
    for (var i = 0; i < panelRight.children.length; i++) {
        if (panelRight.children[i].innerText !== '') {
            sum += parseInt(panelRight.children[i].innerText);
        } else {
            sum += 0;
        }
    }
    sumPriceBox.innerText = '£' + sum;
}

});
