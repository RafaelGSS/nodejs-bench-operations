## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|892,248,477|94|
|Length = 10_000 - Array.at|888,973,765|94|
|Length = 1_000_000 - Array.at|890,403,742|92|
|Length = 100 - Array[length - 1]|784,870,809|97|
|Length = 10_000 - Array[length - 1]|785,149,703|97|
|Length = 1_000_000 - Array[length - 1]|784,751,468|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":892248477.1231781,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":888973765.0629021,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":890403742.2719884,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":784870809.2209759,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":785149702.8520521,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":784751468.3233573,"samples":6}]}-->
