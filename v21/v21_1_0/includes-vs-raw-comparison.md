## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|843,933,650|96|
|using Array.includes (first item)|848,527,502|97|
|Using raw comparison|846,591,057|99|
|Using raw comparison (first item)|847,909,520|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:19:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":843933649.7664744,"samples":6},{"name":"using Array.includes (first item)","opsSec":848527502.3635097,"samples":9},{"name":"Using raw comparison","opsSec":846591057.1117842,"samples":6},{"name":"Using raw comparison (first item)","opsSec":847909520.0443454,"samples":6}]}-->
