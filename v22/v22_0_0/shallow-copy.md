## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,993,427|92|
|{ ...object, __proto__: null }|2,717,416|95|
|{ ...object, newProp: true }|25,913,607|93|
|structuredClone|324,165|97|
|JSON.parse + JSON.stringify|300,362|95|
|loop + object.keys starting with {}|1,767,972|97|
|loop + object.keys starting with { __proto__: null }|921,975|92|
|loop + object.keys starting with { randomProp: true }|734,970|96|
|object.keys + reduce(FN, {})|695,480|94|
|object.keys + reduce(FN, { __proto__: null })|925,961|99|
|object.keys + reduce(FN, { newProp: true })|732,721|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:32:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":27993426.97559816,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":2717415.746838682,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":25913606.980589725,"samples":5},{"name":"structuredClone","opsSec":324164.87100520555,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":300362.2131628957,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1767971.6257170811,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":921975.0823336297,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":734969.6021740511,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":695480.2706723561,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":925961.2186548308,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":732720.5284054707,"samples":5}]}-->
