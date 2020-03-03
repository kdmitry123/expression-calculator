function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let exprArr = expr.replace(/\s/g, "").split("");
    console.log(arguments);
    Errors(exprArr);

    function Errors(exprArr) {
        let a = 0;
        for (let i = 0; i < exprArr.length; i++) {
            if (exprArr[i] === "(") {
                a++;
            }
            if (exprArr[i] === ")") {
                a--;
            }
        }
        if (a !== 0) {
            throw new Error("ExpressionError: Brackets must be paired.");
        }

        for (let i = 0; i < exprArr.length; i++) {
            if (exprArr[i] === "/") {
                if (exprArr[i + 1] === "0")
                    throw new Error("TypeError: Division by zero.");
            }
        }
    }

    total = new Function("return " + expr.replace(/\s/g, ""));
    return  total();
}

module.exports = {
    expressionCalculator
}