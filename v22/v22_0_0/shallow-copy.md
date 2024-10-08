## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,599,027|11805456|
|{ ...object, __proto__: null }|2,647,097|1323550|
|{ ...object, newProp: true }|20,829,055|10414772|
|structuredClone|310,533|155327|
|JSON.parse + JSON.stringify|305,548|152775|
|loop + object.keys starting with {}|1,680,064|840194|
|loop + object.keys starting with { __proto__: null }|902,717|451608|
|loop + object.keys starting with { randomProp: true }|668,210|334126|
|object.keys + reduce(FN, {})|1,758,206|879104|
|object.keys + reduce(FN, { __proto__: null })|947,292|473647|
|object.keys + reduce(FN, { newProp: true })|700,302|350152|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:39:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":23599027.24669024,"samples":11805456},{"name":"{ ...object, __proto__: null }","opsSec":2647097.294666565,"samples":1323550},{"name":"{ ...object, newProp: true }","opsSec":20829055.9752185,"samples":10414772},{"name":"structuredClone","opsSec":310533.8650057807,"samples":155327},{"name":"JSON.parse + JSON.stringify","opsSec":305548.4582024799,"samples":152775},{"name":"loop + object.keys starting with {}","opsSec":1680064.2482592317,"samples":840194},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":902717.3281153411,"samples":451608},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":668210.9544739105,"samples":334126},{"name":"object.keys + reduce(FN, {})","opsSec":1758206.9872727755,"samples":879104},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":947292.4559132968,"samples":473647},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":700302.3556900688,"samples":350152}]}-->
