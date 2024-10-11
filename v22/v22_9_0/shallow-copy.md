## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,866,701|11934262|
|{ ...object, __proto__: null }|2,542,283|1272917|
|{ ...object, newProp: true }|20,859,609|10429888|
|structuredClone|296,628|148329|
|JSON.parse + JSON.stringify|296,454|148228|
|loop + object.keys starting with {}|1,625,988|813079|
|loop + object.keys starting with { __proto__: null }|898,386|451373|
|loop + object.keys starting with { randomProp: true }|655,443|327751|
|object.keys + reduce(FN, {})|1,706,517|853313|
|object.keys + reduce(FN, { __proto__: null })|922,009|461012|
|object.keys + reduce(FN, { newProp: true })|648,998|324507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:31:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":23866701.25229196,"samples":11934262},{"name":"{ ...object, __proto__: null }","opsSec":2542283.6652694796,"samples":1272917},{"name":"{ ...object, newProp: true }","opsSec":20859609.33172144,"samples":10429888},{"name":"structuredClone","opsSec":296628.6414768385,"samples":148329},{"name":"JSON.parse + JSON.stringify","opsSec":296454.8420473869,"samples":148228},{"name":"loop + object.keys starting with {}","opsSec":1625988.4711900167,"samples":813079},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":898386.8705846079,"samples":451373},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":655443.5134644065,"samples":327751},{"name":"object.keys + reduce(FN, {})","opsSec":1706517.8545505214,"samples":853313},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":922009.0487012663,"samples":461012},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":648998.0670974527,"samples":324507}]}-->
