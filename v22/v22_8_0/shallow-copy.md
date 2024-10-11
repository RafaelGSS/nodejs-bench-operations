## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,576,877|11789622|
|{ ...object, __proto__: null }|2,529,053|1264743|
|{ ...object, newProp: true }|19,983,020|9992253|
|structuredClone|305,559|152812|
|JSON.parse + JSON.stringify|295,198|147600|
|loop + object.keys starting with {}|1,619,133|809607|
|loop + object.keys starting with { __proto__: null }|882,584|441303|
|loop + object.keys starting with { randomProp: true }|656,203|328102|
|object.keys + reduce(FN, {})|1,699,281|849728|
|object.keys + reduce(FN, { __proto__: null })|876,223|438112|
|object.keys + reduce(FN, { newProp: true })|686,053|343075|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:23:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{ ...object }","opsSec":23576877.211604238,"samples":11789622},{"name":"{ ...object, __proto__: null }","opsSec":2529053.1070377743,"samples":1264743},{"name":"{ ...object, newProp: true }","opsSec":19983020.022665072,"samples":9992253},{"name":"structuredClone","opsSec":305559.88009252184,"samples":152812},{"name":"JSON.parse + JSON.stringify","opsSec":295198.24947438063,"samples":147600},{"name":"loop + object.keys starting with {}","opsSec":1619133.3509677884,"samples":809607},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":882584.6979357307,"samples":441303},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":656203.6180894943,"samples":328102},{"name":"object.keys + reduce(FN, {})","opsSec":1699281.6333130423,"samples":849728},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":876223.7529049016,"samples":438112},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":686053.200637603,"samples":343075}]}-->
