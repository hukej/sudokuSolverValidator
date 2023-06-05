let fieldBox = document.querySelector("#table");
let buttonComplete = document.getElementById("completeButton");
let buttonCheck = document.getElementById("checkButton");
let buttonSolve = document.getElementById("solveButton");
let buttonReset = document.getElementById("resetButton");
let tip = document.getElementById("tip");
let numberOfFields = 81;
let i = 1;

while(i<=numberOfFields){

    let addField = document.createElement("input");
    let fieldId="field"+i;
    addField.setAttribute("type", "number");
    addField.setAttribute("name", fieldId);
    addField.setAttribute("id", fieldId);
    addField.setAttribute("max", "9");
    addField.setAttribute("min", "1");

    
    
    fieldBox.appendChild(addField);

        i= i+1;
}

tip.style.display = "none";

for (let i = 1; i <= 81; i++) {
    let fieldId = "field" + i;
    window["f" + i] = document.querySelector("#" + fieldId);
}

let paint = () =>{

    let square1 = [f1, f2, f3, f10, f11, f12, f19, f20, f21];
    
        for (let i = 0; i < square1.length; i++) {
             square1[i].style.backgroundColor = "grey";
        }
        
    let square2 = [f4, f5, f6, f13, f14, f15, f22, f23, f24];
    
 
        for (let i = 0; i < square2.length; i++) {
            square2[i].style.backgroundColor = "white";
        }
    
    let square3 = [f7, f8, f9, f16, f17, f18, f25, f26, f27];
    
        for (let i = 0; i < square3.length; i++) {
            square3[i].style.backgroundColor = "grey";
        }

        let square4 = [f28, f29, f30, f37, f38, f39, f46, f47, f48];

            for (let i = 0; i < square4.length; i++) {
                square4[i].style.backgroundColor = "white";
            }
    

        let square5 = [f31, f32, f33, f40, f41, f42, f49, f50, f51];

            for (let i = 0; i < square5.length; i++) {
                square5[i].style.backgroundColor = "grey";
            }
    
        let square6 = [f34, f35, f36, f43, f44, f45, f52, f53, f54];

            for (let i = 0; i < square6.length; i++) {
                square6[i].style.backgroundColor = "white";
            }

        let square7 = [f55, f56, f57, f64, f65, f66, f73, f74, f75];

            for (let i = 0; i < square7.length; i++) {
                square7[i].style.backgroundColor = "grey";
            }
    
        let square8 = [f58, f59, f60, f67, f68, f69, f76, f77, f78];

            for (let i = 0; i < square8.length; i++) {
                square8[i].style.backgroundColor = "white";
            }

        let square9 = [f61, f62, f63, f70, f71, f72, f79, f80, f81];
    
            for (let i = 0; i < square9.length; i++) {
                square9[i].style.backgroundColor = "grey";
            }
}

