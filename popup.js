var input = document.getElementById("display");
var btnCollection = document.getElementsByClassName("btn");
var type;
var firstValue = 0;
var bool = false;

for (var i = 0; i < btnCollection.length; i++) {
    // 获取到每个按键并添加点击事件。点击后会触发function中代码执行。
    btnCollection[i].onclick = function () {
        if (bool) {
            input.value = "0";
            firstValue = 0;
            type = undefined;
            bool = false;
        }

        // input.value = this.innerHTML;      //显示点击的数字在文本框内

        if (!isNaN(Number(this.innerHTML))) {
            input.value = Number(input.value + this.innerHTML).toString();
        } else if (this.innerHTML !== "C" && this.innerHTML !== "=") {
            firstValue = Number(input.value);
            type = this.innerHTML;
            input.value = 0;
        } else if (this.innerHTML === "C") {
            firstValue = 0;
            type = undefined;
            input.value = "0";
        } else {
            switch (type) {
                case "+":
                    input.value = (Number(input.value) + firstValue).toString();
                    break;
                case "-":
                    input.value = (firstValue - Number(input.value)).toString();
                    break;
                case "*":
                    input.value = (Number(input.value) * firstValue).toString();
                    break;
                case "/":
                    input.value = (firstValue / Number(input.value)).toString();
                    break;
            }
            bool = true;
        }
    }
}