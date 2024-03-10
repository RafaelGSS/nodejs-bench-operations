## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,056,700|93|
|{ ...object, __proto__: null }|26,067,900|96|
|{ ...object, newProp: true }|742,988|89|
|structuredClone|241,125|94|
|JSON.parse + JSON.stringify|172,576|97|
|loop + object.keys starting with {}|1,214,472|94|
|loop + object.keys starting with { __proto__: null }|670,229|96|
|loop + object.keys starting with { randomProp: true }|553,284|98|
|object.keys + reduce(FN, {})|532,174|98|
|object.keys + reduce(FN, { __proto__: null })|677,756|96|
|object.keys + reduce(FN, { newProp: true })|544,927|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"{ ...object }","opsSec":25056700.094573002,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":26067899.512365855,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":742988.4686293519,"samples":3},{"name":"structuredClone","opsSec":241124.85764109564,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":172576.02883162824,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1214471.8466130863,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":670229.4992749435,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":553284.4503844155,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":532174.1736430413,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":677755.9100560877,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":544926.5287231943,"samples":5}]}-->