let setValues = () =>{

    let losowaLiczba = Math.floor(Math.random() * 2) + 1;

    if(losowaLiczba==1){
        f1.value = 4;     f2.value = 9;     f3.value = 8;     f4.value = 2;     f5.value = 6;     f6.value = 3;     f7.value = 1;     f8.value = 5;     f9.value = 7;
        f10.value = 1;    f11.value = 3;    f12.value = 6;    f13.value = 5;    f14.value = 7;    f15.value = 8;    f16.value = 2;    f17.value = 9;    f18.value = 4;
        f19.value = 5;    f20.value = 7;    f21.value = 2;    f22.value = 4;    f23.value = 9;    f24.value = 1;    f25.value = 6;    f26.value = 8;    f27.value = 3;
        f28.value = 8;    f29.value = 1;    f30.value = 9;    f31.value = 3;    f32.value = 4;    f33.value = 2;    f34.value = 7;    f35.value = 6;    f36.value = 5;
        f37.value = 6;    f38.value = 5;    f39.value = 3;    f40.value = 8;    f41.value = 1;    f42.value = 7;    f43.value = 9;    f44.value = 4;    f45.value = 2;
        f46.value = 2;    f47.value = 4;    f48.value = 7;    f49.value = 6;    f50.value = 5;    f51.value = 9;    f52.value = 8;    f53.value = 3;    f54.value = 1;
        f55.value = 7;    f56.value = 6;    f57.value = 1;    f58.value = 9;    f59.value = 3;    f60.value = 5;    f61.value = 4;    f62.value = 2;    f63.value = 8;
        f64.value = 9;    f65.value = 8;    f66.value = 5;    f67.value = 1;    f68.value = 2;    f69.value = 4;    f70.value = 3;    f71.value = 7;    f72.value = 6;
        f73.value = 3;    f74.value = 2;    f75.value = 4;    f76.value = 7;    f77.value = 8;    f78.value = 6;    f79.value = 5;    f80.value = 1;    f81.value = 9;
    }
    else{
        f1.value = 8;     f2.value = 1;     f3.value = 3;     f4.value = 9;     f5.value = 5;     f6.value = 7;     f7.value = 6;     f8.value = 4;     f9.value = 2;
        f10.value = 4;    f11.value = 7;    f12.value = 6;    f13.value = 1;    f14.value = 3;    f15.value = 2;    f16.value = 9;    f17.value = 8;    f18.value = 5;    
        f19.value = 2;    f20.value = 9;    f21.value = 5;    f22.value = 8;    f23.value = 4;    f24.value = 6;    f25.value = 7;    f26.value = 3;    f27.value = 1;
        f28.value = 6;    f29.value = 3;    f30.value = 7;    f31.value = 2;    f32.value = 8;    f33.value = 1;    f34.value = 4;    f35.value = 5;    f36.value = 9;
        f37.value = 9;    f38.value = 5;    f39.value = 8;    f40.value = 7;    f41.value = 6;    f42.value = 4;    f43.value = 2;    f44.value = 1;    f45.value = 3;
        f46.value = 1;    f47.value = 2;    f48.value = 4;    f49.value = 5;    f50.value = 9;    f51.value = 3;    f52.value = 8;    f53.value = 6;    f54.value = 7;
        f55.value = 5;    f56.value = 8;    f57.value = 1;    f58.value = 4;    f59.value = 7;    f60.value = 9;    f61.value = 3;    f62.value = 2;    f63.value = 6;
        f64.value = 3;    f65.value = 4;    f66.value = 9;    f67.value = 6;    f68.value = 2;    f69.value = 5;    f70.value = 1;    f71.value = 7;    f72.value = 8;
        f73.value = 7;    f74.value = 6;    f75.value = 2;    f76.value = 3;    f77.value = 1;    f78.value = 8;    f79.value = 5;    f80.value = 9;    f81.value = 4;

    }

}

