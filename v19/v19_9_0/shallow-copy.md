## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,598,985|86|
|{ ...object, __proto__: null }|11,995,217|87|
|{ ...object, newProp: true }|407,334|78|
|structuredClone|143,457|88|
|JSON.parse + JSON.stringify|111,615|88|
|loop + object.keys starting with {}|729,698|86|
|loop + object.keys starting with { __proto__: null }|368,685|83|
|loop + object.keys starting with { randomProp: true }|275,521|86|
|object.keys + reduce(FN, {})|261,997|84|
|object.keys + reduce(FN, { __proto__: null })|369,137|87|
|object.keys + reduce(FN, { newProp: true })|268,473|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":11598985.152135428,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":11995217.345300237,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":407334.18692103546,"samples":3},{"name":"structuredClone","opsSec":143456.9373619053,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":111615.18628682136,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":729697.5855420296,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":368684.819808064,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":275521.3221572913,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":261997.1181008369,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":369137.29719785246,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":268473.10105602257,"samples":5}]}-->
