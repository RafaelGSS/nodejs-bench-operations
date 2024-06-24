## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,935,241|5467621|
|{ ...object, __proto__: null }|2,167,806|1083904|
|{ ...object, newProp: true }|10,437,227|5218614|
|structuredClone|310,125|155063|
|JSON.parse + JSON.stringify|287,744|143873|
|loop + object.keys starting with {}|1,492,585|746293|
|loop + object.keys starting with { __proto__: null }|900,342|450172|
|loop + object.keys starting with { randomProp: true }|671,675|335838|
|object.keys + reduce(FN, {})|1,555,738|777984|
|object.keys + reduce(FN, { __proto__: null })|835,302|417652|
|object.keys + reduce(FN, { newProp: true })|695,883|347942|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:02:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10935241.103313657,"samples":5467621},{"name":"{ ...object, __proto__: null }","opsSec":2167806.2310695243,"samples":1083904},{"name":"{ ...object, newProp: true }","opsSec":10437227.833014227,"samples":5218614},{"name":"structuredClone","opsSec":310125.26376247953,"samples":155063},{"name":"JSON.parse + JSON.stringify","opsSec":287744.4571140085,"samples":143873},{"name":"loop + object.keys starting with {}","opsSec":1492585.922386543,"samples":746293},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":900342.7467221317,"samples":450172},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":671675.3901193896,"samples":335838},{"name":"object.keys + reduce(FN, {})","opsSec":1555738.4134590856,"samples":777984},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":835302.3861958878,"samples":417652},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":695883.0953524014,"samples":347942}]}-->
