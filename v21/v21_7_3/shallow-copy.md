## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,160,198|4580100|
|{ ...object, __proto__: null }|2,127,573|1063787|
|{ ...object, newProp: true }|8,602,931|4303044|
|structuredClone|269,802|134902|
|JSON.parse + JSON.stringify|241,771|120886|
|loop + object.keys starting with {}|1,236,405|618204|
|loop + object.keys starting with { __proto__: null }|662,815|331408|
|loop + object.keys starting with { randomProp: true }|477,101|238551|
|object.keys + reduce(FN, {})|1,243,600|621801|
|object.keys + reduce(FN, { __proto__: null })|657,015|328508|
|object.keys + reduce(FN, { newProp: true })|477,317|238659|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:53:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9160198.845805624,"samples":4580100},{"name":"{ ...object, __proto__: null }","opsSec":2127573.0851573506,"samples":1063787},{"name":"{ ...object, newProp: true }","opsSec":8602931.56723628,"samples":4303044},{"name":"structuredClone","opsSec":269802.1572510544,"samples":134902},{"name":"JSON.parse + JSON.stringify","opsSec":241771.4366726644,"samples":120886},{"name":"loop + object.keys starting with {}","opsSec":1236405.984661611,"samples":618204},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":662815.0044493368,"samples":331408},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":477101.96278612805,"samples":238551},{"name":"object.keys + reduce(FN, {})","opsSec":1243600.0152108264,"samples":621801},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":657015.4901551043,"samples":328508},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":477317.07591425534,"samples":238659}]}-->
