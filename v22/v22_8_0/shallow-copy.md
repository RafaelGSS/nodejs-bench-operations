## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,866,895|11934569|
|{ ...object, __proto__: null }|2,497,880|1249013|
|{ ...object, newProp: true }|20,378,798|10190479|
|structuredClone|302,377|151189|
|JSON.parse + JSON.stringify|298,582|149299|
|loop + object.keys starting with {}|1,640,140|820160|
|loop + object.keys starting with { __proto__: null }|882,370|441222|
|loop + object.keys starting with { randomProp: true }|661,017|330518|
|object.keys + reduce(FN, {})|1,723,515|861929|
|object.keys + reduce(FN, { __proto__: null })|879,212|439607|
|object.keys + reduce(FN, { newProp: true })|682,910|341537|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:14:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":23866895.275584742,"samples":11934569},{"name":"{ ...object, __proto__: null }","opsSec":2497880.1188053014,"samples":1249013},{"name":"{ ...object, newProp: true }","opsSec":20378798.580987163,"samples":10190479},{"name":"structuredClone","opsSec":302377.8627204503,"samples":151189},{"name":"JSON.parse + JSON.stringify","opsSec":298582.0270558806,"samples":149299},{"name":"loop + object.keys starting with {}","opsSec":1640140.1159926385,"samples":820160},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":882370.7367577269,"samples":441222},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":661017.3143625575,"samples":330518},{"name":"object.keys + reduce(FN, {})","opsSec":1723515.5443553987,"samples":861929},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":879212.2222328866,"samples":439607},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":682910.1602918038,"samples":341537}]}-->