let validateRow = () =>{
    let valuesRow1 = [parseInt(f1.value), parseInt(f2.value), parseInt(f3.value), parseInt(f4.value), parseInt(f5.value), parseInt(f6.value), parseInt(f7.value), parseInt(f8.value), parseInt(f9.value)];
    let row1 = [f1, f2, f3, f4, f5, f6, f7, f8, f9];
    const setRow1 = new Set(valuesRow1);

    if (setRow1.size !== valuesRow1.length) {
        for (let i = 0; i < row1.length; i++) {
            row1[i].style.backgroundColor = "red";
        }
    }

    let valuesRow2 = [parseInt(f10.value), parseInt(f11.value), parseInt(f12.value), parseInt(f13.value), parseInt(f14.value), parseInt(f15.value), parseInt(f16.value), parseInt(f17.value), parseInt(f18.value)];
    let row2 = [f10, f11, f12, f13, f14, f15, f16, f17, f18];
    const setRow2 = new Set(valuesRow2);

    if (setRow2.size !== valuesRow2.length) {
        for (let i = 0; i < row2.length; i++) {
            row2[i].style.backgroundColor = "red";
        }
    }

    let valuesRow3 = [parseInt(f19.value), parseInt(f20.value), parseInt(f21.value), parseInt(f22.value), parseInt(f23.value), parseInt(f24.value), parseInt(f25.value), parseInt(f26.value), parseInt(f27.value)];
    let row3 = [f19, f20, f21, f22, f23, f24, f25, f26, f27];
    const setRow3 = new Set(valuesRow3);

    if (setRow3.size !== valuesRow3.length) {
        for (let i = 0; i < row3.length; i++) {
            row3[i].style.backgroundColor = "red";
        }
    }

    let valuesRow4 = [parseInt(f28.value), parseInt(f29.value), parseInt(f30.value), parseInt(f31.value), parseInt(f32.value), parseInt(f33.value), parseInt(f34.value), parseInt(f35.value), parseInt(f36.value)];
    let row4 = [f28, f29, f30, f31, f32, f33, f34, f35, f36];
    const setRow4 = new Set(valuesRow4);

    if (setRow4.size !== valuesRow4.length) {
        for (let i = 0; i < row4.length; i++) {
            row4[i].style.backgroundColor = "red";
        }
    }

    let valuesRow5 = [parseInt(f37.value), parseInt(f38.value), parseInt(f39.value), parseInt(f40.value), parseInt(f41.value), parseInt(f42.value), parseInt(f43.value), parseInt(f44.value), parseInt(f45.value)];
    let row5 = [f37, f38, f39, f40, f41, f42, f43, f44, f45];
    const setRow5 = new Set(valuesRow5);

    if (setRow5.size !== valuesRow5.length) {
        for (let i = 0; i < row5.length; i++) {
            row5[i].style.backgroundColor = "red";
        }
    }

    let valuesRow6 = [parseInt(f46.value), parseInt(f47.value), parseInt(f48.value), parseInt(f49.value), parseInt(f50.value), parseInt(f51.value), parseInt(f52.value), parseInt(f53.value), parseInt(f54.value)];
    let row6 = [f46, f47, f48, f49, f50, f51, f52, f53, f54];
    const setRow6 = new Set(valuesRow6);

    if (setRow6.size !== valuesRow6.length) {
        for (let i = 0; i < row6.length; i++) {
            row6[i].style.backgroundColor = "red";
        }
    }

    let valuesRow7 = [parseInt(f55.value), parseInt(f56.value), parseInt(f57.value), parseInt(f58.value), parseInt(f59.value), parseInt(f60.value), parseInt(f61.value), parseInt(f62.value), parseInt(f63.value)];
    let row7 = [f55, f56, f57, f58, f59, f60, f61, f62, f63];
    const setRow7 = new Set(valuesRow7);

    if (setRow7.size !== valuesRow7.length) {
        for (let i = 0; i < row7.length; i++) {
            row7[i].style.backgroundColor = "red";
        }
    }

    let valuesRow8 = [parseInt(f64.value), parseInt(f65.value), parseInt(f66.value), parseInt(f67.value), parseInt(f68.value), parseInt(f69.value), parseInt(f70.value), parseInt(f71.value), parseInt(f72.value)];
    let row8 = [f64, f65, f66, f67, f68, f69, f70, f71, f72];
    const setRow8 = new Set(valuesRow8);

    if (setRow8.size !== valuesRow8.length) {
        for (let i = 0; i < row8.length; i++) {
            row8[i].style.backgroundColor = "red";
        }
    }

    let valuesRow9 = [parseInt(f73.value), parseInt(f74.value), parseInt(f75.value), parseInt(f76.value), parseInt(f77.value), parseInt(f78.value), parseInt(f79.value), parseInt(f80.value), parseInt(f81.value)];
    let row9 = [f73, f74, f75, f76, f77, f78, f79, f80, f81];
    const setRow9 = new Set(valuesRow9);

    if (setRow9.size !== valuesRow9.length) {
        for (let i = 0; i < row9.length; i++) {
            row9[i].style.backgroundColor = "red";
        }
    }

}

