import React, { useState } from 'react';

function BMI() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [msg, setMessage] = useState("");
    const [isMetric, setIsMetric] = useState(true);
    const [mode, setMode] = useState("Light mode");
    const [mystyle, setMystyle] = useState({
        color: "black",
        backgroundColor: "white"
    });

    const [isChecked, setIsChecked] = useState(false); // Track checkbox state


    const togglemode = () => {
        setIsChecked(!isChecked)

        if (mystyle.color==="black") {
            setMystyle({
                color: "white",
                backgroundColor: "black"
            });
            setMode("Dark mode");
        } else {
            setMystyle({
                color: "black",
                backgroundColor: "white"
            });
            setMode("Light mode");
        }
    };

    const handlereset = () => {
        setHeight("");
        setWeight("");
        setBmi("");
        setMessage("");
    };

    const handleBmi = () => {
        if (!weight || !height) {
            setMessage("Please enter both weight and height.");
            setBmi("");
            return;
        }

        let userBmi = 0;

        if (isMetric) {
            const heightMeter = height / 100;
            userBmi = weight / (heightMeter * heightMeter);
        } else {
            userBmi = 703 * (weight / (height * height));
        }

        userBmi = userBmi.toFixed(2);
        setBmi(userBmi);

        // Category Message
        if (userBmi < 16) {
            setMessage("Severe Thinness");
        } else if (userBmi >= 16 && userBmi < 17) {
            setMessage("Moderate Thinness");
        } else if (userBmi >= 17 && userBmi < 18.5) {
            setMessage("Mild Thinness");
        } else if (userBmi >= 18.5 && userBmi < 25) {
            setMessage("Normal");
        } else if (userBmi >= 25 && userBmi < 30) {
            setMessage("Overweight");
        } else if (userBmi >= 30 && userBmi < 35) {
            setMessage("Obese Class I");
        } else if (userBmi >= 35 && userBmi < 40) {
            setMessage("Obese Class II");
        } else {
            setMessage("Obese Class III");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Metric / Imperial Toggle */}
            <div className='flex items-center gap-29'>
                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={() => setIsMetric(true)}
                        className={`font-semibold px-6 py-3 rounded-none shadow-md transition-all hover:text-blue-600
                            ${isMetric ? "text-white bg-black" : "bg-white text-black"}`}
                    >
                        kg / cm
                    </button>
                    <button
                        onClick={() => setIsMetric(false)}
                        className={`font-semibold px-6 py-3 rounded-none shadow-md transition-all hover:text-blue-600
                            ${!isMetric ? "text-white bg-black" : "bg-white text-black"}`}
                    >
                        lbs / feet
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input onChange={togglemode} type="checkbox" value="" class="sr-only peer" />
                        <div class="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
                    </label>
                </div>
            </div>

            <div className="m-0 p-7 shadow-xl w-96" style={mystyle}>
                <h1 className="text-center text-2xl font-semibold mb-6">BMI Calculator</h1>

                <div className="flex flex-col gap-4">
                    <div>
                        <label className="block text-lg mb-2">Weight</label>
                        <input
                            type="number"
                            placeholder={isMetric ? "kg" : "lbs"}
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            style={mystyle}
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-lg mb-2">Height</label>
                        <input
                            type="number"
                            placeholder={isMetric ? "cm" : "feet"}
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            style={mystyle}
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-evenly mt-4">
                    <button
                        onClick={handleBmi}
                        className="bg-green-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-600 transition-all"
                    >
                        Calculate
                    </button>
                    <button
                        onClick={handlereset}
                        className="bg-red-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-red-600 transition-all"
                    >
                        Reset
                    </button>
                </div>

                {/* Results */}
                {(bmi || msg) && (
                    <div className="text-center mt-8">
                        <h2 className="text-3xl font-semibold">{`Your BMI: ${bmi}`}</h2>
                        <p className="text-xl mt-4">{msg}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BMI;
