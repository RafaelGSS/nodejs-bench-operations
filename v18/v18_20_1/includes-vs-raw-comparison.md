## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,990,600|8495301|
|using Array.includes (first item)|16,921,895|8460948|
|Using raw comparison|16,926,207|8463104|
|Using raw comparison (first item)|16,974,075|8487038|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:39:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16990600.20141161,"samples":8495301},{"name":"using Array.includes (first item)","opsSec":16921895.225377113,"samples":8460948},{"name":"Using raw comparison","opsSec":16926207.98385791,"samples":8463104},{"name":"Using raw comparison (first item)","opsSec":16974075.044923373,"samples":8487038}]}-->
