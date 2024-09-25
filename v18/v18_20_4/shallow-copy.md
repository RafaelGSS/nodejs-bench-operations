## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|8,422,483|4211242|
|{ ...object, __proto__: null }|8,586,325|4293163|
|{ ...object, newProp: true }|561,150|280576|
|structuredClone|243,994|121998|
|JSON.parse + JSON.stringify|188,705|94353|
|loop + object.keys starting with {}|1,082,516|541259|
|loop + object.keys starting with { __proto__: null }|625,493|312747|
|loop + object.keys starting with { randomProp: true }|454,761|227381|
|object.keys + reduce(FN, {})|1,035,673|517837|
|object.keys + reduce(FN, { __proto__: null })|592,088|296045|
|object.keys + reduce(FN, { newProp: true })|437,492|218747|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:47:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":8422483.889744041,"samples":4211242},{"name":"{ ...object, __proto__: null }","opsSec":8586325.011071732,"samples":4293163},{"name":"{ ...object, newProp: true }","opsSec":561150.8607759029,"samples":280576},{"name":"structuredClone","opsSec":243994.16714412606,"samples":121998},{"name":"JSON.parse + JSON.stringify","opsSec":188705.95874465298,"samples":94353},{"name":"loop + object.keys starting with {}","opsSec":1082516.9637962864,"samples":541259},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":625493.5122004736,"samples":312747},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":454761.97464579454,"samples":227381},{"name":"object.keys + reduce(FN, {})","opsSec":1035673.6112994503,"samples":517837},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":592088.4856690239,"samples":296045},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":437492.05284219695,"samples":218747}]}-->
