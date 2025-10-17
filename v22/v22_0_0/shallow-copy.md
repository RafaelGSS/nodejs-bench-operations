## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,416,127|12712272|
|{ ...object, __proto__: null }|2,629,377|1314692|
|{ ...object, newProp: true }|23,602,251|11801131|
|structuredClone|303,546|151774|
|JSON.parse + JSON.stringify|302,795|151407|
|loop + object.keys starting with {}|1,724,090|862055|
|loop + object.keys starting with { __proto__: null }|927,615|463839|
|loop + object.keys starting with { randomProp: true }|665,117|332559|
|object.keys + reduce(FN, {})|1,772,185|886094|
|object.keys + reduce(FN, { __proto__: null })|939,049|469669|
|object.keys + reduce(FN, { newProp: true })|638,766|319391|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:58:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":12712272,"opsSec":25416127.398579706},{"name":"{ ...object, __proto__: null }","samples":1314692,"opsSec":2629377.757857203},{"name":"{ ...object, newProp: true }","samples":11801131,"opsSec":23602251.331782397},{"name":"structuredClone","samples":151774,"opsSec":303546.3808836044},{"name":"JSON.parse + JSON.stringify","samples":151407,"opsSec":302795.2696902075},{"name":"loop + object.keys starting with {}","samples":862055,"opsSec":1724090.6798398418},{"name":"loop + object.keys starting with { __proto__: null }","samples":463839,"opsSec":927615.7532724924},{"name":"loop + object.keys starting with { randomProp: true }","samples":332559,"opsSec":665117.1752547027},{"name":"object.keys + reduce(FN, {})","samples":886094,"opsSec":1772185.175136831},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":469669,"opsSec":939049.133461761},{"name":"object.keys + reduce(FN, { newProp: true })","samples":319391,"opsSec":638766.400046978}]}-->
