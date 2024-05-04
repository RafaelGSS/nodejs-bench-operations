## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,951,285|94|
|{ ...object, __proto__: null }|28,368,755|99|
|{ ...object, newProp: true }|756,400|85|
|structuredClone|281,098|95|
|JSON.parse + JSON.stringify|190,340|95|
|loop + object.keys starting with {}|1,255,084|95|
|loop + object.keys starting with { __proto__: null }|774,669|98|
|loop + object.keys starting with { randomProp: true }|576,331|97|
|object.keys + reduce(FN, {})|552,069|98|
|object.keys + reduce(FN, { __proto__: null })|779,490|98|
|object.keys + reduce(FN, { newProp: true })|580,712|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:25:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":27951285.204326782,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":28368754.841962107,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":756399.7694559229,"samples":3},{"name":"structuredClone","opsSec":281098.2706215595,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":190340.13570065508,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1255084.3380508912,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":774668.8288732525,"samples":8},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":576331.4491156212,"samples":7},{"name":"object.keys + reduce(FN, {})","opsSec":552068.9157026362,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":779489.9200637967,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":580711.9609901464,"samples":5}]}-->
