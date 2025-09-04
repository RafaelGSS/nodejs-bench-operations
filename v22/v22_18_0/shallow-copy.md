## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,768,708|11885402|
|{ ...object, __proto__: null }|2,537,992|1268998|
|{ ...object, newProp: true }|22,787,319|11393663|
|structuredClone|277,637|138819|
|JSON.parse + JSON.stringify|289,582|144831|
|loop + object.keys starting with {}|1,663,739|831981|
|loop + object.keys starting with { __proto__: null }|877,480|438801|
|loop + object.keys starting with { randomProp: true }|634,206|317138|
|object.keys + reduce(FN, {})|1,720,000|860460|
|object.keys + reduce(FN, { __proto__: null })|844,226|422891|
|object.keys + reduce(FN, { newProp: true })|583,325|291726|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:10:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":11885402,"opsSec":23768708.693253856},{"name":"{ ...object, __proto__: null }","samples":1268998,"opsSec":2537992.436658619},{"name":"{ ...object, newProp: true }","samples":11393663,"opsSec":22787319.118229628},{"name":"structuredClone","samples":138819,"opsSec":277637.1054532463},{"name":"JSON.parse + JSON.stringify","samples":144831,"opsSec":289582.8905876177},{"name":"loop + object.keys starting with {}","samples":831981,"opsSec":1663739.2951854249},{"name":"loop + object.keys starting with { __proto__: null }","samples":438801,"opsSec":877480.7356722531},{"name":"loop + object.keys starting with { randomProp: true }","samples":317138,"opsSec":634206.0610240024},{"name":"object.keys + reduce(FN, {})","samples":860460,"opsSec":1720000.0098347394},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":422891,"opsSec":844226.6980387372},{"name":"object.keys + reduce(FN, { newProp: true })","samples":291726,"opsSec":583325.7088173896}]}-->