let validateColumn = () =>{
    let valuesColumn1 = [parseInt(f1.value), parseInt(f10.value), parseInt(f19.value), parseInt(f28.value), parseInt(f37.value), parseInt(f46.value), parseInt(f55.value), parseInt(f64.value), parseInt(f73.value)];
    let column1 = [f1, f10, f19, f28, f37, f46, f55, f64, f73];
    const setColumn1 = new Set(valuesColumn1);

    if (setColumn1.size !== valuesColumn1.length) {
        for (let i = 0; i < column1.length; i++) {
            column1[i].style.backgroundColor = "red";
            console.log("SLAT");
        }
    }

    let valuesColumn2 = [parseInt(f2.value), parseInt(f11.value), parseInt(f20.value), parseInt(f29.value), parseInt(f38.value), parseInt(f47.value), parseInt(f56.value), parseInt(f65.value), parseInt(f74.value)];
    let column2 = [f2, f11, f20, f29, f38, f47, f56, f65, f74];
    const setColumn2 = new Set(valuesColumn2);

    if (setColumn2.size !== valuesColumn2.length) {
        for (let i = 0; i < column2.length; i++) {
            column2[i].style.backgroundColor = "red";
        }
    }

    let valuesColumn3 = [parseInt(f3.value), parseInt(f12.value), parseInt(f21.value), parseInt(f30.value), parseInt(f39.value), parseInt(f48.value), parseInt(f57.value), parseInt(f66.value), parseInt(f75.value)];
    let column3 = [f3, f12, f21, f30, f39, f48, f57, f66, f75];
    const setColumn3 = new Set(valuesColumn3);

    if (setColumn3.size !== valuesColumn3.length) {
        for (let i = 0; i < column3.length; i++) {
            column3[i].style.backgroundColor = "red";
        }
    }

    let valuesColumn4 = [parseInt(f4.value), parseInt(f13.value), parseInt(f22.value), parseInt(f31.value), parseInt(f40.value), parseInt(f49.value), parseInt(f58.value), parseInt(f67.value), parseInt(f76.value)];
    let column4 = [f4, f13, f22, f31, f40, f49, f58, f67, f76];
    const setColumn4 = new Set(valuesColumn4);

    if (setColumn4.size !== valuesColumn4.length) {
        for (let i = 0; i < column4.length; i++) {
            column4[i].style.backgroundColor = "red";
        }
    }

    let valuesColumn5 = [parseInt(f5.value), parseInt(f14.value), parseInt(f23.value), parseInt(f32.value), parseInt(f41.value), parseInt(f50.value), parseInt(f59.value), parseInt(f68.value), parseInt(f77.value)];
    let column5 = [f5, f14, f23, f32, f41, f50, f59, f68, f77];
    const setColumn5 = new Set(valuesColumn5);

    if (setColumn5.size !== valuesColumn5.length) {
        for (let i = 0; i < column5.length; i++) {
            column5[i].style.backgroundColor = "red";
        }
    }

    let valuesColumn6 = [parseInt(f6.value), parseInt(f15.value), parseInt(f24.value), parseInt(f33.value), parseInt(f42.value), parseInt(f51.value), parseInt(f60.value), parseInt(f69.value), parseInt(f78.value)];
    let column6 = [f6, f15, f24, f33, f42, f51, f60, f69, f78];
    const setColumn6 = new Set(valuesColumn6);

    if (setColumn6.size !== valuesColumn6.length) {
        for (let i = 0; i < column6.length; i++) {
            column6[i].style.backgroundColor = "red";
        }
    }

    let valuesColumn7 = [parseInt(f7.value), parseInt(f16.value), parseInt(f25.value), parseInt(f34.value), parseInt(f43.value), parseInt(f52.value), parseInt(f61.value), parseInt(f70.value), parseInt(f79.value)];
    let column7 = [f7, f16, f25, f34, f43, f52, f61, f70, f79];
    const setColumn7 = new Set(valuesColumn7);

    if (setColumn7.size !== valuesColumn7.length) {
        for (let i = 0; i < column7.length; i++) {
            column7[i].style.backgroundColor = "red";
        }
    }

    let valuesColumn8 = [parseInt(f8.value), parseInt(f17.value), parseInt(f26.value), parseInt(f35.value), parseInt(f44.value), parseInt(f53.value), parseInt(f62.value), parseInt(f71.value), parseInt(f80.value)];
    let column8 = [f8, f17, f26, f35, f44, f53, f62, f71, f80];
    const setColumn8 = new Set(valuesColumn8);

    if (setColumn8.size !== valuesColumn8.length) {
        for (let i = 0; i < column8.length; i++) {
            column8[i].style.backgroundColor = "red";
        }
    }

    let valuesColumn9 = [parseInt(f9.value), parseInt(f18.value), parseInt(f27.value), parseInt(f36.value), parseInt(f45.value), parseInt(f54.value), parseInt(f63.value), parseInt(f72.value), parseInt(f81.value)];
    let column9 = [f9, f18, f27, f36, f45, f54, f63, f72, f81];
    const setColumn9 = new Set(valuesColumn9);

    if (setColumn9.size !== valuesColumn9.length) {
        for (let i = 0; i < column9.length; i++) {
            column9[i].style.backgroundColor = "red";
        }
    }
}

