## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,016,780|2008393|
|Using delete property (proto: null)|17,384,541|8693258|
|Using delete property (cached proto: null)|4,072,901|2036908|
|Using undefined assignment|78,951,946|39478244|
|Using undefined assignment (proto: null)|18,813,604|9407188|
|Using undefined property (cached proto: null)|78,716,263|39365973|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:43:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":2008393,"opsSec":4016780.7701514373},{"name":"Using delete property (proto: null)","samples":8693258,"opsSec":17384541.568075947},{"name":"Using delete property (cached proto: null)","samples":2036908,"opsSec":4072901.8371826448},{"name":"Using undefined assignment","samples":39478244,"opsSec":78951946.68402675},{"name":"Using undefined assignment (proto: null)","samples":9407188,"opsSec":18813604.604584005},{"name":"Using undefined property (cached proto: null)","samples":39365973,"opsSec":78716263.35885102}]}-->
