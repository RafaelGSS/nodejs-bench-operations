## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,072,429|5036215|
|{ ...object, __proto__: null }|9,971,803|4985903|
|{ ...object, newProp: true }|775,893|388507|
|structuredClone|280,107|140054|
|JSON.parse + JSON.stringify|188,884|94443|
|loop + object.keys starting with {}|1,320,373|660187|
|loop + object.keys starting with { __proto__: null }|763,335|381668|
|loop + object.keys starting with { randomProp: true }|532,691|266346|
|object.keys + reduce(FN, {})|1,302,763|651382|
|object.keys + reduce(FN, { __proto__: null })|681,493|340747|
|object.keys + reduce(FN, { newProp: true })|528,416|264209|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:11:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":10072429.456084814,"samples":5036215},{"name":"{ ...object, __proto__: null }","opsSec":9971803.307713844,"samples":4985903},{"name":"{ ...object, newProp: true }","opsSec":775893.2795732272,"samples":388507},{"name":"structuredClone","opsSec":280107.2616372081,"samples":140054},{"name":"JSON.parse + JSON.stringify","opsSec":188884.80549248424,"samples":94443},{"name":"loop + object.keys starting with {}","opsSec":1320373.0255678645,"samples":660187},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":763335.4320777854,"samples":381668},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":532691.4151046243,"samples":266346},{"name":"object.keys + reduce(FN, {})","opsSec":1302763.0385615663,"samples":651382},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":681493.9850047026,"samples":340747},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":528416.7074929188,"samples":264209}]}-->
