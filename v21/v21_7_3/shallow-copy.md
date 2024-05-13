## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,212,001|5106001|
|{ ...object, __proto__: null }|2,218,291|1109146|
|{ ...object, newProp: true }|9,830,326|4915164|
|structuredClone|278,517|139259|
|JSON.parse + JSON.stringify|249,025|124513|
|loop + object.keys starting with {}|1,427,918|713960|
|loop + object.keys starting with { __proto__: null }|818,010|409006|
|loop + object.keys starting with { randomProp: true }|653,085|326543|
|object.keys + reduce(FN, {})|1,471,564|735783|
|object.keys + reduce(FN, { __proto__: null })|830,504|415253|
|object.keys + reduce(FN, { newProp: true })|666,013|333007|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:26:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10212001.754912192,"samples":5106001},{"name":"{ ...object, __proto__: null }","opsSec":2218291.5785230007,"samples":1109146},{"name":"{ ...object, newProp: true }","opsSec":9830326.309171502,"samples":4915164},{"name":"structuredClone","opsSec":278517.3928320944,"samples":139259},{"name":"JSON.parse + JSON.stringify","opsSec":249025.43172388384,"samples":124513},{"name":"loop + object.keys starting with {}","opsSec":1427918.3207673875,"samples":713960},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":818010.2314618492,"samples":409006},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":653085.6917434444,"samples":326543},{"name":"object.keys + reduce(FN, {})","opsSec":1471564.8433487476,"samples":735783},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":830504.3788561574,"samples":415253},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":666013.352635953,"samples":333007}]}-->
