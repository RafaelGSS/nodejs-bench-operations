## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,632,468|4816235|
|{ ...object, __proto__: null }|2,128,037|1064019|
|{ ...object, newProp: true }|9,747,100|4873551|
|structuredClone|244,343|122172|
|JSON.parse + JSON.stringify|236,997|118499|
|loop + object.keys starting with {}|1,221,371|610686|
|loop + object.keys starting with { __proto__: null }|692,604|346303|
|loop + object.keys starting with { randomProp: true }|517,193|258597|
|object.keys + reduce(FN, {})|1,246,345|623173|
|object.keys + reduce(FN, { __proto__: null })|739,966|369984|
|object.keys + reduce(FN, { newProp: true })|502,300|251151|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:51:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9632468.757166581,"samples":4816235},{"name":"{ ...object, __proto__: null }","opsSec":2128037.086246123,"samples":1064019},{"name":"{ ...object, newProp: true }","opsSec":9747100.891940225,"samples":4873551},{"name":"structuredClone","opsSec":244343.36107098163,"samples":122172},{"name":"JSON.parse + JSON.stringify","opsSec":236997.28597046423,"samples":118499},{"name":"loop + object.keys starting with {}","opsSec":1221371.1755195512,"samples":610686},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":692604.6643268102,"samples":346303},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":517193.07797463593,"samples":258597},{"name":"object.keys + reduce(FN, {})","opsSec":1246345.7657095876,"samples":623173},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":739966.5169600465,"samples":369984},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":502300.25050449447,"samples":251151}]}-->
