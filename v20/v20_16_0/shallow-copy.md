## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,825,064|5412533|
|{ ...object, __proto__: null }|10,824,428|5412215|
|{ ...object, newProp: true }|817,201|408601|
|structuredClone|274,466|137234|
|JSON.parse + JSON.stringify|194,920|97461|
|loop + object.keys starting with {}|1,323,106|661554|
|loop + object.keys starting with { __proto__: null }|772,411|386206|
|loop + object.keys starting with { randomProp: true }|488,704|244353|
|object.keys + reduce(FN, {})|1,291,695|645848|
|object.keys + reduce(FN, { __proto__: null })|719,463|359732|
|object.keys + reduce(FN, { newProp: true })|524,875|262438|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":10825064.354622308,"samples":5412533},{"name":"{ ...object, __proto__: null }","opsSec":10824428.073237447,"samples":5412215},{"name":"{ ...object, newProp: true }","opsSec":817201.4720865049,"samples":408601},{"name":"structuredClone","opsSec":274466.8373585806,"samples":137234},{"name":"JSON.parse + JSON.stringify","opsSec":194920.90922236597,"samples":97461},{"name":"loop + object.keys starting with {}","opsSec":1323106.737754089,"samples":661554},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":772411.8038095103,"samples":386206},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":488704.54463734134,"samples":244353},{"name":"object.keys + reduce(FN, {})","opsSec":1291695.2327336648,"samples":645848},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":719463.8805726616,"samples":359732},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":524875.0793697347,"samples":262438}]}-->
