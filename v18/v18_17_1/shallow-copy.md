## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,175,908|90|
|{ ...object, __proto__: null }|27,628,691|100|
|{ ...object, newProp: true }|650,303|85|
|structuredClone|258,694|99|
|JSON.parse + JSON.stringify|207,571|96|
|loop + object.keys starting with {}|522,722|97|
|loop + object.keys starting with { __proto__: null }|794,824|97|
|loop + object.keys starting with { randomProp: true }|553,260|99|
|object.keys + reduce(FN, {})|527,971|94|
|object.keys + reduce(FN, { __proto__: null })|778,498|96|
|object.keys + reduce(FN, { newProp: true })|532,471|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:49:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":27175907.81702423,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":27628691.081347786,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":650302.8006044526,"samples":3},{"name":"structuredClone","opsSec":258694.1660459079,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":207570.5325478689,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":522721.53039502254,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":794824.1128549366,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":553260.3512072372,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":527971.3241878118,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":778497.6417797894,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":532471.4666353541,"samples":4}]}-->
