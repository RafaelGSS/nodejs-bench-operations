## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,022,952|2012182|
|Using delete property (proto: null)|17,773,817|8888359|
|Using delete property (cached proto: null)|4,039,796|2019900|
|Using undefined assignment|77,493,741|38747207|
|Using undefined assignment (proto: null)|19,282,446|9641224|
|Using undefined property (cached proto: null)|77,266,466|38636390|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:42:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":2012182,"opsSec":4022952.9733823044},{"name":"Using delete property (proto: null)","samples":8888359,"opsSec":17773817.24193085},{"name":"Using delete property (cached proto: null)","samples":2019900,"opsSec":4039796.307626175},{"name":"Using undefined assignment","samples":38747207,"opsSec":77493741.50931118},{"name":"Using undefined assignment (proto: null)","samples":9641224,"opsSec":19282446.534534063},{"name":"Using undefined property (cached proto: null)","samples":38636390,"opsSec":77266466.86605825}]}-->
