## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,517,728|11759788|
|{ ...object, __proto__: null }|2,570,917|1285713|
|{ ...object, newProp: true }|19,518,136|9759637|
|structuredClone|291,750|145876|
|JSON.parse + JSON.stringify|315,332|157675|
|loop + object.keys starting with {}|1,686,846|843440|
|loop + object.keys starting with { __proto__: null }|858,671|429468|
|loop + object.keys starting with { randomProp: true }|637,319|318660|
|object.keys + reduce(FN, {})|1,762,309|881176|
|object.keys + reduce(FN, { __proto__: null })|838,367|419193|
|object.keys + reduce(FN, { newProp: true })|657,407|328704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:14:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":23517728.72944376,"samples":11759788},{"name":"{ ...object, __proto__: null }","opsSec":2570917.837522071,"samples":1285713},{"name":"{ ...object, newProp: true }","opsSec":19518136.014597807,"samples":9759637},{"name":"structuredClone","opsSec":291750.250082,"samples":145876},{"name":"JSON.parse + JSON.stringify","opsSec":315332.3767041308,"samples":157675},{"name":"loop + object.keys starting with {}","opsSec":1686846.4385032596,"samples":843440},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":858671.3660716905,"samples":429468},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":637319.0644156134,"samples":318660},{"name":"object.keys + reduce(FN, {})","opsSec":1762309.9442354906,"samples":881176},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":838367.8895768494,"samples":419193},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":657407.9460925484,"samples":328704}]}-->
