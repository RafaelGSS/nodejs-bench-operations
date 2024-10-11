## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,292,701|11646383|
|{ ...object, __proto__: null }|2,556,715|1278359|
|{ ...object, newProp: true }|20,484,043|10242723|
|structuredClone|303,968|151985|
|JSON.parse + JSON.stringify|299,845|149943|
|loop + object.keys starting with {}|1,634,080|817081|
|loop + object.keys starting with { __proto__: null }|880,934|440468|
|loop + object.keys starting with { randomProp: true }|652,867|326681|
|object.keys + reduce(FN, {})|1,709,115|854792|
|object.keys + reduce(FN, { __proto__: null })|903,242|451622|
|object.keys + reduce(FN, { newProp: true })|677,099|338572|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:50:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":23292701.665558,"samples":11646383},{"name":"{ ...object, __proto__: null }","opsSec":2556715.003530016,"samples":1278359},{"name":"{ ...object, newProp: true }","opsSec":20484043.867197286,"samples":10242723},{"name":"structuredClone","opsSec":303968.0734503505,"samples":151985},{"name":"JSON.parse + JSON.stringify","opsSec":299845.489674963,"samples":149943},{"name":"loop + object.keys starting with {}","opsSec":1634080.063957433,"samples":817081},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":880934.5587910619,"samples":440468},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":652867.3589626862,"samples":326681},{"name":"object.keys + reduce(FN, {})","opsSec":1709115.0256734153,"samples":854792},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":903242.8908177301,"samples":451622},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":677099.8869423658,"samples":338572}]}-->
