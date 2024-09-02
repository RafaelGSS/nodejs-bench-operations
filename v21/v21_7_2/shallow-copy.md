## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,676,198|4838100|
|{ ...object, __proto__: null }|2,172,126|1086064|
|{ ...object, newProp: true }|9,153,897|4576949|
|structuredClone|279,127|139564|
|JSON.parse + JSON.stringify|243,399|121700|
|loop + object.keys starting with {}|1,269,083|634542|
|loop + object.keys starting with { __proto__: null }|732,581|366291|
|loop + object.keys starting with { randomProp: true }|504,223|252112|
|object.keys + reduce(FN, {})|1,316,415|658208|
|object.keys + reduce(FN, { __proto__: null })|736,715|368358|
|object.keys + reduce(FN, { newProp: true })|515,888|257945|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:12:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":9676198.064788667,"samples":4838100},{"name":"{ ...object, __proto__: null }","opsSec":2172126.7358222543,"samples":1086064},{"name":"{ ...object, newProp: true }","opsSec":9153897.212723013,"samples":4576949},{"name":"structuredClone","opsSec":279127.7124987264,"samples":139564},{"name":"JSON.parse + JSON.stringify","opsSec":243399.6202964142,"samples":121700},{"name":"loop + object.keys starting with {}","opsSec":1269083.1903292304,"samples":634542},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":732581.1487388073,"samples":366291},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":504223.7388109546,"samples":252112},{"name":"object.keys + reduce(FN, {})","opsSec":1316415.9289117916,"samples":658208},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":736715.7450951939,"samples":368358},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":515888.3212995511,"samples":257945}]}-->