let validateSquare = () =>{
    let valuesSquare1 = [
    parseInt(f1.value), parseInt(f2.value), parseInt(f3.value),
    parseInt(f10.value), parseInt(f11.value), parseInt(f12.value),
    parseInt(f19.value), parseInt(f20.value), parseInt(f21.value)
    ];
    let square1 = [f1, f2, f3, f10, f11, f12, f19, f20, f21];
    const setSquare1 = new Set(valuesSquare1);

    if (setSquare1.size !== valuesSquare1.length) {
        for (let i = 0; i < square1.length; i++) {
            square1[i].style.backgroundColor = "red";
        }
    }

    let valuesSquare2 = [
    parseInt(f4.value), parseInt(f5.value), parseInt(f6.value),
    parseInt(f13.value), parseInt(f14.value), parseInt(f15.value),
    parseInt(f22.value), parseInt(f23.value), parseInt(f24.value)
    ];
    let square2 = [f4, f5, f6, f13, f14, f15, f22, f23, f24];
    const setSquare2 = new Set(valuesSquare2);

    if (setSquare2.size !== valuesSquare2.length) {
        for (let i = 0; i < square2.length; i++) {
            square2[i].style.backgroundColor = "red";
        }
    }

    let valuesSquare3 = [
    parseInt(f7.value), parseInt(f8.value), parseInt(f9.value),
    parseInt(f16.value), parseInt(f17.value), parseInt(f18.value),
    parseInt(f25.value), parseInt(f26.value), parseInt(f27.value)
    ];
    let square3 = [f7, f8, f9, f16, f17, f18, f25, f26, f27];
    const setSquare3 = new Set(valuesSquare3);

    if (setSquare3.size !== valuesSquare3.length) {
        for (let i = 0; i < square3.length; i++) {
            square3[i].style.backgroundColor = "red";
        }
    }

    let valuesSquare4 = [
    parseInt(f28.value), parseInt(f29.value), parseInt(f30.value),
    parseInt(f37.value), parseInt(f38.value), parseInt(f39.value),
    parseInt(f46.value), parseInt(f47.value), parseInt(f48.value)
    ];
    let square4 = [f28, f29, f30, f37, f38, f39, f46, f47, f48];
    const setSquare4 = new Set(valuesSquare4);

    if (setSquare4.size !== valuesSquare4.length) {
        for (let i = 0; i < square4.length; i++) {
            square4[i].style.backgroundColor = "red";
        }
    }

    let valuesSquare5 = [
    parseInt(f31.value), parseInt(f32.value), parseInt(f33.value),
    parseInt(f40.value), parseInt(f41.value), parseInt(f42.value),
    parseInt(f49.value), parseInt(f50.value), parseInt(f51.value)
    ];
    let square5 = [f31, f32, f33, f40, f41, f42, f49, f50, f51];
    const setSquare5 = new Set(valuesSquare5);

    if (setSquare5.size !== valuesSquare5.length) {
        for (let i = 0; i < square5.length; i++) {
            square5[i].style.backgroundColor = "red";
        }
    }

    let valuesSquare6 = [
    parseInt(f34.value), parseInt(f35.value), parseInt(f36.value),
    parseInt(f43.value), parseInt(f44.value), parseInt(f45.value),
    parseInt(f52.value), parseInt(f53.value), parseInt(f54.value)
    ];
    let square6 = [f34, f35, f36, f43, f44, f45, f52, f53, f54];
    const setSquare6 = new Set(valuesSquare6);

    if (setSquare6.size !== valuesSquare6.length) {
        for (let i = 0; i < square6.length; i++) {
            square6[i].style.backgroundColor = "red";
        }
    }

    let valuesSquare7 = [
    parseInt(f55.value), parseInt(f56.value), parseInt(f57.value),
    parseInt(f64.value), parseInt(f65.value), parseInt(f66.value),
    parseInt(f73.value), parseInt(f74.value), parseInt(f75.value)
    ];
    let square7 = [f55, f56, f57, f64, f65, f66, f73, f74, f75];
    const setSquare7 = new Set(valuesSquare7);

    if (setSquare7.size !== valuesSquare7.length) {
        for (let i = 0; i < square7.length; i++) {
            square7[i].style.backgroundColor = "red";
        }
    }

    let valuesSquare8 = [
    parseInt(f58.value), parseInt(f59.value), parseInt(f60.value),
    parseInt(f67.value), parseInt(f68.value), parseInt(f69.value),
    parseInt(f76.value), parseInt(f77.value), parseInt(f78.value)
    ];
    let square8 = [f58, f59, f60, f67, f68, f69, f76, f77, f78];
    const setSquare8 = new Set(valuesSquare8);

    if (setSquare8.size !== valuesSquare8.length) {
        for (let i = 0; i < square8.length; i++) {
            square8[i].style.backgroundColor = "red";
        }
    }

    let valuesSquare9 = [
    parseInt(f61.value), parseInt(f62.value), parseInt(f63.value),
    parseInt(f70.value), parseInt(f71.value), parseInt(f72.value),
    parseInt(f79.value), parseInt(f80.value), parseInt(f81.value)
    ];
    let square9 = [f61, f62, f63, f70, f71, f72, f79, f80, f81];
    const setSquare9 = new Set(valuesSquare9);

    if (setSquare9.size !== valuesSquare9.length) {
        for (let i = 0; i < square9.length; i++) {
            square9[i].style.backgroundColor = "red";
        }
    }

}

