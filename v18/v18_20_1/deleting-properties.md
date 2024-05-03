## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,772,673|96|
|Using delete property (proto: null)|24,059,273|98|
|Using delete property (cached proto: null)|3,789,264|93|
|Using undefined assignment|909,596,659|96|
|Using undefined assignment (proto: null)|27,099,678|99|
|Using undefined property (cached proto: null)|905,759,626|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:47:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3772673.1698026815,"samples":4},{"name":"Using delete property (proto: null)","opsSec":24059273.295125972,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3789264.2034086096,"samples":6},{"name":"Using undefined assignment","opsSec":909596658.7111686,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":27099677.550169047,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":905759626.2608111,"samples":6}]}-->
