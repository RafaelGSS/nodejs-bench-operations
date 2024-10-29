## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|84,470,380|42236465|
|using Array.includes (first item)|75,994,202|38052157|
|Using raw comparison|101,627,581|50813797|
|Using raw comparison (first item)|99,905,404|50023164|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:56:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":84470380.85284662,"samples":42236465},{"name":"using Array.includes (first item)","opsSec":75994202.80779527,"samples":38052157},{"name":"Using raw comparison","opsSec":101627581.8046902,"samples":50813797},{"name":"Using raw comparison (first item)","opsSec":99905404.433668,"samples":50023164}]}-->
