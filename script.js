window.onload = function() {
    let slider1 = new Slider("slider-img-1", "slider-next1", "slider-prev1");
    slider1.run();

    let slider2 = new Slider("slider-img-2", null, null, true);
    slider2.run();
}

class Slider {

    constructor(imagesClassName, btnNextClassName = null, btnPrevClassName = null, auto = false, autoTime = 1) {
        this.imgs = document.querySelectorAll(`.${imagesClassName}`);
        this.btnNextClassName = document.querySelectorAll(`.${btnNextClassName}`);
        this.btnPrevClassName = document.querySelectorAll(`.${btnPrevClassName}`);
        this.auto = auto;
        this.autoTime = autoTime;
        this.i = 0;
    }

    next() {
        this.imgs[this.i].classList.remove("show");
        this.i++;
        if (this.i == this.imgs.length) {
            this.i = 0;
        }
        this.imgs[this.i].classList.add("show");
    }

    prev() {
        this.imgs[this.i].classList.remove("show");
        this.i--;
        if (this.i == -1) {
            this.i = this.imgs.length - 1;
        }
        this.imgs[this.i].classList.add("show");
    }

    run() {
        if (this.auto) {
            setInterval(() => {
                this.next();
            }, this.autoTime * 1000)
        } else {
            for(let el of this.btnNextClassName) {
                el.addEventListener("click",() => {
                    this.next();
                });
            }

            for(let el of this.btnPrevClassName) {
                el.addEventListener("click", () => {
                    this.prev();
                });
            }
        }
    }
}