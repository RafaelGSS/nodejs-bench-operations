## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|19,893,651|9946826|
|using Array.includes (first item)|19,861,191|9930596|
|Using raw comparison|19,939,038|9969520|
|Using raw comparison (first item)|19,900,584|9950293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:41:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":19893651.64194739,"samples":9946826},{"name":"using Array.includes (first item)","opsSec":19861191.40408754,"samples":9930596},{"name":"Using raw comparison","opsSec":19939038.64421114,"samples":9969520},{"name":"Using raw comparison (first item)","opsSec":19900584.686552133,"samples":9950293}]}-->
