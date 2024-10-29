## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,580,595|10290308|
|{ ...object, __proto__: null }|19,821,049|9913160|
|{ ...object, newProp: true }|606,356|304381|
|structuredClone|250,854|125456|
|JSON.parse + JSON.stringify|199,343|99672|
|loop + object.keys starting with {}|1,283,426|641730|
|loop + object.keys starting with { __proto__: null }|754,789|377626|
|loop + object.keys starting with { randomProp: true }|525,945|263000|
|object.keys + reduce(FN, {})|1,309,568|654911|
|object.keys + reduce(FN, { __proto__: null })|756,896|378449|
|object.keys + reduce(FN, { newProp: true })|530,831|265598|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:10:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":20580595.172437686,"samples":10290308},{"name":"{ ...object, __proto__: null }","opsSec":19821049.34512654,"samples":9913160},{"name":"{ ...object, newProp: true }","opsSec":606356.7416712565,"samples":304381},{"name":"structuredClone","opsSec":250854.7574528968,"samples":125456},{"name":"JSON.parse + JSON.stringify","opsSec":199343.20143113506,"samples":99672},{"name":"loop + object.keys starting with {}","opsSec":1283426.487167567,"samples":641730},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":754789.5479918409,"samples":377626},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":525945.7655245507,"samples":263000},{"name":"object.keys + reduce(FN, {})","opsSec":1309568.268528836,"samples":654911},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":756896.4589588096,"samples":378449},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":530831.0462240863,"samples":265598}]}-->
