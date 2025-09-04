## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,082,012|2042666|
|Using delete property (proto: null)|18,025,966|9013853|
|Using delete property (cached proto: null)|4,147,324|2074274|
|Using undefined assignment|79,168,234|39585448|
|Using undefined assignment (proto: null)|19,494,600|9749498|
|Using undefined property (cached proto: null)|78,518,570|39272373|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:59:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2042666,"opsSec":4082012.7032063617},{"name":"Using delete property (proto: null)","samples":9013853,"opsSec":18025966.99891168},{"name":"Using delete property (cached proto: null)","samples":2074274,"opsSec":4147324.20757283},{"name":"Using undefined assignment","samples":39585448,"opsSec":79168234.04729839},{"name":"Using undefined assignment (proto: null)","samples":9749498,"opsSec":19494600.66935469},{"name":"Using undefined property (cached proto: null)","samples":39272373,"opsSec":78518570.57820062}]}-->
