## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,147,809|11082521|
|{ ...object, __proto__: null }|22,196,997|11102757|
|{ ...object, newProp: true }|857,202|433635|
|structuredClone|290,150|145088|
|JSON.parse + JSON.stringify|186,116|93060|
|loop + object.keys starting with {}|1,524,305|762402|
|loop + object.keys starting with { __proto__: null }|778,412|389323|
|loop + object.keys starting with { randomProp: true }|513,768|256897|
|object.keys + reduce(FN, {})|1,549,730|774881|
|object.keys + reduce(FN, { __proto__: null })|831,908|415960|
|object.keys + reduce(FN, { newProp: true })|562,231|281120|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:59:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":11082521,"opsSec":22147809.807987656},{"name":"{ ...object, __proto__: null }","samples":11102757,"opsSec":22196997.544770014},{"name":"{ ...object, newProp: true }","samples":433635,"opsSec":857202.516469127},{"name":"structuredClone","samples":145088,"opsSec":290150.125572402},{"name":"JSON.parse + JSON.stringify","samples":93060,"opsSec":186116.91120374165},{"name":"loop + object.keys starting with {}","samples":762402,"opsSec":1524305.2838944364},{"name":"loop + object.keys starting with { __proto__: null }","samples":389323,"opsSec":778412.5182787924},{"name":"loop + object.keys starting with { randomProp: true }","samples":256897,"opsSec":513768.6352424781},{"name":"object.keys + reduce(FN, {})","samples":774881,"opsSec":1549730.710936946},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":415960,"opsSec":831908.637791825},{"name":"object.keys + reduce(FN, { newProp: true })","samples":281120,"opsSec":562231.0031794872}]}-->
