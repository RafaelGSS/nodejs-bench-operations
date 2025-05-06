## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,123,983|10152285|
|{ ...object, __proto__: null }|20,129,240|10069606|
|{ ...object, newProp: true }|818,820|409618|
|structuredClone|282,023|141014|
|JSON.parse + JSON.stringify|186,412|93207|
|loop + object.keys starting with {}|1,502,487|751404|
|loop + object.keys starting with { __proto__: null }|733,161|366800|
|loop + object.keys starting with { randomProp: true }|524,586|262361|
|object.keys + reduce(FN, {})|1,527,605|764655|
|object.keys + reduce(FN, { __proto__: null })|753,117|376711|
|object.keys + reduce(FN, { newProp: true })|505,001|252611|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:38:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":10152285,"opsSec":20123983.92864312},{"name":"{ ...object, __proto__: null }","samples":10069606,"opsSec":20129240.85976467},{"name":"{ ...object, newProp: true }","samples":409618,"opsSec":818820.2440210984},{"name":"structuredClone","samples":141014,"opsSec":282023.7143676364},{"name":"JSON.parse + JSON.stringify","samples":93207,"opsSec":186412.9598156842},{"name":"loop + object.keys starting with {}","samples":751404,"opsSec":1502487.1528834247},{"name":"loop + object.keys starting with { __proto__: null }","samples":366800,"opsSec":733161.7012717456},{"name":"loop + object.keys starting with { randomProp: true }","samples":262361,"opsSec":524586.6849629605},{"name":"object.keys + reduce(FN, {})","samples":764655,"opsSec":1527605.433697652},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":376711,"opsSec":753117.0041818805},{"name":"object.keys + reduce(FN, { newProp: true })","samples":252611,"opsSec":505001.56883520965}]}-->
