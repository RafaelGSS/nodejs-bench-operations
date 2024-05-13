## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,841,241|5420621|
|{ ...object, __proto__: null }|2,240,983|1120492|
|{ ...object, newProp: true }|9,657,846|4828924|
|structuredClone|312,504|156253|
|JSON.parse + JSON.stringify|290,708|145355|
|loop + object.keys starting with {}|1,492,450|746226|
|loop + object.keys starting with { __proto__: null }|835,251|417626|
|loop + object.keys starting with { randomProp: true }|668,454|334228|
|object.keys + reduce(FN, {})|1,539,735|769868|
|object.keys + reduce(FN, { __proto__: null })|826,725|413363|
|object.keys + reduce(FN, { newProp: true })|693,115|346558|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:26:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10841241.71811923,"samples":5420621},{"name":"{ ...object, __proto__: null }","opsSec":2240983.5742114806,"samples":1120492},{"name":"{ ...object, newProp: true }","opsSec":9657846.725165557,"samples":4828924},{"name":"structuredClone","opsSec":312504.9374831143,"samples":156253},{"name":"JSON.parse + JSON.stringify","opsSec":290708.7278587558,"samples":145355},{"name":"loop + object.keys starting with {}","opsSec":1492450.7135064034,"samples":746226},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":835251.6375012713,"samples":417626},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":668454.3596128158,"samples":334228},{"name":"object.keys + reduce(FN, {})","opsSec":1539735.162382399,"samples":769868},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":826725.8015857495,"samples":413363},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":693115.6922559536,"samples":346558}]}-->
