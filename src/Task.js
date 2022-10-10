import React from "react";
const mergeArray = [];

export default function NameList({ names }, { ages }) {
    names = ['Ahmad', 'Yousef', 'Shatha', 'Rana', 'Osama', 'Ahmad'];
    ages = [30, 12, 14, 22, 22, 38];
    const uniqueNames = Array.from(new Set(names));
    const uniqueages = Array.from(new Set(ages));
    var i = 0;
    for (i = 0; i < uniqueNames.length; i++) {
        mergeArray[i] = [uniqueNames[i] + " : " + uniqueages[i]];

    }



    const button = (e) => {
        var el_down =
            document.getElementById("GFG_DOWN");
        e.preventDefault();

        if (mergeArray.length > 0) {
            mergeArray.pop(); alert('array will be : ' + mergeArray)
        } else {
            alert('array is empty now!!')
        }
        el_down.innerHTML =
            "Remaining array = [" + mergeArray + "]";

    }

    return (
        <div>
            <h2>before: </h2>
            <h3>names Array: </h3>
            {names.map((n) =>
                <ul>
                    <li>{n}</li>
                </ul>
            )}
            <h3>ages Array: </h3>
            {ages.map((n) =>
                <ul>
                    <li>{n}</li>
                </ul>
            )}
            <h2>After: </h2>
            {mergeArray.map((name) =>
                <ul>
                    <li>{name}</li>
                </ul>
            )}
            <div >
                <p>click the button to delete item:</p>
                <button on onClick={button}>delete</button>

                <p id="GFG_DOWN">
                </p>

            </div>

        </div>

    );
}








