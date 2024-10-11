## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,244,260|1622452|
|Using delete property (proto: null)|16,551,248|8275625|
|Using delete property (cached proto: null)|3,181,796|1592033|
|Using undefined assignment|81,000,685|40500343|
|Using undefined assignment (proto: null)|19,252,895|9627568|
|Using undefined property (cached proto: null)|80,007,538|40003778|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:17:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using delete property","opsSec":3244260.4101083633,"samples":1622452},{"name":"Using delete property (proto: null)","opsSec":16551248.245567685,"samples":8275625},{"name":"Using delete property (cached proto: null)","opsSec":3181796.882462491,"samples":1592033},{"name":"Using undefined assignment","opsSec":81000685.35199451,"samples":40500343},{"name":"Using undefined assignment (proto: null)","opsSec":19252895.309538085,"samples":9627568},{"name":"Using undefined property (cached proto: null)","opsSec":80007538.39834155,"samples":40003778}]}-->
