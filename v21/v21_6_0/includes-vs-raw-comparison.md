## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|820,862,321|97|
|using Array.includes (first item)|820,789,900|95|
|Using raw comparison|822,481,623|96|
|Using raw comparison (first item)|822,668,168|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":820862320.867945,"samples":6},{"name":"using Array.includes (first item)","opsSec":820789900.3641832,"samples":6},{"name":"Using raw comparison","opsSec":822481622.5259845,"samples":6},{"name":"Using raw comparison (first item)","opsSec":822668167.8367199,"samples":7}]}-->
