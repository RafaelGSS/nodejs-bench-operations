## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,637,486|5818744|
|{ ...object, __proto__: null }|10,680,607|5340304|
|{ ...object, newProp: true }|851,126|425564|
|structuredClone|299,876|149939|
|JSON.parse + JSON.stringify|187,142|93572|
|loop + object.keys starting with {}|1,413,358|706680|
|loop + object.keys starting with { __proto__: null }|844,474|422238|
|loop + object.keys starting with { randomProp: true }|643,325|321663|
|object.keys + reduce(FN, {})|1,461,595|730798|
|object.keys + reduce(FN, { __proto__: null })|817,241|408621|
|object.keys + reduce(FN, { newProp: true })|635,333|317667|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:00:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11637486.97590233,"samples":5818744},{"name":"{ ...object, __proto__: null }","opsSec":10680607.40184955,"samples":5340304},{"name":"{ ...object, newProp: true }","opsSec":851126.5615954552,"samples":425564},{"name":"structuredClone","opsSec":299876.4502385451,"samples":149939},{"name":"JSON.parse + JSON.stringify","opsSec":187142.45083455078,"samples":93572},{"name":"loop + object.keys starting with {}","opsSec":1413358.4085583354,"samples":706680},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":844474.3110515957,"samples":422238},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":643325.7491033761,"samples":321663},{"name":"object.keys + reduce(FN, {})","opsSec":1461595.20781456,"samples":730798},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":817241.427932005,"samples":408621},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":635333.8259186161,"samples":317667}]}-->
