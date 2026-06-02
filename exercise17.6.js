const screenEl = document.getElementById('screen');
    let currentExpr = "";
    let freshState = true;
 
    function pressNum(char) {
      if (freshState || screenEl.textContent === "Error") {
        currentExpr = (char === '.') ? "0." : char;
        freshState = false;
      } else {
        if (char === '.') {
          const segments = currentExpr.split(/[\+\-\*\/]/);
          const lastSegment = segments[segments.length - 1];
          if (lastSegment.includes('.')) return;
        }
        currentExpr += char;
      }
      updateScreen(currentExpr);
    }
 
    function pressOp(op) {
      if (screenEl.textContent === "Error") return;
      freshState = false;
      if (currentExpr === "") {
        currentExpr = "0" + op;
      } else {
        const lastInput = currentExpr.slice(-1);
        if (['+', '-', '*', '/'].includes(lastInput)) {
          currentExpr = currentExpr.slice(0, -1) + op;
        } else {
          currentExpr += op;
        }
      }
      updateScreen(currentExpr);
    }
 
    function clearAll() {
      currentExpr = "";
      screenEl.textContent = "0";
      freshState = true;
    }
 
    function updateScreen(expression) {
      let viewText = expression.replace(/\*/g, '×').replace(/\//g, '÷');
      screenEl.textContent = viewText || "0";
    }
 
    function executeCalc() {
      if (currentExpr === "" || screenEl.textContent === "Error") return;
 
      if (/\/0+(?![0-9.])/.test(currentExpr)) {
        alert("Lỗi: Không thể thực hiện phép chia cho số 0!");
        screenEl.textContent = "Error";
        currentExpr = "";
        freshState = true;
        return;
      }
 
      try {
        let evaluated = new Function(`return ${currentExpr}`)();
        if (evaluated === undefined || isNaN(evaluated) || !isFinite(evaluated)) {
          throw new Error("Invalid calculation");
        }
        let finalResult = parseFloat(Number(evaluated).toFixed(4));
        screenEl.textContent = finalResult;
        currentExpr = finalResult.toString();
      } catch (err) {
        alert("Lỗi: Biểu thức toán học không hợp lệ!");
        screenEl.textContent = "Error";
        currentExpr = "";
      }
 
      freshState = true;
    }