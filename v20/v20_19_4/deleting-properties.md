## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,543,308|1771830|
|Using delete property (proto: null)|17,002,077|8501044|
|Using delete property (cached proto: null)|3,772,917|1886720|
|Using undefined assignment|85,703,037|42853177|
|Using undefined assignment (proto: null)|17,482,734|8741972|
|Using undefined property (cached proto: null)|85,559,513|42797563|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:13:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":1771830,"opsSec":3543308.2912190133},{"name":"Using delete property (proto: null)","samples":8501044,"opsSec":17002077.73074505},{"name":"Using delete property (cached proto: null)","samples":1886720,"opsSec":3772917.6093736417},{"name":"Using undefined assignment","samples":42853177,"opsSec":85703037.46385622},{"name":"Using undefined assignment (proto: null)","samples":8741972,"opsSec":17482734.12486762},{"name":"Using undefined property (cached proto: null)","samples":42797563,"opsSec":85559513.0505259}]}-->
