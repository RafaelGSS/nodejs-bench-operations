## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|909,697,752|100|
|using Array.includes (first item)|910,548,563|97|
|Using raw comparison|912,279,440|98|
|Using raw comparison (first item)|911,759,672|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:24:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":909697752.4522451,"samples":6},{"name":"using Array.includes (first item)","opsSec":910548563.0432882,"samples":6},{"name":"Using raw comparison","opsSec":912279440.1027427,"samples":7},{"name":"Using raw comparison (first item)","opsSec":911759671.6003232,"samples":6}]}-->
