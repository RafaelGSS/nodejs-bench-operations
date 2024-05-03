## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,493,768|97|
|Using delete property (proto: null)|23,969,746|100|
|Using delete property (cached proto: null)|4,550,395|95|
|Using undefined assignment|909,906,284|96|
|Using undefined assignment (proto: null)|26,558,052|99|
|Using undefined property (cached proto: null)|908,147,533|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:52:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4493768.070579155,"samples":4},{"name":"Using delete property (proto: null)","opsSec":23969745.610712454,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":4550395.406241653,"samples":4},{"name":"Using undefined assignment","opsSec":909906284.3737822,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":26558052.46354817,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":908147532.8051986,"samples":8}]}-->