let sudokuSolver = () => {
    let sudoku = [];
    for (let i = 1; i <= 81; i++) {
        let fieldId = "field" + i;
        sudoku.push(parseInt(document.getElementById(fieldId).value) || 0);
    }
    if (solveSudoku(sudoku)) {
        for (let i = 1; i <= 81; i++) {
            let fieldId = "field" + i;
            document.getElementById(fieldId).value = sudoku[i - 1];
        }
    } 
    else {
        alert("Nie znaleziono rozwiązania dla sudoku!");
    }
};
  
let solveSudoku = (sudoku) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (sudoku[row * 9 + col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValidMove(sudoku, row, col, num)) {
                        sudoku[row * 9 + col] = num;
                        if (solveSudoku(sudoku)) {
                        return true;
                        } 
                        else {
                            sudoku[row * 9 + col] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}
  
let isValidMove = (sudoku, row, col, num) => {
    for (let i = 0; i < 9; i++) {
        let rowCheck = 9 * row + i;
        let colCheck = 9 * i + col;
        if (sudoku[rowCheck] === num || sudoku[colCheck] === num) {
            return false;
        }
    }
    let boxStartRow = Math.floor(row / 3) * 3;
    let boxStartCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let boxRow = boxStartRow + i;
            let boxCol = boxStartCol + j;
            if (sudoku[9 * boxRow + boxCol] === num) {
                return false;
            }
        }
    }
    return true;
};
  
  
  

paint();

buttonReset.addEventListener("click", paint)

buttonCheck.addEventListener("click", function(){
    paint();
    validateRow();
    validateColumn();
    validateSquare();
});

buttonSolve.addEventListener("click", sudokuSolver);
buttonComplete.addEventListener("click", setValues)
