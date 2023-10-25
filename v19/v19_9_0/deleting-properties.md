## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,088,197|83|
|Using delete property (proto: null)|12,346,193|86|
|Using delete property (cached proto: null)|2,074,698|84|
|Using undefined assignment|816,717,535|83|
|Using undefined assignment (proto: null)|15,608,164|83|
|Using undefined property (cached proto: null)|691,119,465|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2088196.9744303022,"samples":8},{"name":"Using delete property (proto: null)","opsSec":12346192.714246873,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2074697.820772554,"samples":5},{"name":"Using undefined assignment","opsSec":816717535.4954273,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":15608164.242283737,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":691119465.45513,"samples":8}]}-->
