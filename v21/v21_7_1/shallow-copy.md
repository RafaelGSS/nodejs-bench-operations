## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|30,530,625|93|
|{ ...object, __proto__: null }|2,526,506|95|
|{ ...object, newProp: true }|27,576,696|91|
|structuredClone|266,932|96|
|JSON.parse + JSON.stringify|233,993|99|
|loop + object.keys starting with {}|1,466,931|94|
|loop + object.keys starting with { __proto__: null }|796,638|96|
|loop + object.keys starting with { randomProp: true }|625,747|95|
|object.keys + reduce(FN, {})|611,985|94|
|object.keys + reduce(FN, { __proto__: null })|793,650|96|
|object.keys + reduce(FN, { newProp: true })|634,705|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":30530624.93738457,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":2526506.426288135,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":27576695.78156796,"samples":4},{"name":"structuredClone","opsSec":266931.540711031,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":233992.92049881263,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":1466930.8495437799,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":796638.441894288,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":625746.6822823875,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":611985.390780642,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":793649.5521112782,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":634704.9798458576,"samples":9}]}-->
