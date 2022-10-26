import React, { useState } from "react"
import ReactXnft, { Button, Text, View } from "react-xnft";

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
});

export function App() {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <View style={{ height: "100%", width: "100%", textAlign: "center", backgroundColor: "#111827" }}>
      <View style={{ paddingTop: "70px" }}>
        <Text style={{
          fontSize: "32px",
          lineHeight: "19.08px",
        }}>
          Simple Counter App
        </Text>
      </View>

      <View style={{ marginTop: "170px", textAlign: "center" }}>
        <Text style={{
          fontSize: "20px"
        }}>Counter Value: {counter}</Text>
        <Button
          style={{ margin: "10px", height: "50px", fontSize: "16px", width: "140px" }}
          onClick={incrementCounter}
        >Increment
        </Button>
        
        <Button
          style={{ margin: "10px",  height: "50px", fontSize: "16px", width: "140px" }}
          onClick={resetCounter}
        >Reset
        </Button>
      </View>
    </View>
  );
}
