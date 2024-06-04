## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,373,045|5186523|
|{ ...object, __proto__: null }|2,264,497|1132249|
|{ ...object, newProp: true }|9,931,504|4965753|
|structuredClone|311,133|155567|
|JSON.parse + JSON.stringify|289,917|144959|
|loop + object.keys starting with {}|1,457,029|728515|
|loop + object.keys starting with { __proto__: null }|892,235|446118|
|loop + object.keys starting with { randomProp: true }|652,421|326211|
|object.keys + reduce(FN, {})|1,487,645|743823|
|object.keys + reduce(FN, { __proto__: null })|889,207|444604|
|object.keys + reduce(FN, { newProp: true })|691,236|345619|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:34:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"{ ...object }","opsSec":10373045.917015143,"samples":5186523},{"name":"{ ...object, __proto__: null }","opsSec":2264497.2934764773,"samples":1132249},{"name":"{ ...object, newProp: true }","opsSec":9931504.212338192,"samples":4965753},{"name":"structuredClone","opsSec":311133.2663478712,"samples":155567},{"name":"JSON.parse + JSON.stringify","opsSec":289917.2711477199,"samples":144959},{"name":"loop + object.keys starting with {}","opsSec":1457029.825154724,"samples":728515},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":892235.8447513616,"samples":446118},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":652421.3880276455,"samples":326211},{"name":"object.keys + reduce(FN, {})","opsSec":1487645.53585285,"samples":743823},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":889207.9697672682,"samples":444604},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":691236.2511729875,"samples":345619}]}-->
