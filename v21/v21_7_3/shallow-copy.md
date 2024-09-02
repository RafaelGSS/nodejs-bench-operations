## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,509,136|4754569|
|{ ...object, __proto__: null }|2,169,932|1084967|
|{ ...object, newProp: true }|9,364,555|4682278|
|structuredClone|278,515|139258|
|JSON.parse + JSON.stringify|246,799|123400|
|loop + object.keys starting with {}|1,278,851|639426|
|loop + object.keys starting with { __proto__: null }|732,660|366331|
|loop + object.keys starting with { randomProp: true }|518,330|259166|
|object.keys + reduce(FN, {})|1,335,404|667703|
|object.keys + reduce(FN, { __proto__: null })|734,847|367424|
|object.keys + reduce(FN, { newProp: true })|523,283|261642|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:13:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":9509136.40248184,"samples":4754569},{"name":"{ ...object, __proto__: null }","opsSec":2169932.177256875,"samples":1084967},{"name":"{ ...object, newProp: true }","opsSec":9364555.531842245,"samples":4682278},{"name":"structuredClone","opsSec":278515.810609284,"samples":139258},{"name":"JSON.parse + JSON.stringify","opsSec":246799.45407959694,"samples":123400},{"name":"loop + object.keys starting with {}","opsSec":1278851.1994372963,"samples":639426},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":732660.1947243065,"samples":366331},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":518330.5683711266,"samples":259166},{"name":"object.keys + reduce(FN, {})","opsSec":1335404.659250334,"samples":667703},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":734847.2871972378,"samples":367424},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":523283.46520476096,"samples":261642}]}-->
