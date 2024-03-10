## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|858,853,652|95|
|using Array.includes (first item)|859,763,308|94|
|Using raw comparison|848,673,524|99|
|Using raw comparison (first item)|847,115,292|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"using Array.includes","opsSec":858853651.6144842,"samples":6},{"name":"using Array.includes (first item)","opsSec":859763308.4113871,"samples":9},{"name":"Using raw comparison","opsSec":848673524.0225303,"samples":6},{"name":"Using raw comparison (first item)","opsSec":847115291.984274,"samples":6}]}-->
