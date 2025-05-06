## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,098,798|10055421|
|{ ...object, __proto__: null }|19,761,937|9887981|
|{ ...object, newProp: true }|567,216|283609|
|structuredClone|245,702|122852|
|JSON.parse + JSON.stringify|193,804|96904|
|loop + object.keys starting with {}|1,231,005|615511|
|loop + object.keys starting with { __proto__: null }|694,511|347302|
|loop + object.keys starting with { randomProp: true }|468,764|234535|
|object.keys + reduce(FN, {})|1,231,927|615988|
|object.keys + reduce(FN, { __proto__: null })|699,947|350003|
|object.keys + reduce(FN, { newProp: true })|491,230|245672|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:39:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":10055421,"opsSec":20098798.598891556},{"name":"{ ...object, __proto__: null }","samples":9887981,"opsSec":19761937.940740354},{"name":"{ ...object, newProp: true }","samples":283609,"opsSec":567216.6420833588},{"name":"structuredClone","samples":122852,"opsSec":245702.23192673904},{"name":"JSON.parse + JSON.stringify","samples":96904,"opsSec":193804.72508775548},{"name":"loop + object.keys starting with {}","samples":615511,"opsSec":1231005.4454387696},{"name":"loop + object.keys starting with { __proto__: null }","samples":347302,"opsSec":694511.6549523108},{"name":"loop + object.keys starting with { randomProp: true }","samples":234535,"opsSec":468764.8162915312},{"name":"object.keys + reduce(FN, {})","samples":615988,"opsSec":1231927.486695574},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":350003,"opsSec":699947.8553316576},{"name":"object.keys + reduce(FN, { newProp: true })","samples":245672,"opsSec":491230.2487586765}]}-->
