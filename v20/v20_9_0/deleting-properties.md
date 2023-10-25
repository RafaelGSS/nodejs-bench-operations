## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,610,229|94|
|Using delete property (proto: null)|12,277,167|96|
|Using delete property (cached proto: null)|2,661,566|92|
|Using undefined assignment|718,071,807|99|
|Using undefined assignment (proto: null)|13,843,845|97|
|Using undefined property (cached proto: null)|711,536,790|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2610229.385960129,"samples":4},{"name":"Using delete property (proto: null)","opsSec":12277166.71177969,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2661565.851019794,"samples":6},{"name":"Using undefined assignment","opsSec":718071806.8165172,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":13843845.009999031,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":711536790.1652242,"samples":9}]}-->
