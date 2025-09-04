## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|93,583,413|46791739|
|~ (small)|94,347,108|47173580|
|Math.floor (long)|93,027,563|46513988|
|~ (long)|94,430,010|47215022|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:23:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":46791739,"opsSec":93583413.80177814},{"name":"~ (small)","samples":47173580,"opsSec":94347108.48647876},{"name":"Math.floor (long)","samples":46513988,"opsSec":93027563.88789198},{"name":"~ (long)","samples":47215022,"opsSec":94430010.00519639}]}-->
