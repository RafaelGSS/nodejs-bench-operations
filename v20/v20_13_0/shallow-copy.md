## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,786,643|5893322|
|{ ...object, __proto__: null }|11,529,024|5764513|
|{ ...object, newProp: true }|858,713|429615|
|structuredClone|306,740|153371|
|JSON.parse + JSON.stringify|189,424|94715|
|loop + object.keys starting with {}|1,438,971|719486|
|loop + object.keys starting with { __proto__: null }|890,258|445130|
|loop + object.keys starting with { randomProp: true }|652,335|326168|
|object.keys + reduce(FN, {})|1,474,573|737287|
|object.keys + reduce(FN, { __proto__: null })|853,783|426892|
|object.keys + reduce(FN, { newProp: true })|655,193|327597|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:26:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11786643.905707326,"samples":5893322},{"name":"{ ...object, __proto__: null }","opsSec":11529024.708750367,"samples":5764513},{"name":"{ ...object, newProp: true }","opsSec":858713.2916033529,"samples":429615},{"name":"structuredClone","opsSec":306740.6165998413,"samples":153371},{"name":"JSON.parse + JSON.stringify","opsSec":189424.67148390663,"samples":94715},{"name":"loop + object.keys starting with {}","opsSec":1438971.873367621,"samples":719486},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":890258.4794382841,"samples":445130},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":652335.1558780582,"samples":326168},{"name":"object.keys + reduce(FN, {})","opsSec":1474573.967556819,"samples":737287},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":853783.745571047,"samples":426892},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":655193.7929584648,"samples":327597}]}-->
