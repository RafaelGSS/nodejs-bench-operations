## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|8,818,913|4409457|
|{ ...object, __proto__: null }|8,924,831|4462416|
|{ ...object, newProp: true }|553,958|276980|
|structuredClone|247,124|123563|
|JSON.parse + JSON.stringify|196,426|98214|
|loop + object.keys starting with {}|1,120,305|560153|
|loop + object.keys starting with { __proto__: null }|666,195|333098|
|loop + object.keys starting with { randomProp: true }|485,881|242941|
|object.keys + reduce(FN, {})|1,095,050|547526|
|object.keys + reduce(FN, { __proto__: null })|620,419|310210|
|object.keys + reduce(FN, { newProp: true })|479,589|239795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:08:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":8818913.86333146,"samples":4409457},{"name":"{ ...object, __proto__: null }","opsSec":8924831.124790525,"samples":4462416},{"name":"{ ...object, newProp: true }","opsSec":553958.448658958,"samples":276980},{"name":"structuredClone","opsSec":247124.91426329545,"samples":123563},{"name":"JSON.parse + JSON.stringify","opsSec":196426.2978740946,"samples":98214},{"name":"loop + object.keys starting with {}","opsSec":1120305.2384182643,"samples":560153},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":666195.222667258,"samples":333098},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":485881.2817346152,"samples":242941},{"name":"object.keys + reduce(FN, {})","opsSec":1095050.2460215916,"samples":547526},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":620419.5149256061,"samples":310210},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":479589.5819956938,"samples":239795}]}-->
