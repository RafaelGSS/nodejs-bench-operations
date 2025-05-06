## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,932,807|11991778|
|{ ...object, __proto__: null }|2,443,917|1222094|
|{ ...object, newProp: true }|22,555,583|11279276|
|structuredClone|300,176|150118|
|JSON.parse + JSON.stringify|294,312|147183|
|loop + object.keys starting with {}|1,608,536|804624|
|loop + object.keys starting with { __proto__: null }|861,563|430783|
|loop + object.keys starting with { randomProp: true }|626,500|313251|
|object.keys + reduce(FN, {})|1,663,935|832398|
|object.keys + reduce(FN, { __proto__: null })|818,610|409415|
|object.keys + reduce(FN, { newProp: true })|595,513|297788|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:42:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":11991778,"opsSec":23932807.725723602},{"name":"{ ...object, __proto__: null }","samples":1222094,"opsSec":2443917.4387881868},{"name":"{ ...object, newProp: true }","samples":11279276,"opsSec":22555583.414555646},{"name":"structuredClone","samples":150118,"opsSec":300176.6316661423},{"name":"JSON.parse + JSON.stringify","samples":147183,"opsSec":294312.36392617336},{"name":"loop + object.keys starting with {}","samples":804624,"opsSec":1608536.4606795453},{"name":"loop + object.keys starting with { __proto__: null }","samples":430783,"opsSec":861563.2154276876},{"name":"loop + object.keys starting with { randomProp: true }","samples":313251,"opsSec":626500.6918665554},{"name":"object.keys + reduce(FN, {})","samples":832398,"opsSec":1663935.2296663413},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":409415,"opsSec":818610.6892846766},{"name":"object.keys + reduce(FN, { newProp: true })","samples":297788,"opsSec":595513.45441291}]}-->
