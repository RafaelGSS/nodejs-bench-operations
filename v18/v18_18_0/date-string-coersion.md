## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|669,899|98|
|Using brackets {}|676,975|98|
|Using '' + |672,536|96|
|Using date.toString()|736,496|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":669898.9395890161,"samples":3},{"name":"Using brackets {}","opsSec":676975.4350389527,"samples":7},{"name":"Using '' + ","opsSec":672536.2483644421,"samples":6},{"name":"Using date.toString()","opsSec":736496.449342291,"samples":4}]}-->
