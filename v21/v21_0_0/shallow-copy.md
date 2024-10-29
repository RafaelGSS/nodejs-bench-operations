## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,314,355|12159045|
|{ ...object, __proto__: null }|2,568,263|1284200|
|{ ...object, newProp: true }|20,545,083|10273322|
|structuredClone|272,109|136055|
|JSON.parse + JSON.stringify|273,144|136573|
|loop + object.keys starting with {}|1,581,570|790827|
|loop + object.keys starting with { __proto__: null }|870,741|435727|
|loop + object.keys starting with { randomProp: true }|635,933|317967|
|object.keys + reduce(FN, {})|1,624,367|812184|
|object.keys + reduce(FN, { __proto__: null })|889,153|444720|
|object.keys + reduce(FN, { newProp: true })|664,229|332115|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:12:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":24314355.02329616,"samples":12159045},{"name":"{ ...object, __proto__: null }","opsSec":2568263.414615084,"samples":1284200},{"name":"{ ...object, newProp: true }","opsSec":20545083.107855964,"samples":10273322},{"name":"structuredClone","opsSec":272109.859047093,"samples":136055},{"name":"JSON.parse + JSON.stringify","opsSec":273144.53976929036,"samples":136573},{"name":"loop + object.keys starting with {}","opsSec":1581570.4203295673,"samples":790827},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":870741.2164646493,"samples":435727},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":635933.047372295,"samples":317967},{"name":"object.keys + reduce(FN, {})","opsSec":1624367.116344289,"samples":812184},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":889153.3191868277,"samples":444720},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":664229.9295916274,"samples":332115}]}-->
