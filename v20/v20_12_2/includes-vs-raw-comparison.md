## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|952,086,876|99|
|using Array.includes (first item)|952,799,033|96|
|Using raw comparison|939,585,934|93|
|Using raw comparison (first item)|934,188,446|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:22:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":952086875.539852,"samples":6},{"name":"using Array.includes (first item)","opsSec":952799032.8779553,"samples":6},{"name":"Using raw comparison","opsSec":939585933.6564397,"samples":6},{"name":"Using raw comparison (first item)","opsSec":934188446.4024256,"samples":6}]}-->
