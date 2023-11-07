## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,621,461|93|
|{ ...object, __proto__: null }|30,025,790|97|
|{ ...object, newProp: true }|905,094|90|
|structuredClone|271,053|96|
|JSON.parse + JSON.stringify|200,873|94|
|loop + object.keys starting with {}|1,656,637|95|
|loop + object.keys starting with { __proto__: null }|885,377|97|
|loop + object.keys starting with { randomProp: true }|639,886|98|
|object.keys + reduce(FN, {})|590,969|91|
|object.keys + reduce(FN, { __proto__: null })|881,798|93|
|object.keys + reduce(FN, { newProp: true })|641,680|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:53:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":29621461.400679614,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":30025789.54513864,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":905093.9504118102,"samples":3},{"name":"structuredClone","opsSec":271052.73334839783,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":200873.39716713663,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1656636.6852667036,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":885377.4589790177,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":639886.1844843965,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":590969.1153899104,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":881797.6139756466,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":641680.4243601972,"samples":6}]}-->
