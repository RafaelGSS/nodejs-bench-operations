## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,454,084|5227043|
|{ ...object, __proto__: null }|2,179,677|1089839|
|{ ...object, newProp: true }|10,025,045|5012524|
|structuredClone|289,499|144750|
|JSON.parse + JSON.stringify|278,645|139323|
|loop + object.keys starting with {}|1,455,588|727795|
|loop + object.keys starting with { __proto__: null }|807,113|403557|
|loop + object.keys starting with { randomProp: true }|581,840|290921|
|object.keys + reduce(FN, {})|1,451,627|725814|
|object.keys + reduce(FN, { __proto__: null })|753,931|376966|
|object.keys + reduce(FN, { newProp: true })|584,857|292429|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:14:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":10454084.181036847,"samples":5227043},{"name":"{ ...object, __proto__: null }","opsSec":2179677.638167712,"samples":1089839},{"name":"{ ...object, newProp: true }","opsSec":10025045.77442851,"samples":5012524},{"name":"structuredClone","opsSec":289499.52753695234,"samples":144750},{"name":"JSON.parse + JSON.stringify","opsSec":278645.2961421572,"samples":139323},{"name":"loop + object.keys starting with {}","opsSec":1455588.8005964027,"samples":727795},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":807113.4850616807,"samples":403557},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":581840.5779823653,"samples":290921},{"name":"object.keys + reduce(FN, {})","opsSec":1451627.0303086329,"samples":725814},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":753931.6245418142,"samples":376966},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":584857.4724587429,"samples":292429}]}-->
