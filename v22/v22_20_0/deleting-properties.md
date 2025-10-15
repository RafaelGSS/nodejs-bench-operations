## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,074,312|2037809|
|Using delete property (proto: null)|18,129,523|9065350|
|Using delete property (cached proto: null)|4,124,346|2062585|
|Using undefined assignment|80,290,402|40146936|
|Using undefined assignment (proto: null)|19,629,782|9814894|
|Using undefined property (cached proto: null)|77,115,188|38557599|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:31:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2037809,"opsSec":4074312.3947417294},{"name":"Using delete property (proto: null)","samples":9065350,"opsSec":18129523.067621496},{"name":"Using delete property (cached proto: null)","samples":2062585,"opsSec":4124346.912335399},{"name":"Using undefined assignment","samples":40146936,"opsSec":80290402.00940596},{"name":"Using undefined assignment (proto: null)","samples":9814894,"opsSec":19629782.896256447},{"name":"Using undefined property (cached proto: null)","samples":38557599,"opsSec":77115188.12925592}]}-->
